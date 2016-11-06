var greet = require('./hello');
var fs = require('fs');

var s = 'machine';

greet(s);

process.nextTick(function(){
	console.log('nextTick callback!');
});
console.log('nextTick was set!');

process.on('exit', function(code){
    console.log('about to exit with code: ' + code);
});

fs.readFile('hello.js', 'utf-8', function(err, data){
	if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.readFile('../img/七波辉58.png', function(err, data){
	if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');

        // var text = data.toString('utf-8');
        // console.log(text);
    }
});

var data = 'Hello, Node.js';
var outputFileName = '../file/output.txt';
fs.writeFile(outputFileName, data, function(err){
	if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

fs.stat(outputFileName, function(err, stat){
	if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

var ws1 = fs.createWriteStream(outputFileName, 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var rs = fs.createReadStream(outputFileName, 'utf-8');

rs.on('data', function(chunk){
	console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function(){
	console.log('END');
});

rs.on('error', function(){
    console.log('ERROR: ' + err);
});

var ws2 = fs.createWriteStream('../file/output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();


var rs = fs.createReadStream(outputFileName);
var ws = fs.createWriteStream('../file/copied.txt');
rs.pipe(ws);
















