//For loops
for (let count = 1; count <= 5; count++) {
  console.log("Heyy Vinay..!", count);
}
console.log("Loop Ended");

let sum = 0;
for (let i = 1; i <= 5; i++) {
  console.log("Heyy Vinay..!", i);
  sum = sum + i;
}
console.log("Total sum is :", sum);
console.log("Loop Ended");

// While Loops
let i = 1;
while (i <= 5) {
  console.log("Hello Coders..!", i);
  i++;
}

// do-while loop
let i = 20;
do {
  console.log("Vinay");
  i++;
} while (i <= 10);

// for of loop
let str = "Vinay";

for (let n of str) {
  console.log(n);
}

// practise question

for (let num = 0; num <= 100; num++) {
  if (num % 2 == 0) {
    console.log("Num is=", num);
  }
  console.log("Loop was ended");
}

// practise question
let gameNum = 25;
let userNum = prompt("Enter the number");
while (userNum != gameNum) {
  userNum = prompt("you entered wrong number, try again:");
}
console.log("Congratulation, your guess is correct");

// Strings
let str = "Vinay";
console.log(str[0]);
let str2 = `this is a programing language`;
console.log(str2);

// Template Literals
let obj = {
  item: "Volyball",
  price: 300,
  quality: "good",
};

let output = `the ${obj.item} rate or price is  ${obj.price}. build quality is ${obj.quality}.`;
console.log(output);

let str3 = "Vinay\nDevadiga";
console.log(str3.length);

// Strings Methods in JS
let str4 = "Hello Coders\t";
let str5 = "My name is Vinay";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());
console.log(str4.slice(0, 5));
console.log(str5.replace("Vinay", "Manu"));
let res = str4.concat(str5);
console.log(res);

//practise question
let fullname = prompt("Enter the full name without having space");
let username = "@" + fullname + fullname.length;
console.log(username);
