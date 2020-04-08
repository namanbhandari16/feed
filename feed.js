const express= require('express');
const router= express.Router();

const Post=require('./models/post');

router.get('/', async (req,res) =>{
    try{
        posts = await Post.find().sort({ date: 'desc' }).exec()
      }catch { posts = {}}
      res.send(posts);
})

module.exports =router;