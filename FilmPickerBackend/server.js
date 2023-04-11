const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", false);
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hi");
});

const filmRoute = require("./routes/film");
app.use("/film", filmRoute);

app.listen("80", () => {
  console.log("server up on port 80");
});
