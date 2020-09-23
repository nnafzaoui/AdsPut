const mongoose=require('mongoose');

// user schema 
let UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const User = module.exports = mongoose.model('User',UserSchema);