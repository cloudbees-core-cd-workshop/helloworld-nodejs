var express = require('express');
var app = express();

app.set('view engine', 'pug')
app.set('views', './views');

var info = {buildNumber: process.env.BUILD_NUMBER}
console.log(process.env.BUILD_NUMBER)

app.get('/', function (req, res) {
  console.log('Hello World request.');
  res.render('index', { title: 'Hello', message: 'Hello World from {your_name}!', buildNumber: process.env.BUILD_NUMBER })
})

app.listen(8080, function () {
   console.log('Example app listening on port 8080!');
});
