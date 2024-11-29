import {Router} from 'express';
import passport from 'passport';

import {register, veryEmail} from '../controllers/authController';
import {env} from '../config';
import {IUser} from '../types';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Endpoints for user authentication and registration
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Allows users to create a new account using their email and password.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address. Must be unique.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: User's password. Minimum 8 characters.
 *                 example: password123
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input (e.g., missing required fields or invalid email format)
 *       409:
 *         description: User with the provided email already exists
 */
router.post('/register', register);

/**
 * @swagger
 * /api/v1/auth/verify-email:
 *   get:
 *     summary: Verify a user's email using a verification token
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT token sent to the user's email for verification
 *     responses:
 *       200:
 *         description: Email verified successfully. User can now log in.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email verified successfully. You can now log in."
 *       400:
 *         description: Invalid token or user not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid token or user not found."
 */
router.get('/verify-email', veryEmail);

router.get('/google', (req, res, next) => {
  passport.authenticate('google', {scope: ['profile', 'email']})(req, res, next);
});

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', (err: Error, user: IUser) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect(`${env.frontendUrl}/`);
    });
  })(req, res, next);
});

export default router;
