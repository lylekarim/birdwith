const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const birderSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  thumbnail: { type: String, default: "https://placehold.it/300x300" },
  href: String,
  isSaved: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
  initial: String,
  lastName: String,
  area: String,
  state: String,
  availability: String,
  language: String,
  comments: String,
});

const Birder = mongoose.model("Birder", birderSchema);

module.exports = Birder;
