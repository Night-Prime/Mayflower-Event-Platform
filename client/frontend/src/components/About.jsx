import React, { useState } from "react";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { ArrowLeft, ArrowRight } from "react-feather";

export const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("");

  const slides = [
    {
      title: "The May Gardens Origins",
      content: (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-2">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
              alt="Someone drumming"
              className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/medusa.png?updatedAt=1725131405183"
              alt="Medusa's hair"
              className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/laugh.png?updatedAt=1725131393999"
              alt="Someone laughing"
              className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
            />
          </div>
          <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-center w-full max-w-[320px] sm:max-w-[720px] lg:max-w-[1375px] leading-5 sm:leading-6 lg:leading-7 px-4 mx-2 font-Montserrat">
            Eget consectetur at tincidunt malesuada integer dictumst a nisl et.
            Et ut integer tortor sem. Volutpat lorem sed nulla risus velit
            lacus. Mattis risus tortor tristique morbi gravida elementum non
            fusce. Viverra mi risus gravida risus augue hac cras. In at tempus
            euismod eget massa. Elit mattis eu justo viverra. Sem lacus ac
            egestas varius pharetra dui. In aliquam cursus sed pharetra
            tincidunt. Praesent at morbi hendrerit augue ipsum id placerat.
            Facilisi phasellus bibendum interdum purus maecenas diam ultrices.
            Parturient nunc elit sed diam proin interdum nunc tincidunt.
          </p>
        </>
      ),
    },
    {
      title: "Mission to Redefine Event Excellence",
      content: (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-2">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
              alt="Someone drumming"
              className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/medusa.png?updatedAt=1725131405183"
              alt="Medusa's hair"
              className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/laugh.png?updatedAt=1725131393999"
              alt="Someone laughing"
              className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
            />
          </div>
          <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px]  font-normal text-center w-full max-w-[320px] sm:max-w-[720px] lg:max-w-[1375px] leading-5 sm:leading-6 lg:leading-7 px-4 mx-2 font-Montserrat">
            Eget consectetur at tincidunt malesuada integer dictumst a nisl et.
            Et ut integer tortor sem. Volutpat lorem sed nulla risus velit
            lacus. Mattis risus tortor tristique morbi gravida elementum non
            fusce. Viverra mi risus gravida risus augue hac cras. In at tempus
            euismod eget massa. Elit mattis eu justo viverra. Sem lacus ac
            egestas varius pharetra dui. In aliquam cursus sed pharetra
            tincidunt. Praesent at morbi hendrerit augue ipsum id placerat.
            Facilisi phasellus bibendum interdum purus maecenas diam ultrices.
            Parturient nunc elit sed diam proin interdum nunc tincidunt.
          </p>
        </>
      ),
    },
  ];

  const handleNextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-5 mb-10 sm:mx-6 lg:mx-[30px] sm:mt-[150px] lg:mt-[100px] bg-[#212121] rounded-[32px] text-black py-5 lg:py-6">
        <div className="w-full bg-[#212121] text-white py-2">
          <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair px-4 lg:px-10 text-center">
            {slides[currentSlide].title}
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                {slide.content}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 sm:gap-6 lg:gap-10 justify-center mt-6 sm:mt-8 lg:mt-10">
          <button onClick={handlePreviousSlide}>
            <ArrowLeft />
          </button>
          <button onClick={handleNextSlide}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
