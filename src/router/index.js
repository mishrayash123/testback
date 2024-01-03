import express from 'express';

import authentication from './authentication.js';
import users from './users.js';
import cart  from './cart.js';
import orders from './orders.js'
import sellers from './Seller.js'

const router = express.Router();

export default () => {
  authentication(router);
  users(router);
  cart(router);
  sellers(router);
  orders(router);
  return router;
};