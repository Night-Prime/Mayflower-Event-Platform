import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import concert from "../assets/Images/concert.png";
import dinner from "../assets/Images/dinner.png";
import dinner2 from "../assets/Images/dinner2.png";
import dinner3 from "../assets/Images/dinner3.png";
import dj from "../assets/Images/dj.png";
import glasses from "../assets/Images/glasses.png";
import gradient2 from "../assets/Images/gradient2.png";
import threeselfie from "../assets/Images/threeselfie.png";
import wedding from "../assets/Images/wedding.png";
import { Footer } from "../components/Footer.jsx";
import GoogleCalendar from "../components/GoogleCalendar.jsx";
import { Navbar } from "../components/Navbar";
import { Calendar } from "../icons/Calendar.jsx";
import { Right } from "../icons/Right.jsx";
import { ScrollTrigger } from "gsap/all";

export const Booking = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  // set up element reference
  const app = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Use the ref to access the container element
      const container = app.current;
      // Ensure container is valid and use GSAP to animate
      if (container) {
        gsap.fromTo(
          container.querySelectorAll(".text"),
          {
            y: 0,
            opacity: 0,
            ease: "power2.in",
          },
          {
            y: -15,
            opacity: 1,
            ease: "cubic-bezier(0.280, 0.840, 0.420, 1)",
            duration: 0.5,
            stagger: 0.5,
          }
        );
      }
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={app}
      className=" w-full flex flex-col justify-center items-center"
    >
      <Navbar />
      <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/gradient.png')`,
          }}
        ></div>
        <div className="relative z-10 p-8 lg:p-12">
          <h1 className="text text-[56px] font-Playfair leading-[84px] font-normal text-white max-w-[835px]">
            Unforgettable Moments Await: <br />
            Book Your Space
          </h1>

          <button className="bounce text bg-[#CC5500] mt-4 py-3 px-6 flex items-center justify-center rounded-lg  text-[16px] sm:text-[18px] ] font-bold font-Montserrat w-[222px]   ">
            Schedule Now
            <span className="ml-2">
              <Right />
            </span>
          </button>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center gap-8 bg-white p-8">
        <div className="relative w-full">
          <div
            className="flex items-center border border-orange-400 rounded-lg p-2 cursor-pointer"
            onClick={handleClick}
          >
            <Calendar className="text-gray-500 mr-2" />
            <span className="w-full text-black text-center">
              <p>Check Calendar</p>
            </span>
            <svg
              className={`w-4 h-4 ml-auto transform transition-transform ${
                showCalendar ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>

          {showCalendar && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 h-64 w-full max-w-5xl mx-auto bg-white border rounded-lg shadow-lg z-10">
              <GoogleCalendar />
            </div>
          )}
        </div>

        <div className=" w-full flex justify-center items-center flex-col gap-8">
          {/* <p className="text-[40px] sm:text-[36px] font-semibold font-Playfair  text-center text-black ">
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
          </div> */}
          <div className="flex flex-col lg:flex-row w-full h-full rounded-lg overflow-hidden">
            <img src={gradient2} alt="book a tour" />
            <div className="lg:w-1/2 bg-[#212121] text-white flex flex-col justify-center">
              <div className=" w-full flex flex-col items-start mx-12 gap-2">
                <h3 className="text-[40px] font-Playfair font-bold mb-4">
                  Unveil the Magic:
                </h3>
                <p className="text text-xl font-medium mb-6 font-Montserrat">
                  Schedule a tour with May Gardens today.
                </p>
                <button className="text bg-[#CC5500] py-3 flex items-center justify-center rounded-lg  text-[16px] sm:text-[18px] ] font-bold font-Montserrat w-[222px]   ">
                  Book Now
                  <span className="ml-2">
                    <Right />
                  </span>
                </button>
              </div>
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
            {/* <p className="text-[40px] sm:text-[36px] font-semibold font-Playfair py-8 text-center text-black ">
              Our packages
            </p> */}
            <div className=" flex-wrap flex justify-center items-center gap-8 bg-white">
              <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
                <img src={dinner} alt="Dinner" className=" rounded-t-2xl" />
                <div className=" flex flex-col gap-4 justify-start items-start px-4 pb-6">
                  <div className="flex flex-col gap-1 justify-start items-start text-black">
                    <p className="text-[24px] font-Playfair font-bold text-[#CC5500]">
                      Gold Standard
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
                      Diamond Service
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
                      Platinum Experience
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
