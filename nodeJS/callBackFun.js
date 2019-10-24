var fs = require("fs");
fs.readFile('nodeJS.txt', function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});

var dataS = fs.readFileSync('input.txt');
console.log("synchronous read: " + dataS.toString());
console.log("Program Ended");