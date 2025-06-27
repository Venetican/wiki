# General Information about JavaScript

This document provides an overview of JavaScript, covering its features, common use cases, and comparisons with other popular languages such as Java and Python.

---

## What is JavaScript?

- **Definition**:  
  JavaScript is a high-level, dynamic, and interpreted programming language primarily used to create interactive effects within web browsers.

- **Evolution**:  
  Originally designed for client-side scripting, JavaScript has grown to support server-side development (via Node.js), mobile applications, and even desktop applications.

- **Core Philosophy**:  
  JavaScript emphasizes flexibility, rapid development, and ease of use, making it one of the most widely adopted languages in modern web development.

---

## Key Features of JavaScript

- **Dynamic Typing**:  
  Variables are not bound to a specific type, which allows for flexible coding but requires careful handling of data.

- **First-Class Functions**:  
  Functions are treated as values. They can be assigned to variables, passed as arguments, and returned from other functions.

- **Event-Driven Programming**:  
  JavaScript is well-suited for handling events (such as user interactions) that are essential for creating interactive web experiences.

- **Prototype-Based Inheritance**:  
  Instead of classical inheritance (found in languages like Java), JavaScript uses prototypes to enable inheritance, offering a unique approach to object-oriented programming.

- **Interpreted Language**:  
  JavaScript code is executed directly by the JavaScript engine in browsers or runtime environments, eliminating the need for a separate compilation step.

---

## Use Cases for JavaScript

- **Client-Side Development**:  
  Enhances web pages with interactivity, animations, and dynamic content.

- **Server-Side Development**:  
  With Node.js, JavaScript is used to build scalable, high-performance network applications.

- **Mobile and Desktop Applications**:  
  Frameworks such as React Native and Electron enable the development of mobile apps and cross-platform desktop applications using JavaScript.

- **Web APIs and Single-Page Applications (SPAs)**:  
  Frequently used in conjunction with modern frameworks (like React, Angular, or Vue) to build responsive, interactive web interfaces.

---

## JavaScript vs. Java

- **Syntax Similarities**:  
  Both languages use a C-like syntax, which can sometimes cause confusion.

- **Key Differences**:
  - **Typing**:  
    - *Java*: Statically typed.  
    - *JavaScript*: Dynamically typed.
  - **Compilation vs. Interpretation**:  
    - *Java*: Compiled into bytecode and run on the Java Virtual Machine (JVM).  
    - *JavaScript*: Interpreted at runtime by browsers or engines like Node.js.
  - **Primary Use Cases**:  
    - *Java*: Typically used for large-scale, enterprise-level applications.  
    - *JavaScript*: Dominates web development, both on the client and server side.

---

## JavaScript vs. Python

- **Similarities**:
  - Both are high-level, interpreted languages.
  - Support dynamic typing and rapid development.
  - Emphasize readability and simplicity.

- **Differences**:
  - **Syntax and Structure**:  
    - *Python* uses indentation to define code blocks, promoting readability.  
    - *JavaScript* relies on curly braces and semicolons.
  - **Execution Environment**:  
    - *JavaScript* is inherently tied to the web browser environment and event-driven programming.  
    - *Python* is more versatile in areas like data science, machine learning, scripting, and automation.
  - **Ecosystem Focus**:  
    - *JavaScript* has a vast ecosystem centered on web development.  
    - *Python's* ecosystem is strong in scientific computing, AI, and backend development.

---

## Example Code Snippet

```javascript
// Example: A simple JavaScript function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("World")); // Outputs: Hello, World!
```
---

## Conclusion

- **Versatility**:  
  JavaScript is a versatile language that has evolved well beyond its original role in web browsers. It plays a crucial role in modern web development across various platforms.

- **Learning Curve**:  
  Understanding JavaScript's dynamic typing, event-driven model, and prototype-based inheritance is essential for any aspiring developer.

- **Comparative Perspective**:  
  While JavaScript shares some syntactic similarities with Java and conceptual similarities with Python, each language has its unique strengths and ideal use cases. This makes them suitable for different types of projects and development environments.

# Browser Console & Developer Tools Overview

This video provides an introduction to browser developer tools, focusing on the console, its capabilities, and how it can be used during development.

---

## 1. Developer Tools in the Browser

- **Definition**: Tools built into every modern browser (e.g., Chrome, Firefox) to help developers debug and inspect web pages.
- **Access Methods**:
  - **Chrome**: 
    - Via Menu: More Tools → Developer Tools.
    - Keyboard shortcuts: 
      - Windows: F12 or Ctrl+Shift+I.
      - Mac: Command + Option + I.
  - **Direct Console Access**:
    - Windows: Ctrl + Alt + J.
    - Mac: Command + Option + J.

---

## 2. Tabs in Developer Tools

- **Elements Tab**:
  - Inspect and modify HTML and CSS.
  - Changes are temporary (reset on reload).
- **Console Tab**:
  - Displays JavaScript warnings and errors.
  - Allows logging and direct execution of JavaScript code.

---

## 3. Working with the Console

### Logging and Testing Code
- **Logging Output**:
  - Use `console.log()` to output values to the console.
  - Useful for debugging variables, functions, and expressions.

- **Examples**:

```javascript
// Log a number
console.log(100);

// Log a string (ensure quotes are used)
console.log("Hello world");

// Log multiple values (number, string, Boolean)
console.log(20, "Hello", true);

// Log a variable
let x = 100;
console.log(x); // Outputs 100
```
### Evaluating Expressions
- Typing expressions like `1 + 1` directly in the console returns the result (e.g., 2).
- JavaScript expressions or functions (like `alert("1")`) can be executed directly.

---

## 4. Handling Errors and Warnings

- **Reference Errors**: 
  - If a variable (e.g., `A`) is not defined, the console shows a reference error with details like the file and line number.
  
- **Console Methods**:
  - `console.error()`: Displays errors with a red background.
  - `console.warn()`: Displays warnings with a yellow background.

---

## 5. Advanced Console Methods

### Displaying Data in Table Format
- **Console.table()**:
  - Useful for displaying objects or arrays in a table layout.
  
```javascript
// Example object
console.table({
  name: "Brad",
  email: "Brad@gmail.com"
});
```
### Grouping Console Messages
- **Console.group() & console.groupEnd()**:
  - Organize related log messages into collapsible groups.
  
```javascript
console.group("Simple Group");
console.log("Alert");
console.warn("Warning");
console.log("Log");
console.groupEnd();
```
### Styling Console Output
- **Adding CSS Styles**:
  - Define a CSS style string and apply it using `%c` in the console log.
  
```javascript
let styles = "padding: 10px; background-color: white; color: green;";
console.log("%cHello World", styles);
```
---

## 6. Code Snippets and Shortcuts

- **JavaScript ES6 Code Snippets**:
  - Some code editors offer shortcuts like `CLG` which expands to `console.log()`.
  - Other snippets may exist for `try...catch`, if statements, etc.

- **Practical Usage**:
  - Most of the time, you'll primarily use `console.log()`.
  - Developer tools are for debugging and are not visible to end users.

---

## Summary

- **Developer Tools** are essential for web development.
- The **console** is a powerful tool for debugging JavaScript code.
- **Common methods** include logging (`console.log`), errors (`console.error`), warnings (`console.warn`), and displaying data in tables (`console.table`).
- **Advanced features** include grouping messages and styling console output for better clarity.

These notes capture the key points discussed in the video and serve as a quick reference for using the browser console and developer tools effectively.


# Commenting and Shortcuts in JavaScript

In this video, the focus is on commenting your code and learning useful keyboard shortcuts while coding.

---

## Commenting in JavaScript

- **Purpose of Comments**:
  - Document your code and explain what specific parts do.
  - Assist team members in understanding complex code.
  - Temporarily disable code without deleting it.
  - Serve as a to-do list for yourself or others.

- **Single-Line Comments**:
  - Use double forward slashes (`//`) to comment out a single line.
  - In many text editors (e.g., VS Code), pressing Command/Ctrl + `/` toggles a single-line comment.

```javascript
// This is a single-line comment.
```
- **Multi-Line Comments**:
  - Use the syntax `/*` to begin and `*/` to end a multi-line comment.

```javascript
/* 
   This is a multi-line comment.
   It spans multiple lines.
*/
```
---

## Keyboard Shortcuts

### Basic Navigation and Selection

- **Highlighting Code**:
  - Hold **Shift** and use the arrow keys (up, down, left, right) to highlight code.

- **Line Navigation**:
  - **Jump to End/Beginning of a Line**:
    - Hold **Command (Mac)** or **Control (Windows)** and press the **Right** or **Left** arrow.
  - **Navigate by Word**:
    - Hold **Option (Mac)** or **Alt (Windows)**  and press the arrow keys.

- **Multiple Selections**:
  - Highlight a word and press **Command/Ctrl + D** to select the next occurrence.
  - Press **Command/Ctrl + Shift + L** to select all occurrences.

### Moving and Duplicating Lines

- **Moving a Line**:
  - Hold **Option (Mac)** or **Alt (Windows)** and use the **Up** or **Down** arrow to move a line.
  
- **Duplicating a Line**:
  - Hold **Shift + Option (Mac)** or **Shift + Alt (Windows)** and press the **Down** arrow to duplicate a line.

### File and Search Shortcuts

- **Open File Navigation**:
  - **Command/Ctrl + Shift + O**: Search for a file (e.g., typing "index" to locate HTML files).
  
- **Search Within Files**:
  - **Command/Ctrl + Option + F**: Search within the current file.
  - **Command/Ctrl + Shift + F**: Search across all files in your project.

- **Sidebar and Terminal**:
  - **Command/Ctrl + B**: Toggle the sidebar.
  - **Control + ` (tilde)**: Toggle the integrated terminal.

---

## Practical Tips

- **Practice**:  
  Use these shortcuts repeatedly so they become second nature.
  
- **Incremental Learning**:  
  Start by mastering a few shortcuts and gradually add more as you become comfortable.

- **Efficiency**:  
  The more you use these shortcuts, the faster you'll navigate and edit your code, boosting your overall productivity.

---

## Conclusion

- **Commenting** is essential for maintaining readable and maintainable code, especially when collaborating with other developers.
- **Keyboard Shortcuts** can significantly improve your coding speed and efficiency.
- Incorporate these practices into your workflow gradually, and soon they will become an integral part of your coding process.

# Variables and Variable Declarations in JavaScript

In this video, the focus is on variables and variable declarations. Variables are containers for pieces of data that can be of many different types. Understanding data types in JavaScript is important and will be covered in a future video.

---

## Variable Declaration Keywords

There are three ways to declare a variable in JavaScript:

- **var**  
  - The original way to declare variables.
  - Less commonly used today due to issues with scope.
- **let**  
  - Introduced in ES6 (2015) to improve scoping.
  - Preferred for variables that might be reassigned.
- **const**  
  - Also introduced in ES6.
  - Used for constants, i.e., values that should not be reassigned.

> **Note:**  
> Although `var` and `let` behave similarly in the global scope, `const` is different because it is meant for values that won’t change.

---

## Global Scope

- Code written directly in a file (not inside a function or block) is in the global scope.
- In the global scope, `var` and `let` work in a similar way, while `const` is for constants.

---

## Examples of Variable Declarations

### Declaring String Variables

```javascript
// Creating string variables using let
let firstName = "John"; // Notice the capital "J" and the capital "N" in the second word
let lastName = "DOE";

