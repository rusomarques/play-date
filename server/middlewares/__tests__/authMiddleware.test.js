const authMiddleware = require('../authMiddleware');

describe('unauthorized', () => {
  beforeEach(() => jest.resetAllMocks());

  it('rejects the auth if no token is given', () => {
    const req = {};
    const res = {
      body: '',
      status: jest.fn(() => res),
      send: jest.fn(text => {
        res.body = text;
        return res;
      })
    };
    const next = jest.fn();

    authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.body).toMatch('no token');
  });

  it('rejects the auth if the token is invalid', () => {
    const req = { fbToken: 'invalid-token' };
    const res = {
      body: '',
      status: jest.fn(() => res),
      send: jest.fn(text => {
        res.body = text;
        return res;
      })
    };
    const next = jest.fn();
    const fbValidator = jest.fn(() => false);

    authMiddleware(req, res, next, fbValidator);

    expect(next).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.body).toMatch('invalid token');
  });

  it('rejects the auth if the token is invalid', () => {
    const req = { fbToken: 'invalid-token' };
    const res = {
      body: '',
      status: jest.fn(() => res),
      send: jest.fn(text => {
        res.body = text;
        return res;
      })
    };
    const next = jest.fn();
    const fbValidator = jest.fn(() => true);

    authMiddleware(req, res, next, fbValidator);

    expect(next).toHaveBeenCalledTimes(1);
  });
});
