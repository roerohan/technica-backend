require('./models/db');
var express = require('express');
var router = require('./routes/router')
const bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

app.use('/',router);
app.listen((process.env.PORT || 3000), ()=>{
    console.log("Server running.");
});
