const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/grange', function(req, res) {
    res.sendFile(__dirname + '/public/grange.html');
});

app.get('/grange', function(req, res) {
    res.sendFile(__dirname + '/public/integrity.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});