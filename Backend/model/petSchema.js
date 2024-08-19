const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  imgUrl: String,
  content: String,
  type: String
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;