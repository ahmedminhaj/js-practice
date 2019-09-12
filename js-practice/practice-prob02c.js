//second approach: with prototype/constructor
function differ(area1, area2){
	var d;
	d = area1 - area2;
	console.log("Difference between Circle and Sphere total area::", Math.abs(d.toFixed(2)));
}

function Circle(){
	this.radius = 10;
}

Circle.prototype.calArea = function(){
	return Math.PI * Math.pow(this.radius, 2);
}

function Sphere(){
	Circle.call(this);
}

Sphere.prototype = Object.create(Circle.prototype);

Sphere.prototype.calArea = function(){
	return (4 * Math.PI * Math.pow(this.radius, 2));
}

var circle = new Circle();
var sphere = new Sphere();
console.log("Sphere",sphere);

Sphere.prototype.compare = function(fn){
	return fn(sphere.calArea(), circle.calArea());
}

console.log("Circle area::", circle.calArea().toFixed(2));
console.log("Sphere area::", sphere.calArea().toFixed(2));
sphere.compare(differ);
