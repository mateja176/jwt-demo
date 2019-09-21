import * as request from 'supertest';
import { createApp } from './app';

describe('Server', () => {
  it('Hello World', done => {
    request(createApp([]))
      .get('/')
      .expect(200)
      .expect(JSON.stringify('Hello World'))
      .end(done);
  });
});
