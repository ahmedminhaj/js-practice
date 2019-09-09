function Vehicle (name, speed){
	this.vehicleName = name;
	this.vehicleSpeed = speed;
	this.forward = function(){
		return this.vehicleName + " move forward!";
	}
}
Vehicle.prototype.right = function(){
	return this.vehicleName + " turn right!";
}
Vehicle.prototype.left = function(){
	return this.vehicleName + " turn left!";
}
function Passenger(number){
	this.totalSeat = number;
	this.seat = function(){
		return "Has " + this.totalSeat + " seat";
	}
}

function Car(name, speed, number){
	Vehicle.call(this, name, speed);
	Passenger.call(this, number);
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.color = function(){
	return this.vehicleName + " is Red";
}
Car.prototype.topspeed = function(){
	return this.vehicleSpeed + " is topspeed of " + this.vehicleName;
}
Car.prototype.moves = function(){
	return Vehicle.prototype.right.call(this) + Vehicle.prototype.left.call(this);
}

var car = new Car('Toyota','220kps', 4);
console.log(car.seat());
console.log(car.right());
console.log(car.forward());
console.log(car.moves());
console.log(car.color());
console.log(car.topspeed());

