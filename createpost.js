const express= require('express');
const router= express.Router();

const Post=require('./models/post');

router.post('/new', (req,res) => {
    const newPost=new Post({
        title:req.body.title,
        desc:req.body.desc,
        type:req.body.type,
        post:req.body.post
    });
    newPost
		.save()
		.then(res.send('Post Created'))
		    .catch(err =>console.log(err))
});

module.exports =router;