import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Right } from "../icons/Right";
import { motion } from "framer-motion";
import useScrollAnimation from "../hook/useAnimation";
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
];

const Moments = () => {
  const childReveal = useScrollAnimation(animations.reveal);
  return (
    <motion.div className="w-full h-auto">
      <motion.div className="w-full h-[90vh] xl:h-[100vh] flex flex-col items-center justify-between py-4">
        <motion.div className="w-full h-[86%] bg-gardens">
          <motion.div className="h-full w-full flex flex-col justify-evenly items-center">
            <motion.div className="h-full relative overflow-hidden ">
              <motion.div
                {...childReveal}
                className="flex flex-row justify-center gap-6 xl:gap-12 transition-transform duration-500 ease-in-out overflow-y-hidden overflow-x-scroll scroll-smooth"
              >
                {imgSlides.map((image, index) => (
                  <motion.img
                    className="w-[50%] xl:w-[225px] object-cover"
                    key={index}
                    src={image.url}
                    alt={image.alt}
                  />
                ))}
              </motion.div>
            </motion.div>
            <motion.div>
              <h1 className="font-Cinzel font-bold text-[30px] text-center xl:text-[60px]">
                MOMENTS AT <span className="text-gardenslight">MAYGARDENS</span>
              </h1>
            </motion.div>
            <motion.div className="h-full relative overflow-hidden ">
              <motion.div
                {...childReveal}
                className="flex flex-row justify-center  gap-12 transition-transform duration-500 ease-in-out overflow-y-hidden overflow-x-scroll scroll-smooth"
              >
                {imgSlides.reverse().map((image, index) => (
                  <motion.img
                    className="w-[50%] xl:w-[225px] object-cover"
                    key={index}
                    src={image.url}
                    alt={image.alt}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.button
          {...childReveal}
          className="bg-gardens text-white p-3 rounded-2xl cursor-pointer"
        >
          <RouterLink
            to="/memories"
            className="flex items-center justify-center"
          >
            View Moments
            <span className="text-white ml-2">
              <Right />
            </span>
          </RouterLink>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Moments;
