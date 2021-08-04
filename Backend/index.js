const express = require("express");
const userRoutes = require("./routes/user")
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();
const TextFile = require("./Models/models");
const PORT = process.env.PORT || 8000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//----------- Connecting with MONGODB clusters ------------
mongoose.connect(
  "mongodb://localhost/typewriter1",
  { useUnifiedTopology: true },
  { useNewUrlParser: true }
);

// --------- Fetching and sending requested data to clients -
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


// -------- Handaling post request from client server -------
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




// -----------User authentication-------------------

app.use("/api/users",userRoutes)










// ------- Verifying database connection ---------------------
mongoose.connection.on("connected", () => {
  console.log("Database successfully connected");
});





// ------ For Production deployment ---------------------------
if (process.env.NODE_ENV==="production"){
app.use(express.static('../App/build'))
}


app.listen(PORT, console.log("Server running on port"));
