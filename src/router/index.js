import express from 'express';

import authentication from './authentication.js';
import users from './users.js';
import cart  from './cart.js';

const router = express.Router();

export default () => {
  authentication(router);
  users(router);
  cart(router);
  return router;
};