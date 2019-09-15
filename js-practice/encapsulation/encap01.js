function Hedgenhog(){
	let speed = 1000;
	this.name = 'Sonic';
	this.zoom = function(){
		console.log( this.name + " zooms with the speed " + speed);
	}
}
const sonic = new Hedgenhog();
console.log(sonic.name);
console.log(sonic.zoom());
