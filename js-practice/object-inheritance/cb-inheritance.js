function Shape(sides, x, y) {
	this.sides = sides;
	this.x = x;
	this.y = y;
}

function Rectangle(x, y, width, height) {
	Shape.call(this, 4, x, y);
	this.width = width;
	this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.totalarea = function() {
	return this.width * this.height;
};

Rectangle.prototype.perimeter = function(){
	return (this.width + this.height) * 2;
};

var rect = new Rectangle(2, 3, 6, 8);
var shape = new Shape(3, 4, 6);

console.log(rect.totalarea());



