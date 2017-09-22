var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}
//原来是匿名函数，改为先声明后传递
http.createServer(onRequest).listen(8888);