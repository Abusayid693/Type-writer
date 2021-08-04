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

// Encrypting passwords
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Decrypting passwords

UserSchema.methods.matchPassword=async function (encryptedpassword) {
    return await bcrypt.compare(encryptedpassword,this.password);
}




// Model

const User = mongoose.model("User", UserSchema);

module.exports = User;
