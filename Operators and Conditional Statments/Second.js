// Operators

// Airthemetic Operators
let a = 20;
let b = 10;
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation

//Unary Operators
let c = 5;
c++;
console.log("c =", c);

// Assignment Operators

let a = 5;
let b = 2;
a -= 3;
a += 3;
a *= 3;

// Comparison Operators
let a = 5;
let b = 3;
console.log("a == b", a == b);
console.log("a != b", a != b);
console.log("a == b", a == b);
console.log("a > b", a > b);
console.log("a < b", a < b);

// Logical Operators
let a = 5;
let b = 2;

let con1 = a > b;
let con2 = a === 5;
console.log(con1 && con2);
console.log(con1 || con2);

// Conditional Statments
let mode = "White";
let color;

if (mode === "dark") {
  color = "black";
} else {
  color = "White";
}
console.log("Color is", color);

// Example
let num = 11;
if (num % 2 === 0) {
  console.log(num, "This is even number");
} else {
  console.log(num, "This is odd number");
}

//else-if
let mode = "blue";
let color;

if (mode === "Dark") {
  color = "Black";
} else if (mode === "Blue") {
  color = "Blue";
} else if (mode === "white") {
  color = "White";
} else {
  color = "None";
}
console.log("Color is", color);

//Ternary Operator
let age = 20;

let output = age >= 18 ? "Adult" : "minor";
console.log("you are:", output);
