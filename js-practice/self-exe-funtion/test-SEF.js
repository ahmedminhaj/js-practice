var getName = (function (){
	var o = { "p1": "rock", "p2": "jack", "p3": "bob", "p4": "rob" };
	var idx = 0;
	var key = Object.keys(o)[idx];	
	return{
		getCurrent: function(){
			var value = o[key];
			return  value;
		}
	};
}());

console.log(getName.getCurrent());
