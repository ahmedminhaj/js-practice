var time = new Date();
var day = time.getDay();
var dayList = ["Sunday", "Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dayName = dayList[day];
var msg = "Good Afternoon!!\n";

//wrapper object
var txt = "Pattern testing:  1, 9, 8, 4";
var pattern = /\d+/g;
var numArry = txt.match(pattern);
 
var s = "text", n = 1, b = true;
var S = new String(s);
var N = new Number(n);
var B = new Boolean(b);

console.log(typeof s, typeof S);
console.log(typeof n, typeof N);
console.log(typeof b, typeof B);

 
function sort(){
	for(var i = 0; i <= arry.length; i++){
		for(var j = (i+1); j <= arry.length; j++){
			if(i < j){
				return [arry[i],arry[j]]=[arry[j],arry[i]];
			}
		}
	}
}

console.log(msg.replace(/[aieou]/g, "*") + "To" + dayName.slice(-3) + " is " + dayName.slice(0,3) + dayName.charAt(2) + dayName.charAt(dayName.length-1) +" :: "+ dayName.toUpperCase());
console.log("Time ::  \b" + time.toLocaleTimeString());

console.log(txt.search(pattern));
console.log(numArry.sort());

var o = {x:1};
console.log(o);
o.x = 2;
o.y = 5;
console.log(o);

var ary = [1,2,3];
ary[2]=0;
ary[3]=4;
console.log(ary.sort());

var tary = [];
function assignment(a, b){
	for(var i = 0; i < a.length; i++){
		b[i] = a[i];
	}
}	
assignment(ary, tary);
console.log(tary);

console.log(parseInt(39.0053));
console.log(/\d+/g.toString());

var now = new Date();
console.log(typeof (now+1));
console.log(typeof (now-1));

scope = "global";
function check(){
	scope = "local";
	myscope = "local";
	return [scope, myscope];
}

console.log(check());
console.log(scope);
console.log(myscope);

var scope = "global scope"; 
function checkscope() {
	var scope = "local scope"; 
	function nested() {
		var scope = "nested scope"; 
		return scope; 
	}
	console.log(scope);	
	return nested();	
}
console.log(checkscope());
console.log(scope);

