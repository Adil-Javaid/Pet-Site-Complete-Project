const express = require("express");
const route = express.Router();
const Services = require("../model/servicesSchema");

route.get("/", async (req, res) =>{
    try{
        const services = await Services.find()
        res.json(services); 

    }
    catch(err){
        res.status(500).json(console.log(err.message));
    }
});

route.post("/", async(req, res) =>{
    const newServices = Services({
        iconUrl: req.body.iconUrl,
        service: req.body.service,
        detail: req.body.detail
    })

    try{
        const servicesData = await newServices.save();
        res.status(201).json(servicesData);
    }
    catch(err){
        res.status(500).json(err.message);
    }
});

module.exports = route;