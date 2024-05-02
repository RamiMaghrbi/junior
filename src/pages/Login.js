import React, { useState } from "react";
import loginImage from "../Assets/images/Aiu.jpg";
import logoImage from "../Assets/images/aiu-building.jpg";

import LeftImage from "../Assets/images/Aiu.jpg";
import AIULogo from "../Assets/images/AIU-logo.png";
import ActiveSlider from "../components/ActiveSlider";

function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const handleLogin = () => {};

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex-1 max-w-md w-3/4 bg-white rounded-lg shadow-md p-8 h-screen flex flex-col justify-center">
        <img
          src={logoImage}
          alt="Logo"
          className="block mx-auto mb-8 max-w-3/4"
        />
        <h1 className="text-5xl font-bold mb-8 text-center text-blue-900">
          Log In
        </h1>
        <form onSubmit={handleLogin} className="flex-1">
          <div className="mb-4 flex flex-row-reverse items-center">
            <label htmlFor="id" className="font-bold mr-2">
              ID
            </label>
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="id"
              placeholder="ID Number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-4 placeholder-gray-500 text-gray-700 opacity-50 text-left"
            />
          </div>

          <div className="mb-4 flex flex-row-reverse items-center">
            <label htmlFor="password" className="font-bold mr-2">
              Password
            </label>
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-4 placeholder-gray-500 text-gray-700 opacity-50 text-left"
            />
          </div>

          <div class="flex flex-row-reverse items-center mb-4">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              class="ms-2 text-2sm font-large text-gray-900 dark:text-gray-300"
            >
              Remember Password&nbsp;&nbsp;
            </label>
          </div>

          <button
            type="submit"
            class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-2xl py-4 px-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-3sm px-4 py-4 text-center me-2 mb-2rounded transition-colors duration-300"
          >
            Log In
          </button>
        </form>
      </div>
      <div className="flex-1 h-full relative">
        <img
          src={LeftImage}
          alt="Login background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-[.47]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-70"></div>
        <img
          src={AIULogo}
          alt="AIU Logo"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24"
        />

        <div className="absolute bottom-0 left-0 w-full">
          <ActiveSlider />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
