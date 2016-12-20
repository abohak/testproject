var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello World! This is my first Openshift 3 application!');
});
server.listen(8080);