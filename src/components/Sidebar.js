import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

import Logo from "../Assets/images/AIU-logo.png";


const Navbar = () => {
  const menuItems = [
    { icon: <FaHome size={20} className="mr-4" />, text: "home"},
    { icon: <FaMoneyBillWave size={20} className="mr-4" />, text: "Account "},
    { icon: <FaBookOpen size={20} className="mr-4" />, text: "courses" },
    { icon: <FaClipboardCheck size={20} className="mr-4" />, text: "preregisterting" },

  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center flex-row-reverse  shadow-sm">
      <div
        className="w-[200px] min-h-screen bg-[#0e1e7d]"
        // className="w-[200px] h-screen "
        style={{
          background: "rgb(14,30,125)",
          background:
            "linear-gradient(180deg, rgba(14,30,125,1) 33%, rgba(65,68,166,1) 87%)", //   background:
          //     "linear-gradient(0deg, rgb(28 53 58) 0%, rgb(28 18 93) 76%)",
        }}
      >
        <div className="flex items-center flex-col mb-6 mt-8">
          <img src={Logo} className="w-1/3 text-center" alt="Menu" />
        </div>
        <nav>
          <ul className="flex flex-col items-end text-gray-800">
            {menuItems.map(({ icon, text, href }, index) => {
              return (
                <div key={index} className=" py-4 w-full flex ">
                  <li className=" flex flex-row-reverse cursor-pointer mx-auto p-2 text-white hover:bg-blue-400 w-full">
                    {icon} {text}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
