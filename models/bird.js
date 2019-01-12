const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const birdSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  thumbnail: { type: String, default: "https://placehold.it/300x300" },
  href: String,
  isSaved: { type: Boolean, default: true },
  date: { type: Date, default: Date.now }
});

const Bird = mongoose.model("Bird", birdSchema);

module.exports = Bird;
