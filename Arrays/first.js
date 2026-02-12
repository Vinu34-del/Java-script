let student_marks = [90, 40, 89, 55, 98];
console.log(student_marks);
console.log(student_marks.length);

// indexing

let marks = [40, 50, 60, 30, 80, 70];
console.log(marks);

let index = marks[0]; //40
console.log(index);

let index_2 = (marks[0] = 30);
console.log(index_2); //30

// for loop over the array
let heros = ["yash", "Sudeep", "Doly", "DBoss", "Dhanveer"];
for (let index = 0; index < heros.length; index++) {
  console.log(heros[index]);
}

// for of loop
let city = ["Banglore", "Uttarakannada", "Bijapura", "Udupi", "Karwar"];
for (let cities of city) {
  console.log(cities);
}

//Practise QS
let student = [85, 97, 44, 37, 76, 60];
let total = 0;
for (let val of student) {
  total += val;
}
let avg = total / student.length;
console.log(`the averege marks of entire class ${avg}.`);

let number = [1, 2, 3, 4, 5, 6];
let count = 0;
for (i of number) {
  if (i % 2 == 0) {
    count = count + 1;
  }
}
console.log(`the even number is ${count}`);
