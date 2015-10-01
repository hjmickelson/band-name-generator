var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("hello universe!");
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});

var Adjective = function() {
  this.excited = true;
  this.punny = true;
  this.crabby = true;
  this.unfocused = true;
};

var adjective = new Adjective();

function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

app.get('/adjective', function (req, res) {
  res.json(getRandomWord(adjective));
});


