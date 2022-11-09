const express = require("express");
const BBDD = require("./server/config/mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',__dirname + '/client/views');

const routers = require("./server/config/routers");
app.use(routers);

const puerto = require('./server/config/puerto.js')(app);