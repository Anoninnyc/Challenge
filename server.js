const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const pathToStaticDir = path.resolve(__dirname,'..','/client/public/index.html');

//const bodyParser = require('body-parser');
//const sessions = require("client-sessions");


const server = http.createServer(app);
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
/* Kick off server */
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Listening on port', port);
});
