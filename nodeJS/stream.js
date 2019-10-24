var fsy = require('fs');
var data = '';
var data1 = 'nodeJS web developement.';

var readerStream = fsy.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk){
	data += chunk;
});

readerStream.on('end', function(){
	console.log(data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});

var writerStream = fsy.createWriteStream('output.txt');
writerStream.write(data1, 'UTF8');

writerStream.end();

writerStream.on('finish', function(){
	console.log("Write completed");
});

writerStream.on('error', function(err){
	console.log(err.stack);
});

var streamR = fsy.createReadStream('input.txt');
var streamW = fsy.createWriteStream('output.txt');
streamR.pipe(streamW);

console.log('program end');