/* Objects */

const user = {
  name: "Alice",
  age: 30,
  isMember: true,
};

console.log(user);

/* object with methods and this keyword */
const product = {
  id: 101,
  name: "Laptop",
  price: 999.99,
  inStock: true,
  greet() {
    console.log(`Welcome to the product page for ${this.name}`);
  }
};

// aray of strings //
const colors = ["red", "green", "blue", "yellow"];

colors.push("purple");

colors.sort();

console.log("First color:", colors[0]);

indexNumber = colors.findIndex((color) => {
  return color === "blue"}
);

indexNumberN = colors.findIndex((color) => color === "green");

colors.map((color) => color + " color");

console.log("Mapped colors:", colors.map((color) => color + " color"));

console.log("Index of blue:", indexNumber);

// array of objects //
const products = [
  { id: 1, name: "Phone", price: 699.99 },
  { id: 2, name: "Tablet", price: 399.99 },
  { id: 3, name: "Monitor", price: 199.99 },
];

// transform array of numbers into array of objects
// return inside map a new object with val property set to the number
function transformToObjects(numberArray) {
  return numberArray.map((num) => { return {val: num}});
};

console.log(transformToObjects([1,2,3]));

