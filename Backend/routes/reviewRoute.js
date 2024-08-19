const express = require("express");
const route = express.Router();
const Review = require("../model/reviewSchema");

route.get("/", async(req, res) =>{
    try{
        const review = await Review.find();
        res.json(review);
    }
    catch(err){
        res.status(500).json(err);
    }
});

route.post("/", async(req, res) =>{
    const newReview = new Review({
        imgUrl: req.body.imgUrl,
        reviews: req.body.reviews,
        comment: req.body.comment,
        name: req.body.name,
        date: req.body.date
    })
    try{
        const reviewData = await newReview.save();
        res.status(201).json(reviewData);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = route;