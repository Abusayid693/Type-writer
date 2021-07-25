const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();
const TextFile = require("./Models/models");
const PORT = process.env.PORT || 8000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb://localhost/typewriter1" ||
    "mongodb+srv://Rehan:Alexa693@cluster0.2wzmd.mongodb.net/typeWriter?retryWrites=true&writeConcern=majority/locationDB ",
  { useUnifiedTopology: true },
  { useNewUrlParser: true }
);

app.get("/data", (req, res) => {
  TextFile.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

app.post("/", (req, res) => {
  console.log("POST", req.body);
  const payload = req.body;
  const newTextFile = new TextFile(payload);
  newTextFile.save((error) => {
    if (error) console.log(error);
    else console.log("Text file added to database");
  });
  res.send("Data received in server");
});

mongoose.connection.on("connected", () => {
  console.log("Database successfully connected");
});

app.listen(PORT, console.log("Server running on port"));
