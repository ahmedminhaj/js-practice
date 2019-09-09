var getName = (function (){
	var o = { "p1": "rock", "p2": "jack", "p3": "bob", "p4": "rob"};
	var idx = 0;
		
	return{
		getCurrent: function(){
			var key = Object.keys(o)[idx];
			console.log(key);
			var value = o[key];
			return  value;
		},
		getNext: function(){
			idx = idx + 1;
			var key = Object.keys(o)[idx];
			console.log(key);
			var value = o[key];
			return  value;
		}
	};
}());

console.log(getName.getCurrent());
console.log(getName.getNext());
console.log(getName.getNext());
console.log(getName.getNext());


