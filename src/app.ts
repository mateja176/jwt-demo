import * as express from 'express';
import { Connection } from 'typeorm';
import { User } from './entity/User';
import { Request } from './models';
import profileRoute from './routes/profile';

export const createApp = (connection: Connection) => {
  const app = express();

  app.use((req: Request, res, next) => {
    req.db = connection;
    next();
  });

  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.get('/users', async (req: Request, res) => {
    const users = await req.db.getRepository(User).find();
    res.json(users);
  });

  app.use('/profile', profileRoute);

  return app;
};
