const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    imgUrl: String,
    date: Date,
    tags: [String],
    likes: Number,
    comments: [
        {
            name: String,
            comment: String,
            date: Date,
        }
    ],
});

const Blog = mongoose.model("Blog",BlogSchema);

module.exports = Blog;