// Logging multiple variables to output "John DOE"
console.log(firstName, lastName);
```
### Declaring a Number Variable

```javascript
// Declaring a number variable using let
let age = 30;
console.log(age);
```
> **Hoisting Reminder:**  
> Accessing a variable declared with `let` before initialization will throw an error. With `var`, it would be `undefined` due to hoisting.

---

## Naming Conventions

- **Allowed Characters:** Letters, numbers, underscores (_), and dollar signs ($).
- **Restrictions:**  
  - Variable names cannot start with a number.
  - Special characters like `+` or `*` are not allowed.
- **Styles:**  
  - **Camel Case:**  
    - Example: `firstName`, `lastName`
  - **Underscore Separation:**  
    - Example: `first_name` (common in some languages like PHP)
  - **Pascal Case:**  
    - Used for component names or class names (e.g., in React, `ComponentName`)
- **Readability:**  
  - Avoid using all lowercase for multiple words, as it reduces readability.

---

## Reassigning Variables

### Using `let`

- **Reassigning a Value:**  
  Variables declared with `let` can be reassigned.

```javascript
let age = 30;
age = 31; // For example, after a birthday
console.log(age); // Outputs: 31

- **Declaration Without Initialization:**  
  You can declare a variable and assign a value later.

javascript
let score;
score = 1;
console.log(score); // Outputs: 1

// Using an if-statement to modify the score
if (true) {
  score = score + 1;
}
console.log(score); // Outputs: 2
```
### Using `const`

- **Reassignment Error:**  
  Variables declared with `const` cannot be reassigned.

```javascript
const x = 100;
// x = 200; // This will throw an error: "Assignment to constant variable"

// Also, const declarations must be initialized immediately
// const score; // Error: Missing initializer
```
---

## Working with Arrays and Objects Using `const`

Even though `const` prevents direct reassignment, you can still modify the contents of arrays and objects.

### Arrays

```javascript
const array = [1, 2, 3, 4];
// Direct reassignment is not allowed:
// array = [1, 2, 3, 4, 5]; // Error

// Modify the array using methods:
array.push(5);
console.log(array); // Outputs: [1, 2, 3, 4, 5]
```
### Objects

```javascript
const person = {
  name: "Brad"
};
// Direct reassignment is not allowed:
// person = { name: "John" }; // Error

// Modify properties of the object:
person.name = "John";
person.email = "Brad@gmail.com";
console.log(person); // Outputs: { name: "John", email: "Brad@gmail.com" }
```
---

## Preference: `const` vs `let` vs `var`

- **Best Practice:**  
  Use `const` by default unless you know the variable's value will change (e.g., a score in a game).
- **For Non-Primitive Values:**  
  When working with arrays or objects, `const` is preferred since you often modify the internal state rather than reassign the variable.

---

## Declaring Multiple Variables

You can declare multiple variables in one statement.

```javascript
// Declaring multiple variables with let (without initialization)
let A, B, C;

// Declaring multiple variables with const (requires initialization)
const D = 10, E = 20, F = 30;
console.log(D); // Outputs: 10
```
> **Note:**  
> Variables declared without assignment will have the value `undefined`.

---

## Conclusion

- **Summary:**  
  - Understand the differences between `var`, `let`, and `const`.
  - Follow proper naming conventions and initialize variables before use.
  - Use `let` for variables that need to be reassigned and `const` for constants.
  - For arrays and objects, even though they are declared with `const`, you can modify their contents.

# Understanding Scope in JavaScript

Scope refers to the area of code where a variable or function is accessible. In JavaScript, there are mainly two types of scope:

---

## Function Scope

- **Definition:**  
  Variables declared using `var` are accessible throughout the entire function in which they are defined, regardless of the block they are in.

- **Implication:**  
  This behavior can lead to unexpected results when variables are used outside of their original context.

---

## Block Scope

- **Definition:**  
  Variables declared using `let` and `const` are limited to the block of code (the portion enclosed in curly braces `{}` such as within an `if` statement, loop, or function) in which they are declared.

- **Implication:**  
  This provides more precise control over where a variable is valid and helps prevent errors caused by overwriting values outside of the intended scope.

---

## Scope Comparison Table

| Keyword | Scope                                           | Reassignable                                           | Redeclarable                              | Hoisting                                               |
|---------|-------------------------------------------------|--------------------------------------------------------|-------------------------------------------|--------------------------------------------------------|
| **var** | Function scope (accessible throughout the function) | Yes, the value can be changed                          | Yes                                       | Yes (declaration is "lifted" to the top of the function)|
| **let** | Block scope (accessible only within the block)       | Yes, but only within the block                         | No                                        | Limited; not accessible before declaration             |
| **const** | Block scope (accessible only within the block)       | No, the reference is immutable (internal content can be changed for objects/arrays) | No                                        | Limited; similar to `let`                                |

---

This structure allows developers to better control where variables are used, reducing the likelihood of errors due to unintentional data overwriting.


# Code Examples Demonstrating Scope, Hoisting, and Variable Behavior

Below are some code examples that illustrate the differences between `var`, `let`, and `const` in terms of scope, hoisting, and reassignment.

---

### Example 1: Function Scope with `var`

```javascript
function testVar() {
  if (true) {
    var x = "Hello from var";
  }
  // 'x' is accessible anywhere inside the function, even outside the if-block
  console.log(x); // Outputs: Hello from var
}
testVar();
```
---

### Example 2: Block Scope with `let`

```javascript
function testLet() {
  if (true) {
    let y = "Hello from let";
    console.log(y); // Outputs: Hello from let
  }
  // 'y' is not accessible outside the if-block; the following line would cause an error:
  // console.log(y); // Uncaught ReferenceError: y is not defined
}
testLet();
```
---

### Example 3: Block Scope with `const`

```javascript
function testConst() {
  if (true) {
    const z = "Hello from const";
    console.log(z); // Outputs: Hello from const
  }
  // 'z' is not accessible outside the if-block; the following line would cause an error:
  // console.log(z); // Uncaught ReferenceError: z is not defined
}
testConst();
```
---

### Example 4: Hoisting Differences

```javascript
// Using 'var': declaration is hoisted, so 'aVar' exists but is undefined until assigned.
console.log(aVar); // Outputs: undefined
var aVar = "I am var";

// Using 'let': not accessible before its declaration; uncommenting the following line would cause an error.
// console.log(aLet); // Uncaught ReferenceError: Cannot access 'aLet' before initialization
let aLet = "I am let";
```
---

### Example 5: Reassignment and Redeclaration
```javascript
// 'var' allows reassignment and redeclaration.
var message = "Initial var message";
var message = "Redeclared var message";
message = "Reassigned var message";
console.log(message); // Outputs: Reassigned var message

// 'let' allows reassignment but not redeclaration within the same scope.
let note = "Initial let note";
// let note = "Redeclared let note"; // This line would cause an error.
note = "Reassigned let note";
console.log(note); // Outputs: Reassigned let note

// 'const' does not allow reassignment or redeclaration.
const fixedValue = "Constant value";
// fixedValue = "New value"; // Error: Assignment to constant variable.
// const fixedValue = "Redeclared constant"; // Error: Identifier 'fixedValue' has already been declared.
console.log(fixedValue); // Outputs: Constant value

// For objects and arrays declared with 'const', the variable binding cannot change,
// but the internal contents can be modified.
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Outputs: [1, 2, 3, 4]

const person = { name: "Alice" };
person.name = "Bob";
console.log(person); // Outputs: { name: "Bob" }
```


# Data Types in JavaScript

When dealing with code in any language, the data you work with is associated with a specific data type. In JavaScript, data types fall into two main categories:

1. **Primitive Data Types**
2. **Reference Types (Objects)**

---

## Primitive Data Types

Primitive types are the most basic data types in JavaScript. They are stored directly in the variable and are immutable. The primitive data types include:

- **String:**  
  A sequence of characters enclosed in single quotes ('...'), double quotes ("..."), or backticks (`` `...` ``).

- **Number:**  
  Represents both integers and floating-point numbers. There is no separate type for floats; all numeric values are of type `number`.

- **Boolean:**  
  Represents a logical entity that can be either `true` or `false`.

- **Null:**  
  Represents the intentional absence of any object value. It is explicitly assigned and indicates an empty value.

- **Undefined:**  
  Indicates that a variable has been declared but has not been assigned a value. Unlike `null`, this is not intentional.

- **Symbol (introduced in ES6):**  
  A unique and immutable value that can be used as an identifier for object properties.

- **BigInt:**  
  Represents integers that are too large for the `number` type.

---

## Reference Types (Objects)

Reference types are non-primitive. When you assign a reference type to a variable, the variable holds a reference to the actual data. Common reference types include:

- **Objects:**  
  Collections of key-value pairs.

- **Arrays:**  
  Ordered lists of values (a specialized form of object).

- **Functions:**  
  Functions are also objects and can be stored in variables, passed as arguments, etc.

---

## Dynamic vs. Static Typing

- **Dynamic Typing:**  
  JavaScript is dynamically typed, meaning you do not need to explicitly declare the type of a variable; the type is determined at runtime.

- **Static Typing:**  
  In contrast, languages like C, C++, or Java require explicit type declarations. TypeScript, a superset of JavaScript, adds static typing along with other features.

---

## Code Examples

### Primitive Data Types

```javascript
// String example
const firstName = "Sarah";
console.log(firstName, typeof firstName);  // Outputs: Sarah "string"

// Number examples
const age = 30;
console.log(age, typeof age);  // Outputs: 30 "number"

const temp = 98.9;
console.log(temp, typeof temp);  // Outputs: 98.9 "number"

// Boolean example
const hasKids = true;
console.log(hasKids, typeof hasKids);  // Outputs: true "boolean"

// Null example
const apartmentNumber = null;
console.log(apartmentNumber, typeof apartmentNumber);  
// Outputs: null "object" (Note: This is a historical bug in JavaScript)

// Undefined example
let score;
console.log(score, typeof score);  // Outputs: undefined "undefined"

// Symbol example
const id = Symbol("ID");
console.log(id, typeof id);  // Outputs: Symbol(ID) "symbol"

// BigInt example
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber, typeof bigNumber);  // Outputs: BigInt value "bigint"
```
---

### Reference Types

```javascript
// Array example
const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers);  // Outputs: [1, 2, 3, 4] "object"

