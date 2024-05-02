import "./App.css";
import Avi from "./pages/Available.js";
import Economic from "./pages/Economic.js";
import Home from "./pages/Home.js";
import LoginForm from "./pages/Login.js";
import Courses from "./pages/Available.js";
import Side from "./components/Sidebar.js";
import Calendar from "./pages/Calender.js";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/account" element={<Economic />}></Route>
      </Routes>
      <Side /> */}
      <div className="flex flex-row-reverse w-full">
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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <Economic />
{/* <Side /> */
}
{
  /* <Home />
<LoginForm /> */
}
