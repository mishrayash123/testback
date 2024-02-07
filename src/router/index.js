import express from 'express';

import authentication from './authentication.js';
import users from './users.js';
import url from './url.js'

const router = express.Router();

export default () => {
  authentication(router);
  url(router);
  users(router);
  return router;
};