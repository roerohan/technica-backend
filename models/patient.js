const mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({
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
    email:{
        type:String,
        required:true,
        unique:true,
    },
});

module.exports = mongoose.model('Patient', patientSchema);
