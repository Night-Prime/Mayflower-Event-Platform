import React from "react";
import { Instagram } from "../icons/instagram";
import { Facebook } from "../icons/facebook";
import { Linkedin } from "../icons/linkedin";
import { Phone } from "../icons/phone";
import { Email } from "../icons/email";
import { Location } from "../icons/location";
import { X } from "../icons/X";
import { Right } from "../icons/Right";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col px-6 mt-20">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20">
        <div className="flex flex-col gap-12 lg:gap-20 w-full lg:w-1/2">
          <div className="flex flex-col font-Playfair gap-4">
            <p className="text-[32px] lg:text-[40px] font-normal">
              Join our newsletter
            </p>
            <p className="text-[20px] lg:text-[24px] font-normal">
              Insider Tips for Planning Your Event
            </p>
          </div>
          <div className="flex flex-col font-Playfair gap-4">
            <p className="text-[28px] lg:text-[32px] font-normal">
              Mayflower Event Gardens
            </p>
            <p className="text-[16px] lg:text-[18px] font-normal">
              Where a harmonious blend of nature's beauty and elegant design
              come together to create extraordinary events.
            </p>
          </div>
        </div>

        <div className="bg-[#212121] w-full lg:w-1/2 flex flex-col gap-12 p-6 text-white">
          {/* Email Subscription */}
          <div className="flex w-full  lg:flex-row  border-4 rounded-full border-[#CC5500] p-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#212121] text-[16px] lg:text-[18px] font-Montserrat font-normal p-3 rounded-full flex-grow focus:outline-none"
            />
            <button className="bg-[#E4572E] text-white p-1 font-bold font-Montserrat text-[16px] lg:text-[18px] py-2 px-6 w-[221px]  sm:w-48 lg:px-8 rounded-full flex items-center justify-center  lg:mt-0">
              Submit
              <span className="ml-2">
                <Right />
              </span>
            </button>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-12 text-center lg:text-left">
            <div className="flex-1">
              <h4 className="font-Playfair text-[18px] mb-4">Company</h4>
              <ul className="font-Montserrat font-medium text-[#AEAEAE] text-[16px] lg:text-[18px]">
                <li className="mb-2">
                  <a href="#home" className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="hover:text-gray-400">
                    About
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
              <h4 className="font-Playfair text-[18px] mb-4">Events</h4>
              <ul className="font-Montserrat font-medium text-[#AEAEAE] text-[16px] lg:text-[18px]">
                <li className="mb-2">
                  <a href="#gallery" className="hover:text-gray-400">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-gray-400">
                    Event booking
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-Playfair text-[18px] mb-4">Contact</h4>
              <ul className="font-Montserrat font-medium text-[#AEAEAE] text-[16px] lg:text-[18px] flex flex-col justify-center items-start">
                <li className="mb-2 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">
                    <Phone />
                  </span>{" "}
                  (Number here)
                </li>
                <li className="mb-2 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">
                    <Email />
                  </span>{" "}
                  (Email)
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <span className="mr-2">
                    <Location />
                  </span>{" "}
                  (Location)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-[80px] flex flex-col lg:flex-row justify-between border-t border-t-white py-8">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 text-[16px] lg:text-[18px] font-Montserrat">
          <p>&copy; 20??</p>
          <p className="font-bold">Mayflower Events Gardens</p>
          <p>All rights reserved</p>
        </div>
        <div className="flex gap-6 lg:gap-[60px] mt-4 lg:mt-0">
          <Instagram />
          <Facebook />
          <Linkedin />
          <X />
        </div>
      </div>
    </div>
  );
};
