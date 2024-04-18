import React from "react";
import Info from "../components/Info";
import Stu from "../components/Student";
import Sidebar from "../components/Sidebar";
const studentData = {
  img: require("../Assets/images/person.jpg"),
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
function prof() {
  return (
    <div className="flex flex-row-reverse w-full">
      <div>
        <Sidebar />
      </div>
      {/* <Student student={studentData} className="text-white" /> */}
      <div className="w-full flex flex-col">
        <Info student={studentData} />
        <Stu student={studentData} />
        {/* <Student /> */}
      </div>
    </div>
  );
}
export default prof;
