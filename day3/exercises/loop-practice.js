// Print 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Print even numbers 1-20
for (let i = 2; i <= 20; i += 2) {
  if (i % 2 === 0) 
    console.log(i);
}

// Count down 5 to 1
let k = 5;
while (k >= 1) {
  console.log(k);
  k--;
}

// Print "Hello!" 3 times
let i = 0;
do {
  console.log("Hello!");
  i++;
} while (i < 3);
