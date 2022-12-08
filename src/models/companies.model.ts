import { Schema, Model, model } from "mongoose";

export interface ICompany {
  id?: string;
  name: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

const companySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },
  { timestamps: true }
);

companySchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export const Company: Model<ICompany> = model<ICompany>(
  "Company",
  companySchema
);
