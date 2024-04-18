// // export default DefaultSidebar;
// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// // import { MdFavorite, MdHelp } from "react-icons/md";
// import { FaHome } from "react-icons/fa";
// import { FaCalendarAlt } from "react-icons/fa";
// import { FaMoneyBillWave } from "react-icons/fa";
// import { FaBookOpen } from "react-icons/fa";
// import { FaClipboardCheck } from "react-icons/fa";
// import { FaClipboardList } from "react-icons/fa";

// import Logo from "../Header/AIU-logo.png";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const menuItems = [
//     { icon: <FaHome size={20} className="mr-4" />, text: "home" },
//     {
//       icon: <FaCalendarAlt size={20} className="mr-4" />,
//       text: "Semester Calendar",
//     },
//     { icon: <FaMoneyBillWave size={20} className="mr-4" />, text: "Account " },
//     {
//       icon: <FaBookOpen size={20} className="mr-4" />,
//       text: "courses",
//     },
//     {
//       icon: <FaClipboardCheck size={20} className="mr-4" />,
//       text: "preregisterting",
//     },
//     {
//       icon: <FaClipboardList size={20} className="mr-4" />,
//       text: "final-registering",
//     },
//   ];

//   return (
//     <div className="max-w-[1640px] mx-auto flex justify-between items-center flex-row-reverse p-4 shadow-sm">
//       {/* Left side */}
//       <div className="flex items-center">
//         <div onClick={() => setNav(!nav)} className="cursor-pointer">
//           <AiOutlineMenu size={30} />
//         </div>
//         {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
//           Best <span className="font-bold">Eats</span>
//         </h1> */}
//         {/* <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
//           <p className="bg-black text-white rounded-full p-2">Delivery</p>
//           <p className="p-2">Pickup</p>
//         </div> */}
//       </div>

//       {/* Search Input */}
//       {/* <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
//         <AiOutlineSearch size={25} />
//         <input
//           className="bg-transparent p-2 w-full focus:outline-none"
//           type="text"
//           placeholder="Search foods"
//         />
//       </div> */}
//       {/* Cart button */}
//       {/* <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full border border-black px-5 ">
//         <BsFillCartFill size={20} className="mr-2" /> Cart
//       </button> */}

//       {/* Mobile Menu */}
//       {/* Overlay */}
//       {nav ? (
//         <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0  "></div>
//       ) : (
//         ""
//       )}

//       {/* Side drawer menu */}
//       <div
//         className={
//           nav
//             ? "fixed top-0 left-0 w-[200px] h-screen bg-white z-10 duration-300"
//             : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
//         }
//       >
//         <AiOutlineClose
//           onClick={() => setNav(!nav)}
//           size={30}
//           className="absolute right-4 top-4 cursor-pointer"
//         />
//         {/* <h2 className="text-2xl p-4">
//           Best <span className="font-bold">Eats</span>
//         </h2> */}
//         <div className="flex items-center flex-col mb-6 mt-8">
//           <img src={Logo} className="w-1/3 text-center" alt="Menu" />
//         </div>

//         <nav>
//           <ul className="flex flex-col items-end text-gray-800">
//             {menuItems.map(({ icon, text }, index) => {
//               return (
//                 <div key={index} className=" py-4">
//                   <li className=" flex cursor-pointer   rounded-2xl mx-auto p-2 hover:text-white hover:bg-blue-400">
//                     {text} {icon}
//                   </li>
//                 </div>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

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
    { icon: <FaHome size={20} className="mr-4" />, text: "home" },
    {
      icon: <FaCalendarAlt size={20} className="mr-4" />,
      text: "Semester Calendar",
    },
    { icon: <FaMoneyBillWave size={20} className="mr-4" />, text: "Account " },
    {
      icon: <FaBookOpen size={20} className="mr-4" />,
      text: "courses",
    },
    {
      icon: <FaClipboardCheck size={20} className="mr-4" />,
      text: "preregisterting",
    },
    {
      icon: <FaClipboardList size={20} className="mr-4" />,
      text: "final-registering",
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
            {menuItems.map(({ icon, text }, index) => {
              return (
                <div key={index} className=" py-4">
                  <li className=" flex cursor-pointer   rounded-2xl mx-auto p-2 text-white hover:bg-blue-400">
                    {text} {icon}
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
