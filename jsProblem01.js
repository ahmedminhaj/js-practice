var people = [
    {
        "name": "Jack",
        "age": 30
    },
    {
        "name": "Trump",
        "age": 35
    },
    {
        "name": "Smith",
        "age": 25
    },
    {
        "name": "Trump",
        "age": 35
    },
    {
        "name": "Bill",
        "age": 45
    },
    {
        "name": "Hilary",
        "age": 27
    },
    {
        "name": "Smith",
        "age": 25
    }
];

for(var i = 0; i < people.length; i++){
	for(var j = i+1; j < people.length; j++){
		if( people[i].name == people[j].name)
			people.splice(i,i);
	}
}

for(var i = 0; i < people.length; i++){
	for(var j = i+1; j < people.length; j++){
		if( people[i].age < people[j].age)
			[people[i],people[j]]=[people[j],people[i]];
	}
}

console.log(people);