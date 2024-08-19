const express = require("express");
const router = express.Router();
const Blog = require("../model/blogSchema");

router.get("/", async(req,res)=>{
    try{
        const blog = await Blog.find();
        res.json(blog);
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.post("/", async(req,res)=>{
    const newBlogs = new Blog({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      imgUrl: req.body.imgUrl,
      date: req.body.date,
      tags: req.body.tags,
      likes: req.body.likes,
      comments: req.body.comments,
    });

    try{
        const blogData = await newBlogs.save();
        res.status(201).json(blogData);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;