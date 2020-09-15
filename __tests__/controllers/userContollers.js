import request from 'supertest';
import server from '../../server/app';
import {
  user, emptyUser
} from '../../server/utils/dummyData/user';

describe('Testing the user endpoints:', () => {
  it('It should register a user', (done) => {
    request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).toEqual(201);
        expect(res.body.data.user.firstName).toEqual('John');
        expect(res.body.data.user.email).toEqual('user@gmail.com');
        expect(res.body.data).toHaveProperty('token');
        done(err);
      });
  });
  it('It should not register a user with empty request body', (done) => {
    request(server)
      .post('/api/v1/auth/signup')
      .send(emptyUser)
      .end((err, res) => {
        expect(res.status).toEqual(422);
        expect(res.body.message).toEqual('Please provide complete details');
        done(err);
      });
  });
  it('It should not register a user if user already exists', (done) => {
    request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).toEqual(409);
        expect(res.body.message).toEqual('User already exist');
        done(err);
      });
  });
});
