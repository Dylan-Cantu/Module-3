const name = "Dylan";

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
console.log("3.4 Assignment: Functions and Parameters");
console.log("The top funtion is toUpper, The funtion below is adder ");
}
toUpper(name);

function adder(num1, num2, num3, num4) {
    console.log(num1 + num2)
    console.log(num3 + num4)
}
adder(1,6,9,8);

const logger = () => {

console.log("This is the modern way to use a function");
console.log("You use = () => {}");
}

logger();

console.log("About me"); const person = { name: 'Dylan Cantu', age: 20, occupation: 'Student' };
console.log(person);

const str = "This is my logger"; console.log(str.replace("logger", "method"));