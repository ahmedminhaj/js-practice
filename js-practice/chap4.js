var p = {x:2, y:5};
p.z = 9;
console.log(p);

var rectangle = {
	upper: { x:20, y:10 },
	lower: { x:25, y:15}
};

console.log((p.x*rectangle.upper.x)+(p.y*rectangle.lower.y));

var adder = function(x){
	return x + x;
}
console.log(adder(5));

var o = {x:1,y:{z:3}};
var a = [0, 4, [8, 9]];
console.log(o['x']);
console.log(a[2][1]);

var i = 1;
console.log(++i);
console.log(i++);

var point = { x:1, y:3};
var data = [9,8,7];
console.log(0 in data);
console.log(2 in data);
console.log(4 in data);
console.log('x' in point);

var inst = [1, 2, 3];
console.log("=--intance check--=");
console.log(inst instanceof Array); 
console.log(inst instanceof Object); 
console.log(inst instanceof Number); 

var geval = eval;
var x = y = "global";
function f(){
	var x = "local";
	eval("x += 'changed';");
	return x;
}
function g(){
	var y = "local";
	geval("y += 'changed';");
	return y;
}
console.log(f(), x);
console.log(g(), y);

var o = {x:1, Y:2};
delete o.x;
console.log(x in o);

var a  = [1,2,3];
console.log(a.length);
console.log(a);

delete a[1];
console.log(a[1]);
console.log(a.length);