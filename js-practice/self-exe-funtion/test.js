var o = { p1: 'Jack', p2: 'Rob', p3: 'Rock', p4: 'Bob'};
var objKey = Object.keys(o);
console.log(objKey);
var objValue = Object.values(o);
console.log(objValue);

for (var i = 0; i < objKey.length; i++){
	o['get' + objKey[i]] = new Function(objValue[i]);	
}

console.log(o.getp3());
console.log(o.getp1());
console.log(o.getp2());