const mongoose= require('mongoose');
const Schema =mongoose.Schema;

//create schmea
const PostSchema = new Schema({
title:{
	type: String,
	required:true
},
desc:{
	type: String,
	required:true
},
type:{
	type: String,
	required:true
},
video:{
	type: String,
},
date:{
	type: Date,
	default:Date.now
},
post:{
	type: String,
	required:true
}
});
module.exports=Post=mongoose.model('posts',PostSchema);