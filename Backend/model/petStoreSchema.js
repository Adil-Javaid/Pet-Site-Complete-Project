const mongoose = require("mongoose");

const petStoreSchema = new mongoose.Schema({
  name: String,
  availableItems: [String],
  siteLink: String,
  location: String,
  email: String,
  whatsapp: String,
});

const StoreData = mongoose.model("StoreData", petStoreSchema);

module.exports = StoreData;