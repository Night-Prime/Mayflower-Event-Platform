import React from "react";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col mt-20">
      <div className=" grid grid-cols-2">
        <div className=" flex flex-col gap-20">
          <div className=" flex flex-col font-Playfair gap-4">
            <p className=" text-[40px] font-normal">Join our newsletter</p>
            <p className=" text-[24px] font-normal">
              Insider Tips for Planning Your Event
            </p>
          </div>
          <div className=" flex flex-col font-Playfair gap-4 w-[589px]">
            <p className=" text-[32px] font-normal">Mayflower event Gardens</p>
            <p className=" text-[18px] font-normal">
              Where a harmonious blend of nature's beauty and elegant design
              come together to create extraordinary events.
            </p>
          </div>
        </div>
        <div className="bg-[#212121] p-6 lg:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            {/* Email Subscription */}
            <div className="flex gap-56 p-1 w-full lg:justify-start mb-8 border-4 rounded-full border-[#CC5500]">
              <input
                type="email"
                placeholder="Enter your email"
                className=" bg-[#212121] text-black p-3 lg:p-4 rounded-l-full w-full lg:w-1/3 focus:outline-none"
              />
              <button className="bg-[#E4572E] text-white font-bold font-Montserrat text-[18px] p-1 text-center justify-center w-[221px] py-[16px] px-[24px] lg:p-4 rounded-full flex items-center">
                Submit
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul>
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
              <div>
                <h4 className="font-bold mb-4">Events</h4>
                <ul>
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
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2">📞</span> (Number here)
                  </li>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2">✉️</span> (Email)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📍</span> (Location)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
