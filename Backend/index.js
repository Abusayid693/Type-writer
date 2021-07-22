const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8000;
app.use(morgan("tiny"));

mongoose.connect(
  "mongodb+srv://Rehan:Alexa693@cluster0.2wzmd.mongodb.net/typeWriter?retryWrites=true&writeConcern=majority/locationDB ",
  { useUnifiedTopology: true },
  { useNewUrlParser: true }
);

// Schema
const Schema = mongoose.Schema;
const TextFileSchema = new Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now(),
  }
});

// Model

const TextFile = mongoose.model("TextFile", TextFileSchema);

// Test data

const test = {
  title: "About over hype of Machine learning",
  body: "<h1>Hello</h1>",
};

const newTextFile = new TextFile(test);
newTextFile.save((error)=>{
    if(error)
    console.log(error);
    else
    console.log("Text file added to database");
});




app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose.connection.on("connected", () => {
  console.log("Database successfully connected");
});

app.listen(PORT, console.log("Server running on port"));
