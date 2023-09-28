import supertest from 'supertest';
import { server } from '.';

describe('GET /', () => {
  it('responds with "Hello World!"', (done) => {
    supertest(server).get('/').expect(200).expect('Hello World!', done);
  });
});
