import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Email } from "../icons/Email.jsx";
import { Facebook } from "../icons/Facebook.jsx";
import { Instagram } from "../icons/Instagram.jsx";
import { Linkedin } from "../icons/Linkedin.jsx";
import { Location } from "../icons/Location.jsx";
import { Phone } from "../icons/Phone.jsx";
import { Right } from "../icons/Right.jsx";
import { X } from "../icons/X.jsx";

export const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#212121] my-10">
      <div className="h-full flex flex-col px-4 sm:px-6 lg:px-10 mt-8 justify-end">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-20">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-20 w-full lg:w-1/2">
            <div className="flex flex-col font-Playfair gap-1 sm:gap-2">
              <p className="text-[20px] sm:text-[24px] lg:text-[32px] font-normal">
                Join our newsletter
              </p>
              <p className="text-[14px] sm:text-[16px] lg:text-[24px] font-normal">
                Insider Tips for Planning Your Event
              </p>
            </div>

            <div className="flex flex-col font-Playfair gap-1 sm:gap-2">
              <p className="text-[20px] sm:text-[24px] lg:text-[32px] font-normal">
                May Gardens
              </p>
              <p className="text-[12px] sm:text-[14px] lg:text-[18px] font-normal">
                Where a harmonious blend of nature's beauty and elegant design
                come together to create extraordinary events.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:gap-20 sm:gap-10 mt-4 lg:w-1/2 text-white">
            <div className="flex lg:flex-row border-2 rounded-full border-[#CC5500] p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#212121] text-[12px] sm:text-[14px] lg:text-[18px] font-Montserrat font-normal p-2 sm:p-3 rounded-full flex-grow focus:outline-none"
              />
              <button className="bg-[#E4572E] text-white p-1 font-bold font-Montserrat text-[12px] sm:text-[14px] lg:text-[18px] py-1 sm:py-2 px-4 sm:px-6 w-[150px] sm:w-48 lg:px-8 rounded-full flex items-center justify-center lg:mt-0">
                Submit
                <span className="ml-2">
                  <Right />
                </span>
              </button>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 text-center lg:text-left">
              <div className="flex-1">
                <h4 className="font-Playfair text-[14px] sm:text-[16px] lg:text-[20px] mb-2 sm:mb-4">
                  Company
                </h4>
                <ul className="font-Montserrat font-medium text-[#AEAEAE] text-[12px] sm:text-[14px] lg:text-[18px]">
                  <li className="mb-1 sm:mb-2">
                    <RouterLink to="/">Home</RouterLink>
                  </li>
                  <li className="mb-1 sm:mb-2">
                    <a href="#about" className="hover:text-gray-400">
                      <RouterLink to="/about">About</RouterLink>
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-gray-400">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="font-Playfair text-[14px] sm:text-[16px] lg:text-[20px] mb-2 sm:mb-4">
                  Events
                </h4>
                <ul className="font-Montserrat font-medium text-[#AEAEAE] text-[12px] sm:text-[14px] lg:text-[18px]">
                  <li className="mb-1 sm:mb-2">
                    <RouterLink to="/gallery">Gallery</RouterLink>
                  </li>
                  <li className="mb-1 sm:mb-2">
                    <RouterLink to="/faq">FAQ</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/booking">Event Booking</RouterLink>
                  </li>
                </ul>
              </div>

              {/* <div className="flex-1">
                <h4 className="font-Playfair text-[14px] sm:text-[16px] lg:text-[20px] mb-2 sm:mb-4">
                  Contact
                </h4>
                <ul className="w-36 sm:w-44 font-Montserrat font-medium text-[#AEAEAE] text-[12px] lg:text-[18px] flex flex-col justify-center items-center lg:items-start">
                  <li className="mb-1 sm:mb-2 flex items-center lg:justify-center">
                    <span className="mr-1">
                      <Phone />
                    </span>{" "}
                    (Number here)
                  </li>
                  <li className="mb-1 sm:mb-2 flex items-center lg:justify-center">
                    <span className="mr-1">
                      <Email />
                    </span>{" "}
                    (Email)
                  </li>
                  <li className="mb-1 sm:mb-2 flex items-center lg:justify-center">
                    <span className="mr-1">
                      <Location />
                    </span>{" "}
                    (Location)
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className=" w-full mt-6 lg:mt-2xl flex flex-col md:flex-row md:items-center justify-between border-t border-t-white py-4 ">
          <div className="flex w-full lg:gap-3 gap-4 md:justify-start justify-center text-sm lg:text-lg font-Montserrat">
            <p>&copy; 2024</p>
            <p className="font-bold">May Gardens</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex w-full md:justify-end justify-center gap-10 mt-4 lg:mt-0">
            <Instagram />
            <Facebook />
            <Linkedin />
            <X />
          </div>
        </div>
      </div>
    </div>
  );
};
