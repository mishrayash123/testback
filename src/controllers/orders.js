import express from 'express';

import {createorders ,getproductById,getorders,deleteordersById} from '../db/orders.js';

export const addtoorders = async (req, res) => {
    try {
      const { productid, userid,date,orderid,quantity } = req.body;
      if (!productid || !userid) {
        return res.sendStatus(400);
      }

      const existingcart = await getproductById(productid);
  
    if (existingcart) {
      return res.sendStatus(400);
    }

      const user  = await createorders({
        productid,
        userid,
        date,
        orderid,
        quantity
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const getordersfull = async (req, res) => {
    try {
      const users  = await getorders();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deleteorders = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deleteordersById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