// Object literal example
const person = { name: "Brad" };
console.log(person, typeof person);  // Outputs: { name: "Brad" } "object"

// Function example
function sayHello() {
  console.log("Hello");
}
console.log(sayHello, typeof sayHello);  // Outputs: function sayHello() { ... } "function"
```
---

## Summary

- **Primitive Types:** Strings, numbers, booleans, null, undefined, symbols, and BigInt. They are stored directly and are immutable.
- **Reference Types:** Objects, arrays, and functions. Variables hold a reference to the data.
- **Dynamic Typing:** JavaScript automatically determines variable types at runtime.
- **Static Typing Option:** TypeScript adds static typing to JavaScript for enhanced code safety.

In the next lesson, we will explore how these types are stored in memory and the differences in how primitive and reference types are accessed.

# How Primitive and Reference Data Is Stored in Memory

In this video, we explore how JavaScript stores data in memory. This topic can be a bit confusing for beginners, so don't worry if you don't fully absorb everything right away—you can always revisit it later. Understanding these concepts gives you a bigger picture of not only how to write JavaScript syntax, but also how JavaScript actually works behind the scenes.

---

## Memory Storage: Stack vs. Heap

- **Primitive Data Types**  
  Primitive values (such as strings, numbers, booleans, null, undefined, symbols, and BigInt) are stored in an area of memory called the **stack**. This means that when you assign a primitive value to a variable, the actual value is stored directly on the stack.

- **Reference Types**  
  Reference types (such as arrays, objects, and functions) are stored in an area of memory called the **heap**. When you assign a reference type to a variable, the variable stores a reference (or pointer) to the location in the heap where the data is kept.

---

## Visualizing Data Storage

Imagine you create a few variables:

- A variable `name` is assigned the string `"John"` (a primitive).
- A variable `age` is assigned the number `30` (a primitive).

Both of these values are stored on the **stack**.

Now, consider an object:
- A variable `person` is assigned an object (a reference type).  
  Although the variable `person` is stored on the stack, it holds a reference that points to the actual object data in the **heap**.

If you then create a new variable, say `newName`, and set it equal to `name`, the value `"John"` is copied on the stack. Reassigning `newName` (for example, to `"Jonathan"`) will change only `newName` while `name` remains `"John"`.

On the other hand, if you create a new variable `newPerson` and set it equal to `person`, both variables point to the same object in the heap. Changing a property (like updating `newPerson.name` to `"Bradley"`) will affect the object referenced by both `person` and `newPerson`.

---

## Code Examples

```javascript
// Primitive values are stored on the stack:
const name = "John";
const age = 30;  
// 'name' and 'age' are stored directly in the stack memory

// Reference value stored on the heap:
const person = {
  name: "Brad",
  age: 40
};
// 'person' is stored on the stack as a reference, but its object data lives in the heap

// Copying a primitive value:
let newName = name;  // newName is now "John"
console.log(name, newName);  // Outputs: John John
newName = "Jonathan";  // Reassign newName to a new primitive value
console.log(name, newName);  // Outputs: John Jonathan
// Notice: The original 'name' variable remains unchanged

// Copying a reference value:
let newPerson = person;  // newPerson points to the same object as person
console.log(person, newPerson);  
// Both output: { name: "Brad", age: 40 }
newPerson.name = "Bradley";  // Change the name property via newPerson
console.log(person.name, newPerson.name);  
// Outputs: Bradley Bradley
// The change affects both variables because they reference the same object in the heap
```
---

## Summary

- **Primitive Types:**  
  Values like strings and numbers are stored on the stack. Reassigning a copied primitive does not affect the original.

- **Reference Types:**  
  Objects, arrays, and functions are stored in the heap. Variables hold references to these objects. Changing the object via one reference affects all references to it.

# Type Conversion in JavaScript

In this video, we discuss type conversion—also known as type casting—which is the process of explicitly converting a value from one type to another. For example, you might have a string value "100" that you want to convert to the number 100 so that you can perform arithmetic operations on it.

There’s also type coercion, where JavaScript implicitly changes types without you explicitly doing so. In this lesson, we focus on explicit conversion.

---

## Converting a String to a Number

Sometimes data (such as form inputs) comes as a string, but you need to work with it as a number. There are several ways to perform this conversion:

### 1. Using `parseInt`

```javascript
    let amount = "100";
    console.log(amount, typeof amount);  // Outputs: "100" "string"
    
    amount = parseInt(amount);
    console.log(amount, typeof amount);  // Outputs: 100 "number"
```
### 2. Using the Unary Plus Operator

```javascript
    amount = "100";
    amount = +amount;
    console.log(amount, typeof amount);  // Outputs: 100 "number"
```
### 3. Using the `Number` Constructor

```javascript
    amount = "100";
    amount = Number(amount);
    console.log(amount, typeof amount);  // Outputs: 100 "number"
```
For decimal numbers, use `parseFloat` instead of `parseInt`:

```javascript
    let decimalAmount = "99.5";
    decimalAmount = parseFloat(decimalAmount);
    console.log(decimalAmount, typeof decimalAmount);  // Outputs: 99.5 "number"
```
*Note:* Using `parseInt` on a decimal string will truncate the decimal part (e.g., "99.5" becomes 99).

---

## Converting a Number to a String

There are a couple of ways to convert a number to a string:

### 1. Using the `toString()` Method

```javascript
    let num = 100;
    console.log(num, typeof num);  // Outputs: 100 "number"
    
    num = num.toString();
    console.log(num, typeof num);  // Outputs: "100" "string"
```
### 2. Using the `String` Constructor

```javascript
    num = 100;
    num = String(num);
    console.log(num, typeof num);  // Outputs: "100" "string"
```
*Note:* When you call `toString()` on a primitive (like a number), JavaScript creates a temporary wrapper object to allow access to the method.

---

## Converting to a Boolean

You can convert values to booleans using the `Boolean` constructor. JavaScript treats certain values as "truthy" or "falsy".

### Example with a Truthy Value

```javascript
    let value = 1;  // 1 is truthy
    value = Boolean(value);
    console.log(value, typeof value);  // Outputs: true "boolean"
```
### Example with a Falsy Value

```javascript
    value = 0;  // 0 is falsy
    value = Boolean(value);
    console.log(value, typeof value);  // Outputs: false "boolean"
```
*Remember:* In JavaScript, 0 is falsy and any non-zero number is truthy.

---

## Handling Non-Numeric Strings: NaN

When attempting to convert a non-numeric string to a number, the result is `NaN` (Not a Number). Although `NaN` is of type "number", it indicates an invalid numerical value.

### Converting an Invalid String

```javascript
    let invalidNumber = "Hello";
    invalidNumber = parseInt(invalidNumber);
    console.log(invalidNumber, typeof invalidNumber);  // Outputs: NaN "number"
```
### Other Operations That Result in NaN

- **Mathematical Operations with No Valid Result**

```javascript
    console.log(Math.sqrt(-1));  // Outputs: NaN
```
- **Operations Involving NaN**

```javascript
    console.log(1 + NaN);  // Outputs: NaN
```
- **Operations Involving Undefined or Incompatible Types**

```javascript
    console.log(undefined + undefined);  // Outputs: NaN
    console.log("foo" / 3);  // Outputs: NaN
```
`NaN` is a special property of the global object and is non-writable. There are several operations in JavaScript that can yield `NaN`.

---

## Summary

- **Type Conversion:**  
  Explicitly convert values from one type to another using functions such as `parseInt`, `parseFloat`, the unary plus operator, `Number()`, `toString()`, or `String()`.

- **Decimals:**  
  Use `parseFloat` when converting decimal strings to numbers to avoid truncation.

- **Boolean Conversion:**  
  Convert values to booleans with `Boolean()`, where 0 converts to `false` and non-zero numbers convert to `true`.

- **NaN:**  
  When conversion fails (e.g., converting a non-numeric string to a number), the result is `NaN`, which stands for "Not a Number" even though its type is "number".

# Operators in JavaScript

Operators are symbols that perform certain operations in expressions. In this lesson, we'll cover several categories of operators: arithmetic operators, assignment operators, and comparison operators.

---

## Arithmetic Operators

Arithmetic operators perform mathematical operations. Here are some examples:

```javascript
    // Addition
    let x = 5 + 5;
    console.log(x);  // Outputs: 10

    // Subtraction
    x = 5 - 5;
    console.log(x);  // Outputs: 0

    // Multiplication
    x = 5 * 5;
    console.log(x);  // Outputs: 25

    // Division
    x = 5 / 5;
    console.log(x);  // Outputs: 1

    // Modulus (remainder)
    x = 5 % 5;
    console.log(x);  // Outputs: 0

    x = 7 % 5;
    console.log(x);  // Outputs: 2

    // Exponentiation
    x = 2 ** 3;
    console.log(x);  // Outputs: 8

    // Increment (two methods)
    x = 1;
    x = x + 1;  // Traditional way
    console.log(x);  // Outputs: 2

    // Or using the increment operator:
    x = 1;
    x++;  // Increments x by 1
    console.log(x);  // Outputs: 2

    // Decrement (two methods)
    x = 2;
    x = x - 1;  // Traditional way
    console.log(x);  // Outputs: 1

    // Or using the decrement operator:
    x = 2;
    x--;  // Decrements x by 1
    console.log(x);  // Outputs: 1
```
---

## Concatenation Operator

The plus sign (+) serves two purposes in JavaScript:
- **Arithmetic addition** when used with numbers.
- **String concatenation** when used with strings.

```javascript
    let greeting = "Hello" + " " + "world!";
    console.log(greeting);  // Outputs: Hello world!
```
*Tip:* To add a space between strings, you can include a space character (" ") as shown above.

---

## Assignment Operators

Assignment operators are used to assign values to variables. The simplest assignment operator is the equals sign (=). Additionally, you can combine arithmetic with assignment:

```javascript
    let x = 10;   // Basic assignment

    x += 5;       // Equivalent to: x = x + 5; x becomes 15
    console.log(x);

    x -= 5;       // Equivalent to: x = x - 5; x becomes 10
    console.log(x);

    x *= 5;       // Equivalent to: x = x * 5; x becomes 50
    console.log(x);

    x /= 5;       // Equivalent to: x = x / 5; x becomes 10
    console.log(x);

    x %= 5;       // Equivalent to: x = x % 5; x becomes 0
    console.log(x);

    x **= 2;      // Exponent assignment (x = x ** 2)
    console.log(x);
