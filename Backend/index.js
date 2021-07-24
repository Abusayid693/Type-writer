const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();
const TextFile = require("./Models/models");

const PORT = process.env.PORT || 8000;
app.use(morgan("tiny"));

mongoose.connect(
  "mongodb://localhost/mern",
  // "mongodb+srv://Rehan:Alexa693@cluster0.2wzmd.mongodb.net/typeWriter?retryWrites=true&writeConcern=majority/locationDB ",
  { useUnifiedTopology: true },
  { useNewUrlParser: true }
);


// Test data

const test = {
  title: "About over hype of Machine learning",
  body: "<h1>Fuck</h1>",
};

const newTextFile = new TextFile(test);
newTextFile.save((error)=>{
    if(error)
    console.log(error);
    else
    console.log("Text file added to database");
});




app.get("/", (req, res) => {

  TextFile.find({})
          .then((data)=>{
           console.log('Data: ' ,data);
          })
          .catch((error)=>{
           console.log('Error: ' ,error);
          })

  res.send("Hello");
});

mongoose.connection.on("connected", () => {
  console.log("Database successfully connected");
});

app.listen(PORT, console.log("Server running on port"));
