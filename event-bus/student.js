var students = [
    {
        Name: "Jack",
        ID: 2018001,
		Roll: 09
    },
    {
        Name: "Trump",
        ID: 2017005,
		Roll: 03
    },
    {
        Name: "Smith",
        ID: 2019007,
		Roll: 02
    },
    {
        Name: "Bill",
        ID: 2018013,
		Roll: 07
    },
    {
        Name: "Hilary",
        ID: 2019003,
		Roll: 05
    }
];

function sort(){
	for(var i = 0; i < students.length; i++){
		for(var j = i+1; j < students.length; j++){
			if( students[i].Roll > students[j].Roll)
				[students[i],students[j]]=[students[j],students[i]];
		}
	}
}

sort();
console.log("Student List");
console.log(students);

students[2].Name="Willy";
students[3].Roll=10;
console.log("Updated Student List");
sort();
console.log(students);