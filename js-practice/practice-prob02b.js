//second approach: with constructor

function Circle() {
	this.radius = 10;
	this.calArea = function(){
		return (Math.PI * (this.radius * this.radius));
	};
}

function Sphere(){
	Circle.call(this);
	this.calArea = function(){
		return (4 * Math.PI * Math.pow(this.radius, 2)); 
	};
	this.compare = function(arg){
		var differ;
		if(this.calArea() > arg){
			differ = this.calArea() - arg;
			return differ;
		}else{
			differ = arg - this.calArea();
			return differ;
		}
	};
}

var sphere = new Sphere();
var circle = new Circle();

console.log("Circle area::", circle.calArea().toFixed(2));
console.log("Sphere area::", sphere.calArea().toFixed(2));
console.log("Difference between area::", sphere.compare(circle.calArea()).toFixed(2));