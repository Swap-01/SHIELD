const mongoose=require('mongoose');
const validator=require('validator');


const locationSchema=new mongoose.Schema({
    phone:{
        type:Number,
        required:true,
        //unique:true,
        minlength:10
    },
    latitude:{
        type: String,
        required: true
    },
    longitude:{
        type: String,
        required:true
    },
    time:{
        type: String,
        required:true
    }
});

const User=new mongoose.model('User',locationSchema);

module.exports=User;