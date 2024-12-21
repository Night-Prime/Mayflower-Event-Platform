import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Right } from "../icons/Right";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useAnimation";
import { animations } from "../shared/animation";

const imgSlides = [
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%209.png?updatedAt=1731525610543",
    alt: "Someone drumming",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%208.png?updatedAt=1731525634992",
    alt: "People Partying",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%207.png?updatedAt=1731525636949",
    alt: "Medussa Hair",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2012.png?updatedAt=1731583996976",
    alt: "Drinking with the guys",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2010.png?updatedAt=1731583997575",
    alt: "May Garden",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2013.png?updatedAt=1731583997983",
    alt: "Selfie with Friends",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2010.png?updatedAt=1731583997575",
    alt: "May Garden",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2012.png?updatedAt=1731583996976",
    alt: "Drinking with the guys",
  },
];

const Moments = () => {
  const childReveal = useScrollAnimation(animations.reveal);
  const rows = 8; // Number of rows
  const cols = 8; // Number of columns
  const totalCells = rows * cols; // Total grid cells

  // Repeat and slice the images to fill the grid
  const repeatedSlides = Array.from(
    { length: totalCells },
    (_, index) => imgSlides[index % imgSlides.length]
  );

  return (
    <motion.div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <h1 className=" text-5xl lg:text-6xl text-center font-Cinzel text-white opacity-100 shadow-md">
          Moments at Maygardens
        </h1>
        <button
          type="button"
          className="hidden w-28 h-12 bg-gardenslight text-xs sm:text-sm flex items-center font-Montserrat justify-center text-white rounded-lg mt-4"
        >
          <RouterLink className="font-bold text-xl" to="/memories">
            Moments
          </RouterLink>
        </button>
      </div>
      <motion.div className="grid grid-cols-8 grid-rows-8 h-full gap-y-2">
        {repeatedSlides.map((slide, index) => (
          <motion.div key={index} className="col-span-1 row-span-1">
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Moments;
