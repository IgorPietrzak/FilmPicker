const router = require("express").Router();
let Film = require("../models/film.model");

router.route("/").get((req, res) => {
  Film.find()
    .then((film) => res.json(film))
    .catch((err) => res.json(err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const genre = req.body.genre;

  const newFilm = new Film({
    title,
    genre,
  });

  newFilm
    .save()
    .then(() => res.json("Film addded"))
    .catch((err) => res.json(err));
});

router.route("/:title").get((req, res) => {
  Film.findOne({ title: req.params.title })
    .then((film) => res.json(film))
    .catch((err) => res.json(err));
});

router.route("/:id").delete((req, res) => {
  Film.findByIdAndDelete(req.params.id)
    .then(() => res.json("Film deleted"))
    .catch((err) => res.json(err));
});

module.exports = router;
