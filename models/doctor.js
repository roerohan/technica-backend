const mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    verification_number:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
});

module.exports = mongoose.model('Doctor', doctorSchema);
