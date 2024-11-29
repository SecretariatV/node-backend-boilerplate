import {NextFunction, Request, Response} from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';

import User from '../models/userModel';
import {env, logger} from '../config';
import {transporter} from '../services';
import {IError} from '../types';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const {email, password} = req.body;

  try {
    const existingUser = await User.findOne({email});

    if (existingUser) {
      logger.warn(`Signup attemp failed user already exists with email: ${email}`);
      const error = new Error('User already exists.') as IError;
      error.status = 400;
      return next(error);
    }

    const confirmToken = jwt.sign({email}, env.jwtSecret, {
      expiresIn: '1h',
    });

    const user = new User({email, password, confirmToken});
    await user.save();

    const backendUrl = env.backendUrl || 'http://localhost:5000';

    const verificationLink = `${backendUrl}/api/v1/auth/verify-email?token=${confirmToken}`;

    await transporter.sendMail({
      from: '"Your App" <noreply@example.com>',
      to: email,
      subject: 'Email Verification',
      text: `Please click the following link to verify your email: ${verificationLink}`,
      html: `<p>Please click the following link to verify your email:</p><a href="${verificationLink}">Verify Email</a>`,
    });

    logger.info(`New user created: ${email}. Please verify.`);
    res.status(201).json({
      message: 'User registered. Please verify your email to log in.',
    });
  } catch (error) {
    next(error);
  }
};

export const veryEmail = async (req: Request, res: Response, next: NextFunction) => {
  const {token} = req.query;

  try {
    const decoded = jwt.verify(token as string, env.jwtSecret) as JwtPayload;
    const user = await User.find({email: decoded.email});

    if (!user) {
      const error = new Error('Invalid token or user not found.') as IError;
      error.status = 400;
      return next(error);
    }

    await User.findOneAndUpdate({email: decoded.email}, {isActive: true, confirmToken: null});

    res.status(200).json({message: 'Email verified successfully. You can now log in.'});
  } catch (error) {
    next(error);
  }
};
