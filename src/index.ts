import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import { User } from './entity/User';

createConnection()
  .then(async connection => {
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.email = 'a@b.co';
    user.password = '123';
    await connection.manager.save(user);
    console.log('Saved a new user with id', user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express/koa/any other framework.');

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch(error => console.log(error));
