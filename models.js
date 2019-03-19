const mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    latitude:{
        type: String,
    },
    longitude:{
        type: String,
    },
});

module.exports = mongoose.model('User', locationSchema);
