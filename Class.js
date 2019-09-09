// class and contructor
function Range(from, to){
	this.from = from;
	this.to = to;
	
}

Range.prototype = {
	includes: function(x){
		if(this.from <= x && x <= this.to){
			return console.log("true");
		}else{
			return console.log("false");
		}		
	},
	sort: function(r){
		for(var i = this.from; i <= this.to; i++){
			for(var j = (i+1); j <= this.to; j++){
				if(i < j){
					return console.log(j + " Greater than " + i);
				}
			}
		}
	},
	foreach: function(f){
		for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
	},
	toString: function(){
		return this.from +"..."+this.to;
	}
};

var r = new Range(1,4);
r.includes(2);
r.sort();
r.foreach(console.log);
console.log(r);


//class and prototype
function inherit(p){
	if (p == null) throw TypeError();
	if (Object.create)
		return Object.create(p);
	var t = typeof p;
	if (t !== "object" && t !== "function") throw TypeError();
	function f() {};
	f.prototype = p;
	return new f();
}

function range(f, t){
	var r = inherit(range.methods);
	r.from = f;
	r.to = t;
	return r;
}

range.methods = {
	includes: function(x){
		if(this.from <= x && x <= this.to){
			return console.log("true");
		}else{
			return console.log("false");
		}
	},
	foreach: function(f){
		for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
	},
	toString: function(){
		return this.from , this.to;
	}
};

// var r = range(1,5);
// r.includes(8); 
// r.foreach(console.log);
// console.log(r);


var o = {}
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 7;
o = inherit(q);
var s = q.toString();

console.log("total of x,y,z: " + (o.z + q.x + q.y));