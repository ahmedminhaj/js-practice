var name = "rock";
if(name == null){
	name = "jack";
	console.log(name);
}else{
	console.log(name);
}

var i = j = 1;
var k = 2;
if( i==j ){
	if( j==k ){
		console.log("equals");
	}else{
		console.log("not equals");
	}
}

var n = 2;
if ( n==i ){
	console.log("n,i equals");
}else if( n==j ){
	console.log("n,j equals");
}else if( n==k ){
	console.log("n,k equals");
}else{
	console.log("not equals");
}

var s=3;
switch(s){
	case 1:
	console.log("Value of s::", s);
	break;
	case 2:
	console.log("Value of s::", s);
	break;
	case 3:
	console.log("Value of s::", s);
	break;
	case 4:
	console.log("Value of s::", s);
	break;
	default:
	console.log("none");
	break;
}

var con = "num11";
switch( typeof con){
	case 'number':
	console.log(con.toString(16).toUpperCase());
	break;
	case 'string':
	console.log('"' + con.toUpperCase() + '"');
	break
	default:
	console.log( con );
	break;
}

var ary = [9,7,6,5,3], len = ary.length, i=0, j=0;
while(i<len){
	console.log(ary[i]);
	i++;
}

do{
	console.log(ary[j]+10);
	j++;
}while(j < len);

var arr = [ 10, , 20, "rocky", {x:2}];
arr.forEach(function(j,i){
	console.log('arr' + i + '::' + j);
});

var arry = [];
arry[0]=2;
arry[5]=12;
arry[10]=20;

for(var a=0; a<arry.length; a++){
    console.log("I am for",a);
	if(arry[a]==12) break;
}

arry.forEach(function(item,i){
    console.log("I am forEach",i,item);
});

var numb = [1,5,8,9];
var newNumb = numb.map(function(i){
	return i*10;
});
console.log(numb);
console.log(newNumb);


var obj = {a: 1, b: 2, c: 3};    
for (var prop in obj) {
    console.log('obj::'+prop+'::'+obj[prop]);
};

var str = ["sddssaddas",2,5,[6,5]];
for(var v of str){
	console.log(v);
}