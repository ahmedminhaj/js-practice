class Vehicle {   
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }
    getName(){
        return this.name;
    }
	setName(){
		return this.speed + " is highest speed of " + this.name;
	}	
}

var car = new Vehicle('Toyota', '200kps');
console.log(car.getName());
console.log(car.setName());


