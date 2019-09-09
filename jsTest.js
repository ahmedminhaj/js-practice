var books={
	topic:"JavaScript The Definitive Guide",
	author:"uncle bob"
};

var primes=[1,3,5,7,9];

books.publication=2002;


var points=[
	{ x:1,y:3},
	{ x:3,y:1}
];
var result = points[1].x - points[0].x;
var match = (points[0].x == points[1].y) && (points[1].x == points[1].y);

var data = {
	trail1:[[1,3],[2,4]],
	trail2:[[9,7],[8,6]]
};

function adder(x){
	return x+2;
}
var add = adder(points[1].x);

var square = function(x){
	return x*x;
}

var a = [];
a.push(1,2,3);
a.reverse();

points.dist = function(){
	var p1 = this[0];
	var p2 = this[1];
	var a = p2.x-p1.x;
	var b = p2.y-p1.y;
	return Math.sqrt(a*a + b*b);
}

function inherit(p){
		if (p == null) throw TypeError();
		if (Object.create)
			return Object.create(p);
		var t = typeof p;
		if (t !== "object" && t !== "function") throw TypeError();
		function f() {};
		f.prototype = p;
		return new f();
}

var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
var s = q.toString();
r = q.x + q.y;
 


var unitcircle = {r:1};
var c = inherit(unitcircle);
c.x = 1; 
c.y = 1; 
c.r = 2;

console.log(unitcircle.r ,o,p,q, c);