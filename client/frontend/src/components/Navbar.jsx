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
    <div className="sticky top-0 z-50 w-full h-20 flex justify-between items-center py-6 px-6 sm:px-8 lg:px-12 bg-[#212121] bg-opacity-70 backdrop-blur-md shadow-lg">
      <p className="font-Quicksand font-bold text-xl lg:text-3xl cursor-pointer">
        <RouterLink to="/">May Gardens</RouterLink>
      </p>

      <div className="md:hidden z-50">
        {menuOpen ? (
          <X onClick={toggleMenu} className="text-[#c8c8c8] cursor-pointer" />
        ) : (
          <Menu
            onClick={toggleMenu}
            className="text-[#c8c8c8] cursor-pointer"
          />
        )}
      </div>

      <div
        className={`fixed inset-y-0 right-0 xl:w-3/4 sm:w-1/3 ${
          menuOpen ? "bg-[#212121] h-screen" : "bg-transparent"
        }  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:static md:w-auto md:flex md:transform-none z-40`}
      >
        <ul className="flex flex-col md:flex-row items-center font-Quicksand justify-end gap-5 tracking-wide text-[#c8c8c8] p-6 md:p-0 w-full">
          <li className="relative pb-1 md:pb-2">
            <RouterLink to="/" onClick={() => menuOpen && toggleMenu()}>
              <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Home
              </span>
            </RouterLink>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <RouterLink to="/gallery" onClick={toggleMenu}>
              <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Gallery
              </span>
            </RouterLink>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <button className="bg-transparent border-[2px] border-goldLight text-goldLight flex items-center justify-center rounded-lg text-md font-semibold w-44 py-2 px-4">
              <RouterLink
                to="/booking"
                className="flex items-center justify-center"
                onClick={toggleMenu}
              >
                Book a tour
                <span className="text-goldLight ml-2">
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
