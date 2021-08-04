const TextFile = require("../Models/TextFiles");

const getFiles = (req, res) => {
    TextFile.find({})
      .then((data) => {
        console.log("Data: ", data);
        res.json(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }


  const updateFiles = (req, res) => {
    console.log("POST", req.body);
    const payload = req.body;
    const newTextFile = new TextFile(payload);
    newTextFile.save((error) => {
      if (error) console.log(error);
      else console.log("Text file added to database");
    });
    res.send("Data received in server");
  }

  module.exports = { getFiles, updateFiles };
