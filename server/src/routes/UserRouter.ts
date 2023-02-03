import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import UserService from '@src/services/UserService';
import User, { IUser } from '@src/models/User';
import { IReq, IRes } from './types/express/misc';
import {Router} from "express";
import Paths from "@src/routes/constants/Paths";
import jetValidator from "jet-validator";


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const users = await UserService.getAll();
  return res.status(HttpStatusCodes.OK).json({ users });
}

/**
 * Add one user.
 */
async function add(req: IReq<{user: IUser}>, res: IRes) {
  const { user } = req.body;
  await UserService.addOne(user);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<{user: IUser}>, res: IRes) {
  const { user } = req.body;
  await UserService.updateOne(user);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await UserService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// ** Add UserRouter ** //

const userRouter = Router();
const validate = jetValidator();

// Get all users
userRouter.get(
    Paths.Users.Get,
    getAll,
);

// Add one user
userRouter.post(
    Paths.Users.Add,
    validate(['user', User.instanceOf]),
    add,
);

// Update one user
userRouter.put(
    Paths.Users.Update,
    validate(['user', User.instanceOf]),
    update,
);

// Delete one user
userRouter.delete(
    Paths.Users.Delete,
    validate(['id', 'number', 'params']),
    delete_,
);

// **** Export default **** //

export default userRouter;
