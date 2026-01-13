// control structures in JavaScript

const password = "Hesllo";

if (password === "hello") {
    console.log("Hello Works!")
}
else if (password === "Hello") {
    console.log("Hello works! Again!")
}
else {
    console.log("something fucked up!")
};

const hobbies = ['sports', "music"];

for (const hobby of hobbies) {
    console.log(hobby)
}