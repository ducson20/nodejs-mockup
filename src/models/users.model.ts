import { Schema, Model, model } from "mongoose";

export interface IUser {
  id?: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  isActive?: boolean;
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: false,
    },
    isActive: {
      type: Boolean,
      require: true,
      default: true,
    },
  },
  { timestamps: true }
);

userSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export const User: Model<IUser> = model<IUser>("User", userSchema);
