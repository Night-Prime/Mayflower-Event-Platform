import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full justify-between items-center flex py-4 px-6 sm:py-6 sm:px-8 lg:py-8 lg:px-12">
      <p className="font-Playfair font-bold text-[20px] sm:text-[24px] lg:text-[32px]">
        Mayflower
      </p>
      <div className="font-Playfair">
        <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 tracking-wide text-[#c8c8c8]">
          <li className="relative pb-1 sm:pb-2">
            <RouterLink to="/">
              <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Home
              </span>
            </RouterLink>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <Link to="about" smooth={true} duration={500} offset={-70}>
              <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                About
              </span>
            </Link>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Contact Us
              </span>
            </Link>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <RouterLink to="/booking">
              <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Events
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
