var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.get('/tasks', function(req, res) {
  res.send('Немає задач на сьогодні!');
});

app.get('/tasks/:id', function(req, res) {
  res.send(
    'Ви хочете отримати задачу з id=' +
    req.params.id +
    ', але на сьогодні задач немає!'
  );
});

var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/firstpage', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/secondpage', function(req, res) {
    res.sendFile(path.join(__dirname + '/indexSecond.html'));
});

app.get('/thirdpage', function(req, res) {
    res.sendFile(path.join(__dirname + '/indexThird.html'));
});

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/static'));


app.post('/tasks', function(req, res) {
  res.send(
    'Ви хочете створити задачу з ім\'ям "' +
    req.body.name +
    '", але на сьогодні задач не було і не буде!'
  );
});


app.listen(3000);