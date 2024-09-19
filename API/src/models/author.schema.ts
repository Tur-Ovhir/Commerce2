import mongoose from "mongoose";
const { Schema, model } = mongoose;
const users = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
export const authorModel = model("Author", users);
