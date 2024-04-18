import React from "react";

const Info = ({ student }) => {
  return (
    <div className="flex justify-between items-start mx-14 mt-8 mb-4 border-b-2 border-gray-400">
      <div className="flex items-center  gap-2">
        <div className="relative">
          <img
            src={student.img}
            className="h-16 w-16 rounded-full object-cover"
            alt="rami"
          />
          <div className="absolute inset-0 rounded-full shadow-inner"></div>
        </div>
        <div className="ml-4 gap-1 flex flex-col ">
          <h2 className="font-bold text-gray-800 text-lg">
            {student.studentName}
          </h2>

          <p className="text-gray-600 ">{student.email}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-4 ">
          <p className="text-grey-600 mt-1 border-gray-400">{student.major}</p>
          <span className="border-gray-500 border-solid mt-0.5 border-l-4">
            {" "}
          </span>
          <p className="text-grey-600 mt-1">{student.semster}</p>
        </div>
        <div className="mr-5 py-2 inline-flex">
          <span className="text-gray-800 text-sm py-2 px-3   ">
            الحالة الاكاديمية{" "}
          </span>{" "}
          <span className=" py-2 px-3 "> {student.academicStatus} </span>
        </div>
      </div>
    </div>
  );
};
export default Info;
