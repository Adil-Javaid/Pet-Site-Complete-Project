const express = require("express");
const route = express.Router();
const Pet = require("../model/petSchema");

route.get("/", async(req, res)=>{
  try{
    const pets = await Pet.find();
    res.json(pets);
    // console.log(pets);
  }
  catch(err){
    res.status(500).json(console.log(err.message));
  }
});

route.post("/",async(req, res)=>{
  const newPet = Pet({
    imgUrl: req.body.imgUrl,
    content: req.body.content,
    type: req.body.type,
  })

  try{
    const petData = await newPet.save();
    res.status(201).json(petData);
  }
  catch(err){
    res.status(500).json(err.message);
  }
});

module.exports = route;