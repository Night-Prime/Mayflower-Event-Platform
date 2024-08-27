import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import circle1 from '../assets/Images/circle1.png';
import circle2 from '../assets/Images/circle2.png';
import circle3 from '../assets/Images/circle3.png';
import circle4 from '../assets/Images/circle4.png';
import concert from '../assets/Images/concert.png';
import dinner from '../assets/Images/dinner.png';
import drinks from '../assets/Images/drinks.png';
import laughing from '../assets/Images/laughing.png';
import selfie from '../assets/Images/selfie.png';
import tree from '../assets/Images/tree.png';
import wedding from '../assets/Images/wedding.png';
import { Littleloca } from '../icons/Littleloca.jsx';
import { Right } from '../icons/Right.jsx';
import { Star } from '../icons/Star.jsx';

export const Events = () => {
  const slides = [
    {
      content: (
        <div className="w-full h-full shared-container flex flex-col bg-[#4e4e4e] items-center gap-16  ">
          <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair text-center mt-8 ">
            Event Showcase
          </p>

          <div className="flex flex-col w-full h-full items-center px-2 gap-12 ">
            <div className="flex justify-center items-center">
              <img src={selfie} alt="Selfie" className="w-full md:w-[20%]" />
              <img src={tree} alt="Tree" className="w-full md:w-[20%]" />
              <img
                src={laughing}
                alt="Laughing"
                className="w-full md:w-[20%]"
              />
              <img src={drinks} alt="Drinks" className="w-full md:w-[20%]" />
            </div>
            <button className="bg-[#CC5500] py-3 px-6 flex items-center justify-center rounded-lg text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-Montserrat w-[220px] mt-4 ">
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
        <div className="w-full h-full shared-container flex flex-col bg-[#4e4e4e] gap-20 items-center  ">
          <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair text-center text-white mt-8 ">
            Explore Our Tailored Event Packages
          </p>
          <div className=" flex-wrap flex justify-center items-center gap-8 mb-10 ">
            <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-2xl sm:w-[30%] lg:w-[25%]">
              <img
                src={wedding}
                alt="wedding-like"
                className=" rounded-t-2xl"
              />
              <div className=" flex flex-col gap-4 justify-start items-start px-4">
                <div className="flex flex-col gap-1 justify-start items-start text-black">
                  <p className="text-2xl font-Playfair font-bold">Card title</p>
                  <p className=" font-Montserrat font-normal text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    purus tellus arcu sit nibh consectetur.
                  </p>
                </div>
                <button className="p-2 bg-[#CC5500] rounded-lg font-Montserrat font-semibold text-sm mb-4">
                  Button
                </button>
              </div>
            </div>
            <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-2xl sm:w-[30%] lg:w-[25%]">
              <img src={dinner} alt="Dinner" className=" rounded-t-2xl" />
              <div className=" flex flex-col gap-4 justify-start items-start px-4">
                <div className="flex flex-col gap-1 justify-start items-start text-black">
                  <p className="text-2xl font-Playfair font-bold">Card title</p>
                  <p className=" font-Montserrat font-normal text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    purus tellus arcu sit nibh consectetur.
                  </p>
                </div>
                <button className=" p-2 bg-[#CC5500] rounded-lg font-Montserrat font-semibold text-sm mb-4">
                  Button
                </button>
              </div>
            </div>
            <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-2xl sm:w-[30%] lg:w-[25%]">
              <img
                src={concert}
                alt="concert-like"
                className=" rounded-t-2xl"
              />
              <div className=" flex flex-col gap-4 justify-start items-start px-4">
                <div className="flex flex-col gap-1 justify-start items-start text-black">
                  <p className="text-2xl font-Playfair font-bold">Card title</p>
                  <p className=" font-Montserrat font-normal text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    purus tellus arcu sit nibh consectetur.
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
        <>
          <div className=" w-full shared-container flex flex-col gap-20 bg-[#4E4E4E] justify-center items-center">
            <div className=" w-full flex flex-col items-center justify-center">
              <p className="sm:text-[36px] lg:text-[50px] w-[700px] font-Playfair py-2 mt-8 text-center text-[#EDEDED]">
              Client Success Stories
              </p>
              <p className="text-[24px] sm:text-[30px] lg:text-[24px] font-greatVibes text-center pt-2 text-[#EDEDED]">
              Hear from Our Satisfied Clients.
              </p>
            </div>
            <div className=" flex justify-center items-end pb-40 w-full px-10 gap-6">
              <div className="flex flex-col w-[344px] gap-4 justify-start items-start p-3 bg-[#212121] rounded-2xl ">
                <p className=" font-Montserrat text-md">
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
                <p className=" font-Montserrat text-md">
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
                <p className=" font-Montserrat text-md">
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
                <p className=" font-Montserrat text-md">
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
  ];
  return (
    <div className=" flex h-full snap-x snap-mandatory bg-transparent flex-col relative w-full  overflow-y-hidden overflow-x-auto scrollbar-hidden">
      <div className="flex transition-transform duration-500 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={index}
            className=" snap-start flex-shrink-0 w-full h-full flex justify-center items-center"
          >
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
};
