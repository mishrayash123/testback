import express from 'express';
import pkg from 'lodash';
const { merge, get } = pkg;

import { getUserBySessionToken } from '../db/users.js'; 

export const isAuthenticated = async (req, res, next) => {
  try {
    const sessionToken = req.cookies['YashKumarMishra-auth'];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const isOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, 'identity._id') ;

    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