```
---

## Comparison Operators

Comparison operators are used to compare values. They return a Boolean value (true or false).

### Equality Operators

- **Double Equals (==):** Checks for equality after performing type coercion.
- **Triple Equals (===):** Checks for equality without type coercion (both value and type must be the same).

```javascript
    let x = 2;

    // Using double equals (allows type coercion)
    let isEqual = (x == 2);
    console.log(isEqual);  // Outputs: true

    isEqual = (x == "2");
    console.log(isEqual);  // Outputs: true

    // Using triple equals (strict equality)
    isEqual = (x === 2);
    console.log(isEqual);  // Outputs: true

    isEqual = (x === "2");
    console.log(isEqual);  // Outputs: false
```
*Note:* Many developers prefer using triple equals (===) to avoid unexpected type coercion.

### Not Equal Operators

- **Not Equal (!=):** Returns true if values are not equal (allows type coercion).
- **Strict Not Equal (!==):** Returns true if values or types are not equal.

```javascript
    x = 2;
    let notEqual = (x != 2);
    console.log(notEqual);  // Outputs: false

    notEqual = (x !== 2);
    console.log(notEqual);  // Outputs: false

    notEqual = (x !== "2");
    console.log(notEqual);  // Outputs: true
```
### Greater Than and Less Than Operators

These operators compare numeric values.

```javascript
    x = 10;
    console.log(x > 5);    // Outputs: true
    console.log(x < 5);    // Outputs: false
    console.log(x >= 10);  // Outputs: true
    console.log(x <= 9);   // Outputs: false
```
---

## Summary

- **Arithmetic Operators:**  
  Include addition (+), subtraction (-), multiplication (*), division (/), modulus (%), exponentiation (**), increment (++), and decrement (--).

- **Concatenation:**  
  The plus sign (+) concatenates strings when one or both operands are strings.

- **Assignment Operators:**  
  Use the equals sign (=) and combined operators like (+=, -=, *=, /=, %=, **=) to update variable values.

- **Comparison Operators:**  
  Use double equals (==) for equality with type coercion, triple equals (===) for strict equality, and their corresponding not equal versions (!= and !==) along with greater than (>), less than (<), and their inclusive forms (>=, <=).

These operators form the foundation for performing calculations, comparisons, and data manipulation in JavaScript. In the next video, we'll dive into type coercion, where JavaScript implicitly converts types.


```javascript
// Implicit Type Conversion (Coercion) Examples

// Example 1: Addition with a Number and a String
// The plus operator concatenates when one operand is a string.
let x = 5 + "5";
console.log(x);            // Outputs: "55"
console.log(typeof x);     // Outputs: "string"

// To perform arithmetic addition, explicitly convert the string to a number:
x = 5 + Number("5");
console.log(x);            // Outputs: 10
console.log(typeof x);     // Outputs: "number"

// Example 2: Multiplication with a Number and a String
// When using multiplication, JavaScript coerces the string to a number.
x = 5 * "5";
console.log(x);            // Outputs: 25
console.log(typeof x);     // Outputs: "number"

// Example 3: Addition with null
// null is coerced to 0 when used in arithmetic operations.
x = 5 + null;
console.log(x);            // Outputs: 5
console.log(typeof x);     // Outputs: "number"

// Using the Number constructor on null:
x = Number(null);
console.log(x);            // Outputs: 0

// Example 4: Boolean Conversion in Arithmetic
// true is coerced to 1 and false to 0.
x = 5 + true;
console.log(x);            // Outputs: 6

x = 5 + false;
console.log(x);            // Outputs: 5

// Example 5: Addition with undefined
// When undefined is involved in arithmetic, the result is NaN (Not a Number).
x = 5 + undefined;
console.log(x);            // Outputs: NaN
console.log(typeof x);     // Outputs: "number"
```


# Strings in JavaScript

In this video, we explore strings—their concatenation, template literals, and various methods available for manipulating them. Although strings are primitive types, JavaScript temporarily wraps them as objects so that we can use methods and properties on them.

---

## String Concatenation

We can build a sentence by concatenating strings and variables. For example:

```javascript
// Concatenation using the plus sign
let name = "John";
const age = 30;
let sentence = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(sentence);  
// Outputs: Hello, my name is John and I am 30 years old.
```
---

## Template Literals

Template literals (introduced in ES6) provide an easier and cleaner way to embed variables and expressions inside strings. They use backticks instead of quotes:

```javascript
// Using template literals for cleaner syntax
sentence = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(sentence);  
// Outputs: Hello, my name is John and I am 30 years old.

// You can embed any JavaScript expression inside ${...}
console.log(`1 + 1 equals ${1 + 1}`);  
// Outputs: 1 + 1 equals 2
```
---

## String Properties and Methods

Even though strings are primitive, JavaScript creates a temporary String object so that you can access properties and methods.

### Length Property

```javascript
const s = "Hello world";
let len = s.length;
console.log(len);  
// Outputs: 11
```
### Accessing Individual Characters

You can access characters by their index (starting at 0):

```javascript
console.log(s[0]);  // Outputs: H
console.log(s.charAt(1));  // Outputs: e
```
### Exploring the String Prototype

All string methods are stored on the String prototype. You can inspect it as follows:

```javascript
console.log(s.__proto__);  
// Outputs an object with methods like toUpperCase, toLowerCase, split, substring, etc.
```
### Changing Case

```javascript
console.log(s.toUpperCase());  // Outputs: HELLO WORLD
console.log(s.toLowerCase());  // Outputs: hello world
```
### Substring and Slice

Extract a portion of the string with substring:

```javascript
let part = s.substring(0, 4);
console.log(part);  
// Outputs: Hell (from index 0 up to, but not including, index 4)
```
Similarly, slice works almost the same way and supports negative indices:

```javascript
let sliced = s.slice(0, 5);
console.log(sliced);  
// Outputs: Hello

// Using negative indices with slice:
sliced = s.slice(-5);
console.log(sliced);  
// Outputs: world
```
### Trimming Whitespace

The trim() method removes whitespace from both ends of a string:

```javascript
let padded = "    Hello world    ";
console.log(padded.trim());  
// Outputs: Hello world
```
### Replacing Substrings

Use replace() to substitute part of a string with another:

```javascript
let newStr = s.replace("world", "John");
console.log(newStr);  
// Outputs: Hello John
```
### Checking for Substrings

The includes() method returns true if a substring is found:

```javascript
console.log(s.includes("Hello"));  // Outputs: true
console.log(s.includes("hellO"));  // Outputs: false (case-sensitive)
```
### Getting the Primitive Value

If you need the primitive string value from a String object, use valueOf():

```javascript
console.log(s.valueOf());  
// Outputs: Hello world
```
### Splitting a String

The split() method divides a string into an array based on a separator:

```javascript
let words = s.split(" ");
console.log(words);  
// Outputs: [ "Hello", "world" ]

// Splitting into individual characters:
let chars = s.split("");
console.log(chars);  
// Outputs: an array with each character as an element
```
---

## Summary

- **Concatenation vs. Template Literals:**  
  Concatenation with the plus sign can be verbose. Template literals offer a cleaner syntax with embedded expressions.

- **String Methods:**  
  Despite being primitive, strings can use methods (like toUpperCase, substring, trim, replace, split) because JavaScript wraps them in temporary objects.

- **Prototype:**  
  String methods reside on the String prototype, allowing you to manipulate strings in a variety of ways.

# Challenge: Capitalize the First Letter of a String

In this challenge, the goal is to take a string containing a single word (for example, "developer") and transform it so that the first letter is uppercase while the rest of the word remains unchanged. This is useful for formatting names or titles.

---

## Approach

To solve the challenge, follow these steps:

- **Access the First Character:**  
  Use either the `charAt(0)` method or bracket notation (`[0]`) to get the first character of the string.
- **Convert to Uppercase:**  
  Apply the `toUpperCase()` method to the first character.
- **Extract the Rest of the String:**  
  Use `substring(1)` or `slice(1)` to get the substring starting from the second character.
- **Concatenate:**  
  Combine the uppercase first letter with the rest of the string using the `+` operator.
- **Template Literals Alternative:**  
  You can also use template literals to embed the expressions directly within a string.

---

## Solutions

### **Solution 1: Using `charAt()` and `substring()`**

```javascript  
    let myString = "developer";  
    let solution1 = myString.charAt(0).toUpperCase() + myString.substring(1);  
    console.log("Solution 1:", solution1);  
    // Expected output: "Developer"
```
### **Solution 2: Using Bracket Notation and `substring()`**

```javascript  
    let solution2 = myString[0].toUpperCase() + myString.substring(1);  
    console.log("Solution 2:", solution2);  
    // Expected output: "Developer"
```
### **Solution 3: Using Template Literals**

```javascript  
    let solution3 = `${myString[0].toUpperCase()}${myString.substring(1)}`;  
    console.log("Solution 3:", solution3);  
    // Expected output: "Developer"
```
### **Alternative: Using `slice()` Instead of `substring()`**

```javascript  
    let solution4 = myString[0].toUpperCase() + myString.slice(1);  
    console.log("Solution 4:", solution4);  
    // Expected output: "Developer"
```
---

## Summary

- **Accessing Characters:**  
  Use `charAt(0)` or `[0]` to obtain the first character of the string.
- **Uppercasing:**  
  Convert the first character to uppercase using `toUpperCase()`.
- **Extracting the Rest:**  
  Use `substring(1)` or `slice(1)` to retrieve the remainder of the string.
- **Concatenation Methods:**  
  Either concatenate using the `+` operator or embed expressions with template literals.

# Numbers in JavaScript: Methods and Properties

In JavaScript, just like strings, numbers have their own methods and properties. Although numbers are primitive types, when you use methods on them, JavaScript wraps them in a Number object. Below are some structured notes with examples.

## Primitive Number vs. Number Object
- A primitive number (e.g., 5) is stored as a number.
- Using the Number constructor (e.g., new Number(5)) creates a Number object.
- When methods are applied to a primitive number, JavaScript wraps it as an object.

## Example: Primitive Number
```javascript  
    let num = 5;
    console.log(num);            // Outputs: 5
    console.log(typeof num);     // Outputs: "number"
```
## Example: Number Object
```javascript  
    let numObj = new Number(5);
    console.log(numObj);         // Outputs: [Number: 5]
    console.log(typeof numObj);  // Outputs: "object"
```
## Converting Numbers to Strings
- Use the toString() method to convert a number to a string.
```javascript  
    let str = num.toString();
    console.log(str);            // Outputs: "5"
    console.log(typeof str);     // Outputs: "string"
```
- Note: Numbers don't have a length property. To get the number of digits, convert the number to a string first.
javascript  
    let digitCount = num.toString().length;
    console.log(digitCount);     // For 5, outputs: 1

## Formatting Numbers with toFixed()
- The toFixed() method returns a string representing the number with a specified number of decimal places.
```javascript  
    let fixedNum = num.toFixed(2);
    console.log(fixedNum);       // For 5, outputs: "5.00"
    console.log(typeof fixedNum); // Outputs: "string"
