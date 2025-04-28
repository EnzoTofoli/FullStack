require("colors");

console.log("IMAGINATION".rainbow);

var http = require('http');
var express = require('express');

var app = express();

app.use(express.static('./public'));

var server = http.createServer(app);
server.listen(80);

console.log("servidor rodando...");