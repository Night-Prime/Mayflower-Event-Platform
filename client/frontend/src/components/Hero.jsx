import React from 'react';

export const Hero = () => {
  return (
    <div className="font-Playfair flex flex-col gap-4 w-full items-center justify-center mt-[100px] sm:mt-[150px] lg:mt-[230px] px-4">
      <p className="text-[32px] sm:text-[48px] lg:text-[80px] font-bold w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[600px] text-center tracking-[1%]">
        Mayflower <br /> Event Gardens
      </p>
      <p className="font-Allura text-[24px] sm:text-[32px] lg:text-[40px] font-normal tracking-[-1%] text-center px-4">
        Mayflower Gardens: Your Garden of Possibilities.
      </p>
      <button className="bg-[#CC5500] py-[12px] px-[20px] sm:py-[14px] sm:px-[22px] lg:py-[16px] lg:px-[24px] rounded-lg text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-Inter w-[160px] sm:w-[180px] lg:w-[222px] mt-6 sm:mt-8 lg:mt-10">
        Book Now
      </button>
    </div>
  );
};