```
- Example with a decimal:
```javascript  
    num = 5.4567;
    console.log(num.toFixed(2)); // Outputs: "5.46" (rounded)
```
- For numbers that require fewer decimals:
```javascript  
    num = 4.52;
    console.log(num.toFixed(1)); // Outputs: "4.5"
```
## Using toPrecision() for Total Digit Count
- The toPrecision() method returns a string representing the number with a specified total number of significant digits.
```javascript  
    num = 5.5;
    console.log(num.toPrecision(2)); // Outputs: "5.5"
    num = 5.42;
    console.log(num.toPrecision(3)); // Outputs: "5.42"
```
## Exponential Notation with toExponential()
- The toExponential() method converts a number to a string in exponential notation.
```javascript  
    num = 9.92;
    console.log(num.toExponential(2)); // Example output: "9.92e+0"
```
## Locale-Specific String Representation with toLocaleString()
- The toLocaleString() method formats a number according to locale-specific conventions.
```javascript  
    num = 5;
    console.log(num.toLocaleString("en-US")); // For US locale, outputs: "5"
    // Example with a different locale:
    console.log(num.toLocaleString("ar-EG")); // Outputs locale-specific format (e.g., for Egypt)
```
## Number Properties
- JavaScript provides properties for the Number object:
  - Number.MAX_VALUE: The largest representable number.
  - Number.MIN_VALUE: The smallest representable positive number.
```javascript  
    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);
```
## Summary
- **Primitive vs. Object:**  
  Primitive numbers are simple values, but methods require JavaScript to temporarily wrap them as objects.
- **Conversion to String:**  
  Use toString() to convert a number to a string, which then allows you to use properties like length.
- **Formatting Methods:**  
  Use toFixed() for fixed decimal places, toPrecision() for significant digits, and toExponential() for scientific notation.
- **Locale Formatting:**  
  Use toLocaleString() to format numbers according to regional settings.
- **Number Constants:**  
  Number.MAX_VALUE and Number.MIN_VALUE provide useful limits for numerical operations.

# Math Object in JavaScript

JavaScript has a built-in object called `Math` that provides a variety of methods for mathematical operations. These methods are very handy when you need to perform calculations such as finding square roots, rounding numbers, or generating random numbers.

---

## Common Math Methods

### Square Root
To get the square root of a number, use the `Math.sqrt()` method.

```javascript  
    let x = Math.sqrt(9);
    console.log("Square root of 9:", x);  // Outputs: 3
```
### Absolute Value
To get the absolute value of a number (i.e., the non-negative value), use the `Math.abs()` method.

```javascript  
    let positive = Math.abs(5);
    let negative = Math.abs(-5);
    console.log("Absolute of 5:", positive);    // Outputs: 5
    console.log("Absolute of -5:", negative);     // Outputs: 5
```
### Rounding Numbers
JavaScript provides several methods to round numbers.

#### Math.round()
Rounds a number to the nearest integer.

```javascript  
    x = Math.round(4.6);
    console.log("Round 4.6:", x);  // Outputs: 5
```
```javascript  
    x = Math.round(4.2);
    console.log("Round 4.2:", x);  // Outputs: 4
```
#### Math.ceil() (Round Up)
Rounds a number up to the nearest integer.

```javascript  
    x = Math.ceil(4.2);
    console.log("Ceil of 4.2:", x);  // Outputs: 5
```
#### Math.floor() (Round Down)
Rounds a number down to the nearest integer.

```javascript  
    x = Math.floor(4.9);
    console.log("Floor of 4.9:", x);  // Outputs: 4
```
### Exponentiation
Use `Math.pow()` to raise a number to a given power.

```javascript  
    x = Math.pow(2, 3);
    console.log("2 raised to the power 3:", x);  // Outputs: 8
```
### Minimum and Maximum
To find the smallest or largest number among a set of values, use `Math.min()` and `Math.max()`.

```javascript  
    let minVal = Math.min(4, 5, 3);
    let maxVal = Math.max(4, 5, 3);
    console.log("Minimum value:", minVal);  // Outputs: 3
    console.log("Maximum value:", maxVal);  // Outputs: 5
```
### Generating Random Numbers
The `Math.random()` method generates a random decimal between 0 (inclusive) and 1 (exclusive).

```javascript  
    x = Math.random();
    console.log("Random decimal between 0 and 1:", x);
```
Often, you'll need a random number within a specific range. For example, to get a random integer between 1 and 10:

```javascript  
    // Generate a random decimal between 0 and 1, multiply by 10, add 1, and round down.
    let y = Math.floor(Math.random() * 10 + 1);
    console.log("Random integer between 1 and 10:", y);
```
---

## Summary

- **Math.sqrt()** calculates the square root.
- **Math.abs()** returns the absolute value.
- **Math.round()**, **Math.ceil()**, and **Math.floor()** round numbers in different ways.
- **Math.pow()** raises a number to a specified power.
- **Math.min()** and **Math.max()** find the minimum and maximum values among numbers.
- **Math.random()** generates a random decimal, which can be scaled and rounded to produce random integers within a desired range.



# Challenge: Random Number Operations

In this challenge, you need to use concepts we've already learned to perform several mathematical operations on two random numbers. The challenge is defined as follows:

1. **Create two variables:**
   - `x`: A random number between 1 and 100.
   - `y`: A random number between 1 and 50.

2. **Calculate the following:**
   - **Sum**: The sum of `x` and `y`.
   - **Difference**: The difference between `x` and `y`.
   - **Product**: The product of `x` and `y`.
   - **Quotient**: The result of dividing `x` by `y`.
   - **Remainder**: The remainder when `x` is divided by `y` (using the modulus operator).

3. **Output:**
   - Log the results using template literals so that each operation is shown in a string, for example:  
     `31 plus 15 equals 46`

---

## Hints

- **Random Number Generation:**
  - Use `Math.random()` to generate a random decimal between 0 (inclusive) and 1 (exclusive).
  - Multiply it by the desired maximum (e.g., 100 for `x` or 50 for `y`), then add 1 to ensure the range starts at 1.
  - Use `Math.floor()` to round down to the nearest whole number.

- **String Output:**
  - Use template literals (backticks and `${}`) to embed variables in strings.

---

## Example Solutions

### **Step 1: Generate Random Numbers**

```javascript  
    // Generate a random integer between 1 and 100 for x
    let x = Math.floor(Math.random() * 100 + 1);
    // Generate a random integer between 1 and 50 for y
    let y = Math.floor(Math.random() * 50 + 1);
    console.log("x =", x, "y =", y);
```
### **Step 2: Perform Mathematical Operations**

```javascript  
    // Calculate the required operations
    let sum = x + y;
    let diff = x - y;
    let prod = x * y;
    let quotient = x / y;
    let remainder = x % y;
```
### **Step 3: Create Output Strings**

```javascript  
    // Create output strings using template literals for each operation
    let sumOutput = `${x} plus ${y} equals ${sum}`;
    let diffOutput = `${x} minus ${y} equals ${diff}`;
    let prodOutput = `${x} multiplied by ${y} equals ${prod}`;
    let quotientOutput = `${x} divided by ${y} equals ${quotient}`;
    let remainderOutput = `${x} modulo ${y} equals ${remainder}`;
```
### **Step 4: Log the Outputs**

```javascript  
    // Log all the outputs
    console.log(sumOutput);
    console.log(diffOutput);
    console.log(prodOutput);
    console.log(quotientOutput);
    console.log(remainderOutput);
```
---

## Summary

- **Random Numbers:**  
  Use `Math.random()` combined with `Math.floor()` to generate random integers within a specified range.

- **Operations:**  
  Calculate sum, difference, product, quotient, and remainder using basic arithmetic operators.

- **Template Literals:**  
  Use template literals to create formatted strings that display the equation and result.


# Summary: Using new Date() vs Date()

## Using new Date():
- Creates a Date object instance.
- You can use methods like getFullYear(), getMonth(), etc., to interact with the date.

Example:
```javascript  
    let currentDate = new Date();
    console.log(currentDate);              // Outputs the Date object
    console.log("Year:", currentDate.getFullYear());
    console.log("Month:", currentDate.getMonth() + 1);  // Months are zero-indexed
```
## Using Date() without new:
- Returns a string representation of the current date and time.
- You cannot use date-specific methods on the resulting string.

Example:
```javascript  
    let currentDateString = Date();
    console.log(currentDateString);        // Outputs a date-time string
    // The following will cause an error because currentDateString is not a Date object:
    // console.log(currentDateString.getFullYear());  // Error: currentDateString.getFullYear is not a function
```

# Date Objects and Timestamps in JavaScript
```javascript
// Create a new Date object representing the current date and time
let d = new Date();
console.log("Current Date:", d);
console.log("Type of d:", typeof d);  // "object"

// Convert the date to a string
console.log("Date as string:", d.toString());

// Create a specific date using parameters
// Note: The month is zero-indexed (0 = January, 1 = February, ..., 6 = July)
let specificDate = new Date(2021, 6, 10);  // Represents July 10, 2021
console.log("Specific Date:", specificDate);

// Add time components: hour, minute, and second
let dateWithTime = new Date(2021, 6, 10, 12, 30, 0);  // July 10, 2021 at 12:30:00
console.log("Date with Time:", dateWithTime);

// Create a date from a string
// Format "YYYY-MM-DD" (be cautious: using hyphens may result in a date off by one day due to time zone issues)
let dateFromString = new Date("2021-07-10T12:30:00");
console.log("Date from String:", dateFromString);

// Get the current timestamp in milliseconds
let timestampMs = Date.now();
console.log("Current Timestamp (ms):", timestampMs);

// Convert the timestamp from milliseconds to seconds
let timestampSec = Math.floor(Date.now() / 1000);
console.log("Current Timestamp (sec):", timestampSec);

// Get the timestamp of a specific date using getTime() or valueOf()
let specificTimestamp = specificDate.getTime();
console.log("Specific Date Timestamp (ms):", specificTimestamp);
console.log("Specific Date Timestamp (ms) using valueOf():", specificDate.valueOf());

// Create a date object from a given timestamp
let dateFromTimestamp = new Date(timestampMs);
console.log("Date from Timestamp:", dateFromTimestamp);

