import React, { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Littleloca } from "../icons/Littleloca.jsx";
import { Right } from "../icons/Right.jsx";
import { Star } from "../icons/Star.jsx";
import { RightA } from "../icons/RightA.jsx";
import { LeftA } from "../icons/LeftA.jsx";
import tea from "../assets/images/tea.png";
import dinner0 from "../assets/images/dinner0.png";
import BookForm from "./BookForm.jsx";

export const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const slideRefs = useRef([]);

  const slideContainerRef = useRef(null);

  const nextSlide = () => {
    const container = slideContainerRef.current;
    const slideWidth = container.clientWidth;
    container.scrollLeft += slideWidth;
  };

  const prevSlide = () => {
    const container = slideContainerRef.current;
    const slideWidth = container.clientWidth;
    container.scrollLeft -= slideWidth;
  };

  const slides = [
    {
      content: (
        <div className="w-full h-auto shared-container flex flex-col items-center gap-16">
          <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair text-center mt-8">
            Event Showcase
          </p>
          <div className="flex flex-col w-full h-full items-center px-2">
            <div className="flex justify-center items-center gap-4">
              {/* Conditional rendering for images */}
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/selfie.png?updatedAt=1725131446084"
                alt="Selfie"
                className=" hidden w-[30%] lg:w-[20%] lg:block"
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/tree.png?updatedAt=1725131405421"
                alt="Tree"
                className=" w-[30%] lg:w-[20%]"
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/laughing.png?updatedAt=1725131406021"
                alt="Laughing"
                className=" hidden w-[30%] lg:w-[20%] lg:block"
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/drinks.png?updatedAt=1725131445657"
                alt="Drinks"
                className=" w-[30%] lg:w-[20%]"
              />
            </div>
            <button className="bg-[#CC5500] py-3 px-6 flex items-center justify-center rounded-lg text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-Montserrat w-[220px] mt-4">
              <RouterLink
                to="/gallery"
                className="flex items-center justify-center"
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
        <div className="w-full h-auto shared-container flex flex-col gap-10 items-center">
          <div className="flex gap-6 items-center justify-center">
            <img src={tea} alt="drinking tea" className=" lg:w-[22%] w-[20%]" />
            <img src={dinner0} alt="A dinner" className=" lg:w-[22%] w-[20%]" />
            <div className="lg:w-[70%] lg:h-[320px] h-[270px] bg-[#212121] text-white flex flex-col gap-6 p-4  justify-center items-start rounded-xl">
              <div className="w-full flex flex-col justify-center items-start">
                <h3 className="text-xl lg:text-4xl font-Playfair font-bold mb-4">
                  Unveil the Magic:
                </h3>
                <p className="text-sm sm:text-md lg:text-lg font-medium font-Montserrat text-center">
                  Book Your May Gardens Tour Today
                </p>
              </div>
              <button
                className="bg-[#CC5500] py-2 px-3 lg:py-2 lg:px-4 flex items-center justify-center rounded-lg text-xs md:text-md font-bold font-Montserrat"
                onClick={openModal}
              >
                Fill our form
                <span className="ml-2">
                  <Right />
                </span>
              </button>
              {isModalOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
                  <div className="p-0 m-0 w-full h-full">
                    <BookForm closeModal={closeModal} item={packages} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="w-full h-full shared-container gap-20 flex flex-col justify-between items-center">
          <div className=" w-full flex flex-col items-center justify-center">
            <p className="sm:text-[36px] lg:text-[50px] w-[700px] font-Playfair mt-8 text-center text-[#EDEDED]">
              Client Success Stories
            </p>
            <p className="text-[24px] sm:text-[30px] lg:text-[24px] font-greatVibes text-center pt-2 text-[#EDEDED]">
              Hear from Our Satisfied Clients.
            </p>
          </div>
          <div className=" flex justify-center items-end pb-40 w-full px-10 gap-6">
            <div className=" flex-col w-[22%] gap-8 h-auto justify-start items-start p-3 bg-[#212121] rounded-xl hidden lg:block ">
              <p className=" font-Montserrat text-sm">
                Posuere ultrices amet diam erat in amet nulla tellus nibh.
                Vulputate cras nunc lectus facilisis. Sapien tempus pellentesque
                in tellus at. A blandit nullam orci sed eget.
              </p>
              <div className="flex gap-4 justify-between items-center w-full">
                <div className=" flex gap-2 justify-start items-center text-black">
                  <img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/circle1.png?updatedAt=1725131398528"
                    alt="1"
                  />
                  <div className=" flex flex-col font-kanit text-sm">
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
            <div className="flex flex-col lg:w-[22%] w-[35%] h-auto gap-8 justify-start items-start p-3 bg-[#212121] rounded-xl ">
              <p className=" font-Montserrat text-sm">
                Vulputate volutpat viverra interdum et. Fusce sit habitant
                mauris arcu pretium.
              </p>
              <div className="flex gap-4 justify-between items-center w-full">
                <div className=" flex gap-2 justify-start items-center text-black">
                  <img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/circle2.png?updatedAt=1725131401455"
                    alt="1"
                  />
                  <div className=" flex flex-col font-kanit text-sm">
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
            <div className=" flex-col w-[22%] gap-8 justify-start items-start p-3 bg-[#212121] rounded-xl hidden lg:block ">
              <p className=" font-Montserrat text-sm">
                Faucibus nisl turpis orci quis eu morbi pharetra etiam amet.
                Massa elit pellentesque et aliquet consectetur ornare sed
                interdum. Tincidunt proin at viverra rutrum et facilisis neque
                et.
              </p>
              <div className="flex gap-2 justify-between items-center w-full">
                <div className=" flex gap-2 justify-start items-center text-black">
                  <img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/circle3.png?updatedAt=1725131398921"
                    alt="1"
                  />
                  <div className=" flex flex-col font-kanit text-sm">
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
            <div className="flex flex-col w-[35%] lg:w-[22%] gap-8 justify-start items-start p-3 bg-[#212121] rounded-xl ">
              <p className=" font-Montserrat text-sm">
                Feugiat sed urna gravida nibh ipsum euismod orci. Dictum urna
                tellus purus praesent.
              </p>
              <div className="flex gap-2 justify-between items-center w-full">
                <div className=" flex gap-2 justify-start items-center text-black">
                  <img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/circle4.png?updatedAt=1725131398924"
                    alt="1"
                  />
                  <div className=" flex flex-col font-kanit text-sm">
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
      ),
    },
  ];

  return (
    <div className="bg-[#4e4e4e] relative w-full h-[550px] overflow-hidden md:block hidden">
      <div
        className="slide-container h-full flex transition-transform duration-500 ease-in-out overflow-y-hidden overflow-x-scroll scroll-smooth"
        ref={slideContainerRef}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className="w-full h-[550px] flex-shrink-0 flex justify-center items-center"
            style={{ scrollSnapAlign: "center" }}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 bg-[#212121] p-3 rounded-full z-10"
      >
        <LeftA />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 bg-[#212121] p-3 rounded-full z-10"
      >
        <RightA />
      </button>
    </div>
  );
};
