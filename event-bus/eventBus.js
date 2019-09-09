
function EventBus() {
	var eventTopics = {};
	//subscribe
	this.addSubscriber = function(eventName, subscriber) {
		if (!eventTopics[eventName] || eventTopics[eventName].length < 1) {
		eventTopics[eventName] = [];
		}
		eventTopics[eventName].push(subscriber);
	};
	//publisher
	this.publish = function(eventName, data) {
		if (!eventTopics[eventName] || eventTopics[eventName].length < 1)
		return;
		eventTopics[eventName].forEach(function(subscriber) {
		subscriber(!!data ? data : {});
		});
	};
	//unsubscribe
	this.removeSubscriber = function(eventName, subscriber) {
		if (!eventTopics[eventName] || eventTopics[eventName].length < 1)
		return;
		delete eventTopics[eventName];
	};
} 

function test(){

	var bus = new EventBus();
	var student1 = "jack";
	var student2 = "trupm";
	//add subscriber to event
	bus.addSubscriber("student1", function(data){
		console.log("subscriber1 watch student1 -> " + data);
	});

	bus.addSubscriber("student1", function(data){
		console.log("subscriber2 watch student1 -> " + data);
	});

	bus.addSubscriber("student2", function(data){
		console.log("subscriber1 watch student2 -> " + data);
	});

	bus.addSubscriber("student2", function(data){
		console.log("subscriber2 watch student2 -> " + data);
	});
	
	bus.addSubscriber("student2", function(data){
		console.log("subscriber3 watch student2 -> " + data);
	});
	
	console.log(" Subscriber List ::");
	
	bus.publish("student1", student1);
	bus.publish("student2", student2);

	// bus.removeSubscriber("student1", function(data){
		// console.log("student1 remove subscribers "+data);
	// });
	
	console.log(" Updated Subscriber List ::");
	
	student2 = "donald trupm";
	bus.publish("student1", student1);
	bus.publish("student2", student2);
}

test();