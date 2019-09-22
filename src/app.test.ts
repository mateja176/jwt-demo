import { MongoMemoryServer } from 'mongodb-memory-server';
import * as request from 'supertest';
import { createConnection } from 'typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { createApp } from './app';
import mongoConfig from './config/mongo';

let mongod: MongoMemoryServer;
let config: MongoConnectionOptions;

describe('Server', () => {
  beforeEach(async () => {
    mongod = new MongoMemoryServer();
    const uri = await mongod.getConnectionString();
    config = {
      ...mongoConfig,
      url: uri,
    };
  });
  afterEach(async () => {
    await mongod.stop();
  });
  it('Hello World', async done => {
    const connection = await createConnection(config);
    request(createApp(connection))
      .get('/')
      .expect(200)
      .expect(JSON.stringify('Hello World'))
      .end(done);
  });
});
