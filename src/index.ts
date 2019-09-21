import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import { Request } from './models';

createConnection()
  .then(async connection => {
    app.use((req: Request, res, next) => {
      req.db = connection;
      next();
    });

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch(error => console.log(error));
