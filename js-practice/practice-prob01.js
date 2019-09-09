//problem 1
console.log("---problem solution 1---");
var x = (function(p) {
	return p + p;
}(5));
console.log(x);

//problem 2
console.log("---problem solution 3--");
var book = {
	title : "Javascript",
	subTitle : "Definitive Guide",
	author : "David",
	year : 2019,
	page : 778
};
console.log(book);
book.year = 2014;
delete book.author;
delete book.page;
book.totalPage = 811;
console.log(book);


//problem 3
console.log("---problem solution 3---");
function Shape (name, width){
	this.shapeName = name;
	this.shapeWidth = width;	
}

Shape.prototype.border = "Line";

Shape.prototype.shapeArea = function(){
	var height = 2 * this.shapeWidth;
	return (height * this.shapeWidth);
}

function Circle(name, radius){
	Shape.call(this, name, radius);
	this.type = "Round";
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.shapeArea = function(){
	var pai = Math.PI;
	var totalArea = (2 * pai * this.shapeWidth);
	return totalArea.toFixed(2);
}

var rectangle = new Shape("Rectangular", 15);
var circle = new Circle("Round Circle", 15);

console.log(rectangle);
console.log("Total Area of Rectangle ::" + rectangle.shapeArea());
console.log(circle);
console.log("Total Area of Circle ::" + circle.shapeArea());

if(rectangle.shapeArea() > circle.shapeArea()){
	console.log("Total area of rectangle :" + rectangle.shapeArea() + " is greater than circle :" + circle.shapeArea());
}else{
	console.log("Total area of circle :" + circle.shapeArea() + " is greater than rectangle :" + rectangle.shapeArea());
}