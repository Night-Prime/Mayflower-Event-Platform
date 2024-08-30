import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { Right } from '../icons/Right.jsx';

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full justify-between items-center flex py-6 px-6 sm:px-8 lg:px-12 bg-[#212121] bg-opacity-70 backdrop-blur-md shadow-lg">
      <p className="font-Playfair font-bold text-[20px] sm:text-[24px] lg:text-[32px] cursor-pointer">
        <RouterLink to="/">Mayflower</RouterLink>
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
            <RouterLink to="/booking">
              <span className="cursor-pointer text-[16px] sm:text-[18px] font-bold pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Events
              </span>
            </RouterLink>
          </li>
          <li className="relative pb-1 sm:pb-2">
            <button className="bg-transparent border-[2px] border-[#CC5500] text-[#CC5500]  flex items-center justify-center rounded-lg text-md font-semibold font-Montserrat w-44 py-2 px-4">
              <RouterLink
                to="/booking"
                className=" flex items-center justify-center"
              >
                Book a tour
                <span className=" text-[#CC5500] ml-2">
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
