import express from 'express';

import { Sendotp,Verifyotp} from '../controllers/authentication.js';

export default (router) => {
  router.post('/auth/sendotp', Sendotp);
  router.post('/auth/verifyotp', Verifyotp);
};
