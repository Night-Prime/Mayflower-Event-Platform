import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
  const slides = [
    {
      content: (
        <div className="h-full w-full">
          <div className="flex flex-col justify-center items-center gap-2 mb-8">
            <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair py-3 text-center">
              Event Showcase
            </p>

            <div className="flex w-full justify-center items-center px-2 gap-2 ">
              <img src={selfie} alt="Selfie" className="w-full md:w-[24%]" />
              <img src={tree} alt="Tree" className="w-full md:w-[24%]" />
              <img src={laughing} alt="Laughing" className="w-full md:w-[24%]" /> 
              <img src={drinks} alt="Drinks" className="w-full md:w-[24%]" />
            </div>

            <button className="bg-[#CC5500] py-3 px-6 flex items-center justify-center rounded-lg mb-8 text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-Montserrat w-[220px]  mt-4 sm:mt-8 ">
              <RouterLink
                to="/gallery"
                className=" flex items-center justify-center"
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
        <div className=" w-full ">
          <div className="flex flex-col items-center ga-4 px-2 justify-center h-full">
            <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair py-8 text-center text-white ">
              Explore Our Tailored Event Packages
            </p>

            <div className="container w-[95%] flex flex-row justify-between items-center gap-8">
              <div className="flex-col shadow-2xl gap-4 justiify-start items-start bg-white rounded-2xl w-[30%] h-5/6">
                <img src={dinner} alt="Dinner" className=" rounded-t-2xl" />
                <div className="w-full flex flex-col items-start justify-center p-2">
                  <p className="text-black text-2xl font-Playfair font-bold">
                    Card Title
                  </p>
                  <p className="text-black font-Montserrat text-justify">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. At purus tellus arcu
                    <br /> sit nibh consectetur.
                  </p>
                </div>
                <button className="ml-2 p-2 bg-[#CC5500] rounded-lg font-Montserrat font-semibold text-sm mb-4">
                  Button
                </button>
              </div>
              <div className="flex-col shadow-2xl gap-4 justiify-start items-start bg-white rounded-2xl w-[30%] h-5/6">
                <img
                  src={wedding}
                  alt="Dinner"
                  className="w-full h-auto rounded-t-2xl"
                />
                <div className="w-full flex flex-col items-start justify-center p-2">
                  <p className="text-black text-2xl font-Playfair font-bold">
                    Card Title
                  </p>
                  <p className="text-black text-md text font-Montserrat text-justify">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. At purus tellus arcu
                    <br /> sit nibh consectetur.
                  </p>
                </div>
                <button className="ml-2 p-2 bg-[#CC5500] rounded-lg font-Montserrat font-semibold text-sm mb-4">
                  Button
                </button>
              </div>
              <div className="flex-col shadow-2xl gap-4 justiify-start items-start bg-white rounded-2xl w-[30%] h-5/6">
                <img
                  src={concert}
                  alt="Dinner"
                  className="w-full h-auto rounded-t-2xl"
                />
                <div className="w-full flex flex-col items-start justify-center p-2">
                  <p className="text-black text-2xl font-Playfair font-bold">
                    Card Title
                  </p>
                  <p className="text-black font-Montserrat text-justify">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. At purus tellus arcu
                    <br /> sit nibh consectetur.
                  </p>
                </div>
                <button className="ml-2 p-2 bg-[#CC5500] rounded-lg font-Montserrat font-semibold text-sm mb-4">
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
        <div className="h-full w-full">
          <div className="flex flex-col gap-24 justify-center items-center">
            <div className=" w-full flex flex-col items-center justify-center mt-16">
              <p className="text-6xl font-Playfair py-8 text-center text-[#EDEDED]">
                Client Success Stories
              </p>
              <p className="text-[24px] sm:text-[30px] lg:text-[24px] font-greatVibes text-center pt-2 text-[#EDEDED]">
                Hear from Our Satisfied Clients.
              </p>
            </div>

            <div className=" flex flex-wrap justify-center items-end pb-40 w-full px-10 gap-6">
              <div className="flex flex-col w-[344px] gap-4 justify-start items-start p-3 bg-[#212121] rounded-2xl ">
                <p className=" font-Montserrat text-[18px]">
                  Posuere ultrices amet diam erat
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
                  Vulputate volutpat viverra interdum et.
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
                  Faucibus nisl turpis orci quis eu
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
                  Feugiat sed urna gravida.
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
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col w-full h-lvh bg-transparent">
      <div className="relative bg-[#4E4E4E] text-white overflow-x-auto overflow-y-hidden whitespace-nowrap">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="inline-block w-full h-lvh justify-center items-center"
          >
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
};
