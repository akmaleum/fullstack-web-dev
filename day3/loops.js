// loops basically help us to repeat a block of code multiple times until a certain condition is met

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

let x = 0;

// while (x < 6) {
//     console.log(x);
//     x = x + 2
//     // x += 2
// }

// do {
//   console.log(x);
//   x += 2;
// } while (x < 6);

//FOR EACH LOOP
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arrayOfNumbers.forEach(function (currentValue, index, array) {
//   //console.log(currentValue);
//   console.log(index);
// });
arrayOfNumbers.forEach((element) => {
  console.log(element);
});
