import dotenv from 'dotenv';

import {logger} from './logger';

dotenv.config();

const requiredEnvVariables = ['PORT', 'MONGO_URI'];

requiredEnvVariables.forEach((key) => {
  if (!process.env[key]) {
    logger.error(`Environment variable ${key} is missing`);
  }
});

export const env = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI as string,
};
