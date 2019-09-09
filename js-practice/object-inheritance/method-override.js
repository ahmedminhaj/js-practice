function Shape (name, width){
	this.shapeName = name;
	this.shapeWidth = width;
	this.shapeArea = function(){
		var height = 2 * this.shapeWidth;
		return (height * this.shapeWidth);
	}	
}

function Circle(name, radius){
	Shape.call(this, name, radius);
	this.type = "Round";
	this.shapeArea = function(){
		var pai = Math.PI;
		var totalArea = (2 * pai * this.shapeWidth);
		return totalArea.toFixed(2);
	}
}

var rectangle = new Shape("Rectangular", 15);
var circle = new Circle("Round Circle", 15);

console.log(rectangle);
console.log("Total Area of Rectangle ::" + rectangle.shapeArea());
console.log(circle);
console.log("Total Area of Circle ::" + circle.shapeArea());