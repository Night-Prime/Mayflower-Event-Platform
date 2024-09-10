import React, { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Littleloca } from "../icons/Littleloca.jsx";
import { Right } from "../icons/Right.jsx";
import { Star } from "../icons/Star.jsx";
import { RightA } from "../icons/RightA.jsx";
import { LeftA } from "../icons/LeftA.jsx";

export const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const totalSlides = 3;

  const slides = [
    {
      content: (
        <div className="w-full h-auto shared-container flex flex-col items-center gap-16">
          <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair text-center mt-8">
            Event Showcase
          </p>
          <div className="flex flex-col w-full h-full items-center px-2">
            <div className="flex justify-center items-center gap-4">
              {/* Conditional rendering for images */}
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/selfie.png?updatedAt=1725131446084"
                alt="Selfie"
                className="img lg:w-[20%] hidden lg:block"
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/tree.png?updatedAt=1725131405421"
                alt="Tree"
                className="img lg:w-[20%] sm:w-[30%]"
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/laughing.png?updatedAt=1725131406021"
                alt="Laughing"
                className="img lg:w-[20%] hidden lg:block"
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/drinks.png?updatedAt=1725131445657"
                alt="Drinks"
                className="img lg:w-[20%] sm:w-[30%]"
              />
            </div>
            <button className="bg-[#CC5500] py-3 px-6 flex items-center justify-center rounded-lg text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-Montserrat w-[220px] mt-4">
              <RouterLink
                to="/gallery"
                className="flex items-center justify-center"
              >
                View Gallery{" "}
                <span className="ml-2">
                  <Right />
                </span>
              </RouterLink>
            </button>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="w-full h-auto shared-container flex flex-col gap-10 items-center">
          <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair text-center text-white mt-8">
            Explore Our Tailored Event Packages
          </p>
          <div className="flex-wrap flex justify-center items-center gap-8 mb-10">
            <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-lg sm:w-[30%] lg:w-[25%]">
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/wedding.png?updatedAt=1725131443945"
                alt="wedding-like"
                className=" rounded-t-lg"
              />
              <div className=" flex flex-col gap-4 justify-start items-start px-4">
                <div className="flex flex-col gap-1 justify-start items-start text-black">
                  <p className="text-xl font-Playfair font-bold">Card title</p>
                  <p className=" font-Montserrat font-normal text-start text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <button className="p-2 bg-[#CC5500] rounded-lg font-Montserrat font-semibold text-sm mb-4">
                  Button
                </button>
              </div>
            </div>
            <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-lg sm:w-[30%] lg:w-[25%]">
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/dinner.png?updatedAt=1725131402076"
                alt="Dinner"
                className=" rounded-t-lg"
              />
              <div className=" flex flex-col gap-4 justify-start items-start px-4">
                <div className="flex flex-col gap-1 justify-start items-start text-black">
                  <p className="text-xl font-Playfair font-bold">Card title</p>
                  <p className=" font-Montserrat font-normal text-start text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <button className=" p-2 bg-[#CC5500] rounded-lg font-Montserrat font-semibold text-sm mb-4">
                  Button
                </button>
              </div>
            </div>
            <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-lg sm:w-[30%] lg:w-[25%]">
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/concert.png?updatedAt=1725131399684"
                alt="concert-like"
                className=" rounded-t-lg"
              />
              <div className=" flex flex-col gap-4 justify-start items-start px-4">
                <div className="flex flex-col gap-1 justify-start items-start text-black">
                  <p className="text-xl font-Playfair font-bold">Card title</p>
                  <p className=" font-Montserrat font-normal text-start text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <button className=" p-2 bg-[#CC5500] rounded-lg font-Montserrat font-semibold text-sm mb-4">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="w-full h-auto shared-container flex flex-col gap-20 justify-center items-center">
          <div className=" w-full flex flex-col items-center justify-center">
            <p className="sm:text-[36px] lg:text-[50px] w-[700px] font-Playfair mt-8 text-center text-[#EDEDED]">
              Client Success Stories
            </p>
            <p className="text-[24px] sm:text-[30px] lg:text-[24px] font-greatVibes text-center pt-2 text-[#EDEDED]">
              Hear from Our Satisfied Clients.
            </p>
          </div>
          <div className=" flex justify-center items-end pb-40 w-full px-10 gap-6">
            <div className="flex flex-col w-[344px] gap-4 justify-start items-start p-3 bg-[#212121] rounded-lg hidden lg:block ">
              <p className=" font-Montserrat text-md">
                Posuere ultrices amet diam erat in amet nulla tellus nibh.
                Vulputate cras nunc lectus facilisis. Sapien tempus pellentesque
                in tellus at. A blandit nullam orci sed eget.
              </p>
              <div className="flex gap-2 justify-between items-center w-full">
                <div className=" flex gap-2 justify-start items-center text-black">
                  <img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/circle1.png?updatedAt=1725131398528"
                    alt="1"
                  />
                  <div className=" flex flex-col font-kanit text-[16px]">
                    <p className=" text-[#EDEDED]">Lomo</p>
                    <div className=" flex justify-start items-center gap-[2px]">
                      <Littleloca />
                      <p className=" text-[#4E4E4E]">LG</p>
                    </div>
                  </div>
                </div>
                <Star />
              </div>
            </div>
            <div className="flex flex-col w-[344px] gap-4 justify-start items-start p-3 bg-[#212121] rounded-lg ">
              <p className=" font-Montserrat text-md">
                Vulputate volutpat viverra interdum et. Fusce sit habitant
                mauris arcu pretium.
              </p>
              <div className="flex gap-2 justify-between items-center w-full">
                <div className=" flex gap-2 justify-start items-center text-black">
                  <img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/circle2.png?updatedAt=1725131401455"
                    alt="1"
                  />
                  <div className=" flex flex-col font-kanit text-[16px]">
                    <p className=" text-[#EDEDED]">Lomo</p>
                    <div className=" flex justify-start items-center gap-[2px]">
                      <Littleloca />
                      <p className=" text-[#4E4E4E]">LG</p>
                    </div>
                  </div>
                </div>
                <Star />
              </div>
            </div>
            <div className=" flex-col w-[344px] gap-4 justify-start items-start p-3 bg-[#212121] rounded-lg hidden lg:block ">
              <p className=" font-Montserrat text-md">
                Faucibus nisl turpis orci quis eu morbi pharetra etiam amet.
                Massa elit pellentesque et aliquet consectetur ornare sed
                interdum. Tincidunt proin at viverra rutrum et facilisis neque
                et. Eget quam adipiscing nulla maecenas eget elementum.
              </p>
              <div className="flex gap-2 justify-between items-center w-full">
                <div className=" flex gap-2 justify-start items-center text-black">
                  <img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/circle3.png?updatedAt=1725131398921"
                    alt="1"
                  />
                  <div className=" flex flex-col font-kanit text-[16px]">
                    <p className=" text-[#EDEDED]">Lomo</p>
                    <div className=" flex justify-start items-center gap-[2px]">
                      <Littleloca />
                      <p className=" text-[#4E4E4E]">LG</p>
                    </div>
                  </div>
                </div>
                <Star />
              </div>
            </div>
            <div className="flex flex-col w-[344px] gap-4 justify-start items-start p-3 bg-[#212121] rounded-lg ">
              <p className=" font-Montserrat text-md">
                Feugiat sed urna gravida nibh ipsum euismod orci. Dictum urna
                tellus purus praesent.
              </p>
              <div className="flex gap-2 justify-between items-center w-full">
                <div className=" flex gap-2 justify-start items-center text-black">
                  <img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/circle4.png?updatedAt=1725131398924"
                    alt="1"
                  />
                  <div className=" flex flex-col font-kanit text-[16px]">
                    <p className=" text-[#EDEDED]">Lomo</p>
                    <div className=" flex justify-start items-center gap-[2px]">
                      <Littleloca />
                      <p className=" text-[#4E4E4E]">LG</p>
                    </div>
                  </div>
                </div>
                <Star />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // useEffect(() => {
  //   // Auto-slide functionality
  //   const interval = setInterval(nextSlide, 5000); // Adjust the time as needed
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="bg-[#4e4e4e] relative w-full h-auto overflow-hidden">
      <div
        className="slide-container flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className="w-full h-auto flex-shrink-0 flex justify-center items-center"
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Left/Right navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full z-10"
      >
        {/* Replace with your left icon */}
        <LeftA className="rotate-180" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full z-10"
      >
        {/* Right icon */}
        <RightA />
      </button>
    </div>
  );
};
