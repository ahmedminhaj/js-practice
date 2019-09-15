function factorial(x){
	if (x <= 1) return 1;
	return x * factorial(x-1);
}

console.log(factorial(11));

function hypotenuse(a, b){
	function square(x){return x*x;}
	return Math.sqrt(square(a)+square(b));
}

console.log(hypotenuse(8, 5));

var a = [function(x){
	return x*x;
}, 20];
console.log(a[0](a[1]));

function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }

function operate(operator, operand1, operand2) {
	return operator(operand1, operand2);
}
//(10+19) - (5*6)
var i = operate(subtract, operate(add, 10, 19), operate(multiply, 5, 6));
console.log(Math.abs(i));

uniInt.counter = 10;

function uniInt(){
	return uniInt.counter++;
}

console.log(uniInt());
console.log(uniInt());

function counter(){
	var n = 110;
	return {
		count: function(){return n++;},
		resetC: function() {n = 0;}
	};
}

var c = counter(), d = counter();
console.log(d.count());
console.log(d.count());
console.log(d.count());
console.log(c.count());
d.resetC();
c.resetC();
console.log(c.count());
console.log(d.count());
console.log(d.count());

function constfunc(){
	var func = [];
	for(var i = 0; i < 10; i++)
		func[i] = function() {return i;};
	return func;
}

var func = constfunc();
console.log(func[7]());
console.log(func[6]());
console.log(func[8]());

function check(args){
	var actual = args.length;
	var expected = args.callee.length;
	if(actual !== expected)
		throw Error ("Expected " + expected + "args; got" + actual);
}

function f(x, y, z){
	check(arguments);
	return x + y + z;
}

var data = [1,2,10,3,6,8];
var total = 0;
for(var i = 0; i < data.length; i++){
	total += data[i];
}
var mean = total/data.length;
console.log("Total mean::", mean);

var calculator = {
	op1: 1,
	op2: 2,
	add: function(){
		this.result = this.op1 + this.op2;
	}
};
calculator.add();
console.log(calculator.result);

function objFunc(obj){
	obj.make = "Toyota";
}

var car = { make: "Honda", model: "Vajel"};
var x = car.make;
objFunc(car);
var y = car.make;
console.log(x);
console.log(y);

var f = function fac(n){return n<2 ? 1 : n * fac(n-1) };
console.log(f(5));

function map(f,a){
	var sumAry = [], i;
	for(i = 0; i < a.length; i++){
		sumAry[i] = f(a[i]);
	}
	return sumAry;
}
var S = function (x){
	return x + x + x;
}
var nums = [1,2,3,4,7,9];
var numsum = map (S, nums);
console.log(numsum);

function outside(x){
	function inside(y){
		return x+y;
	}
	return inside;
}
var finside = outside(5);
var result = finside(3);
console.log(result);
console.log(outside(5)(7));

function outside1() {
  var x = 5;
  function inside1(x) {
    return x * 2;
  }
  return inside1;
}
console.log(outside1()(3));

//closures
var pet = function(name){
	var getName = function(){
		return name;
	}
	return getName;
}
myPet = pet("vivi");
console.log(myPet());

var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || 
        newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var petCat = createPet('vv');
console.log(petCat.getName());                  

petCat.setName('Oliver');
petCat.setSex('male');
console.log(petCat.getSex());                   
console.log(petCat.getName());

var getCode = (function(){
	var api = "0p9k02";
	return function(){
		return api;
	};
})();
console.log(getCode());
