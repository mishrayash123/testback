import express from 'express';

import { createCart ,getcart,deleteCartById} from '../db/Cart.js';

export const addtocart = async (req, res) => {
    try {
      const { productid, userid,image,title,price } = req.body;
      if (!productid || !userid) {
        return res.sendStatus(400);
      }

      const user  = await createCart({
        productid,
        userid,
        image,
        title,
        price
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const getCart = async (req, res) => {
    try {
      const users  = await getcart();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deleteCart = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deleteCartById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
