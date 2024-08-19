import React, { useState } from "react";
import { Eyeoff } from "../icons/Eyeoff";
import { Eyeon } from "../icons/Eyeon";
import { adminMakeRequest } from "../helper/makeRequest";
import admin from "../assets/Images/admin.png";

const AdminCreate = () => {
  const handleClick = async () => {
    try {
      window.location.href = "http://localhost:5000/api/v1/auth/google";
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <main className="min-h-screen w-full px-8 py-7 bg-[#212121] text-white flex flex-col items-start justify-between gap-6">
      <div>
        <p className=" text-[32px] font-Playfair font-bold">Mayflower</p>
      </div>
      <div className=" w-full flex justify-between gap-6 max-h-screen items-start">
        <div className="w-[60%] flex flex-col items-start justify-start">
          <img
            src={admin}
            alt="admin"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-[40%]">
          <h2 className="text-[32px] font-bold font-Montserrat text-center text-white mb-8">
            Admin Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-lg font-light font-Montserrat mb-2"
                htmlFor="fullName"
              >
                Full name
              </label>
              <input
                className="w-full px-3 py-2 text-gray-900 rounded border-none focus:outline-none"
                id="fullName"
                type="text"
                placeholder="Value"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-lg font-light font-Montserrat mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-gray-900 rounded border-none focus:outline-none"
                id="email"
                type="email"
                placeholder="Value"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-lg font-light font-Montserrat mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-3 py-2 text-gray-900 rounded border-none focus:outline-none"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Value"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <Eyeon /> : <Eyeoff/>}
                </span>
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-lg font-light font-Montserrat mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-3 py-2 text-gray-900 rounded border-none focus:outline-none"
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Value"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <Eyeon /> : <Eyeoff/>}
                </span>
              </div>
            </div>
            <div className="mb-4 text-left">
              <a href="/" className="text-white text-lg font-Montserrat font-semibold">
                Forgot password?
              </a>
            </div>
            <button className="w-full bg-orange-500 text-white text-lg font-Montserrat font-semibold py-2 px-4 rounded hover:bg-orange-600">
              Create an account
            </button>
            <div className="flex items-center justify-center my-4">
              <span className="border-t border-[#AEAEAE] w-full"></span>
              <span className="px-3 font-Montserrat font-bold text-[#AEAEAE]">or</span>
              <span className="border-t border-[#AEAEAE] w-full"></span>
            </div>
            <button className="w-full bg-transparent text-[#CC5500] text-lg font-Montserrat font-semibold py-2 px-4 rounded border border-[#CC5500] hover:bg-[#CC5500] hover:text-white hover:border-black" onClick={handleClick}>
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminCreate;
