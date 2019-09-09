var parentObj = { x:1, y:2, z:9, a:8};
var childObj = {};

function extend(c, p){
	for(prop in p){
		c[prop] = p[prop];
	}
	return c;
}

extend(childObj, parentObj);
console.log(childObj);
