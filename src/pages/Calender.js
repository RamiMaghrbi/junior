import React from "react";
import Cale from "../components/Cale";
import Info from "../components/Info";
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
function Calendar() {
  return (
    <div className="w-full flex flex-col">
      <Info student={studentData} />
      <Cale />
    </div>
  );
}
export default Calendar;
