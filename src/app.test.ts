import { MongoMemoryServer } from 'mongodb-memory-server';
import * as request from 'supertest';
import { Connection, createConnection } from 'typeorm';
import { createApp } from './app';
import mongoConfig from './config/mongo';

let mongod: MongoMemoryServer;
let connection: Connection;

describe('Server', () => {
  beforeEach(async () => {
    mongod = new MongoMemoryServer();
    const uri = await mongod.getConnectionString();
    connection = await createConnection({
      ...mongoConfig,
      url: uri,
    });
  });
  afterEach(async () => {
    await mongod.stop();
  });
  test('Hello World', done => {
    const app = createApp(connection);
    request(app)
      .get('/')
      .expect(200)
      .expect(JSON.stringify('Hello World'))
      .end(done);
  });
});
