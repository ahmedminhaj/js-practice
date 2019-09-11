//second approach: with prototype/constructor

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

Sphere.prototype.compare = function(arg){
	var differ;
	if(this.calArea() > arg){
		differ = this.calArea() - arg;
		return differ;
	}else{
		differ = arg - this.calArea();
		return differ;
	}
}

var circle = new Circle();
var sphere = new Sphere();

console.log("Circle area::", circle.calArea().toFixed(2));
console.log("Sphere area::", sphere.calArea().toFixed(2));
console.log("Difference between area::", sphere.compare(circle.calArea()).toFixed(2));
