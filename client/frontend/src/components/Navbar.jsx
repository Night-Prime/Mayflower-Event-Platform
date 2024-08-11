import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full justify-between items-center flex py-4 px-6 sm:py-6 sm:px-8 lg:py-8 lg:px-12">
      <p className="font-Playfair font-bold text-[20px] sm:text-[24px] lg:text-[32px]">
        Mayflower
      </p>
      <div className="font-Playfair">
        <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 tracking-wide text-[#c8c8c8]">
          <li className="relative pb-1 sm:pb-2">
            <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
              Home
            </span>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
              About
            </span>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
              Contact Us
            </span>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
              Events
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
