import React from "react";
import Info from "../components/Info";
import Stu from "../components/Student";
import Bp from "../Assets/images/aiu-1.jpg"

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
    <div className="flex flex-col w-full">
      <div className="flex flex-row-reverse w-full relative"
        style={{
          backgroundImage: `url(${Bp})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: "80%",

        }}>

        {/* <Student student={studentData} className="text-white" /> */}
        <div className="flex-grow min-h-screen pb-10 ">
          <Info student={studentData} />
          <Stu student={studentData} />
          {/* <Student /> */}
        </div>
      </div>
    </div>
  );
}
export default prof;
