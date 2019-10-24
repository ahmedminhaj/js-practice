var b = new Buffer('NodeJS ');
var bu = new Buffer('Buffer');
var buff = new Buffer(13);

var j = b.toJSON(b);
var buf = Buffer.concat([b, bu]);
var dif = b.compare(bu);
buf.copy(buff);
var buffe = buff.slice(4,13);

console.log(buf.toString());
console.log(buff.toString());
console.log(buffe.toString());
//console.log(j);

if(dif < 0){
	console.log(b + ' comes before ' + bu);
}else if(dif == 0){
	console.log(b + ' equsls ' + bu);
}else{
	console.log(bu + ' comes before ' + b);
}