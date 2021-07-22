const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

mongoose.connect("mongodb+srv://Rehan:Alexa693@cluster0.2wzmd.mongodb.net/typeWriter?retryWrites=true&writeConcern=majority/locationDB ",{ useUnifiedTopology: true }, { useNewUrlParser: true });



const app=express();
const PORT = process.env.PORT || 8000;

app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.send("Hello")
})


mongoose.connection.on('connected',()=>{
    console.log("Database successfully connected")
})

app.listen(PORT,console.log("Server running on port"))