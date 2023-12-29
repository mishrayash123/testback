import express from 'express';

import { addtocart,getCart,deleteCart } from '../controllers/Cart.js';

export default (router) => {
  router.post('/addtocart', addtocart);
  router.get('/getCart', getCart);
  router.delete('/deleteCart/:id', deleteCart);
};