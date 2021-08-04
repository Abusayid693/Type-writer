const express = require("express");
const router = express.Router();
const {register} = require("../Controllers/userControllers")


router.route('/').post(register)

module.exports=router