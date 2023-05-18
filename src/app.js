require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
require("./db/conn");
const User = require("./models/locationSchema");
const app= express();
const port= process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/users",async(req,res)=>{
    
    console.log(req.body);
    try {
        const user=new User(req.body);
        const createUser= await user.save();
        res.status(201).json(createUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get("/users",async(req,res)=>{
    try {
        //const _id=req.params.id;
        const stddata= await User.find();
        res.send(stddata);
        console.log(stddata);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get("/users/:phone",async(req,res)=>{
        try {
            const phone=req.params.phone;
            const stddata= await User.find({phone});
            res.send(stddata);
        } catch (error) {
            res.send(error);
        }
    });


app.listen(port,()=>{
    console.log(`connection is established at ${port}`);
})