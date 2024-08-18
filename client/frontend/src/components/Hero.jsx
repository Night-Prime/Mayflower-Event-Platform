import React from "react";
import { Link as RouterLink } from "react-router-dom";

import videoBg from "../assets/video/background.mp4";

export const Hero = () => {
  return (
    <div className="relative font-Playfair h-screen w-full flex items-center justify-center">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white">
        <p className="text-[32px] sm:text-[48px] lg:text-[80px] font-bold max-w-[300px] sm:max-w-[450px] lg:max-w-[600px] mx-auto tracking-[1%]">
          Mayflower <br /> Event Gardens
        </p>
        <p className="font-Allura text-[24px] sm:text-[32px] lg:text-[40px] font-normal tracking-[-1%] px-4">
          Mayflower Gardens: Your Garden of Possibilities.
        </p>
        <button className="bg-[#CC5500] py-[12px] px-[20px] sm:py-[14px] sm:px-[22px] lg:py-[16px] lg:px-[24px] rounded-lg text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-Inter w-[160px] sm:w-[180px] lg:w-[222px] mt-6 sm:mt-8 lg:mt-10">
          <RouterLink to="/booking">Book Now</RouterLink>
        </button>
      </div>
    </div>
  );
};
