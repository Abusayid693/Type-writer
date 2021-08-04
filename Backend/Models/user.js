const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model

const User = mongoose.model("User", UserSchema);

module.exports = User;
