import express, {NextFunction, Request, Response} from 'express';

import {connectDB, swaggerDocs} from './config';
import {errorHandler} from './middlewares';
import {IError} from './types';
import authRoutes from './routes/authRoutes';

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

swaggerDocs(app);

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
