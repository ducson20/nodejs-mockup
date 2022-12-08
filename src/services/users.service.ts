import { User, IUser } from "../models/users.model";

/**
 * Gets users
 */
export const getUsers = async () => {
  const users = await User.find();

  return users;
};

/**
 * Get a user by id
 */
export const getUserById = async (id: IUser["id"]) => {
  const user = await User.findOne({ _id: id });
  return user;
};

/**
 * Create a user by id
 */
export const createUser = async (user: IUser) => {
  let { username, email, firstName, lastName, avatar } = user;
  // Create a User into database
  const userCreate = new User({
    username,
    email,
    firstName,
    lastName,
    avatar,
  });

  // Save User in the database
  await userCreate.save();
};
