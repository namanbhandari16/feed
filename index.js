const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router()
const mongoose =require('mongoose');
const createRoute=require('./createpost');
const readRoute=require('./readpost');
const feedRoute=require('./feed');
const path = require('path');
//Body Parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
	.connect(db)
	.then( () => console.log('MongoDB Connected'))
    .catch(err => console.log(err)); 

app.use('/create',createRoute);
app.use('/read',readRoute);
app.use('/feed',feedRoute);

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
    });
}
app.listen(process.env.PORT || 5000)