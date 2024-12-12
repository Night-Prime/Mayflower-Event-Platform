import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useAnimation";
import { animations } from "../shared/animation";

const slides = [
  {
    Individual: "Lomo",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, totam a vel numquam veritatis porro omnis iste optio vitae nemo eos ducimus magnam aut sequi esse cum ex sapiente natus.",
  },
  {
    Individual: "Lomo",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, totam a vel numquam veritatis porro omnis iste optio vitae nemo eos ducimus magnam aut sequi esse cum ex sapiente natus.",
  },
  {
    Individual: "Lomo",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, totam a vel numquam veritatis porro omnis iste optio vitae nemo eos ducimus magnam aut sequi esse cum ex sapiente natus.",
  },
  {
    Individual: "Lomo",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, totam a vel numquam veritatis porro omnis iste optio vitae nemo eos ducimus magnam aut sequi esse cum ex sapiente natus.",
  },
];

const Testimonials = () => {
  const childReveal = useScrollAnimation(animations.reveal);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handler for changing slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <motion.div className="flex w-full h-auto xl:h-[70%] py-6">
      <motion.div className="w-full h-full flex flex-col justify-evenly items-center gap-8">
        <motion.h1
          {...childReveal}
          className="w-[90%] py-2 text-center font-Cinzel text-2xl text-white font-semibold"
        >
          OUR COMPANY BOASTS OF LUXURIOUS MIX OF{" "}
          <span className="text-gardenslight">NATURE </span>AND
          <span className="text-gardenslight"> CLASS </span>
          BUT...
        </motion.h1>
        <motion.div className="w-full h-full rounded-t-3xl bg-mayblack ">
          <motion.div className="w-full h-full flex flex-col xl:flex-row justify-between items-start px-5">
            <motion.div className="my-10 h-full w-full xl:w-[20%] flex-col justify-center items-center xl:ml-12 ">
              <h1 className="font-Cinzel text-xl 2xl:text-4xl">
                ...DON'T TAKE OUR <br />{" "}
                <span className="text-gardenslight">WORD</span> FOR IT.
              </h1>

              <h5 className="text-xs 2xl:text-xl mt-6">
                Here's what People
                <br /> have to say about
                <br />
                <span className="text-gardenslight">Maygardens</span>
              </h5>
            </motion.div>

            <motion.div className="py-6 h-full w-full xl:w-[80%] relative overflow-hidden flex flex-col justify-center items-start px-5 space-y-4">
              <div
                className="w-auto xl:w-full h-[100%] xl:h-full flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="rounded-2xl h-full xl:h-[60%] xl:w-3/4 my-auto mx-[10px] xl:mx-[12.5%] xl:flex-shrink-0 bg-white text-mayblack shadow-lg p-1 xl:p-5"
                  >
                    <motion.div className="px-4 xl:p-0 flex flex-row gap-4 items-center">
                      <img
                        src="https://ik.imagekit.io/0y99xuz0yp/icon-user.png?updatedAt=1731592197693"
                        alt="icon-user"
                        className="w-8 h-8 sm:w-10 sm:h-10"
                      />
                      <h3 className="font-Cinzel xl:text-lg text-[10px] font-semibold">
                        {slide.Individual}
                      </h3>
                    </motion.div>
                    <p className="mt-2 text-[6px] xl:text-sm sm:text-base">
                      {slide.comment}
                    </p>
                  </div>
                ))}
              </div>

              <motion.div className="hidden xl:flex justify-between items-center w-full">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full hover:bg-gray-300"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full hover:bg-gray-300"
                >
                  <ChevronRight />
                </button>
              </motion.div>

              <motion.div className="mx-auto hidden xl:flex space-x-2">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentSlide ? "bg-white" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
