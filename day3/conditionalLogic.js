let x = 500;

console.log(x < 5);
console.log(x > 5);
console.log(x == 7); //check value only
console.log(x === 7); //check value and data type

// COMPARISON OPERATORS
// > larger than, < smaller than
// >= larger than or equals to, <= smaller than or equals to

if (x > 5) {
  console.log("x is larger than 5");
} else {
  console.log("x is not larger than 5");
}

if (x > 700) {
  console.log("x is larger than 700");
} else if (x > 400) {
  console.log("x is not smaller than 700 but larger than 400");
} else {
  console.log("x is smaller than 400");
}

//LOGIC GATES
// AND (&&)
// OR (||)
// NOT (!)

age = 10;
weight = 70;

if (age > 15 && weight > 50) {
  console.log("Overweight for this age");
} else {
  console.log("Not overweight for this age");
}

let money = true;
let vip = false;
if (money || vip) {
  console.log("Can enter the club");
} else {
  console.log("Cannot enter the club");
}

let y = 5;
if (!(y > 5)) {
  console.log("y is larger than 5");
}else{
    console.log("y is equals to 5");
}

