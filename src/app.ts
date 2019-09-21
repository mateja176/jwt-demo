import { compose } from 'compose-middleware';
import * as express from 'express';

export const createApp = (middleware: express.RequestHandler[]) => {
  const app = express();

  app.use(compose(middleware));

  app.use(express.json());

  app.get('/', (req, res) => {
    res.json('Hello World');
  });

  return app;
};
