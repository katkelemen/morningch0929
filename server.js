var http = require('http');
var port = process.env.PORT || 8000;

function handler(request, response) {
	var url = request.url;
	if (url.length === 1) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end("HELLO WORLD!");
  if (url.indexOf('name/') > -1) {
		var nameofp = url.slice(indexOf('name/'), url.length).split('/')[1];
	  response.end('<h1>' + nameofp +'</h1>');
	}
}
}

http.createServer(handler).listen(port);

console.log('node http server listening on http://localhost:' + port);

module.exports = handler;
