class Parent {
	constructor(emo1,emo2,emo3){
		this.emo1 = emo1;
		this.emo2 = emo2;
		this.emo3 = emo3;
	}
	extend(data){
		for(let key in data){
			if(data.hasOwnProperty(key)){
				this[key] = data[key];
			}
		}
		return this;
	}
}

var p = new Parent('protective', 'caring', 'strict');
console.log('\n=================\n');	
console.log("object instance : ", p);
p.extend(
	{ 
		emo4 : 'naughty',
		testFunc:function(){
			console.log('test function working');
		}
	}
);

console.log('\n=================\n');
console.log(p.emo2);
console.log(p.emo4);
p.testFunc();

