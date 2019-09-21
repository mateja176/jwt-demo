import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import { User } from './entity/User';
import { Request } from './models';

createConnection()
  .then(async connection => {
    const user = User.create({
      email: 'jimmy@doe.com',
      password: '123',
    });
    const userRepo = connection.getRepository(User);
    const jimmy = await userRepo.save(user);
    const jane = await userRepo.findOne({ email: 'jane@doe.com' });
    console.log(jimmy, ' and ', jane);

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
