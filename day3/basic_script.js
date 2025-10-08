// BASICS
let x = 5; // ES4
let y = 10; // ES5+

console.log(x + y);

console.log("1" + "1");

const myName = "Akmal";

//myName = "Hisyam";

console.log("My name is " + myName);

console.log(x * x);

console.log(x + " times " + x + " = " + x * x);

// PRIMITIVE DATA TYPES
// Integer
// Decimal (double, float)
// Boolean (true, false) (0,1)
// String (text)

let distance = 5.5;
let goThere = true;

console.log(distance);
console.log(goThere);

console.log(typeof "goThere");

// NON PRIMITIVE DATA TYPES
// Arrays (represented by [])
// Objects (represented by {})

let students = ["Akmal", "Hisyam", "Afiq", "Aiman"];
console.log(students[1]);

let myDetails = {
  name: "Akmal",
  age: 23,
  city: "Ipoh",
  students: students,
};
console.log(myDetails.students[1]);

let details = [
  {
    name: "Akmal",
    age: 23,
    city: "Ipoh",
  },
  {
    name: "Hisyam",
    age: 23,
    city: "KL",
  },
  {
    name: "Riza",
    age: 23,
    city: "Penang",
  },
];

console.log(details);
