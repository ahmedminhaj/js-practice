var book = {
	mainTitle: "JavaScript", 
	subTitle: "The Definitive Guide", 
	author: { 
		firstname: "David", 
		surname: "Flanagan"
	}
};

var o = new Object();
o.x = "jack";
o.y = 25;
console.log(o);
book.year = 2019;
console.log(book);

console.log("x" in o);
console.log("toString" in o);
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));

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

function Shape (name, height, width){
	this.shapeName = name;
	this.shapeHeight = height;
	this.shapeWidth = width;
}

Shape.prototype.border = "round";

Shape.prototype.totalArea = function(){
	return 2 * (this.shapeHeight + this.shapeWidth);
}

var circle = new Shape("Round Circle", 20, 18);

console.log(circle);
console.log(circle.border);
console.log("Total Area of Circle " + circle.totalArea());

var obj = {}
obj.x = 1;
var o1 = inherit(obj);
o1.y = 3;
var o2 = inherit(o1);
o2.z = 5;
console.log(o2);

var sum = o2.x + o2.y;
console.log(sum);

var ob = { x:1, y:2, z:9, a:8};
var op = {};
var om = {b:9, c:11};

function extend(o, p){
	for(prop in p){
		o[prop] = p[prop];
	}
	return o;
}

extend(op, ob);
console.log(op);

function merge(o, p){
	for(prop in p){
		if(o.hasOwnProperty[prop]) continue;
		o[prop] = p[prop];
	}
	return o;
}
merge(ob, om);
console.log(ob);

function restrict(o, p){
	for(prop in o){
		if(!(prop in p)) delete o[prop];
	}
	return o;
}
restrict(ob, om);
console.log(ob);

var person = {
	firstName: "Jack",
	lastName: "jamal",
	get fullName(){
		return this.firstName + " " + this.lastName;
	},
	set fullName(name){
		var words = name.toString().split(" ");
		this.firstName = words[0] || "";
		this.lastName = words[1] || "";
		
	}
}

person.fullName = "Trup talukder";
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);