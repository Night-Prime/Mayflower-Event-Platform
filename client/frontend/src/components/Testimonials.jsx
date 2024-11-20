import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { motion } from "framer-motion";
import useScrollAnimation from "../hook/useAnimation";
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
    <motion.div className="hidden lg:flex w-full h-auto mt-10">
      <motion.div className="w-full h-full flex flex-col justify-evenly items-center gap-6">
        <motion.h1
          {...childReveal}
          className="w-[90%] text-center font-Cinzel text-[20px] xl:text-[40px] text-mayblack font-semibold"
        >
          OUR COMPANY BOASTS OF LUXURIOUS MIX OF{" "}
          <span className="text-gardenslight">NATURE </span>AND{" "}
          <span className="text-gardenslight">CLASS </span>
          BUT...
        </motion.h1>
        <motion.div className="w-full h-[100vh] rounded-t-3xl bg-mayblack ">
          <motion.div className="w-full h-[85%] xl:border-b-2 xl:border-gardenslight flex flex-col xl:flex-row justify-between items-start px-5 mb-6">
            <motion.div className="h-full w-full xl:w-[40%] xl:border-r-2 xl:border-gardenslight flex flex-col justify-evenly items-start xl:ml-12">
              <h1 className="font-Cinzel text-[20px] xl:text-[40px]">
                ...DON'T TAKE OUR <br />{" "}
                <span className="text-gardenslight">WORD</span> FOR IT.
              </h1>

              <h5 className="text-sm xl:text-[20px]">
                Here's what People
                <br /> have to say about
                <br />
                <span className="text-gardenslight">Maygardens</span>
              </h5>
            </motion.div>

            <motion.div className="py-10 h-full w-full xl:w-[60%] relative overflow-hidden flex flex-col justify-center items-center px-5 space-y-4">
              <div
                className="w-auto xl:w-full h-[80%] flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="rounded-2xl h-full xl:h-[60%] xl:w-1/2 my-auto mx-[10px] xl:mx-[25%] xl:flex-shrink-0 bg-white text-mayblack shadow-lg p-1 xl:p-5"
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

              <motion.div className="hidden xl:flex justify-between items-center w-full px-4 sm:px-8">
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

              <motion.div className="hidden xl:flex space-x-2">
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
