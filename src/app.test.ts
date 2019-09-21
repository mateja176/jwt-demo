import * as request from 'supertest';
import app from './app';

describe('Server', () => {
  it('Hello World', done => {
    request(app)
      .get('/')
      .expect(200)
      .expect(JSON.stringify('Hello World'))
      .end(done);
  });
});
