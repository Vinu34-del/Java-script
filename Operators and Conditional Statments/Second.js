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

// Practise questions
let num = prompt("Enter a number");

if (num % 5 === 0) {
  console.log(num, "is divide by 5");
} else {
  console.log(num, "is not divide by 5");
}

//Practise questions 2
let score = prompt("Enter your score");
let grade;
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Your grade is", grade);
