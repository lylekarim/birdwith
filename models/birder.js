const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const birderSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isDeleted:  { type: Boolean, default: false },
  title: { type: String},
  author: { type: String},
  description: String,
  thumbnail: { type: String, default: "https://placehold.it/300x300" },
  href: String,
  isSaved: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
  initial: String,
  area: String,
  interests: String,
  state: String,
  availability: String,
  language: String,
  comments: String,

});




birderSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};


birderSchema.methods.validPassword = (password, storedPW) => {
  return bcrypt.compareSync(password, storedPW);
};


const Birder = mongoose.model("Birder", birderSchema);

module.exports = Birder;
