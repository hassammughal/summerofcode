var port = process.env.PORT || 80;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require(__dirname+"/route.js");
var DATA = [];
app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json


app.get('/getMessage', routes.getMsgs);

app.post('/setMessage', routes.setMsgs);

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
