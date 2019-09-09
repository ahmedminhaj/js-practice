class Vehicle{
	constructor(name, speed){
		this.name = name;
		this.speed = speed;
	}
	right(){
		return this.name + " moves right!";
	}
	left(){
		return  this.name + " moves left!";
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
	details(){
		return this.name + " is a " + this.color + " and it's highest speed " + this.speed;
	}
	moves(){
		return super.right() + super.left();
	}
}

var car = new Car('Toyota','220kps', 'red');
console.log(car);
var newCar = car.extend({seat: 4});

console.log(newCar);
console.log(car.details());
console.log(car.moves());



