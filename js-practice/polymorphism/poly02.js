var shape = function(){};

shape.prototype.draw = function(){
	return "General Shape";
}

var circle = function(){};
circle.prototype = Object.create(shape.prototype);
circle.prototype.draw = function(){
	return "Circle Shape";
}

var square =  function(){};
square.prototype = Object.create(shape.prototype);
square.prototype.draw = function(){
	return "Square Shape";
}

var shapes = [new shape(), new circle(), new square()];
shapes.forEach(function(shapeList){
	console.log(shapeList.draw());
});