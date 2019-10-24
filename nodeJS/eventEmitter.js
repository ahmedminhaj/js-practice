var event1 = require('events');

var event1emitter = new event1.EventEmitter();

var connectHandler = function connected(){
	console.log('connection succesful');
	event1emitter.emit('data_received');
}

event1emitter.on('connection', connectHandler);

event1emitter.on('data_received', function(){
	console.log('data received succesfully.');
});

event1emitter.emit('connection');

console.log("program ended.");