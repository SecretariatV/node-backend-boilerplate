import dotenv from 'dotenv';

import {logger} from './logger';

dotenv.config();

const requiredEnvVariables = [
  'PORT',
  'MONGO_URI',
  'SECRET',
  'JWT_SECRET',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRETE',
  'GOOGLE_CALLBACK_URL',
  'FRONTEND_URL',
  'BACKEND_URL',
];

requiredEnvVariables.forEach((key) => {
  if (!process.env[key]) {
    logger.error(`Environment variable ${key} is missing`);
  }
});

export const env = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI as string,
  secret: process.env.SECRET as string,
  jwtSecret: process.env.JWT_SECRET as string,
  googleClientId: process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRETE as string,
  googleCallbackUrl: process.env.GOOGLE_CALLBACK_URL as string,
  frontendUrl: process.env.FRONTEND_URL as string,
  backendUrl: process.env.BACKEND_URL as string,
};
