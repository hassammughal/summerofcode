var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    fs.readFile("simple.txt", "utf8", function (error, data) {
        console.log(data);
    });
});
server.listen(9090);
console.log('server running...')