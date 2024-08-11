import React from "react";

export const Navbar = () => {
  return (
    <div className=" w-full justify-between items-center flex py-[24px] px-[56px]">
      <p className=" font-Playfair font-bold text-[32px]">Mayflower</p>
      <div className="font-Playfair">
      <ul className="flex items-center gap-5 tracking-wide text-[#c8c8c8]">
      <li className="relative pb-2">
        <span className=" cursor-pointer text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
          Home
        </span>
      </li>
      <li className="relative pb-2">
        <span className=" cursor-pointer text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
          About
        </span>
      </li>
      <li className="relative pb-2">
        <span className=" cursor-pointer text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
          Contact Us
        </span>
      </li>
      <li className="relative pb-2">
        <span className=" cursor-pointer text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
          Events
        </span>
      </li>
    </ul>
      </div>
    </div>
  );
};
