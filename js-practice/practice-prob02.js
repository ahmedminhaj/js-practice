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

sphere.compare = function(arg){};

function differ(){
	var d;
	if (sphere.calArea() > circle.calArea()){
		d = sphere.calArea() - circle.calArea();
		console.log("Difference between Circle and Sphere total area::", d.toFixed(2));
	}else{
		d = circle.calArea() - sphere.calArea();
		console.log("Difference between Circle and Sphere total area::", d.toFixed(2));
	}
}

console.log("Total Circle Area::", circle.calArea().toFixed(2));
console.log("Total Sphere Area::", sphere.calArea().toFixed(2));

sphere.compare(differ());