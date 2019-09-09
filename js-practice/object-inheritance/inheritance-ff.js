var vehicle = {
	brand(){
		return "This is a brand new " + this.name;
	},
	topspeed(){
		return this.speed + " is highest speed of " + this.name;
	}
}

var passenger = {
	seat(){
		return " has " + this.number + " seat";
	}
}

var car = ( name, speed, number ) => Object.assign(Object.create(vehicle, passenger),{
	name, speed, number,
	move(){
		return this.name + " turn right";
	},
	brand(){
		return this.name + " is not brand new";
	}
});

var toyota = car("Prius", 220, 4);

console.log(toyota.brand());
console.log(toyota.topspeed());
console.log(toyota.move());
// console.log(toyota.seat());

