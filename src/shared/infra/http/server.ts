import 'reflect-metadata';
import 'dotenv/config';
import '@shared/infra/typeorm';
import '@shared/container';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';
import AppError from '../../errors/AppError';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (err: Error, requerst: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('🚀 server started on port 3333!');
});
