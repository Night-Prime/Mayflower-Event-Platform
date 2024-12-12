import React from "react";
import { Instagram, Facebook, Twitter, Phone } from "react-feather";

const Footer = () => {
  return (
    <div className="sticky bottom-0 z-50 w-full h-20 xl:py-2 bg-transparent m-0 xl:my-2">
      <div className="bg-mayblack rounded-2xl w-[100%] xl:w-[96%] h-full flex flex-row justify-between items-center mx-auto px-6 text-white">
        <div className="flex-1 flex flex-row justify-center gap-8">
          <Instagram className="cursor-pointer" />
          <Facebook className="cursor-pointer" />
          <Twitter className="cursor-pointer" />
        </div>
        <div className="flex-1 flex flex-row gap-4">
          <Phone />
          <h5>08116256294</h5>
        </div>
        <div className="flex-1 flex flex-row">
          <div className="flex lg:flex-row border-2 rounded-full border-gardenslight">
            <input
              type="email"
              placeholder="Subscribe to Newsletter"
              className="bg-transparent text-[12px] sm:text-[14px] lg:text-[18px] font-Montserrat font-normal px-4 rounded-full flex-grow focus:outline-none"
            />
            <button className="bg-gardenslight text-white p-1 font-bold font-Montserrat text-[12px] sm:text-[14px] lg:text-[18px] py-1 sm:py-2 px-4 sm:px-6 w-[150px] sm:w-48 lg:px-8 rounded-full flex items-center justify-center lg:mt-0">
              Submit
              <span className="ml-2"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
