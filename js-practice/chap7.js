var mix = [1.1, "a", true];
var ary = [[1, {x:1, y:2}], [4, {x:5, y:6}]];

console.log(mix + "\n" + ary[1]);

var a = ["world"];
a[1] = 3.14;
var i = 2;
a[i] = 3;
a[i + 1] = "hello";
a.push("bye", "ta-ta");
console.log(a);

delete a[a.length-1];
Object.defineProperty(a, "length", {writable: false});
a.length = 0; //a is unchanged
console.log(a);
console.log(a.length);

var o = {x:1, y:3, z:5};
var keys = Object.keys(o);
var values = [];
for(var i = 0; i < keys.length; i++){
	var key = keys[i];
	values[i] = o[key];
}
console.log(values);

var table = new Array(11);
for (var i=0; i < table.length; i++)
	table[i] = new Array(11);

for(var row = 0; row < table.length; row++){
	for(var col = 0; col < table[row].length; col++){
		table[row][col] = row*col;
	}
}

var product = table[5][7];
console.log(product);
console.log(table);

var a = [1,2,5,3];
a = a.concat(7,8);
a.sort();
b = a.reverse().join(" :: ");
console.log(b);

var sum = 0;
a.forEach(function(value) { sum += value; });
console.log(sum);

function findall(a,x){
	var results = [],
		len = a.length,
		pos = 0;
	while (pos < len){
		pos = a.indexOf(x, pos);
		if (pos === -1) break;
		results.push(pos);
		pos = pos + 1;
	}
	return results;
}
