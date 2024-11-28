import React, { useState } from "react";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { ChevronLeft, ChevronRight } from "react-feather";
import AboutMayflower from "./AboutMayflower.jsx";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("");

  const slides = [
    {
      title: "The May Gardens Origins",
      content: (
        <>
          <div className="w-full h-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
              alt="Someone drumming"
              className="w-[100%] h-[100%] object-cover rounded-lg"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/medusa.png?updatedAt=1725131405183"
              alt="Medusa's hair"
              className="w-[100%] h-[100%] object-cover rounded-lg"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/laugh.png?updatedAt=1725131393999"
              alt="Someone laughing"
              className="w-[100%] h-[100%] object-cover rounded-lg"
            />
          </div>
          <p className="mt-2 text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-center w-full max-w-[320px] sm:max-w-[720px] lg:max-w-[1375px] leading-5 sm:leading-6 lg:leading-7 px-4 mx-2 font-Montserrat">
            At May Gardens Event Center, we are your intimate escape for life’s
            most cherished celebrations. Our facilities are maintained to the
            highest standards to ensure that every event is a massive success.
            Working closely with top event planners and vendors alike, we ensure
            that your ideas are valid and your vision for your event is brought
            to life. From our breathtaking space to our exceptional hospitality,
            your guests will have stories of your event on their lips for years
            to come.
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
            You probably don’t remember your first walk, but you will always
            remember your first event with us, and this is our mission; to make
            every event an unforgettable and memorable experience. For your
            second event with us, you probably would not have to send out
            invitation cards, everyone will be begging for one, because who
            wouldn’t want to relive that epic celebration? With creativity and
            excellence at the forefront, we turn your events into unforgettable
            experiences because ordinary just wouldn’t do. Happiness is one of
            the many things we bring to the table so expect us to make you shine
            and dance with joy. Collaboration is key here - think of us as your
            event’s cheer squad, minus the pom-poms. And yes, if it’s not fun,
            it’s not May Gardens.
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
    <div className="h-lvh overflow-y-scroll bg-gardens flex flex-col items-center">
      <Navbar />
      <AboutMayflower />
      <div className="relative h-full w-11/12 bg-gardens text-black my-6">
        <div className="flex flex-col items-center gap-5">
          <div className="w-full text-white">
            <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center">
              {slides[currentSlide].title}
            </p>
          </div>

          <div className="relative h-3/4 w-full overflow-hidden">
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

          <div className="absolute top-1/2 flex w-[99%] mx-20 mt-10 justify-between items-center">
            <button
              onClick={handlePreviousSlide}
              className=" bg-maypink text-black p-3 rounded-full z-10"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNextSlide}
              className=" bg-maypink text-black p-3 rounded-full z-10"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
