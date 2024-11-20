import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Link as RouterLink } from "react-router-dom";
import { Right } from "../icons/Right";

const imgSlides = [
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%209.png?updatedAt=1731525610543",
    alt: "Someone drumming",
    title: "CEO, MD",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%208.png?updatedAt=1731525634992",
    alt: "People Partying",
    title: "CEO, MD",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%207.png?updatedAt=1731525636949",
    alt: "Medussa Hair",
    title: "CEO, MD",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2012.png?updatedAt=1731583996976",
    alt: "Drinking with the guys",
    title: "CEO, MD",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2010.png?updatedAt=1731583997575",
    alt: "May Garden",
    title: "CEO, MD",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2013.png?updatedAt=1731583997983",
    alt: "Selfie with Friends",
    title: "CEO, MD",
  },
];

const Team = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative w-full h-auto xl:h-screen flex items-center justify-evenly">
      <div className="absolute inset-0 z-10 grid grid-cols-9 grid-rows-9 border-2 border-green-100">
        {Array.from({ length: 81 }).map((_, index) => (
          <div
            key={index}
            className="border border-green-100 flex items-center justify-center"
          ></div>
        ))}
      </div>

      <div className="z-20 h-full w-full flex flex-col gap-6 items-center justify-center py-24">
        <h1 className="font-Cinzel text-mayblack font-semibold text-[20px] xl:text-[40px] text-center">
          MEET THE TEAM THAT MAKES THE <br />{" "}
          <span className="text-gardenslight">MAGIC </span>HAPPENS
        </h1>

        <div className="h-full w-full relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex flex-row gap-20 transition-transform duration-500 ease-in-out overflow-y-hidden overflow-x-scroll scroll-smooth"
          >
            {imgSlides.map((image, index) => (
              <div className="flex-shrink-0" key={index}>
                <img
                  className="w-[225px] h-[225px] object-cover"
                  src={image.url}
                  alt={image.alt}
                />
                <div className="relative">
                  <div className="bg-white opacity-75 rounded-md absolute bottom-2 left-2 px-2">
                    <h5 className="text-mayblack font-Cinzel text-xs">
                      ALICIA ODUNDE, <br />
                      CEO, MD
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden absolute bottom-0 xl:bottom-5 w-full xl:flex justify-between items-center px-4">
            <button onClick={scrollLeft} className="p-2 text-mayblack">
              <ChevronLeft />
            </button>
            <div className="h-[3px] w-full bg-mayblack rounded-md"></div>
            <button onClick={scrollRight} className="p-2 text-mayblack">
              <ChevronRight />
            </button>
          </div>
        </div>

        <button className="bg-gardens text-white p-3 rounded-2xl cursor-pointer">
          <RouterLink
            to="/memories"
            className="flex items-center justify-center"
          >
            Book a Tour
            <span className="text-white ml-2">
              <Right />
            </span>
          </RouterLink>
        </button>
      </div>
    </div>
  );
};
export default Team;
