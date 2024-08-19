const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    imgUrl: String,
    reviews: Number,
    comment: String,
    name: String,
    date: Date
});

const ReviewData = mongoose.model("ReviewData", reviewSchema);

module.exports = ReviewData;