// Summary:
// - Date objects represent a specific point in time.
// - Using new Date() creates a Date object instance.
// - Using Date() without new returns a string representation of the current date and time.
// - Timestamps in JavaScript are expressed in milliseconds.
// - When creating dates from strings with hyphens, be aware of potential time zone issues.
```

## Date Object Instantiation
- Use `new Date()` to create a Date object representing the current date and time.
- Example: `let d = new Date();`
- The `new` keyword instantiates a Date object; without `new`, calling `Date()` returns a string.

## Common Date Methods
- **`toString()`**:  
  Returns a string representation of the date.
- **`getTime()` / `valueOf()`**:  
  Return the timestamp (number of milliseconds since January 1, 1970).
- **`getFullYear()`**:  
  Returns the year (e.g., 2022).
- **`getMonth()`**:  
  Returns the month as a zero-indexed value (0 = January, 9 = October).  
  *Tip:* Add 1 for a human-readable month.
- **`getDate()`**:  
  Returns the day of the month.
- **`getDay()`**:  
  Returns the day of the week (0 = Sunday, 6 = Saturday).
- **`getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`**:  
  Return the respective time components.

## Creating Specific Dates
- You can pass arguments to `new Date()` to set a specific date and time:
      new Date(year, month, day, hour, minute, second)
  - **Caveat:** The month is zero-based (e.g., 0 for January).
- Alternatively, you can pass a date string in various formats:
  - Using a string like `"2021-07-10T12:30:00"` may be more reliable, but note that hyphenated formats can sometimes be off by a day due to time zone differences.

## Date Formatting with Intl.DateTimeFormat
- The `Intl.DateTimeFormat` API formats dates in a locale-sensitive manner.
```javascript  
      let formattedDate = new Intl.DateTimeFormat("en-US").format(d);
```  
- You can pass options to customize the output (e.g., `{ weekday: "long", year: "numeric", month: "long", day: "numeric" }`).
- Alternatively, use `toLocaleDateString()` or `toLocaleString()` on the Date object for similar formatting.

## Time Zones and Locale Considerations
- The default locale is determined by the user's environment, but you can specify one (e.g., "en-US" or "en-GB").
- Date formats and output can vary by locale.

## Timestamps
- **Current Timestamp:**  
  Use `Date.now()` to get the current timestamp in milliseconds.
- **Specific Timestamp:**  
  Use `getTime()` or `valueOf()` on a Date object.
- **Conversion:**  
  Divide a timestamp in milliseconds by 1000 to get seconds.
- You can create a Date object from a given timestamp:
      let dateFromTimestamp = new Date(timestamp);

## Example: Formatting a Date Using Template Literals
- Combine date methods in a template literal for custom formatting:
```javascript 
      let formatted = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      // Example output: "2022-10-28"
```
## Summary
- Date objects represent a point in time and provide methods to extract specific parts (year, month, day, etc.).
- Use `Intl.DateTimeFormat` or `toLocaleDateString()` for locale-sensitive formatting.
- Timestamps in JavaScript are in milliseconds; convert to seconds if needed.
- Understanding these basics is essential before moving on to more advanced topics like DOM manipulation and data fetching.


# JavaScript Arrays

## 1. Introduction to Arrays
- Arrays are a special type of object in JavaScript.
- They are a data structure used to store multiple values.
- Arrays are enclosed in square brackets `[]`, and each value inside is called an **element**.

## 2. Array Elements
- Elements can be of any data type: numbers, strings, booleans, `null`, objects, even other arrays (nested arrays).
- Example of an array with different data types:

```javascript
  let mixedArray = [42, "hello", true, null, [1, 2, 3]];
```
## 3. Indexing in Arrays
- Arrays in JavaScript are **zero-based**, meaning the first element is at index `0`.
- Access elements using their index:

```javascript
  let numbers = [10, 20, 30, 40, 50];
  console.log(numbers[0]); // Output: 10
  console.log(numbers[2]); // Output: 30
```
- You can also use array values in expressions:

```javascript
  let sum = numbers[0] + numbers[3]; // 10 + 40 = 50
```
## 4. Creating Arrays
### 4.1 Using Array Literals
- The most common way to create an array:

```javascript
  let fruits = ["apple", "banana", "cherry"];
```
### 4.2 Using the Array Constructor
- Less common but still valid:

```javascript
  let fruits = new Array("apple", "banana", "cherry");
```
## 5. Getting Array Length
- The `.length` property returns the number of elements in an array:

```javascript
  let fruits = ["apple", "banana", "cherry"];
  console.log(fruits.length); // Output: 3
```
## 6. Modifying Array Elements
- Change an existing element by accessing it via its index:

```javascript
  let fruits = ["apple", "banana", "cherry"];
  fruits[1] = "grape";
  console.log(fruits); // Output: ["apple", "grape", "cherry"]
```
## 7. Adding Elements to an Array
### 7.1 Using Index Position
- Manually adding an element by setting it at the last index:

```javascript
  let fruits = ["apple", "banana", "cherry"];
  fruits[3] = "strawberry";
  console.log(fruits); // Output: ["apple", "banana", "cherry", "strawberry"]
```
- A dynamic way using `.length`:

```javascript
  fruits[fruits.length] = "blueberry";
  console.log(fruits); // Output: ["apple", "banana", "cherry", "strawberry", "blueberry"]
```
### 7.2 Using `.push()` Method (Preferred)
- A more common way is to use the `.push()` method:

```javascript
  fruits.push("peach");
  console.log(fruits); // Output: ["apple", "banana", "cherry", "strawberry", "blueberry", "peach"]
```
## 8. Summary
- Arrays in JavaScript store multiple values in a structured way.
- They use zero-based indexing.
- Elements can be accessed and modified using indexes.
- Arrays can be created using literals or constructors.
- The `.length` property helps determine the number of elements.
- Elements can be dynamically added using `.length` or `.push()`.

# JavaScript Array Methods

In the previous lesson, we covered array basics, such as creating arrays and accessing elements using indexes. Now, we will explore useful array methods to modify arrays and retrieve information from them.

---

## 1. Mutating Methods (Modify the Original Array)

These methods change the contents of the array itself.

### **Push (Add to the End)**
- Adds a new element to the end of the array.

```javascript
let arr = [10, 20, 30];
arr.push(100);
console.log(arr); // Output: [10, 20, 30, 100]
```
### **Pop (Remove Last Element)**
- Removes the last element from the array.

```javascript
arr.pop();
console.log(arr); // Output: [10, 20, 30]
```
### **Unshift (Add to the Beginning)**
- Adds a new element to the beginning of the array.

```javascript
arr.unshift(99);
console.log(arr); // Output: [99, 10, 20, 30]
```
### **Shift (Remove First Element)**
- Removes the first element from the array.

```javascript
arr.shift();
console.log(arr); // Output: [10, 20, 30]
```
### **Reverse (Reverse the Array)**
- Reverses the order of the elements in the array.

```javascript
arr.reverse();
console.log(arr); // Output: [30, 20, 10]
```
---

## 2. Non-Mutating Methods (Retrieve Information or Create a New Array)

These methods do not modify the original array.

### **Includes (Check for Existence)**
- Returns `true` if the specified value exists in the array; otherwise, returns `false`.

```javascript
let nums = [10, 20, 30, 40];
console.log(nums.includes(20)); // Output: true
console.log(nums.includes(100)); // Output: false
```
### **IndexOf (Find Index of an Element)**
- Returns the index of the first occurrence of the specified value. If not found, returns `-1`.

```javascript
console.log(nums.indexOf(30)); // Output: 2
console.log(nums.indexOf(100)); // Output: -1
```
### **Slice (Extract Elements Without Modifying Original)**
- Returns a shallow copy of a portion of an array into a new array.
- Syntax: `array.slice(startIndex, endIndex)`
- The `endIndex` is exclusive (not included in the result).

```javascript
let slicedArr = nums.slice(1, 3);
console.log(slicedArr); // Output: [20, 30]
console.log(nums); // Original array remains unchanged: [10, 20, 30, 40]
```
### **Splice (Remove or Replace Elements and Modify Original Array)**
- Unlike `slice`, `splice` **modifies** the original array.
- Syntax: `array.splice(startIndex, deleteCount, newItem1, newItem2, ...)`

#### **Removing Elements**
```javascript
nums.splice(1, 2); // Remove 2 elements starting from index 1
console.log(nums); // Output: [10, 40]
```
#### **Replacing Elements**
```javascript
nums = [10, 20, 30, 40];
nums.splice(1, 2, 99, 100); // Replace elements at index 1 and 2 with 99 and 100
console.log(nums); // Output: [10, 99, 100, 40]
```
#### **Adding Elements Without Deleting**
```javascript
nums.splice(2, 0, 200); // Insert 200 at index 2 without removing any elements
console.log(nums); // Output: [10, 99, 200, 100, 40]
```
---

## 3. Method Chaining
Methods can be combined to perform multiple operations in one statement.

### **Example: Reverse and Convert to String**
```javascript
let result = [10, 20, 30, 40].splice(1, 2).reverse().toString();
console.log(result); // Output: "30,20"
```
### **Example: Extract First Character from a Reversed Array**
```javascript
let firstChar = [15, 25, 35, 45].splice(1, 3).reverse().toString().charAt(0);
console.log(firstChar); // Output: "4" (first character of "45,35,25")
```
---

## 4. Summary
| Method      | Description | Modifies Original Array? |
|------------|-------------|--------------------------|
| `.push()`  | Add element to the end | ✅ |
| `.pop()`   | Remove last element | ✅ |
| `.unshift()` | Add element to the beginning | ✅ |
| `.shift()` | Remove first element | ✅ |
| `.reverse()` | Reverse the array order | ✅ |
| `.includes(value)` | Check if an element exists | ❌ |
| `.indexOf(value)` | Get index of an element | ❌ |
| `.slice(start, end)` | Extract elements without modifying original | ❌ |
| `.splice(start, count, items...)` | Remove or replace elements | ✅ |

By mastering these array methods, you can efficiently manipulate and retrieve data in JavaScript.


# Advanced Array Operations in JavaScript

In this lesson, we will explore advanced ways to work with arrays, including:
- Nesting arrays
- Concatenating arrays
- The spread operator
- Flattening arrays
- Static array methods

---

## 1. Nesting Arrays
An array can contain another array as an element, creating a **nested array**.

### **Example: Creating a Nested Array**
```javascript
let fruits = ["apple", "pear", "orange"];
let berries = ["strawberry", "blueberry", "raspberry"];

