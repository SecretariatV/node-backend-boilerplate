import express, {NextFunction, Request, Response} from 'express';

import {connectDB} from './config';
import authRoutes from './routes/authRoutes';
import {errorHandler} from './middlewares';
import {IError} from './types';

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/auth', authRoutes);

app.get('/api', (_req: Request, res: Response) => {
  res.json({message: 'Server is running'});
});

app.use((_req: Request, _res: Response, next: NextFunction) => {
  const error = new Error('Not Found') as IError;
  error.status = 404;
  next(error);
});

app.use(errorHandler);

export default app;
