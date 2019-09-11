//first approach: with prototype/constructor/class

var circle = {
	radius: 10,
	calArea: function(){
		return ( Math.PI * (Math.pow(this.radius, 2)));		
	}
};
var sphere = {};
Object.assign(sphere, circle);

sphere.calArea = function(){
	return (4 * Math.PI * (Math.pow(sphere.radius, 2)))
};

sphere.compare = function(arg){
	var differ;
	if(sphere.calArea() > arg){
		differ = sphere.calArea() - arg;
		return differ;
	}else{
		differ = arg - sphere.calArea();
		return differ;
	}
};

var sphereArea = sphere.calArea();
var circleArea = circle.calArea();

console.log("Total Circle Area::", circleArea.toFixed(2));
console.log("Total Sphere Area::", sphereArea.toFixed(2));

console.log("Difference between Circle and Sphere total area::", sphere.compare(circle.calArea()));