var express = require('express');
var cors = require('cors');
var app = express();
var server = require('http').Server(app);
var path = require('path');
var port =  process.env.PORT || 8080;

app.use(cors());
app.use(express.static(__dirname));

app.get('/angular-pdfjs-viewer.js', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../dist/angular-pdfjs-viewer.js'));
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/Sample.jpeg', function (req, res) {
    res.sendFile(__dirname + '/Sample.jpeg');
});


server.listen(port, function () {
    console.log('Server is listening on localhost:8080');
});

