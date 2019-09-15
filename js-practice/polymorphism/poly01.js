function Person(name, age){
	this.name = name;
	this.age = age;
}

Person.prototype.getAge = function(){
	return this.age;
}

Person.prototype.setAge = function(value){
	this.age = value;
}

Person.prototype.growAge = function(){
	this.age++;
	return this.age;
}

Person.prototype.getInfo = function(){
		return "Name : " + this.name + " and age : " + this.age;
};

function Employee(name, age, salary){
	Person.call(this, name, age);
	this.salary = salary;
}

Employee.prototype = new Person();

Employee.prototype.getInfo = function(){
		return "Name : " + this.name + ", age : " + this.age + " and salary : " + this.salary;
};

function showInfo(o){
	 return o.getInfo();
}

var p1 = new Person("jack", 22);
var e1 = new Employee("jabbar", 26, 30000);
console.log(showInfo(p1));
console.log(showInfo(e1));

e1.setAge(24);
console.log(showInfo(e1));
console.log("Employee age next year: ", e1.growAge());
console.log(showInfo(e1));