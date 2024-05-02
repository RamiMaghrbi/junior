import "./App.css";

import Avi from "./pages/Available.js";
import Economic from "./pages/Economic.js";
import Home from "./pages/Home.js";
import LoginForm from "./pages/Login.js";

import Courses from "./pages/Available.js";
import Side from "./components/Sidebar.js";
import Calendar from "./pages/Calender.js";
import { Routes, Route } from "react-router-dom";

import Preregister from "./pages/Pregisterpages.js";


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
  return (
    <div className="App">
      <div className="flex flex-row-reverse ">
        <div>
          <Side />
        </div>
        {/* <Student student={studentData} className="text-white" /> */}
        <div className="w-full flex flex-col">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/account" element={<Economic />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/preregister" element={<Preregister />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

