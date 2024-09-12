import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Calendar } from "../icons/Calendar";
import { Right } from "../icons/Right";
import PackageCard from "../components/PackageCard";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollTrigger } from "gsap/all";
import GoogleCalendar from "../components/GoogleCalendar";
import BookForm from "../components/BookForm";
import { clientMakeRequest } from "../helper/makeRequest";
import Preloader from "../components/Preloader";
import { Events } from "../components/Events";

const Booking = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [packages, setPackages] = useState([]);

  const app = useRef(null);

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  const openModal = () => {
    console.log('true')
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const container = app.current;
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

    clientMakeRequest
      .get("/package/all")
      .then((res) => {
        setIsLoading(true);
        const item = res.data.data;
        setPackages(item);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div
          ref={app}
          className="h-screen overflow-y-scroll overflow-x-hidden scroll-snap-type-y scroll-snap-mandatory"
        >
          <Navbar />
          <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-start">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/gradient.png')`,
              }}
            ></div>
            <div className="relative z-10 p-4 sm:p-6 lg:p-12">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-Playfair leading-tight lg:leading-[84px] font-normal text-white max-w-full lg:max-w-[835px]">
                Unforgettable Moments Await: <br />
                Book Your Space
              </h1>
              <button
                onClick={openModal}
                className="bg-[#CC5500] mt-4 py-2 px-4 sm:py-3 sm:px-5 flex items-center justify-center rounded-lg text-xs sm:text-sm lg:text-md font-bold font-Montserrat lg:w-52 sm:w-48"
              >
                Schedule Now
                <span className="ml-2">
                  <Right />
                </span>
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-4 sm:gap-8 bg-white p-4 sm:p-8 rounded-t-4xl">
            <div className="relative w-full">
              <div
                className="flex items-center border border-[#cc5500] rounded-lg p-2 cursor-pointer"
                onClick={handleClick}
              >
                <Calendar className="text-[#4e4e4e] mr-2" />
                <span className="w-full text-black text-center text-xs sm:text-sm">
                  <p>Check Availability</p>
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
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 h-64 w-full max-w-xs sm:max-w-5xl mx-auto bg-white border rounded-lg shadow-lg z-10">
                  <GoogleCalendar />
                </div>
              )}
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-4 sm:gap-8">
              <div className="flex flex-col lg:flex-row w-full h-full rounded-lg overflow-hidden">
                <div
                  className="flex justify-center items-center lg:w-1/2 md:w-full p-6 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(204, 85, 0, 1), rgba(204, 85, 0, 0)), url('/book.jpeg')`,
                  }}
                >
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-Playfair italic leading-tight lg:leading-[84px] font-semibold text-white text-center">
                    BOOK A TOUR <br />
                    AT <br />
                    MAYGARDENS
                  </h1>
                </div>

                <div className="lg:w-1/2 bg-[#212121] text-white flex flex-col gap-6 p-4 sm:p-6 justify-center items-center">
                  <div className="w-full flex flex-col justify-center items-center">
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-Playfair font-bold mb-4">
                      Unveil the Magic:
                    </h3>
                    <p className="text-sm sm:text-md lg:text-lg font-medium font-Montserrat text-center">
                      Book Your May Gardens Tour Today
                    </p>
                  </div>
                  <button
                    className="bg-[#CC5500] py-2 px-4 sm:py-3 sm:px-6 flex items-center justify-center rounded-lg text-sm sm:text-md font-bold font-Montserrat"
                    onClick={openModal}
                  >
                    Fill our form
                    <span className="ml-2">
                      <Right />
                    </span>
                  </button>
                  {isModalOpen && (
                    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
                      <div className="p-0 m-0 w-full h-full">
                        <BookForm closeModal={closeModal} item={packages} />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row w-full h-full rounded-lg overflow-hidden">
                <div
                  className="hidden lg:flex justify-center items-center lg:w-1/2 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/glassLaugh.png')`,
                  }}
                ></div>
                <div className="lg:w-1/2 bg-[#CC5500] p-4 sm:p-8 text-white flex flex-col justify-center items-start">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-Playfair font-bold mb-4">
                    Offers
                  </h3>
                  <p className="text-sm sm:text-lg font-medium font-Montserrat">
                    Promotion, deals and special offers for you
                  </p>
                </div>
              </div>

              <div className="shared-container flex flex-col bg-white items-center justify-center">
                <div className="flex-wrap flex justify-between items-center gap-5 bg-white">
                  {packages.map((packageDetails, index) => (
                    <PackageCard key={index} packageDetails={packageDetails} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Booking;
