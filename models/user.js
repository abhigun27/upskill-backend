/*
user module is the module represents all the logged in and register user 
*/

const mongoose=require('mongoose')
const User=mongoose.model('User',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    email:{

        type:String,
        required:true,
        minlength:5,
        maxlength:255
        
    },
    password:{

        type:String,
        required:true,
        minlength:5,
        maxlength:255
        
    }
}))
exports.User=User