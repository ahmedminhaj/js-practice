function differ(area1, area2){
	var d;
	d = area1 - area2;
	console.log("Difference between Circle and Sphere total area::", Math.abs(d.toFixed(2)));
}

function copyObj(sourceObj){
	return Object.assign({}, sourceObj);
}

var circle = {
	radius: 10,
	calArea: function(){
		return ( Math.PI * (Math.pow(this.radius, 2)));		
	}
};

var sphere = copyObj(circle);

sphere.calArea = function(){
	return (4 * Math.PI * (Math.pow(sphere.radius, 2)))
};

sphere.compare = function(fn){
	return fn(circle.calArea(), sphere.calArea());
}

console.log("Total Circle Area::", circle.calArea().toFixed(2));
console.log("Total Sphere Area::", sphere.calArea().toFixed(2));

sphere.compare(differ);