import express from 'express';

import {createseller ,getsellerByuserid,getseller,deletesellerById} from '../db/Seller.js';

export const addtosellers = async (req, res) => {
    try {
      const {gstno, userid,address,bank,ifc } = req.body;
      if (!userid) {
        return res.sendStatus(400);
      }

      const existingcart = await getsellerByuserid(userid);
  
    if (existingcart) {
      return res.sendStatus(400);
    }

      const user  = await createseller({
        gstno,
        userid,
        address,
        bank,
        ifc
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const getsellersfull = async (req, res) => {
    try {
      const users  = await getseller();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deletsellers = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deletesellerById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
