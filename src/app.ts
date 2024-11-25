import express, {NextFunction, Request, Response} from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';

import {connectDB, env, passportConfig, swaggerDocs} from './config';
import {errorHandler, requestLogger} from './middlewares';
import {IError} from './types';
import authRoutes from './routes/authRoutes';

const corsOption = {
  origin: [env.frontendUrl || 'http://localhost:3000', env.backendUrl || 'http://localhost:5000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors(corsOption));

app.use(
  session({
    secret: env.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: process.env.NODE_ENV === 'production'},
  }),
);

app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use(requestLogger);

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
