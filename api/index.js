// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
const port = 50;

app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/zohoverify/verifyforzoho.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/verifyforzoho.html'));
});

app.get('/AraraSemFundo.png', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/AraraSemFundo.png'));
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/home.html'));
});

app.listen(port, () => console.log("Server ready on port 50."));

module.exports = app;