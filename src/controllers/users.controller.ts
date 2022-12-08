import { Request, Response, RequestHandler } from "express";
import * as UsersService from "../services/users.service";
import CommonError from "../utils/error-util";
import { success } from "../utils/response-util";

export const createUsers: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { username, email, firstName, lastName, avatar } = req.body;
    const result = await UsersService.createUser({
      username,
      email,
      firstName,
      lastName,
      avatar,
    });
    return res.json(success(result));
  } catch (err) {
    return CommonError(req, err, res);
  }
};

export const getUsers: RequestHandler = async (req: Request, res: Response) => {
  try {
    const users = await UsersService.getUsers();
    res.json(success(users));
  } catch (err) {
    return CommonError(req, err, res);
  }
};

export const getUserById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const user = await UsersService.getUserById(id);
    res.json(success(user));
  } catch (err) {
    return CommonError(req, err, res);
  }
};
