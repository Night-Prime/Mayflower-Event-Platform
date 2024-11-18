import React, { useState, useRef, useEffect } from "react";
import { Calendar } from "../icons/Calendar";
import { Right } from "../icons/Right";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import GoogleCalendar from "../components/GoogleCalendar";
import BookForm from "../components/BookForm";
import { clientMakeRequest } from "../helper/makeRequest";
import Preloader from "../components/Preloader";
import videoBg from "../assets/video/background.mp4";

const Booking = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [packages, setPackages] = useState([]);

  const calendarRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    setShowCalendar((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  useEffect(() => {
    clientMakeRequest
      .get("/package/all")
      .then((res) => {
        setIsLoading(true);
        const item = res.data.data;
        setPackages(item);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden scroll-snap-type-y scroll-snap-mandatory">
      <Navbar />
      <div className="relative xl:mt-24 h-96 xl:h-[75vh] w-full flex items-center justify-center">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center text-white p-4 lg:p-10">
          <img
            src="https://ik.imagekit.io/0y99xuz0yp/May%20Gardens%20Elements-01.png?updatedAt=1727604763546"
            alt="Main Logo"
            className="w-[100%] lg:w-[75%] object-cover"
          />
        </div>
      </div>

      <div className="w-full h-[30vh] xl:h-[100vh]">
        <div className="w-full h-full p-10 flex flex-col-reverse xl:flex-row justify-center items-center">
          <div className="flex-1 flex flex-col gap-8 text-mayblack">
            <h1 className="w-full xl:w-[60%] text-center xl:text-start text-[20px] xl:text-[40px] font-semibold font-Cinzel">
              BOOK A TOUR AT{" "}
              <span className="text-gardenslight">MAYGARDENS</span>
            </h1>
            <p className="w-[100%] xl:w-[75%] text-[12px] xl:text-[20px] text-justify">
              At May Gardens Event Center, we are your intimate escape for
              life’s most cherished celebrations. Our facilities are maintained
              to the highest standards to ensure that every event is a massive
              success. Working closely with top event planners and vendors
              alike, we ensure that your ideas are valid and your vision for
              your event is brought to life. From our breathtaking space to our
              exceptional hospitality, your guests will have stories of your
              event on their lips for years to come
            </p>
          </div>

          <div className="hidden flex-1 xl:flex flex-row justify-center xl:relative px-8 xl:px-0">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%208.png?updatedAt=1731525634992"
              alt="Someone drumming"
              className="img w-[55%] object-contain"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%209.png?updatedAt=1731525610543"
              alt="Laughing & Partying"
              className="img w-[55%] object-contain xl:absolute xl:top-1/2 xl:transform xl:-translate-y-3/4"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%207.png?updatedAt=1731525636949"
              alt="Medusa Hair"
              className="img w-[55%] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-4 sm:gap-8 bg-white p-4 sm:p-8 rounded-t-3xl">
        <div className="relative w-full">
          <div
            className="flex items-center border border-maygardens rounded-lg p-2 cursor-pointer"
            onClick={handleClick}
          >
            <Calendar className="text-[#4e4e4e] mr-2" />
            <span className="w-full text-black font-Cinzel text-start text-xs sm:text-sm ml-6">
              <p>Dates</p>
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
            <div
              ref={calendarRef}
              className="absolute top-full left-1/2 transform -translate-x-1/2 h-64 w-full max-w-xs sm:max-w-5xl mx-auto bg-white border rounded-lg shadow-lg z-10"
            >
              <GoogleCalendar />
            </div>
          )}
        </div>

        <BookForm />
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
