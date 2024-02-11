import express from 'express';

import { getAllUsers,updateUser} from '../controllers/users.js';

export default (router) => {
  router.post('/users', getAllUsers);
  router.post('/updateusers/:id', updateUser);
};
