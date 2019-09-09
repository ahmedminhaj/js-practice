const someFunct = (d) => {console.log('i am a function with data', d)}
const someOtherFunct = (d) => {console.log('i am a function with other data', d)}
const anotherFunct = (d) => {console.log('i am a function with new data', d)}

const arrayOfFunctions = [someFunct, someOtherFunct, anotherFunct];

const data = "some data";
const data1 = "new data";

arrayOfFunctions.forEach(fun => fun(data));
arrayOfFunctions.forEach(fun => fun(data1));