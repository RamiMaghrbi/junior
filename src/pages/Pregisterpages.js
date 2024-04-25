import React from "react";
import BeforPre from "../components/preregister";
import Info from "../components/Info";
import Sidebar from "../components/Sidebar";
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

function Pre() {
    return (
    <div className="flex flex-row relative" 
         style={{ 
             backgroundImage: `url(${Bp})`, 
             backgroundSize: 'cover', // Change to 'auto' for normal size
             backgroundRepeat: 'no-repeat',
             backgroundAttachment: 'fixed' // Add this line to make the image fixed when scrolling
         }}
    >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="fixed top-0 left-0 h-screen w-[200px] bg-[#f0f0f0] overflow-auto">
            <Sidebar />
        </div>
        <div className="flex-grow min-h-screen pl-[200px] pb-10">
            <Info student={studentData} />
            <BeforPre />
        </div>
    </div>
);
}

export default Pre;
