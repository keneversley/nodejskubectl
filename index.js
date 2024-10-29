var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('{ "response": "Hello from Razor World!" }');
});

app.get('/will', function(req, res) {
    res.send('{ "Hello  World"}');
});

app.get('/ready', function(req, res) {
    res.send('{ "response": "it works Razor World!" }');
})
app.listen(process.env.PORT || 3000);
module.exports = app;



