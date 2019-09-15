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
	sort: function(){
		for(var i = this.from; i <= this.to; i++){
			for(var j = (i+1); j <= this.to; j++){
				if(i < j){
					return console.log(j + " Greater than " + i);
				}
			}
		}
	},
	foreach: function(){
		for(var x = Math.ceil(this.from); x <= this.to; x++) 
			console.log(x);
	},
	toString: function(){
		return this.from +"..."+this.to;
	}
};

// var r = new Range(3,6);
// r.includes(2);
// r.sort();
// r.foreach();
// console.log(r);


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

var r = range(1,5);
r.includes(8); 
r.foreach(console.log);
console.log(r);


var o = {}
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 7;
o = inherit(q);
var s = q.toString();

console.log("total of x,y,z: " + (o.z + q.x + q.y));

class Rectangle {
	constructor (height, width){
		this.height = height;
		this.width = width;
	}
	get Area(){
		return this.calArea();
	}
	calArea(){
		return  this.height * this.width;
	}
}
var square = new Rectangle(8,8);
console.log(square.Area);

class Point{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	static distance(a, b){
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		return Math.hypot(dx, dy);
	}
}
const p1 = new Point(6,9);
const p2 = new Point(12,16);
var dis = Point.distance(p1, p2);
console.log(dis);

function enumeration(namesToValues) {
	var enumeration = function() { throw "Can't Instantiate Enumerations"; };
	var proto = enumeration.prototype = {
		constructor: enumeration, 
		toString: function() { return this.name; }, 
		valueOf: function() { return this.value; }, 
		toJSON: function() { return this.name; } 
	};
	enumeration.values = []; 
	for(name in namesToValues) { 
		var e = inherit(proto); 
		e.name = name; 
		e.value = namesToValues[name]; 
		enumeration[name] = e; 
		enumeration.values.push(e); 
	}
	enumeration.foreach = function(f,c) {
		for(var i = 0; i < this.values.length; i++) f.call(c,this.values[i]);
	};
	return enumeration;
}

var Coin = enumeration({Penny:1, Nickel:5, Dime:10, Quarter:25});
var c = Coin.Dime; 
console.log(c instanceof Coin);

if((10*Coin.Nickel) == (2*Coin.Quarter))
	console.log( "10 " + String(Coin.Nickel) + " equal to 2 " + String(Coin.Quarter));

console.log(Coin.Dime > Coin.Nickel);
console.log(Coin.Dime == 5);

function Card(suit, rank){
	this.suit = suit;
	this.rank = rank;
}
Card.Suit = enumeration({Clubs: 1, Diamonds: 2, Hearts:3, Spades:4});
Card.Rank = enumeration({Two: 2, Three: 3, Four: 4, Five: 5, Six: 6,Seven: 7, Eight: 8, Nine: 9, Ten: 10,Jack: 11, Queen: 12, King: 13, Ace: 14});

Card.prototype.toString = function() {
	return this.rank.toString() + " of " + this.suit.toString();
};

Card.prototype.compareTo = function(that) {
	if (this.rank < that.rank) return -1;
	if (this.rank > that.rank) return 1;
	return 0;
};

Card.orderByRank = function(a,b) { return a.compareTo(b); };

Card.orderBySuit = function(a,b) {
	if (a.suit < b.suit) return -1;
	if (a.suit > b.suit) return 1;
	if (a.rank < b.rank) return -1;
	if (a.rank > b.rank) return 1;
	return 0;
};

function Deck(){
	var cards = this.cards = [];
	Card.Suit.foreach(function(s){
		Card.Rank.foreach(function(r) {
			cards.push(new Card(s,r));
			});
	});
}

Deck.prototype.shuffle = function(){
	var deck = this.cards, len = deck.length;
	for(var i = len-1; i > 0; i--){
		var r = Math.floor(Math.random()*(i+1)), temp;
		temp = deck[i], deck[i] = deck[r], deck[r] = temp;
	}
	return this;
};

Deck.prototype.deal = function(n){
	if(this.cards.length < n) throw "Out of cards";
	return this.cards.splice(this.cards.length-n, n);
};

var deck = (new Deck()).shuffle();
var hand = deck.deal(13).sort(Card.orderBySuit);

console.log(hand);

