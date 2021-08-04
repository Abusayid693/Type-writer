const express = require("express");
const router = express.Router();
const {register,loginUser} = require("../Controllers/userControllers")

// This route is responsible for user registration and
// authentication 
router.route('/').post(register);
router.route('/login').post(loginUser);


module.exports=router