var express = require('express');
var app = express();

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

var info = {buildNumber: process.env.BUILD_NUMBER}

app.get('/', function (req, res) {
  console.log('Hello World request.');
  res.render('index', { title: 'Hello', message: 'Hello World from {your_name}!', info })
})

app.listen(8080, function () {
   console.log('Example app listening on port 8080!');
});
