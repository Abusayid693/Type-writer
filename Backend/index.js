const express = require("express");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;
const { notFound, errorHandler } = require("./middlewares/error");
const dataRoutes = require("./routes/TextFiles")
const dotenv = require('dotenv');

dotenv.config();
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//----------- Connecting with MONGODB clusters ------------
mongoose.connect(
  "mongodb://localhost/typewriter1",
  { useUnifiedTopology: true },
  { useNewUrlParser: true }
);

// ------------------ API request for data --------- 

app.use("/", dataRoutes);

// -----------User authentication-------------------

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

// ------- Verifying database connection ---------------------
mongoose.connection.on("connected", () => {
  console.log("Database successfully connected");
});

// ------ For Production deployment ---------------------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../App/build"));
}

app.listen(PORT, console.log("Server running on port"));
