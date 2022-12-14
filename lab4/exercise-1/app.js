var express = require('express');
var app = express();

app.listen(3000);

app.get('/html', function (req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/json', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Smith'});
});

app.get('/toronto*team', function (res, req) {
    res.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>');
});