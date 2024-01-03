import { addtosellers,deletsellers,getsellersfull } from '../controllers/Seller.js';

export default (router) => {
  router.post('/addtosellers', addtosellers);
  router.get('/getsellers', getsellersfull);
  router.delete('/deletesellers/:id', deletsellers);
};