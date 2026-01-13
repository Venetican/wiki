/* functions */

function greet() {
    console.log("Hello, welcome!AAAAA");
}
greet();

function greatAdvanced(userName, message) {
    console.log(`Hello ${userName}, ${message}`);
}

let userName = "Daniel";
let message = "have a great day!";

greatAdvanced(userName, message);

function sum(a, b) {
    return a + b;
}

let result = sum(5, 10);
console.log("Sum is:", result);

() => {
    console.log("This is an arrow function!");
};

