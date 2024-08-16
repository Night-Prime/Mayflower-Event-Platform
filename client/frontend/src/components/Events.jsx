import React, { useState } from "react";
import selfie from "../assets/Images/selfie.png";
import tree from "../assets/Images/tree.png";
import laughing from "../assets/Images/laughing.png";
import drinks from "../assets/Images/drinks.png";
import concert from "../assets/Images/concert.png";
import dinner from "../assets/Images/dinner.png";
import wedding from "../assets/Images/wedding.png";
import { Right } from "../icons/Right";

export const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Events",
      content: (
        <>
          <div className="w-full flex flex-wrap justify-center items-center gap-4">
            <img
              src={selfie}
              alt="Someone drumming"
              className="w-full md:w-[22%]"
            />
            <img
              src={tree}
              alt="Someone drumming"
              className="w-full md:w-[22%] "
            />
            <img
              src={laughing}
              alt="Someone drumming"
              className="w-full md:w-[22%] "
            />
            <img
              src={drinks}
              alt="Someone drumming"
              className="w-full md:w-[22%] "
            />
          </div>
          <button className="bg-[#CC5500] py-3 px-6 flex items-center justify-center rounded-lg text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-Inter w-[220px] sm:w-[180px] lg:w-[222px] mt-6 sm:mt-8 lg:mt-10">
            View Gallery{" "}
            <span className="ml-2">
              <Right />
            </span>
          </button>
        </>
      ),
    },
    {
      title: "Book with us today",
      content: (
        <div className="w-full flex flex-wrap justify-center items-center gap-4">
          <div className="flex flex-col gap-4 justify-start items-start bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={dinner}
              alt="Dinner"
              className="w-full h-auto rounded-t-2xl"
            />
            <div className="flex flex-col gap-1 justify-start items-start w-[427px] text-black px-4">
              <p className="text-[24px] font-Playfair font-bold">Card title</p>
              <p className="text-[18px] font-Montserrat font-normal text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
              Button
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-start items-center bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={wedding}
              alt="Wedding"
              className="w-full h-auto rounded-t-2xl"
            />
            <div className="flex flex-col gap-1 justify-start items-center text-black px-4">
              <p className="text-[24px] font-Playfair font-bold">Card title</p>
              <p className="text-[18px] font-Montserrat font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
              Button
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-start items-center bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={concert}
              alt="Concert"
              className="w-full h-auto rounded-t-2xl"
            />
            <div className="flex flex-col gap-1 justify-start items-center text-black px-4">
              <p className="text-[24px] font-Playfair font-bold">Card title</p>
              <p className="text-[18px] font-Montserrat font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
              Button
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Book with us today",
      content: (
        <div className="w-full flex flex-wrap justify-center items-center gap-4">
          <div className="flex flex-col gap-4 justify-start items-center bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={dinner}
              alt="Dinner"
              className="w-full h-auto rounded-t-2xl"
            />
            <div className="flex flex-col gap-1 justify-start items-center text-black px-4">
              <p className="text-[24px] font-Playfair font-bold">Card title</p>
              <p className="text-[18px] font-Montserrat font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
              Button
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-start items-center bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={wedding}
              alt="Wedding"
              className="w-full h-auto rounded-t-2xl"
            />
            <div className="flex flex-col gap-1 justify-start items-center text-black px-4">
              <p className="text-[24px] font-Playfair font-bold">Card title</p>
              <p className="text-[18px] font-Montserrat font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
              Button
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-start items-center bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={concert}
              alt="Concert"
              className="w-full h-auto rounded-t-2xl"
            />
            <div className="flex flex-col gap-1 justify-start items-center text-black px-4">
              <p className="text-[24px] font-Playfair font-bold">Card title</p>
              <p className="text-[18px] font-Montserrat font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
              Button
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Book with us today",
      content: (
        <div className="w-full flex flex-wrap justify-center items-center gap-4">
          <div className="flex flex-col gap-4 justify-start items-center bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={dinner}
              alt="Dinner"
              className="w-full h-auto rounded-t-2xl"
            />
            <div className="flex flex-col gap-1 justify-start items-center text-black px-4">
              <p className="text-[24px] font-Playfair font-bold">Card title</p>
              <p className="text-[18px] font-Montserrat font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
              Button
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-start items-center bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={wedding}
              alt="Wedding"
              className="w-full h-auto rounded-t-2xl"
            />
            <div className="flex flex-col gap-1 justify-start items-center text-black px-4">
              <p className="text-[24px] font-Playfair font-bold">Card title</p>
              <p className="text-[18px] font-Montserrat font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
              Button
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-start items-center bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={concert}
              alt="Concert"
              className="w-full h-auto rounded-t-2xl"
            />
            <div className="flex flex-col gap-1 justify-start items-center text-black px-4">
              <p className="text-[24px] font-Playfair font-bold">Card title</p>
              <p className="text-[18px] font-Montserrat font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
              Button
            </button>
          </div>
        </div>
      ),
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col gap-[14px] bg-white">
      <div className="w-full flex flex-col items-center justify-center bg-[#212121] rounded-tl-[32px] rounded-bl-[32px] mt-20">
        <div className="flex flex-col gap-20 justify-center items-center w-full px-4">
          <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair py-8 text-center">
            {slides[currentSlide].title}
          </p>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full flex flex-col gap-20 rounded-bl-[32px] justify-center items-center pb-8"
                >
                  {slide.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="font-Montserrat text-[16px] sm:text-[18px] font-bold tracking-[-1%] flex flex-wrap justify-center lg:justify-between text-[#212121] px-3 bg-white w-full items-center mt-6">
        <button
          className={`w-[160px] sm:w-[180px] py-3 px-4 flex items-center justify-center cursor-pointer ${
            currentSlide === 0 ? "text-[#CC5500]" : ""
          }`}
          onClick={() => handleSlideChange(0)}
        >
          Events
        </button>
        <button
          className={`w-[160px] sm:w-[180px] py-3 px-4 flex items-center justify-center cursor-pointer ${
            currentSlide === 1 ? "text-[#CC5500]" : ""
          }`}
          onClick={() => handleSlideChange(1)}
        >
          Booking
        </button>
        <button
          className={`w-[160px] sm:w-[180px] py-3 px-4 flex items-center justify-center cursor-pointer ${
            currentSlide === 2 ? "text-[#CC5500]" : ""
          }`}
          onClick={() => handleSlideChange(2)}
        >
          Testimonials
        </button>
        <button
          className={`w-[160px] sm:w-[180px] py-3 px-4 flex items-center justify-center cursor-pointer ${
            currentSlide === 3 ? "text-[#CC5500]" : ""
          }`}
          onClick={() => handleSlideChange(3)}
        >
          Contact us
        </button>
      </div>
    </div>
  );
};
