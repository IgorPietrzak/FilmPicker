const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
  title: String,
  genre: String,
});

const Film = mongoose.model("Film", FilmSchema);

module.exports = Film;
