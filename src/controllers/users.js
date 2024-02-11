import express from 'express';

import  {getUsers,UserModel} from '../db/users.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};



  export const updateUser = async (req, res) => {
    try {
      const { id} = req.params;
      const  data  = req.body;
      const updatedItem = await UserModel.findByIdAndUpdate(id.trim(), data, {
        new: true,
      });
  
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      return res.json(updatedItem);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }