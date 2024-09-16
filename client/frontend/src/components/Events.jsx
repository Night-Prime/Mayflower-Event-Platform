import React, { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Littleloca } from "../icons/Littleloca.jsx";
import { Right } from "../icons/Right.jsx";
import { Star } from "../icons/Star.jsx";
import BookForm from "./BookForm.jsx";
import { ChevronLeft, ChevronRight } from "react-feather";
import { clientMakeRequest } from "../helper/makeRequest.js";
import Preloader from "./Preloader.jsx";

export const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    clientMakeRequest
      .get("/package/all")
      .then((res) => {
        setIsLoading(true);
        const item = res.data.data;
        setPackages(item);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  const slides = [
    {
      content: (
        <div className="w-full h-5/6 shared-container flex flex-col items-center justify-center gap-16">
          <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-Playfair text-center mt-8">
            Event Showcase
          </p>
          <div className="flex flex-col w-full h-full items-center px-2">
            <div className="flex justify-center items-center gap-4">
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/selfie.png?updatedAt=1725131446084"
                alt="Selfie"
                className=" hidden w-[30%] lg:w-[15%] lg:block"
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/tree.png?updatedAt=1725131405421"
                alt="Tree"
                className=" w-[30%] lg:w-[18%]"
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/laughing.png?updatedAt=1725131406021"
                alt="Laughing"
                className=" hidden w-[30%] lg:w-[15%] lg:block"
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/drinks.png?updatedAt=1725131445657"
                alt="Drinks"
                className=" w-[30%] lg:w-[18%]"
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
        <div className="w-full h-5/6 shared-container flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-6 items-center justify-center">
            <p className="text-4xl font-normal  font-Playfair text-center text-white">
              Book a Tour
            </p>
            <div className="flex gap-6 items-center justify-center">
              {/* <img
                src={tea}
                alt="drinking tea"
                className=" lg:w-[22%] w-[20%]"
              />
              <img
                src={dinner0}
                alt="A dinner"
                className=" lg:w-[22%] w-[20%]"
              /> */}
              <div className="lg:w-[70%] h-[270px] bg-[#212121] text-white flex flex-col gap-6 px-6 justify-center items-start rounded-xl">
                <div className="w-full flex flex-col justify-center items-center gap-2">
                  <h3 className="text-xl lg:text-4xl font-Playfair font-bold">
                    Unveil the Magic:
                  </h3>
                  <p className="text-sm sm:text-md lg:text-lg font-medium font-Montserrat">
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
        </div>
      ),
    },
    {
      content: (
        <div className="w-full h-3/4 shared-container gap-10 flex flex-col justify-between items-center">
          <div className=" w-full flex flex-col items-center justify-center">
            <p className="text-3xl md:text-4xl font-Playfair mt-8 text-center text-[#EDEDED]">
              Client Success Stories
            </p>
            <p className="text-[24px] sm:text-[30px] lg:text-[24px] font-greatVibes text-center pt-2 text-[#EDEDED]">
              Hear from Our Satisfied Clients.
            </p>
          </div>
          <div className=" flex justify-center items-end pb-40 w-full px-10 gap-16">
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
    {
      content: (
        <div className="w-5/6 h-5/6 flex items-center justify-center align-items-center justify-content-center">
          <div className="mx-4 sm:mx-6 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            <h2 className="text-[20px] lg:hidden block sm:text-[28px] lg:text-[40px] font-Playfair leading-tight mb-4">
              The Property
            </h2>
            <div className="flex lg:flex-col lg:w-2/5 w-[70%] flex-row lg:justify-center justify-center items-center relative">
              <img
                loading="lazy"
                src="https://ik.imagekit.io/seun/images/drum.jpg?updatedAt=1726144549834"
                alt="Someone drumming"
                className="md:w-[45%] w-[55%] rounded-2xl object-cover translate-x-12 relative lg:top-0 top-[30px] z-10 lg:rotate-0 transform -rotate-12  "
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/seun/images/laugh.jpg?updatedAt=1726144551189"
                alt="Medusa's hair"
                className="md:w-[45%] w-[55%] rounded-2xl object-cover lg:absolute relative lg:top-[25%] lg:left-15 lg:rotate-[-10deg] rotate-0 z-20 "
              />
              <img
                loading="lazy"
                src="https://ik.imagekit.io/seun/images/chris.jpg?updatedAt=1726144549869"
                alt="Someone laughing"
                className="md:w-[45%] w-[55%] rounded-2xl object-cover lg:rotate-[10deg] relative lg:top-0 top-[30px] -translate-x-12 lg:z-20 z-10 rotate-12"
              />
            </div>

            <div className="flex-1 mt-8 lg:mt-0 w-[75%]">
              <h2 className="text-[20px] sm:text-[28px] lg:text-[40px] font-Playfair lg:block hidden leading-tight mb-4">
                The Property
              </h2>
              <p className="text-xs w-full lg:text-lg text-justify leading-relaxed font-Montserrat text-white">
                May Event Garden is an event center with a natural garden-like
                setting that accommodates up to 350 guests. The innovative
                fiberglass roofing allows guests to see and feel the sky, adding
                a unique element to your event. Inside the venue, you will find
                top-quality, imported facilities, a waterfall, and 360 rotators
                that make the atmosphere vibrant. We’ve spared no expense in
                ensuring the highest standards of comfort and luxury. With
                excellent power supply, impeccable conditioning, and tight
                security, your event will run smoothly from start to finish.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="bg-[#4e4e4e] relative lg:flex flex-col items-center w-full lg:h-[90vh] overflow-hidden md:block hidden">
          <div
            className="slide-container h-full flex transition-transform duration-500 ease-in-out overflow-y-hidden overflow-x-scroll scroll-smooth"
            ref={slideContainerRef}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(el) => (slideRefs.current[index] = el)}
                className="w-full h-full flex-shrink-0 flex justify-center items-center"
                style={{ scrollSnapAlign: "center" }}
              >
                {slide.content}
              </div>
            ))}
          </div>

          {/* Button container with better positioning */}
          <div className="absolute bottom-6 flex w-[80%] justify-between mt-2">
            <button
              onClick={prevSlide}
              className=" bg-[#CC5500] p-3 rounded-full z-10"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className=" bg-[#CC5500] p-3 rounded-full z-10"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
