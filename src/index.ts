import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { createApp } from './app';
import mongoConfig from './config/mongo';
import { Request } from './models';

createConnection(mongoConfig)
  .then(async connection => {
    const app = createApp([
      (req: Request, res, next) => {
        req.db = connection;
        next();
      },
    ]);

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch(error => console.log(error));
