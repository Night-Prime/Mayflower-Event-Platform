import React, { useState } from "react";
import selfie from "../assets/Images/selfie.png";
import tree from "../assets/Images/tree.png";
import laughing from "../assets/Images/laughing.png";
import drinks from "../assets/Images/drinks.png";
import concert from "../assets/Images/concert.png";
import dinner from "../assets/Images/dinner.png";
import wedding from "../assets/Images/wedding.png";
import circle1 from "../assets/Images/circle1.png";
import circle2 from "../assets/Images/circle2.png";
import circle3 from "../assets/Images/circle3.png";
import circle4 from "../assets/Images/circle4.png";
import { Littleloca } from "../icons/Littleloca";
import { Star } from "../icons/Star";
import { Right } from "../icons/Right";

export const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      content: (
        <div className="shared-container w-full flex flex-col pb-14 justify-center rounded-tl-[32px] rounded-bl-[32px] items-center bg-[#4E4E4E] text-white">
          <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair py-8 text-center">
            Events
          </p>
          <div className="flex w-full justify-center items-center px-4 gap-4 ">
            <img src={selfie} alt="Selfie" className="w-full md:w-[24%]" />
            <img src={tree} alt="Tree" className="w-full md:w-[24%]" />
            <img src={laughing} alt="Laughing" className="w-full md:w-[24%]" />
            <img src={drinks} alt="Drinks" className="w-full md:w-[24%]" />
          </div>
          <button className="bg-[#CC5500] py-3 px-6 flex items-center justify-center rounded-lg mb-8 text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-Montserrat w-[220px]  mt-4 sm:mt-8 ">
            View Gallery{" "}
            <span className="ml-2">
              <Right />
            </span>
          </button>
        </div>
      ),
    },
    {
      content: (
        <div className=" shared-container flex flex-col bg-white items-center justify-center">
          <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair py-8 text-center text-black ">
            Book with us
          </p>
          <div className=" flex-wrap flex justify-center items-center gap-8 bg-white">
            <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
              <img src={dinner} alt="Dinner" className=" rounded-t-2xl" />
              <div className=" flex flex-col gap-4 justify-start items-start px-4">
                <div className="flex flex-col gap-1 justify-start items-start text-black">
                  <p className="text-[24px] font-Playfair font-bold">
                    Card title
                  </p>
                  <p className="text-[18px] font-Montserrat font-normal text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    purus tellus arcu sit nibh consectetur.
                  </p>
                </div>

                <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
                  Button
                </button>
              </div>
            </div>
            <div className="flex flex-col shadow-2xl gap-4 justify-start items-start  bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
              <img
                src={wedding}
                alt="Dinner"
                className="w-full h-auto rounded-t-2xl"
              />
              <div className=" flex flex-col gap-4 justify-start items-start px-4">
                <div className="flex flex-col gap-1 justify-start items-start text-black">
                  <p className="text-[24px] font-Playfair font-bold">
                    Card title
                  </p>
                  <p className="text-[18px] font-Montserrat font-normal text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    purus tellus arcu sit nibh consectetur.
                  </p>
                </div>

                <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
                  Button
                </button>
              </div>
            </div>
            <div className="flex flex-col shadow-2xl gap-4 justify-start items-start  bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
              <img
                src={concert}
                alt="Dinner"
                className="w-full h-auto rounded-t-2xl"
              />
              <div className=" flex flex-col gap-4 justify-start items-start px-4">
                <div className="flex flex-col gap-1 justify-start items-start text-black">
                  <p className="text-[24px] font-Playfair font-bold">
                    Card title
                  </p>
                  <p className="text-[18px] font-Montserrat font-normal text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    purus tellus arcu sit nibh consectetur.
                  </p>
                </div>

                <button className="py-4 px-6 bg-[#CC5500] rounded-lg font-Montserrat font-bold text-[18px] mb-4">
                  Button
                </button>
              </div>
            </div>
          </div>
          <button className="bg-[#CC5500] py-3 px-6 flex items-center justify-center rounded-lg mb-8 text-[16px] font-bold font-Inter w-[259px] mt-4 sm:mt-8 lg:mt-10">
            Select your bookings{" "}
            <span className="ml-2">
              <Right />
            </span>
          </button>
        </div>
      ),
    },
    {
      content: (
        <>
          <div className=" w-full shared-container flex flex-col gap-24 bg-[#4E4E4E] justify-center items-center">
            <div className=" w-full flex flex-col items-center justify-center mt-20">
              <p className="text-[60px] sm:text-[36px] lg:text-[60px] w-[814px] font-Playfair py-2 text-center text-[#EDEDED]">
                Heres what they are saying about us
              </p>
              <p className="text-[24px] sm:text-[30px] lg:text-[24px] font-greatVibes text-center pt-2 text-[#EDEDED]">
                Id ac sem in nec lorem tincidunt hac aenean. Magna amet pretium
                nibh pellentesque.
              </p>
            </div>
            <div className=" flex justify-center items-end pb-40 w-full px-10 gap-6">
              <div className="flex flex-col w-[344px] gap-4 justify-start items-start p-3 bg-[#212121] rounded-2xl ">
                <p className=" font-Montserrat text-[18px]">
                  Posuere ultrices amet diam erat in amet nulla tellus nibh.
                  Vulputate cras nunc lectus facilisis. Sapien tempus
                  pellentesque in tellus at. A blandit nullam orci sed eget.
                </p>
                <div className="flex gap-2 justify-between items-center w-full">
                  <div className=" flex gap-2 justify-start items-center text-black">
                    <img src={circle1} alt="1" />
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
              <div className="flex flex-col w-[344px] gap-4 justify-start items-start p-3 bg-[#212121] rounded-2xl ">
                <p className=" font-Montserrat text-[18px]">
                  Vulputate volutpat viverra interdum et. Fusce sit habitant
                  mauris arcu pretium.
                </p>
                <div className="flex gap-2 justify-between items-center w-full">
                  <div className=" flex gap-2 justify-start items-center text-black">
                    <img src={circle2} alt="1" />
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
              <div className="flex flex-col w-[344px] gap-4 justify-start items-start p-3 bg-[#212121] rounded-2xl ">
                <p className=" font-Montserrat text-[18px]">
                  Faucibus nisl turpis orci quis eu morbi pharetra etiam amet.
                  Massa elit pellentesque et aliquet consectetur ornare sed
                  interdum. Tincidunt proin at viverra rutrum et facilisis neque
                  et. Eget quam adipiscing nulla maecenas eget elementum.
                </p>
                <div className="flex gap-2 justify-between items-center w-full">
                  <div className=" flex gap-2 justify-start items-center text-black">
                    <img src={circle3} alt="1" />
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
              <div className="flex flex-col w-[344px] gap-4 justify-start items-start p-3 bg-[#212121] rounded-2xl ">
                <p className=" font-Montserrat text-[18px]">
                  Feugiat sed urna gravida nibh ipsum euismod orci. Dictum urna
                  tellus purus praesent.
                </p>
                <div className="flex gap-2 justify-between items-center w-full">
                  <div className=" flex gap-2 justify-start items-center text-black">
                    <img src={circle4} alt="1" />
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
        </>
      ),
    },
    {
      content: (
        <div className="flex shared-container h-full px-4 gap-[147px] items-center bg-white justify-between w-full ">
          <div className="w-[589px] space-y-4">
            <h2 className="text-4xl font-semibold font-Playfair text-gray-800">
              Contact Us
            </h2>
            <p className="text-black font-Montserrat text-[18px] font-normal">
              Velit viverra eget faucibus vel fusce convallis molestie viverra
              tempor. Dignissim vitae accumsan sem pellentesque. Nisl rhoncus
              sapien nulla dignissim semper eu ipsum.
            </p>
            <form className="space-y-4">
              <div className=" flex flex-col justify-start items-start gap-[2px] text-black">
                <p>Name</p>
                <input
                  type="text"
                  className="w-full p-2 bg-[#EDEDED] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className=" flex flex-col justify-start items-start gap-[2px] text-black">
                <p>Email</p>
                <input
                  type="email"
                  className="w-full p-2 bg-[#EDEDED] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className=" flex flex-col justify-start items-start gap-[2px] text-black">
                <p>Subject</p>
                <input
                  type="text"
                  className="w-full p-2 bg-[#EDEDED] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className=" flex flex-col justify-start items-start gap-[2px] text-black">
                <p>Message</p>
                <textarea className="w-full p-2 bg-[#EDEDED] focus:outline-none resize-none focus:ring-2 focus:ring-orange-500 h-32" />
              </div>
              <button className="bg-[#CC5500] py-3 px-6 flex items-center justify-center rounded-lg mb-8 text-[16px] font-bold font-Inter w-44 mt-4 sm:mt-8 lg:mt-10">
                Submit{" "}
                <span className="ml-2">
                  <Right />
                </span>
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[600px]">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.023074653898!2d-122.41941648531302!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f99e98f1%3A0x4f8ffb46f0ec735b!2sGoogle!5e0!3m2!1sen!2sus!4v1617743606371!5m2!1sen!2sus"
              loading="lazy"
              title="Googles Maps"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ),
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col w-full bg-transparent">
      <div className="relative w-full h-[100vh] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex justify-center items-center"
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      <div className="font-Montserrat text-[16px] sm:text-[18px] font-bold tracking-[-1%] flex flex-wrap justify-center lg:justify-between text-white px-3 bg-[#212121] w-full items-center py-4">
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