fruits.push(berries);
console.log(fruits);
// Output: ["apple", "pear", "orange", ["strawberry", "blueberry", "raspberry"]]
```
- The `berries` array is added as a single element inside `fruits`, creating a nested array.

### **Accessing a Nested Element**
To access an element inside a nested array, use **multiple index references**.

```javascript
let x = fruits[3][1]; // Accessing "blueberry"
console.log(x); // Output: "blueberry"
```  
- `fruits[3]` retrieves the nested `berries` array.
- `fruits[3][1]` retrieves "blueberry" inside `berries`.

---

## 2. Creating a Fully Nested Array
Instead of pushing, we can manually nest two arrays inside a new array.

```javascript
let allFruits = [fruits, berries];
console.log(allFruits);
// Output: [["apple", "pear", "orange", ["strawberry", "blueberry", "raspberry"]], ["strawberry", "blueberry", "raspberry"]]
```
console.log(allFruits[1][0]); // Output: "strawberry"
    
---

## 3. Concatenating Arrays
Concatenation **combines** multiple arrays into a single array without nesting.

### **Using `concat()`**
```javascript
let combinedFruits = fruits.concat(berries);
console.log(combinedFruits);
// Output: ["apple", "pear", "orange", "strawberry", "blueberry", "raspberry"]
```    
- `concat()` merges the values **without** nesting them.

---

## 4. The Spread Operator (`...`)
The **spread operator (`...`)** allows us to expand elements of an array into a new array.

### **Using the Spread Operator**
```javascript
let spreadFruits = [...fruits, ...berries];
console.log(spreadFruits);
// Output: ["apple", "pear", "orange", "strawberry", "blueberry", "raspberry"]
```  
- `...fruits` spreads all elements of `fruits` into the new array.
- `...berries` spreads all elements of `berries` into the new array.

### **Difference Between `concat()` and `...`**
Both `concat()` and `spread` can merge arrays, but **spread** provides more flexibility:

```javascript
let withExtra = ["banana", ...fruits, "grape"];
console.log(withExtra);
// Output: ["banana", "apple", "pear", "orange", "grape"]
```  
- The spread operator allows adding elements **before or after** the merged arrays.

---

## 5. Flattening Arrays
The `flat()` method removes nested arrays and returns a **single-level array**.

### **Example: Flattening a Nested Array**
```javascript
let nestedArray = [1, 2, [3, 4], 5, [6, 7], 8];

let flatArray = nestedArray.flat();
console.log(flatArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
```    
- `flat()` removes **one level** of nesting by default.

### **Flattening Multiple Levels**
If the array is deeply nested, specify the depth level:

```javascript
let deepNested = [1, [2, [3, [4, 5]]]];
console.log(deepNested.flat(2));
// Output: [1, 2, 3, [4, 5]]

console.log(deepNested.flat(Infinity));
// Output: [1, 2, 3, 4, 5] (fully flattened)
```   
- Using `Infinity` ensures that all nested arrays are flattened.

---

## 6. Static Array Methods
JavaScript provides static methods on the `Array` object that do **not** require an instance.

### **Checking if a Value is an Array (`Array.isArray()`)**
Determines whether a variable is an array.

```javascript
console.log(Array.isArray(fruits)); // Output: true
console.log(Array.isArray("apple")); // Output: false
```    
### **Creating an Array from a String (`Array.from()`)**
Converts iterable or array-like objects (such as strings) into an array.

```javascript
let strArray = Array.from("12345");
console.log(strArray); // Output: ["1", "2", "3", "4", "5"]
```   
### **Creating an Array from Multiple Variables (`Array.of()`)**
Creates an array from separate values.

```javascript
let a = 1, b = 2, c = 3;
let newArray = Array.of(a, b, c);
console.log(newArray); // Output: [1, 2, 3]
```    
- This is useful when converting multiple variables into an array.

---

## 7. Summary

| **Method**         | **Description** | **Modifies Original?** |
|--------------------|----------------|------------------------|
| `.push(value)`    | Add an element to the end | ✅ |
| `.pop()`          | Remove the last element | ✅ |
| `.unshift(value)` | Add an element to the beginning | ✅ |
| `.shift()`        | Remove the first element | ✅ |
| `.reverse()`      | Reverse the array order | ✅ |
| `.concat(array)`  | Merge arrays into one | ❌ |
| `...[array]`      | Spread elements into another array | ❌ |
| `.flat(depth)`    | Flatten nested arrays | ❌ |
| `Array.isArray(value)` | Check if a value is an array | ❌ |
| `Array.from(iterable)` | Convert iterable to an array | ❌ |
| `Array.of(...values)`  | Create an array from values | ❌ |

Mastering these techniques will help you efficiently manipulate arrays in JavaScript.

# JavaScript Array Challenges

In this section, we will go through two JavaScript array challenges, applying the methods we have learned, such as `reverse()`, `push()`, `unshift()`, `slice()`, `concat()`, `splice()`, and the spread operator.

---

## **Challenge 1: Transforming an Array**
### **Task**
- Create an array containing numbers 1 through 5.
- Transform the array into `[6, 5, 4, 3, 2, 1, 0]` using array methods.

### **Solution**
1. Reverse the order of the array using `reverse()`.
2. Append `0` to the end using `push(0)`.
3. Add `6` to the beginning using `unshift(6)`.

#### **Implementation**
```javascript
let array = [1, 2, 3, 4, 5];

// Reverse the array
array.reverse();

// Add 0 to the end
array.push(0);

// Add 6 to the beginning
array.unshift(6);

console.log(array); // Output: [6, 5, 4, 3, 2, 1, 0]
```
#### **Alternative Approach**
1. Add `6` first using `push(6)`.
2. Add `0` using `unshift(0)`.
3. Reverse the array.

```javascript
let arrayAlt = [1, 2, 3, 4, 5];

arrayAlt.push(6);
arrayAlt.unshift(0);
arrayAlt.reverse();

console.log(arrayAlt); // Output: [6, 5, 4, 3, 2, 1, 0]
```
---

## **Challenge 2: Concatenating Arrays Without Duplicates**
### **Task**
- Given two arrays:
  - `array1 = [1, 2, 3, 4, 5]`
  - `array2 = [5, 6, 7, 8, 9, 10]`
- Concatenate them **without including the extra `5`**.

### **Solution 1: Using `slice()` and `concat()`**
1. Use `slice(0, 4)` to extract `[1, 2, 3, 4]` from `array1`, leaving out `5`.
2. Concatenate the result with `array2`.

#### **Implementation**
```javascript
let array1 = [1, 2, 3, 4, 5];
let array2 = [5, 6, 7, 8, 9, 10];

let array3 = array1.slice(0, 4).concat(array2);

console.log(array3); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
---

### **Solution 2: Using Spread Operator and `splice()`**
1. Spread `array1` and `array2` into a new array.
2. Use `splice()` to remove one instance of `5`.

#### **Implementation**
```javascript
let array4 = [...array1, ...array2];

// Remove duplicate 5 at index 4
array4.splice(4, 1);

console.log(array4); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
---

## **Key Takeaways**
- **Reversing an array:** Use `.reverse()`.
- **Appending elements:** Use `.push(value)` to add at the end, `.unshift(value)` to add at the beginning.
- **Concatenating arrays:** Use `.concat(array2)` or the spread operator `[...array1, ...array2]`.
- **Slicing arrays:** Use `.slice(start, end)` to extract specific elements.
- **Removing elements:** Use `.splice(start, deleteCount)` to remove unwanted elements.

These techniques provide different ways to manipulate arrays efficiently!

# JavaScript Object Literals

Object literals in JavaScript are used to store key-value pairs. The keys are also referred to as **properties**, and the values can be of any data type, including strings, numbers, booleans, arrays, or even functions.

---

## **Creating an Object Literal**
- Objects are defined using `{}` and contain key-value pairs separated by commas.
- Example:

```javascript
let person = {
  name: "John Doe",
  age: 30,
  isAdmin: true
};

console.log(person);
```
---

## **Accessing Object Properties**
You can access properties using **dot notation** or **bracket notation**.

### **Dot Notation**
```javascript
console.log(person.name); // "John Doe"
```
### **Bracket Notation**
```javascript
console.log(person["age"]); // 30
```
Bracket notation is useful when the property name has spaces or special characters.

---

## **Nesting Objects**
- Objects can have other objects inside them.

```javascript
let person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "Boston",
    state: "Mass"
  }
};

// Accessing nested properties
console.log(person.address.state); // "Mass"
```
---

## **Using Arrays in Objects**
Objects can store arrays as property values.

```javascript
let person = {
  name: "John Doe",
  hobbies: ["music", "sports"]
};

console.log(person.hobbies); // ["music", "sports"]
console.log(person.hobbies[0]); // "music"
```
---

## **Updating Object Properties**
Properties can be modified using dot notation.

```javascript
person.name = "Jane Doe";
console.log(person.name); // "Jane Doe"

person.isAdmin = false;
console.log(person.isAdmin); // false
```
---

## **Deleting Object Properties**
Use the `delete` keyword to remove a property.

```javascript
delete person.age;
console.log(person.age); // undefined
```
---

## **Adding New Properties**
You can dynamically add new properties to an object.

```javascript
person.hasChildren = true;
console.log(person.hasChildren); // true
```
---

## **Adding Functions to Objects**
Functions can be assigned as properties.

```javascript
person.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet(); // "Hello, my name is Jane Doe"
```
- The `this` keyword refers to the current object.

---

## **Using Spaces in Property Names**
Although not recommended, object keys can have spaces if enclosed in quotes.

```javascript
let person2 = {
  "first name": "Brad",
  "last name": "Smith"
};

// Accessing properties with spaces
console.log(person2["first name"]); // "Brad"
```
- **Avoid spaces in keys** and prefer camelCase (`firstName`) or snake_case (`first_name`).

---

## **Key Takeaways**
- Objects store key-value pairs.
- Use **dot notation** (`obj.key`) or **bracket notation** (`obj["key"]`) to access properties.
- Objects can **contain arrays and other objects**.
- Use **`delete`** to remove properties.
- Functions can be properties inside objects (`this` refers to the object).
- **Bracket notation is required** when accessing properties with spaces in their names.

In the next section, we will explore **nesting objects within objects** and using the **spread operator** with objects.


# Object Operations in JavaScript

In this section, we will explore:
- Creating objects using constructors
- Nesting objects
- Using the spread operator with objects
- Useful object methods for manipulation

---

## **Creating Objects Using Constructors**
Besides object literals, objects can be created using the `Object` constructor.

### **Using an Empty Object**
```javascript
let todo = {};

todo.id = 1;
todo.name = "Buy milk";
todo.completed = false;

console.log(todo);
```
- This approach allows us to dynamically add properties to an object.

### **Using the `new Object()` Constructor**
```javascript
let todo = new Object();

todo.id = 1;
todo.name = "Buy milk";
todo.completed = false;

console.log(todo);
```
- This is **equivalent** to using `{}` but is less commonly used.

---

## **Nesting Objects**
Objects can contain other objects, allowing for structured data representation.

```javascript
let person = {
  address: {
    coordinates: {
      lat: 42.1234,
      lon: -71.5678
    }
  }
};

console.log(person.address.coordinates.lat); // 42.1234
```
- **Dot notation** can be used to access deeply nested properties.

---

## **Using the Spread Operator with Objects**
The spread operator (`...`) allows us to merge objects efficiently.

### **Merging Two Objects**
```javascript
let obj1 = { A: 1, B: 2 };
let obj2 = { C: 3, D: 4 };

let obj3 = { ...obj1, ...obj2 };

console.log(obj3); // { A: 1, B: 2, C: 3, D: 4 }
```
- Without the spread operator, objects remain **nested**.
- With the spread operator, all properties are **flattened into one object**.

### **Partial Spread**
```javascript
let obj4 = { ...obj1, obj2 };

