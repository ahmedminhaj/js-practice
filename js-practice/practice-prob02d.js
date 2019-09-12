//second approach: with class
function differ(area1, area2){
	var d;
	d = area1 - area2;
	console.log("Difference between Circle and Sphere total area::", Math.abs(d.toFixed(2)));
}

class Circle{
	constructor(){
		this.radius = 10;
	}
	calArea(){
		return Math.PI * Math.pow(this.radius, 2);
	}
}	

class Sphere extends Circle{
	constructor(){
		super();
	}
	calArea(){
		return super.calArea() * 4;
	}
	compare(fn){
		return fn(sphere.calArea(),circle.calArea());
	}
}

var circle = new Circle();
var sphere = new Sphere();
console.log("Sphere", sphere.radius);

console.log("Circle area::", circle.calArea().toFixed(2));
console.log("Sphere area::", sphere.calArea().toFixed(2));

sphere.compare(differ);
