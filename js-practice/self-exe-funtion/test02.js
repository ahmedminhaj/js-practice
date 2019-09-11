var o = {p1: "Jack", p2: "Rob", p3: "Bob", p4: "Rock", p5: "Trump"};
(function( p ){
    for(let key in p){
		o['get'+key] = function(){return p[key];}	
	}
})( o )
console.log( o.getp1() );
console.log( o.getp2() );
console.log( o.getp3() );
console.log( o.getp5() );