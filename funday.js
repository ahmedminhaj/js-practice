for (var year = 2019; year <= 2049; year++){
	var d = new Date(year, 0, 3);
	if ( d.getDay() === 5)
		console.log(year+" start with Friday");
}