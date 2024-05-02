import React from "react";
import BeforPre from "../components/preregister";
import Info from "../components/Info";
import Bp from "../Assets/images/aiu-1.jpg";

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

function Pre() {
  return (
    <div className="flex flex-col w-full">
      <div
        className="flex flex-row  h-full w-full relative"
        style={{
          backgroundImage: `url(${Bp})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>

        <div className="flex-grow w-full pb-10">
          <Info student={studentData} />
          <div style={{ maxHeight: "100vh", overflow: "auto" }}>
            <BeforPre />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pre;
