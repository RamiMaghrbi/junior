import React from "react";
import gpa from "../Assets/images/svg/gpa.svg";
import rank from "../Assets/images/svg/rank.svg";
import nonpass from "../Assets/images/svg/non-hours.svg";
import passed from "../Assets/images/svg/hours-pass.svg";
import remain from "../Assets/images/svg/remain.svg";


const Student = ({ student }) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="student-profile flex justify-center mt-4">
        <div className="w-[90%]">
          <div
            className=""
            style={{
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div className="p-1 bg-blue-700 h-9 flex">
              <span className="mr-5 text-white">معلومات الطالب</span>
            </div>
            <div>
              <div>
                <main class="h-full overflow-y-auto">
                  <div class="container  mx-auto grid">
                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3 bg-white" >
                      <div class="flex items-center p-4 bg-gradient-to-r from-gray-400 to-blue-500 rounded-lg shadow-xs  justify-around pt-3 ">
                        <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                          <img src={gpa} alt="gpa" className="w-9 h-9" />
                        </div>
                        <div>
                          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            المعدل التراكمي
                          </p>
                          <p class="text-lg font-semibold text-gray-700 ">
                            {student.rating}
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center p-4 bg-gradient-to-r from-gray-400 to-blue-500 rounded-lg shadow-xs justify-around ">
                        <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                          <img src={rank} alt="rank" className="w-9 h-9" />
                        </div>
                        <div>
                          <p class="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
                            الترتيب
                          </p>
                          <p class="text-lg font-semibold text-gray-700 ">
                            #{student.rank}
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center p-4 bg-gradient-to-r from-gray-400 to-blue-500 rounded-lg shadow-xs  justify-around ">
                        <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                          <img src={nonpass} alt="hours" className="w-9 h-9" />
                        </div>
                        <div>
                          <p class="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
                            عدد الساعات الشرطية
                          </p>
                          <p class="text-lg font-semibold text-gray-700 ">
                            {student.nonpass}
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center p-4 bg-gradient-to-r from-gray-400 to-blue-500 rounded-lg shadow-xs  justify-around ">
                        <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                          <img src={passed} alt="pass" className="w-9 h-9" />
                        </div>
                        <div>
                          <p class="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
                            عدد الساعات المجتازة
                          </p>
                          <p class="text-lg font-semibold text-gray-700 ">
                            {student.hours}
                          </p>
                        </div>
                      </div>
                      <div class="flex items-center p-4 bg-gradient-to-r from-gray-400 to-blue-500 rounded-lg shadow-xs  justify-around ">
                        <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                          <img src={remain} alt="pass" className="w-9 h-9" />
                        </div>
                        <div>
                          <p class="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
                            عدد الساعات الشرطية
                          </p>
                          <p class="text-lg font-semibold text-gray-700 ">
                            {student.remain}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <section class="w-full overflow-hidden dark:bg-gray-900">
    //   <div class="flex flex-col">
    //     <div class="  mx-auto  mt-20 flex">
    //       <img
    //         src={student.img}
    //         alt="pho"
    //         class="rounded-md lg:w-[8rem] lg:h-[8rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
    //       />

    //       <h1 class="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
    //         {student.studentName}
    //       </h1>
    //     </div>

    //     <div class="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
    //       <div class="w-full my-auto py-6 flex flex-col justify-center gap-2">
    //         <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
    //           <div class="w-full">
    //             <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
    //               <div class="flex flex-col py-3">
    //                 <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
    //                   University ID
    //                 </dt>
    //                 <dd class="text-lg font-semibold">{student.studentID}</dd>
    //               </div>
    //               <div class="flex flex-col py-3">
    //                 <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
    //                   Email
    //                 </dt>
    //                 <dd class="text-lg font-semibold">{student.email}</dd>
    //               </div>
    //             </dl>
    //           </div>
    //           <div class="w-full">
    //             <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
    //               <div class="flex flex-col pb-3">
    //                 <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
    //                   major
    //                 </dt>
    //                 <dd class="text-lg font-semibold">{student.major}</dd>
    //               </div>

    //               <div class="flex flex-col pt-3">
    //                 <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
    //                   academicStatus
    //                 </dt>
    //                 <dd class="text-lg font-semibold">
    //                   {student.academicStatus}
    //                 </dd>
    //               </div>
    //               <div class="flex flex-col pt-3">
    //                 <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
    //                   Email
    //                 </dt>
    //                 <dd class="text-lg font-semibold">
    //                   samuelabera87@gmail.com
    //                 </dd>
    //               </div>
    //             </dl>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Student;
