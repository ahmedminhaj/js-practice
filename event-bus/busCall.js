import {EventBus as bus} from './eventBus.js';

function test(){

	var bus = new EventBus();
	var student1 = "jack";
	var student2 = "trupm";
	//add subscriber to event
	bus.addSubscriber("student1", function(data){
		console.log("subscriber1 watch student1 -> " + data);
	});

	bus.addSubscriber("student2", function(data){
		console.log("subscriber2 watch student2 -> " + data);
	});

	bus.addSubscriber("student2", function(data){
		console.log("subscriber1 watch student2 -> " + data);
	});

	bus.addSubscriber("student1", function(data){
		console.log("subscriber2 watch student1 -> " + data);
	});
	
	console.log("Subscriber List::");
	
	bus.publish("student1", student1);
	bus.publish("student2", student2);

	bus.removeSubscriber("student1", function(data){
		console.log("student1 remove subscribers "+data);
	});
	
	console.log("Subscriber List After Student1 Unsubscribe::");
	
	student2 = "donald trupm";
	bus.publish("student1", student1);
	bus.publish("student2", student2);
}

test();