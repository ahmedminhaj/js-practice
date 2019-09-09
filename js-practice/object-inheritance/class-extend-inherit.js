class Vehicle{
	constructor(name, speed){
		this.name = name;
		this.speed = speed;
	}
	extend(newProps){
		for(var prop in newProps){
			if(newProps.hasOwnProperty(prop)){
				this[prop] = newProps[prop];
			}
		}
		return this;
	}
}

class Car extends Vehicle{
	constructor (name, speed, color){
		super(name, speed);
		this.color = color;
	}
}

var toyota = new Car('Toyota', 240, 'red');
console.log("before adding new props with extend function : ", toyota);

toyota.extend({seat: 4});
console.log("after adding new props with extend function : ", toyota);
