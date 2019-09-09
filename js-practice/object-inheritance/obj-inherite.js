function Vehicle (name, speed){
	this.vehicleName = name;
	this.vehicleSpeed = speed;
	this.forward = function(){
		return this.vehicleName + " move forward!";
	}
	this.right = function(){
		return this.vehicleName + " turn right!";
	}
	this.left = function(){
		return this.vehicleName + " turn left!";
	}
}


function Car(name, speed){
	Vehicle.call(this, name, speed);
	this.color = function(){
		return this.vehicleName + " is Red";
	}
	this.topspeed = function(){
		return this.vehicleSpeed + " is topspeed of " + this.vehicleName;
	}
	this.moves = function(){
		return this.right() + this.left();
	}
	this.right = function(){
		return this.vehicleName + " cant turn right!";
	}
}

var car = new Car('Toyota','220kps');
console.log(car.vehicleName);
console.log(car.right());
console.log(car.forward());
console.log(car.moves());
console.log(car.color());
console.log(car.topspeed());
