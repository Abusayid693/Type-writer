const express = require("express");
const router = express.Router();
const  { getFiles, updateFiles } = require("../Controllers/TextFileControllers")

// --------- Fetching and sending requested data to clients -
router.route('/data').get(getFiles);

// -------- Handaling post request from client server -------
router.route('/').post(updateFiles);


module.exports=router