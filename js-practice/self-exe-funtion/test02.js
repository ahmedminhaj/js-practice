var f = {
	a : 'apple',
	b : 'banana',
	c : 'Cherries',
	d : 'Dragon Fruit'
};
var temp = {};
var funcName = [];
(function( o ){	
    for(var key in f){
		funcName = 'get'+key;
		temp[funcName] = function(){return o[key];}	
		
	}
	
	Object.assign(o, temp);	
})( f )

console.log( f.getb() );
console.log( f.geta() );
console.log( f.getd() );