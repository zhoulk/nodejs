var http = require('http');
var fs = require('fs');
var url = require('url'),
    path = require('path');

var root = path.resolve(process.argv[2] || '.') + '/html/';

console.log('Static root dir: ' + root);


var server = http.createServer(function(request, response){
    // console.log(request.method + ': ' + request.url);
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.end('<h1>Hello world!</h1>');

    var pathname = url.parse(request.url).pathname;
    console.log(pathname);

    var filepath = path.join(root, pathname);

    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath, 'utf-8').pipe(response);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });

});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
