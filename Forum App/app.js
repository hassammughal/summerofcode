var express = require('express');
var app = express();
var port = 80;
var DATA = [];
var bodyParser = require('body-parser');

app.use(express.static('Public'));

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

app.use(bodyParser.json());

app.get('/getTodo', function (req, res) {
    res.send(DATA);
});

app.post('/setTodo', function (req, res) {
    var userjson = req.body;
    DATA = userjson;
    console.log(userjson);
});

app.get('/time', function(req, res){
    res.send( {"time": Date.now()} );
});
