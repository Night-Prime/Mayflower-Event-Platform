import React, { useState } from "react";
import { Calendar } from "../icons/Calendar";
import { Right } from "../icons/Right";
import threeselfie from "../assets/Images/threeselfie.png";
import dinner2 from "../assets/Images/dinner2.png";
import dinner3 from "../assets/Images/dinner3.png";
import dj from "../assets/Images/dj.png";
import gradient2 from "../assets/Images/gradient2.png";
import glasses from "../assets/Images/glasses.png";
import concert from "../assets/Images/concert.png";
import dinner from "../assets/Images/dinner.png";
import wedding from "../assets/Images/wedding.png";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import GoogleCalendar from "../components/GoogleCalendar";

export const Booking = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  }

  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/gradient.png')`,
          }}
        ></div>
        <div className="relative z-10 p-8 lg:p-12">
          <h1 className="text-[56px] font-Playfair leading-[84px] font-normal text-white max-w-[835px]">
            Unforgettable Moments Await: <br />
            Book Your Space
          </h1>
        </div>
      </div>
      <div className=" w-full flex flex-col pb-[79px] justify-center items-center gap-8 bg-white rounded-tl-[60px] rounded-tr-[60px] p-8">
        <div className="flex items-center border border-orange-400 rounded-lg p-2 w-full">
          <Calendar className="text-gray-500 mr-2" />
          <input
            type="email"
            className="w-full border-none focus:ring-0 focus:outline-none text-[#212121] cursor-pointer"
            placeholder="Dates"
            disabled={true}
            onClick={handleClick}
          />
          <div className="ml-2">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          {showCalendar && <GoogleCalendar />}
        </div>
        <div className=" w-full flex justify-center items-center flex-col gap-8">
          <p className="text-[40px] sm:text-[36px] font-semibold font-Playfair  text-center text-black ">
            Book a tour
          </p>
          <div className=" w-full flex flex-wrap justify-center items-center gap-6">
            <img
              src={threeselfie}
              alt="three guys taking selfie"
              className=" w-[310px]"
            />
            <img src={dinner3} alt="dinner table" className=" w-[305px]" />
            <img src={dinner2} alt="dinner" className=" w-[305px]" />
            <img src={dj} alt="a dj" className=" w-[305px]" />
          </div>
          <div className="flex flex-col lg:flex-row w-full h-full rounded-lg overflow-hidden">
            <img src={gradient2} alt="book a tour" />
            <div className="lg:w-1/2 bg-[#212121] text-white flex flex-col gap-[120px] justify-center items-start pl-[145px] ">
              <div className=" w-full flex flex-col justify-start items-start">
                <h3 className="text-[40px] font-Playfair font-bold mb-4">
                  Unveil the Magic:
                </h3>
                <p className="text-xl font-medium mb-6 font-Montserrat">
                  Book Your Mayflower Gardens Tour Today
                </p>
              </div>
              <button className="bg-[#CC5500] py-3 px-6 flex items-center justify-center rounded-lg  text-[16px] sm:text-[18px] ] font-bold font-Montserrat w-[222px]   ">
                Fill our form{" "}
                <span className="ml-2">
                  <Right />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full h-full rounded-lg">
            <img src={glasses} alt="book a tour" />
            <div className="w-full bg-[#CC5500] rounded-tr-lg rounded-br-lg p-8 text-white flex flex-col justify-center items-start ">
              <h3 className="text-[40px] font-Playfair font-bold mb-4">
                Offers
              </h3>
              <p className="text-[24px] leading-[33.6px] font-medium mb-6 font-Montserrat">
                Promotion, deals and special offers for you
              </p>
            </div>
          </div>
          <div className=" shared-container flex flex-col bg-white items-center justify-center">
            <p className="text-[40px] sm:text-[36px] font-semibold font-Playfair py-8 text-center text-black ">
              Our packages
            </p>
            <div className=" flex-wrap flex justify-center items-center gap-8 bg-white">
              <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
                <img src={dinner} alt="Dinner" className=" rounded-t-2xl" />
                <div className=" flex flex-col gap-4 justify-start items-start px-4 pb-6">
                  <div className="flex flex-col gap-1 justify-start items-start text-black">
                    <p className="text-[24px] font-Playfair font-bold text-[#CC5500]">
                      Card title
                    </p>
                    <p className="text-[18px] font-Montserrat font-normal text-start">
                      Curabitur
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col shadow-2xl gap-4 justify-start items-start  bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
                <img
                  src={wedding}
                  alt="Dinner"
                  className="w-full h-auto rounded-t-2xl"
                />
                <div className=" flex flex-col gap-4 justify-start items-start px-4 pb-6">
                  <div className="flex flex-col gap-1 justify-start items-start text-black">
                    <p className="text-[24px] font-Playfair font-bold text-[#CC5500]">
                      Card title
                    </p>
                    <p className="text-[18px] font-Montserrat font-normal text-start">
                      Eget
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col shadow-2xl gap-4 justify-start items-start  bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
                <img
                  src={concert}
                  alt="Dinner"
                  className="w-full h-auto rounded-t-2xl"
                />
                <div className=" flex flex-col gap-4 justify-start items-start px-4 pb-6">
                  <div className="flex flex-col gap-1 justify-start items-start text-black">
                    <p className="text-[24px] font-Playfair font-bold text-[#CC5500]">
                      Card title
                    </p>
                    <p className="text-[18px] font-Montserrat font-normal text-start">
                      Sem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
