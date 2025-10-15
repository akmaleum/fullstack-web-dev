let promise = fetch("https://jsonplaceholder.typicode.com/users");

console.log("Before Promise")

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(`${user.name} (${user.email})`);
//     });
//   });

  promise
  .then((response) => response.json())
  .then((users) => {
        users.forEach((user) => {
          console.log(`${user.name} (${user.email})`);
        });
      });

console.log("After Promise")

fetch("https://jsonplaceholder.typicode.com/todos/1")
   .then(response => response.json())
   .then(data => {
     console.log("Title:", data.title);
   });