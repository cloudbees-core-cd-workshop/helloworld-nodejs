var express = require('express');
var app = express();

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hello', message: 'Hello World from {your_name}!' })
})

app.listen(8080, function () {
   console.log('Example app listening on port 8080!');
});