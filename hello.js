var express = require('express');
var app = express();

var context = process.env.CONTEXT
app.set('view engine', 'pug');
app.use('/' + context, express.static('./public'));
app.set('views', './views');

console.log(process.env.BUILD_NUMBER)

app.get('/', function (req, res) {
  console.log('Hello World request.');
  res.render('index', { title: 'Hello', message: 'Hello World!', 
        name: process.env.COMMIT_AUTHOR,
        context: context, 
        buildNumber: process.env.BUILD_NUMBER, 
        shortCommit: process.env.SHORT_COMMIT})
})

app.listen(8080, function () {
   console.log('Example app listening on port 8080!');
});
