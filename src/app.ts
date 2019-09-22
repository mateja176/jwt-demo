import * as express from 'express';
import { Connection } from 'typeorm';
import { Request } from './models';

export const createApp = (connection: Connection) => {
  const app = express();

  app.use((req: Request, res, next) => {
    req.db = connection;
    next();
  });

  app.use(express.json());

  app.get('/', (req, res) => {
    res.json('Hello World');
  });

  return app;
};
