const express = require('express');
const app = express();
const PORT = 8080;

app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/grange', function(req, res) {
    res.sendFile(__dirname + '/public/grange.html');
});

app.get('/integrity', function(req, res) {
    res.sendFile(__dirname + '/public/integrity.html');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
