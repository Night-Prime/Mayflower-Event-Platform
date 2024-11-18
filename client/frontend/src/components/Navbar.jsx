import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Right } from "../icons/Right.jsx";
import { Menu, X } from "react-feather";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-50 w-full h-14 xl:h-24 xl:py-2 bg-transparent m-0 xl:my-2">
      <div className="bg-mayblack rounded-b-2xl xl:rounded-2xl w-[100%] xl:w-[96%] h-full flex justify-between items-center mx-auto xl:py-6 px-2 sm:px-2 lg:px-6 ">
        <p className="font-Cinzel font-bold text-xl lg:text-3xl cursor-pointer">
          <RouterLink to="/">
            <img
              src="https://ik.imagekit.io/0y99xuz0yp/May%20Gardens%20Elements-01.png?updatedAt=1727604763546"
              alt="Main Logo"
              className="w-[20%] object-contain"
            />
          </RouterLink>
        </p>

        <div className="md:hidden z-50 text-white">
          {menuOpen ? (
            <X onClick={toggleMenu} className=" cursor-pointer" />
          ) : (
            <Menu onClick={toggleMenu} className=" cursor-pointer" />
          )}
        </div>

        <div
          className={`fixed inset-y-0 right-0 xl:w-3/4 sm:w-1/3 ${
            menuOpen ? "bg-gardens h-screen" : "bg-transparent"
          }  ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:w-auto md:flex md:transform-none z-40`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-end gap-5 tracking-wide  p-6 md:p-0 w-full">
            <li className="relative">
              <RouterLink to="/" onClick={() => menuOpen && toggleMenu()}>
                <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                  Home
                </span>
              </RouterLink>
            </li>
            <li className="relative">
              <RouterLink to="/memories" onClick={toggleMenu}>
                <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                  About
                </span>
              </RouterLink>
            </li>
            <li className="relative">
              <RouterLink to="/memories" onClick={toggleMenu}>
                <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                  Moments
                </span>
              </RouterLink>
            </li>
            <li className="relative">
              <button className="shadow-md bg-transparent border-2 border-gardenslight text-white flex items-center justify-center rounded-lg text-[12px] xl:text-[18px] font-normal w-44 py-2 px-4">
                <RouterLink
                  to="/booking"
                  className="flex items-center justify-center"
                  onClick={toggleMenu}
                >
                  Book a tour
                  <span className="text-white ml-2">
                    <Right />
                  </span>
                </RouterLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
