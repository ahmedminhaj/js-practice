let name = "Jack";
name ="Jacky";
console.log(name);

//can't reassign the value of a const variable 
const person = "Rocky";
//person = "rock";
console.log(person);

const func = fullname =>{
	return "HI " + fullname;
}
 const func2 = fistname => fistname + " the boss.";
console.log(func(name));
console.log(func2(person));

const ary = ["tom", "goon", 20, 40];
let arr = ary.map(item => item);
console.log(arr);

const profile = {
	Fname: 'trump',
	Lname: 'talikdar',
	age: 26
}
let{Fname:fullname, Lname, age}= profile;
console.log(fullname);
console.log(profile);