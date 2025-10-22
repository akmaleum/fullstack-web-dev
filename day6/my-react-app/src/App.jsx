import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clicker from "./components/Clicker.jsx";
import NameForm from "./components/NameForm.jsx";
import LoginForm from "./components/LoginForm.jsx"; 
import UserCard from "./components/UserCard.jsx";

function App() {
  const [] = useState(0);

  return (
    <>
      <Clicker />
      {/* <NameForm /> */}
      {/* <LoginForm /> */}
      <UserCard />
    </>
  );
}

export default App;
