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

var car = new Vehicle("toyota", 240);
console.log(" Before extending ",  car);

car.extend({color:"Red", seat: 4});
console.log(" After extending ",  car);




