import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

import Logo from "../Assets/images/AIU-logo.png";

const Navbar = () => {
  const menuItems = [
    { icon: <FaHome size={20} className="mr-4" />, text: "Home", path: "/" },
    {
      icon: <FaCalendarAlt size={20} className="mr-4" />,
      text: "Semester Calendar",
      path: "/calendar",
    },
    {
      icon: <FaMoneyBillWave size={20} className="mr-4" />,
      text: "Account",
      path: "/account",
    },
    {
      icon: <FaBookOpen size={20} className="mr-4" />,
      text: "Courses",
      path: "/courses",
    },
    {
      icon: <FaClipboardCheck size={20} className="mr-4" />,
      text: "Pre-registering",
      path: "/preregister",
    },
    {
      icon: <FaClipboardList size={20} className="mr-4" />,
      text: "Final Registering",
      path: "/finalregister",
    },
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
            {menuItems.map(({ icon, text, path }, index) => {
              return (
                <div key={index} className=" py-4">
                  <li className=" flex cursor-pointer   rounded-2xl mx-auto p-2 text-white hover:bg-blue-400">
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        ["nav-link", isActive ? "active" : null].join(" ")
                      }
                      activeClassName="active"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {icon}
                      <span>{text}</span>
                    </NavLink>
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
