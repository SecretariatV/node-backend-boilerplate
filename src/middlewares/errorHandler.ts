import {NextFunction, Request, Response} from 'express';

import {logger} from '../config';
import {IError} from '../types';

export const errorHandler = (error: IError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  logger.error(`Error: ${error.message} - Route: ${req.originalUrl} - Method: ${req.method} - Status: ${statusCode}`);

  if (res.status && typeof res.status === 'function') {
    res.status(statusCode).json({
      message: error.message || 'Server Error',
      stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    });
  } else {
    next(error);
  }
};
