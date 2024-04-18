// import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar.js";
// import Student from "./components/Student";
import Course from "./components/Course.js";
// import siper from "./components/Test.js";
import Info from "./components/Info.js";
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
  return (
    <div className="App  ">
      <Pre student={studentData} />
    </div>
  );
}

export default App;
