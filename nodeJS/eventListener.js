var eventF = require('events');
var eventFemitter = new eventF.EventEmitter();

var listenerF = function listener1(){
	console.log('listenerF executed.');
}

var listenerS = function listener2(){
	console.log('listenerS executed.');
}

eventFemitter.addListener('connection', listenerF);
eventFemitter.on('connection', listenerS);

var eventFlisteners = require('events').EventEmitter.listenerCount(eventFemitter, 'connection');
console.log(eventFlisteners + ' Listner listening to connection event');

eventFemitter.emit('connection');

eventFemitter.removeListener('connection', listenerF);

console.log('ListnerF will not listen now.');

eventFemitter.emit('connection');

eventFlisteners = require('events').EventEmitter.listenerCount(eventFemitter, 'connection');
console.log(eventFlisteners + ' Listner listening to connection event');

console.log('Program end.');