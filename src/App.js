// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";


import Avi from "./pages/Available.js";
import Economic from "./pages/Economic.js";
import Home from "./pages/Home.js";
import LoginForm from "./pages/Login.js";
import Preregister from "./pages/Pregisterpages.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const studentData = {
  img: require("./Assets/images/person.jpg"),
  studentName: "محمد عدنان تيناوي ",
  studentID: "201919151",
  email: "sy.edu@201919151",
  major: "هندسة المعلوماتية والاتصالات",
  academicStatus: "منتظم",
  rating: "2.5",
  hours: "50",
  semster: "هندسة الذكاء الصنعي ",
  remain: "80",
  rank: "50",
  pass: "119",
  nonpass: "20",
};
const accountData = {
  positive: "3,000,000",
  negative: "2,000,000",
  ammount: "0",
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state variable

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true); // Set state to logged in after successful login
  };

  return (
    <div className="App  ">
      <Preregister/>

      {/* <Pre student={studentData} /> */}
    </div>
  );
}

export default App;
