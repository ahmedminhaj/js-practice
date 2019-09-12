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

var data = [1,2,3,6,8];
var total = 0;
for(var i = 0; i < data.length; i++){
	total += data[i];
}
var mean = total/data.length;
console.log(mean);
