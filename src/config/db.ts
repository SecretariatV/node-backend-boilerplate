import mongoose from 'mongoose';

import {logger} from './logger';
import {env} from './env';

export const connectDB = async () => {
  try {
    await mongoose.connect(env.mongoUri);
    logger.info('MongoDB connected successfully!');
  } catch (error) {
    logger.error('MongoDB connection error: %o', error);
    process.exit(1);
  }
};
