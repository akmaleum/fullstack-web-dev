let students = [
  {
    name: "Akmal",
    age: 20,
    isEnrolled: true,
  },
  {
    name: "Nurjeha",
    age: 22,
    isEnrolled: false,
  },
  {
    name: "Meow",
    age: 21,
    isEnrolled: true,
  },
];

// students.forEach(function (student) {
//   console.log(student.name);
// });

// students.forEach(function (student) {
//   if (student.isEnrolled) {
//     console.log(student.name);
//   }
// });

students.push({
    name: "Rawr",
    age: 23,
    isEnrolled: true,
})

students.pop();