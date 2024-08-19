const express = require("express");
const route = express.Router();
const StoreData = require("../model/petStoreSchema");

route.get("/", async (req, res) => {
  try {
    const response = await StoreData.find();
    res.json(response);
    console.log(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

route.post("/", async (req, res) => {
  const store = new StoreData({
    name: req.body.name,
    availableItems: req.body.availableItems,
    siteLink: req.body.siteLink,
    location: req.body.location,
    email: req.body.email,
    whatsapp: req.body.whatsapp,
  });

  try {
    const newStoreData = await store.save();
    res.status(201).json(newStoreData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = route;
