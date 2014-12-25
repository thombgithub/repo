var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var io=require("socket.io");
app.get('/',function(req,res){
  res.send("client/client.html");
})
server.listen(3000, function(err,req,res){
  if(err) io.status(500,"The server is broken!");
  res.send("<h1>Welcome to thomb web page!</h1>");
});

