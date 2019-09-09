var getName = (function (){
	var list = ["jack" ,"rob" ,"bob", "rock"];
	var currentValue = 0;
		
	return{
		getCurrent: function(){
			return list[currentValue];
		},
		getNext: function(){
			if(currentValue < list.length - 1){
				currentValue = currentValue + 1;
				return list[currentValue];
			}else{
				currentValue = 0;
				return list[currentValue];
			}
		}
	};
}());

console.log(getName.getCurrent());
console.log(getName.getNext());
console.log(getName.getNext());
console.log(getName.getNext());
console.log(getName.getNext());
