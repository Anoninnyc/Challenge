const express = require('express');
const app = express();
const path = require('path');
const pathToStaticDir = __dirname + '/client/public/index.html';

//const bodyParser = require('body-parser');
//const sessions = require("client-sessions");
const server= app.listen(3000, (req, res) => {
  console.log("listening on port 3000")
});


////////
//Middleware
///////////////


app.use(express.static(__dirname));
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client/Public'));
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());



app.get('*', (req, res) => {
  res.status(200).sendFile(pathToStaticDir);
});
//app.listen(3000, routes.listen);
