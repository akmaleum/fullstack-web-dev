let username = "admin";
let isLoggedIn = false;

if (isLoggedIn) {
  if (username === "admin") {
    console.log("Welcome back, Admin!");
  } else {
    console.log("Welcome, user.");
  }
} else {
  console.log("Please log in.");
}

let message = isLoggedIn
  ? username == "admin"
    ? "Welcome back, Admin"
    : "Welcom, user"
  : "Please log in.";
