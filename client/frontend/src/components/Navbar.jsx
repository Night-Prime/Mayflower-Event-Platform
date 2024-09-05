import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Right } from "../icons/Right.jsx";
import { Menu, X } from "react-feather"; // Using X icon from react-feather

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-50 w-full flex justify-between items-center py-6 px-6 sm:px-8 lg:px-12 bg-[#212121] bg-opacity-70 backdrop-blur-md shadow-lg">
      <p className="font-Playfair font-bold text-[20px] sm:text-[24px] lg:text-[32px] cursor-pointer">
        <RouterLink to="/">May Gardens</RouterLink>
      </p>

      <div className="sm:hidden z-50">
        {menuOpen ? (
          <X onClick={toggleMenu} className="text-[#c8c8c8] cursor-pointer" />
        ) : (
          <Menu onClick={toggleMenu} className="text-[#c8c8c8] cursor-pointer" />
        )}
      </div>

      <div
        className={`fixed inset-y-0 right-0 w-3/4 sm:bg-[#212121] lg:bg-transparent  transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:static sm:w-auto sm:flex sm:transform-none`}
      >
        <ul className="flex flex-col sm:flex-row items-center gap-5 tracking-wide text-[#c8c8c8] p-6 sm:p-0">
          <li className="relative pb-1 sm:pb-2">
            <RouterLink to="/" onClick={toggleMenu}>
              <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Home
              </span>
            </RouterLink>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <RouterLink to="/gallery" onClick={toggleMenu}>
              <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Events
              </span>
            </RouterLink>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <button className="bg-transparent border-[2px] border-[#CC5500] text-[#CC5500] flex items-center justify-center rounded-lg text-md font-semibold font-Montserrat w-44 py-2 px-4">
              <RouterLink
                to="/booking"
                className="flex items-center justify-center"
                onClick={toggleMenu}
              >
                Book a tour
                <span className="text-[#CC5500] ml-2">
                  <Right />
                </span>
              </RouterLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
