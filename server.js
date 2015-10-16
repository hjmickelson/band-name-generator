'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var Adjective = require('./lib/adjective.js');
var getRandomWord = require('./lib/getRandomWord.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');
var postWord = require('./lib/postWord.js');
var bodyparser = require('body-parser');

app.use(express.static(__dirname + '/app/'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

var adjective = new Adjective();
var noun = new Noun();
var verb = new Verb();

app.listen(port, function() {
  console.log('server started on port ' + port);
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/', function(req, res) {
  // res.send('hello universe!');
  res.sendFile('index.html');
});

app.post('/adjective', function(req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});

app.post('/noun', function(req, res) {
  var word = postWord(req.body.word, noun);
  res.json(word);
});

app.post('/verb', function(req, res) {
  var word = postWord(req.body.word, verb);
  res.json(word);
});
