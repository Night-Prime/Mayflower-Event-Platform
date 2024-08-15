import React, { useState } from "react";
import { Link } from "react-scroll";
import selfie from "../Images/selfie.png";
import tree from "../Images/tree.png";
import laughing from "../Images/laughing.png";
import drinks from "../Images/drinks.png";
import concert from "../Images/concert.png";
import dinner from "../Images/dinner.png";
import wedding from "../Images/wedding.png";
import { Right } from "../icons/Right";

export const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Events",
      content: (
        <>
          <div className="w-full grid grid-cols-4 items-center">
            <img src={selfie} alt="Someone drumming" />
            <img src={tree} alt="Someone drumming" />
            <img src={laughing} alt="Someone drumming" />
            <img src={drinks} alt="Someone drumming" />
          </div>
          <button className="bg-[#CC5500] py-[12px] px-[20px] flex items-center justify-center  sm:py-[14px] sm:px-[22px] lg:py-[16px] lg:px-[24px] rounded-lg text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-Inter w-[160px] sm:w-[180px] lg:w-[222px] mt-6 sm:mt-8 lg:mt-10">
            View Gallery{" "}
            <span className="ml-2">
              <Right />
            </span>
          </button>
        </>
      ),
    },
    {
      id: 2,
      title: "Book with us today",
      content: (
        <div className="w-full grid grid-cols-3 items-center">
          <div className="w-[459px] flex flex-col gap-4 justify-start items-center bg-white rounded-2xl">
            <img src={dinner} alt="Dinner" />
            <div className="flex flex-col gap-1 justify-start items-center text-black">
              <p className="text-[24px] font-Playfair font-bold text-black">
                Card title
              </p>
              <p className="text-[18px] font-Montserrat font-normal tracking-[-1%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="py-4 px-6 w-28 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px]">
              Button
            </button>
          </div>
          <div className=" w-[459px] flex flex-col gap-4 justify-start items-center bg-white rounded-2xl">
            <img src={wedding} alt="Someone drumming" />
            <div className=" flex flex-col gap-1 justify-start items-center text-black">
              <p className=" text-[24px] font-Playfair font-bold text-black">
                Card title
              </p>
              <p className=" text-[18px] font-Montserrat font-normal tracking-[-1%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                purus tellus arcu sit nibh consectetur.
              </p>
            </div>
            <button className=" py-4 px-6 w-28 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px]">
              Button
            </button>
          </div>
          <div className=" w-[459px] flex flex-col gap-4 justify-start items-center bg-white rounded-2xl">
            <img src={concert} alt="Someone drumming" />
            <div className=" flex flex-col gap-1 justify-start items-center text-black">
              <p className=" text-[24px] font-Playfair font-bold text-black">
                Card title
              </p>
              <p className=" text-[18px] font-Montserrat font-normal tracking-[-1%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                purus tellus arcu sit nibh consectetur.
              </p>
            </div>
            <button className=" py-4 px-6 w-28 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px]">
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
        <>
          <div className=" w-full grid grid-cols-3 items-center">
            <div className=" w-[459px] flex flex-col gap-4 justify-start items-center bg-white rounded-2xl">
              <img src={dinner} alt="Someone drumming" />
              <div className=" flex flex-col gap-1 justify-start items-center text-black">
                <p className=" text-[24px] font-Playfair font-bold text-black">
                  Card title
                </p>
                <p className=" text-[18px] font-Montserrat font-normal tracking-[-1%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur.
                </p>
              </div>
              <button className=" py-4 px-6 w-28 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px]">
                Button
              </button>
            </div>
            <div className=" w-[459px] flex flex-col gap-4 justify-start items-center bg-white rounded-2xl">
              <img src={wedding} alt="Someone drumming" />
              <div className=" flex flex-col gap-1 justify-start items-center text-black">
                <p className=" text-[24px] font-Playfair font-bold text-black">
                  Card title
                </p>
                <p className=" text-[18px] font-Montserrat font-normal tracking-[-1%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur.
                </p>
              </div>
              <button className=" py-4 px-6 w-28 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px]">
                Button
              </button>
            </div>
            <div className=" w-[459px] flex flex-col gap-4 justify-start items-center bg-white rounded-2xl">
              <img src={concert} alt="Someone drumming" />
              <div className=" flex flex-col gap-1 justify-start items-center text-black">
                <p className=" text-[24px] font-Playfair font-bold text-black">
                  Card title
                </p>
                <p className=" text-[18px] font-Montserrat font-normal tracking-[-1%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur.
                </p>
              </div>
              <button className=" py-4 px-6 w-28 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px]">
                Button
              </button>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 4,
      title: "Book with us today",
      content: (
        <>
          <div className=" w-full grid grid-cols-3 items-center">
            <div className=" w-[459px] flex flex-col gap-4 justify-start items-center bg-white rounded-2xl">
              <img src={dinner} alt="Someone drumming" />
              <div className=" flex flex-col gap-1 justify-start items-center text-black">
                <p className=" text-[24px] font-Playfair font-bold text-black">
                  Card title
                </p>
                <p className=" text-[18px] font-Montserrat font-normal tracking-[-1%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur.
                </p>
              </div>
              <button className=" py-4 px-6 w-28 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px]">
                Button
              </button>
            </div>
            <div className=" w-[459px] flex flex-col gap-4 justify-start items-center bg-white rounded-2xl">
              <img src={wedding} alt="Someone drumming" />
              <div className=" flex flex-col gap-1 justify-start items-center text-black">
                <p className=" text-[24px] font-Playfair font-bold text-black">
                  Card title
                </p>
                <p className=" text-[18px] font-Montserrat font-normal tracking-[-1%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur.
                </p>
              </div>
              <button className=" py-4 px-6 w-28 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px]">
                Button
              </button>
            </div>
            <div className=" w-[459px] flex flex-col gap-4 justify-start items-center bg-white rounded-2xl">
              <img src={concert} alt="Someone drumming" />
              <div className=" flex flex-col gap-1 justify-start items-center text-black">
                <p className=" text-[24px] font-Playfair font-bold text-black">
                  Card title
                </p>
                <p className=" text-[18px] font-Montserrat font-normal tracking-[-1%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur.
                </p>
              </div>
              <button className=" py-4 px-6 w-28 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px]">
                Button
              </button>
            </div>
          </div>
        </>
      ),
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col gap-[14px] bg-white">
      <div className="w-full flex flex-col  items-center justify-center bg-[#212121] rounded-tl-[32px] rounded-bl-[32px] mt-20 ">
        <div className=" flex flex-col gap-20 justify-center items-center w-full ">
          <p className="flex w-full justify-center items-center text-[40px] font-Playfair py-8  ">
            {slides[currentSlide].title}
          </p>
          <div className="relative w-full overflow-hidden ">
            <div
              className="flex transition-transform duration-500 ease-in-out "
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 w-full flex flex-col gap-20 rounded-bl-[32px] justify-center items-center pb-8">
                  {slide.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="font-Montserrat text-[18px] font-bold tracking-[-1%] flex justify-between text-[#212121] px-3 bg-white w-full items-center">
          <button
            className={`w-[221px] py-4 px-6 flex items-center justify-center cursor-pointer ${
              currentSlide === 0 ? "text-[#CC5500]" : ""
            }`}
            onClick={() => handleSlideChange(0)}
          >
            Events
          </button>
          <button
            className={`w-[221px] py-4 px-6 flex items-center justify-center cursor-pointer ${
              currentSlide === 1 ? "text-[#CC5500]" : ""
            }`}
            onClick={() => handleSlideChange(1)}
          >
            Booking
          </button>
          <button
            className={`w-[221px] py-4 px-6 flex items-center justify-center cursor-pointer ${
              currentSlide === 2 ? "text-[#CC5500]" : ""
            }`}
            onClick={() => handleSlideChange(2)}
          >
            Testimonials
          </button>
          <button
            className={`w-[221px] py-4 px-6 flex items-center justify-center cursor-pointer ${
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
