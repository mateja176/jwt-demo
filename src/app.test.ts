import { Express } from 'express';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as request from 'supertest';
import { Connection, createConnection } from 'typeorm';
import { createApp } from './app';
import mongoConfig from './config/mongo';

let mongod: MongoMemoryServer;
let connection: Connection;
let app: Express;

const initDb = async () => {
  mongod = new MongoMemoryServer();
  const uri = await mongod.getConnectionString();
  connection = await createConnection({
    ...mongoConfig,
    url: uri,
  });
};

describe('Server', () => {
  beforeAll(() => {
    // connection is undefined at this point
    // if you need to connect to the database upon server initialization
    // await initDb here
    app = createApp(connection);
  });
  beforeEach(async () => {
    await initDb();
  });
  afterEach(async () => {
    await mongod.stop();
  });
  test('Hello World', done => {
    request(app)
      .get('/')
      .expect(200)
      .expect(JSON.stringify('Hello World'))
      .end(done);
  });
});
