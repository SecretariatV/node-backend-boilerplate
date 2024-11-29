import nodemailer from 'nodemailer';
import {env} from '../config';

export const transporter = nodemailer.createTransport({
  host: env.smtpHost,
  port: 465,
  secure: true,
  auth: {
    user: env.smtpUser,
    pass: env.smtpPass,
  },
});
