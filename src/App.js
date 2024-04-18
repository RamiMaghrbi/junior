// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import Sidebar from "./components/Sidebar.js";
// import Student from "./components/Student";
import Course from "./components/Course.js";
// import siper from "./components/Test.js";
import Info from "./components/Info.js";
import LoginForm from './Login.js';
import Pre from "./pages/Preregister.js";
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
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state variable

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true); // Set state to logged in after successful login
  };

  return (
    <div className="App">
      {isLoggedIn ? <Pre student={studentData} /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
}

export default App;
