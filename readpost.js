const express= require('express');
const router= express.Router();

const Post=require('./models/post');

router.get('/:id', async (req,res) => {
        //post = await Post.findOne({_id:req.params.id}).exec();
        console.log(req.params)
        Post.findById(req.params.id)    
        .then( post => res.send(post))
        .catch(err =>
            res.json({ profile: 'There is no profile for this user' })
          );
        });

module.exports =router;