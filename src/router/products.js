import { addtoproducts,deletproducts,getproductsfull } from '../controllers/products.js';

export default (router) => {
  router.post('/addtoproducts', addtoproducts);
  router.get('/getproducts', getproductsfull);
  router.delete('/deleteproducts/:id', deletproducts);
};