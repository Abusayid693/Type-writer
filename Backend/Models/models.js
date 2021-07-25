const mongoose = require("mongoose");


// Schema
const Schema = mongoose.Schema;
const TextFileSchema = new Schema({
  title: String,
  body: String,
  date:String,
  time:String
});

// Model

const TextFile = mongoose.model("TextFile", TextFileSchema);


module.exports = TextFile 