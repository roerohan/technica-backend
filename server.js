require('./db');
var express = require('express');
var locationController = require('./locationController')
const bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
require('./db.js');

app.listen((process.env.PORT || 3000), ()=>{
    console.log("Server running.");
});
app.use('/',locationController);
