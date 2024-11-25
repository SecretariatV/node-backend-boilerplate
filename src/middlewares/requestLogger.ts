import {NextFunction, Request, Response} from 'express';

import {logger} from '../config';

export const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
};
