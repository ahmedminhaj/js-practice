//second approach: with class

class Circle{
	constructor(radius){
		this.radius = 10;
	}
	calArea(){
		return Math.PI * Math.pow(this.radius, 2);
	}
}	

class Sphere extends Circle{
	constructor(radius){
		super(radius);
	}
	calArea(){
		return 4 * Math.PI * Math.pow(this.radius, 2);
	}
	compare(arg){
		var differ;
		if(this.calArea() > arg){
			differ = this.calArea() - arg;
			return differ;
		}else{
			differ = arg - this.calArea();
			return differ;
		}
	}
}

var circle = new Circle();
var sphere = new Sphere();

console.log("Circle area::", circle.calArea().toFixed(2));
console.log("Sphere area::", sphere.calArea().toFixed(2));
console.log("Difference between area::", sphere.compare(circle.calArea()).toFixed(2));