console.log(obj4);
// { A: 1, B: 2, obj2: { C: 3, D: 4 } } (obj2 remains nested)
```
- When spread is **not used**, the second object remains **nested** inside the new object.

---

## **Using `Object.assign()`**
Before ES6 introduced the spread operator (`...`), `Object.assign()` was used to merge objects.

```javascript
let obj5 = Object.assign({}, obj1, obj2);

console.log(obj5); // { A: 1, B: 2, C: 3, D: 4 }
```
- The first argument `{}` ensures a **new object** is created.

---

## **Arrays of Objects**
When working with APIs or databases, we often deal with **arrays of objects**.

```javascript
let todos = [
  { id: 1, name: "Buy milk" },
  { id: 2, name: "Pick up kids" },
  { id: 3, name: "Take out trash" }
];

console.log(todos[1]); // { id: 2, name: "Pick up kids" }
console.log(todos[1].name); // "Pick up kids"
```
- Use **indexing** (`todos[1]`) to access a specific object.
- Use **dot notation** (`.name`) to retrieve specific values.

---

## **Useful Object Methods**
### **1. Get All Object Keys**
Use `Object.keys()` to retrieve an array of all keys.

```javascript
let keys = Object.keys(todo);
console.log(keys); // ["id", "name", "completed"]
```
- This is useful for **iterating** over object properties.

### **2. Get the Number of Properties**
Objects do not have a `length` property, but we can get the count using `.keys().length`.

```javascript
console.log(Object.keys(todo).length); // 3
```
### **3. Get All Object Values**
Use `Object.values()` to retrieve an array of values.

```javascript
console.log(Object.values(todo)); // [1, "Buy milk", false]
```
### **4. Get Key-Value Pairs as Arrays**
Use `Object.entries()` to return an array of key-value pairs.

```javascript
console.log(Object.entries(todo)); 
// [["id", 1], ["name", "Buy milk"], ["completed", false]]
```
### **5. Check If Object Has a Property**
Use `.hasOwnProperty()` to check if an object has a specific key.

```javascript
console.log(todo.hasOwnProperty("name")); // true
console.log(todo.hasOwnProperty("age")); // false
```
- Returns **`true`** if the property exists, otherwise **`false`**.

---

## **Summary**
- Objects can be created using **object literals** `{}` or the **`new Object()`** constructor.
- **Nesting** allows for hierarchical data structures.
- The **spread operator (`...`)** is used to merge objects efficiently.
- **`Object.assign()`** is an alternative to the spread operator.
- Arrays of objects are commonly used in APIs and databases.
- Use `Object.keys()`, `Object.values()`, and `Object.entries()` to retrieve data from objects.
- `.hasOwnProperty()` checks for the existence of a property.


# Destructuring and Naming in JavaScript

In this section, we will explore:
- Shortened object property notation
- Destructuring objects
- Destructuring arrays
- Using the rest operator

---

## **Shortened Object Property Notation**
If the key and the value have the same name, you can omit the value.

### **Without Shortened Notation**
```javascript
const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age
};

console.log(person.age); // 30
```
### **With Shortened Notation**
```javascript
const person = { firstName, lastName, age };

console.log(person.age); // 30
```
- **No need to repeat** key and value names.
- Saves typing and improves readability.

---

## **Destructuring Objects**
Destructuring allows extracting values from an object into variables.

### **Basic Object Destructuring**
```javascript
const todo = {
  id: 1,
  title: "Take out trash",
};

const { id, title } = todo;

console.log(id); // 1
console.log(title); // "Take out trash"
```
- `{ id, title } = todo` pulls values directly into variables.

### **Nested Object Destructuring**
```javascript
const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "Alice"
  }
};

const { user } = todo;
console.log(user); // { name: "Alice" }

const { user: { name } } = todo;
console.log(name); // "Alice"
```
- Extracts **nested objects** into variables.

### **Renaming Variables in Destructuring**
```javascript
const { id: todoId } = todo;

console.log(todoId); // 1
```
- `id: todoId` renames `id` to `todoId`.

---

## **Destructuring Arrays**
Arrays can also be destructured using **brackets**.

### **Basic Array Destructuring**
```javascript
const numbers = [23, 67, 33, 49];

const [first, second] = numbers;

console.log(first); // 23
console.log(second); // 67
```
- Extracts first and second elements into variables.

### **Skipping Elements**
```javascript
const [, , third] = numbers;

console.log(third); // 33
```
- Skips first two elements.

### **Using the Rest Operator**
The **rest operator (`...`)** gathers remaining values into an array.

```javascript
const [first, second, ...rest] = numbers;

console.log(first); // 23
console.log(second); // 67
console.log(rest); // [33, 49]
```
- `...rest` stores remaining elements in an array.

---

## **Summary**
- Use **shortened notation** to avoid redundant key-value pairs.
- Destructure **objects** to extract values into variables.
- Destructure **nested objects** and rename properties as needed.
- Use **array destructuring** to extract elements into variables.
- The **rest operator (`...`)** collects remaining elements into an array.

Next, we will explore **JSON** and how it interacts with JavaScript.


# JSON in JavaScript

## **What is JSON?**
JSON (**JavaScript Object Notation**) is a lightweight data format used for **storing and exchanging data**.

- **Similar to JavaScript objects**
- **Uses key-value pairs**
- **Human-readable and easy to use**
- **Keys and string values must be in double quotes**

---

## **Example: JSON from an API**
Many APIs return data in JSON format, such as the GitHub API:

**URL:** `https://api.github.com/users`

**Response:**
```json
[
  {
    "login": "username",
    "id": 12345,
    "avatar_url": "https://avatar.com/image.png",
    "url": "https://api.github.com/users/username"
  }
]
```
---

## **JSON vs JavaScript Object**
The syntax of JSON is similar to JavaScript object literals, but with some differences:

| Feature              | JavaScript Object        | JSON                |
|----------------------|------------------------|----------------------|
| Quotes around keys  | Optional               | Required (double quotes) |
| String values       | Can use single quotes  | Must use double quotes |
| Trailing commas     | Allowed                | Not allowed |

### **Example: JavaScript Object**
```javascript
const user = {
  name: "John Doe",
  age: 30,
  isAdmin: true
};
```
### **Example: JSON**
```json
{
  "name": "John Doe",
  "age": 30,
  "isAdmin": true
}
```
---

## **Converting JavaScript Objects to JSON**
JavaScript provides built-in methods for working with JSON.

### **Convert Object to JSON String**
```javascript
const post = {
  id: 1,
  title: "Post One",
  body: "This is the body"
};

const str = JSON.stringify(post);
console.log(str); 
// Output: {"id":1,"title":"Post One","body":"This is the body"}
```
---

## **Converting JSON to JavaScript Object**
To parse a JSON string back into a JavaScript object:

```javascript
const obj = JSON.parse(str);
console.log(obj);
// Output: { id: 1, title: 'Post One', body: 'This is the body' }
```
---

## **Handling Arrays of JSON Objects**
JSON can also store arrays of objects:

### **Example: JSON Array**
```json
[
  {
    "id": 1,
    "title": "Post One"
  },
  {
    "id": 2,
    "title": "Post Two"
  }
]
```
### **Convert Array to JSON String**
```javascript
const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" }
];

const jsonString = JSON.stringify(posts);
console.log(jsonString);
// Output: [{"id":1,"title":"Post One"},{"id":2,"title":"Post Two"}]
```
### **Parse JSON Array**
```javascript
const parsedArray = JSON.parse(jsonString);
console.log(parsedArray);
// Output: [{ id: 1, title: 'Post One' }, { id: 2, title: 'Post Two' }]
```
---

## **Important Notes**
1. **JSON is a string format**  
   - If you try to access properties directly from a JSON string, it won’t work.
   - You must **parse** it into a JavaScript object first.

   javascript
   console.log(str.id); // Undefined
   console.log(obj.id); // 1 (after parsing)

2. **JSON is commonly used in APIs**
   - When fetching data from an API, you typically receive JSON and convert it into a JavaScript object.

3. **JSON is used in Local Storage**
   - Local Storage can only store strings, so JSON.stringify() and JSON.parse() are essential when working with stored data.

---

## **Summary**
- JSON is a lightweight data format used for exchanging data.
- It is similar to JavaScript objects but with stricter syntax rules.
- `JSON.stringify()` converts an object to a JSON string.
- `JSON.parse()` converts a JSON string back to an object.
- JSON is widely used in APIs and local storage.

In the next section, we will go through an **object challenge** before moving on to functions and scope.

# JavaScript Scope: Global and Function Scope

## What is Scope?

- **Scope** refers to the context or area in which a piece of code is executed.
- It defines what variables and functions are accessible at any point in the code.

---

## Global Scope

- Variables declared **outside** of any function or block belong to the **global scope**.
- These variables can be accessed from **anywhere** in your code.

### Example:
```javascript
let x = 100; // Global variable

console.log(x); // Accessible here

function test() {
  console.log(x); // Accessible inside function
}

if (true) {
  console.log(x); // Accessible inside block
}
```

### The `window` Object (in the browser)
- In browsers, the global scope is the `window` object.
- Global variables become properties of `window`.
- Methods like `alert`, `innerWidth`, and `innerHeight` are accessible via `window`.

```javascript
window.alert("Hello");
alert("Hello"); // Equivalent to window.alert

console.log(window.innerWidth);
console.log(innerWidth); // Equivalent

function run() {
  console.log(window.innerHeight);
}
```

---

## Function Scope

- Variables declared **inside** a function using `var`, `let`, or `const` are **function-scoped**.
- They are only accessible **within that function**.

### Example:
```javascript
function add() {
  const y = 50; // Function-scoped variable
  console.log(y); // Accessible here
}

add();

console.log(y); // ❌ Error: y is not defined
```

- Global variables can still be accessed **within** functions:
```javascript
let x = 100;

function add() {
  const y = 50;
  console.log(x + y); // 150
}

add();
```

---

## Variable Shadowing

- If a variable is **redeclared** inside a function with the **same name** as a global variable, it **shadows** the global one within that scope.

### Example:
```javascript
let x = 100;

function add() {
  let x = 1;  // Shadows global x
  const y = 50;
  console.log(x + y); // 51
}

add();
```

---

## Local Scope

- "Local scope" refers to the **current** context:
  - Inside a function → local scope is the function
  - Outside functions → local scope is the global scope

### Example:
```javascript
const y = 50;

function add() {
  // local scope is the add() function
}

{
  // local scope is this block (in case of block scope)
}
```

---

## Summary

- **Global Scope**: Accessible anywhere; top-level context.
- **Function Scope**: Variables declared inside a function exist only there.
- **Variable Shadowing**: A local variable can overwrite (shadow) a global one.
- **Local Scope**: Contextually depends on where the code is written (function or global).