import React, { useLayoutEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import gsap from "gsap";
import videoBg from "../assets/video/background.mp4";
import { Events } from "./Events";
import ScrollTrigger from "gsap/ScrollTrigger";
import Mission from "./Mission";
import Vision from "./Vision";
import { Right } from "../icons/Right";
import BookForm from "./BookForm";
import { Star } from "../icons/Star";
import { Littleloca } from "../icons/Littleloca";

export const Hero = () => {
  const [showValue, setShowValue] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const openModal = () => {
    console.log("true");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const app = useRef(null);
  const containerRef = useRef(null);

  const valueMouseEnter = () => {
    setShowValue(true);
  };

  const valueMouseLeave = () => {
    setShowValue(false);
  };

  const missionMouseEnter = () => {
    setShowMission(true);
  };

  const missionMouseLeave = () => {
    setShowMission(false);
  };

  // GSAP animation effect
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const container = app.current;
      gsap.fromTo(
        container.querySelectorAll(".text"),
        { y: 0, opacity: 0, ease: "power2.in" },
        {
          y: -15,
          opacity: 1,
          duration: 0.5,
          stagger: 0.5,
          ease: "cubic-bezier(0.280, 0.840, 0.420, 1)",
        }
      );
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Hero Section with Video Background */}
      <div
        ref={app}
        className="relative h-screen w-full flex items-center justify-center"
      >
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white p-4 sm:p-6 lg:p-10">
          <p className=" text-5xl lg:text-7xl mb-8 font-bold tracking-wide">
            May Gardens
          </p>
          <p className="text font-Allura text-[16px] sm:text-[22px] lg:text-[32px]">
            A Place To Cultivate Memorable Experiences.
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-[#CC5500] py-3 px-6 lg:py-3 lg:px-8 rounded-lg text-md lg:text-lg font-bold mt-6 lg:mt-8">
              <RouterLink to="/booking">Schedule Now</RouterLink>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-screen md:flex flex-col hidden items-center my-6 justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 sm:mx-6 my-6">
          <div className="relative">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
              alt="Someone drumming"
              className="img w-[80%] object-cover rounded-lg mx-auto"
            />
            <div
              onClick={missionMouseEnter}
              className="absolute top-[70%] left-[62.5%] transform -translate-x-1/2 -translate-y-1/2 bg-[#CC5500] w-[60%] sm:w-[40%] h-[15%] flex items-center justify-center rounded cursor-pointer hover:scale-90 transition duration-300"
            >
              <h1 className="text-white text-xs lg:text-lg font-bold">
                Mission
              </h1>
            </div>
          </div>
          {showMission && (
            <div className="absolute top-0 z-10 left-0">
              <Mission leave={missionMouseLeave} />
            </div>
          )}

          <img
            loading="lazy"
            src="https://ik.imagekit.io/tsfcuw1ce/Images/medusa.png?updatedAt=1725131405183"
            alt="Medusa's hair"
            className="img w-[80%] object-cover rounded-lg mx-auto"
          />

          <div className="relative">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/laugh.png?updatedAt=1725131393999"
              alt="Someone laughing"
              className="img w-[80%] object-cover rounded-lg mx-auto"
            />
            <div
              onClick={valueMouseEnter}
              className="absolute top-[70%] left-[62.5%] transform -translate-x-1/2 -translate-y-1/2 bg-[#CC5500] w-[60%] sm:w-[40%] h-[15%] flex items-center justify-center rounded cursor-pointer hover:scale-90 transition duration-300"
            >
              <h1 className="text-white text-xs lg:text-lg font-bold">
                Values
              </h1>
            </div>
          </div>
        </div>
        {showValue && (
          <div className="absolute top-0 z-10 right-0">
            <Vision leave={valueMouseLeave} />
          </div>
        )}
        <div className="w-11/12">
          <p className="text-xs sm:text-base lg:text-lg text-center">
            At May Gardens Event Center, we are your intimate escape for life’s
            most cherished celebrations. Our facilities are maintained to the
            highest standards to ensure that every event is a massive success.
            Working closely with top event planners and vendors alike, we ensure
            that your ideas are valid and your vision for your event is brought
            to life. From our breathtaking space to our exceptional hospitality,
            your guests will have stories of your event on their lips for years
            to come.
          </p>
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="w-full h-auto md:hidden block py-3">
        <div className=" flex flex-col justify-center items-center gap-5">
          <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-2">
            Our Mission
          </p>
          <div className=" lg:w-0 w-[85%]">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/seun/images/drumWide.jpg?updatedAt=1726153566059"
              alt="Someone drumming"
              className="w-full object-contain rounded-lg"
            />
          </div>
          <div className=" flex flex-col w-[90%] justify-center items-center px-4">
            <p className="text-white w-full text-sm font-normal text-justify  font-Montserrat">
              You probably don’t remember your first walk, but you will always
              remember your first event with us, and this is our mission; to
              make every event an unforgettable and memorable experience. For
              your second event with us, you probably would not have to send out
              invitation cards, everyone will be begging for one, because who
              wouldn’t want to relive that epic celebration?
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto md:hidden block py-3 bg-[#4e4e4e]">
        <div className=" flex flex-col justify-center items-center gap-5">
          <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-2">
            Our Vision
          </p>
          <div className=" lg:w-0 w-[85%]">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/seun/images/laughWide.png?updatedAt=1726153566273"
              alt="Someone drumming"
              className="w-full object-contain rounded-lg"
            />
          </div>
          <div className=" flex flex-col w-[90%] justify-center items-center px-4">
            <p className="text-white w-full text-sm font-normal text-justify  font-Montserrat">
              With creativity and excellence at the forefront, we turn your
              events into unforgettable experiences because ordinary just
              wouldn’t do. Happiness is one of the many things we bring to the
              table so expect us to make you shine and dance with joy.
              Collaboration is key here - think of us as your event’s cheer
              squad, minus the pom-poms. And yes, if it’s not fun, it’s not May
              Gardens.
            </p>
          </div>
        </div>
      </div>

      <Events />

      <div className="w-full h-auto md:hidden block py-3 bg-[#4e4e4e]">
        <div className=" flex flex-col justify-center items-center gap-5">
          <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-2">
            Events
          </p>
          <div className=" lg:w-0 w-[85%]">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/seun/images/drinks.jpg?updatedAt=1726155155381"
              alt="Someone drumming"
              className="w-full object-contain rounded-lg"
            />
          </div>
          <button className="bg-[#CC5500] py-2 px-3 lg:py-2 lg:px-4 flex items-center justify-center rounded-lg text-sm md:text-md font-bold font-Montserrat">
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

      <div className="w-full h-auto md:hidden block py-3 bg-[#ffffff]">
        <div className=" flex flex-col justify-center items-center gap-5">
          <p className="text-2xl font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-2 text-black">
            Book Tour
          </p>
          <div className=" lg:w-0 w-[40%] flex justify-center items-center gap-4">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/seun/images/selfie.jpg?updatedAt=1726155519971"
              alt="Someone drumming"
              className="w-full object-contain rounded-lg"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/seun/images/dinner1.jpg?updatedAt=1726155519826"
              alt="Someone drumming"
              className="w-full object-contain rounded-lg"
            />
          </div>
          <div className="w-[85%] h-auto bg-[#212121] text-white flex flex-col gap-6 p-4  justify-center items-center rounded-xl">
            <div className="w-full flex flex-col justify-center items-center">
              <h3 className="text-3xl lg:text-4xl font-Playfair font-bold mb-4">
                Unveil the Magic:
              </h3>
              <p className="text-sm  font-medium font-Montserrat text-center">
                Book Your May Gardens Tour Today
              </p>
            </div>
            <button
              className="bg-[#CC5500] py-2 px-3 lg:py-2 lg:px-4 flex items-center justify-center rounded-lg text-sm md:text-md font-bold font-Montserrat"
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

      <div className="w-full h-auto md:hidden block py-3 bg-[#4e4e4e]">
        <div className=" flex flex-col gap-8">
          <div className=" w-full flex flex-col items-center justify-center">
            <p className="text-2xl font-Playfair mt-8 text-center text-[#EDEDED]">
              Client Success Stories
            </p>
            <p className="text-lg font-greatVibes text-center pt-2 text-[#EDEDED]">
              Hear from Our Satisfied Clients.
            </p>
          </div>
          <div className=" flex justify-center items-end  w-full px-10 gap-6">
            <div className="flex flex-col w-[80%] h-auto gap-8 justify-start items-start p-3 bg-[#212121] rounded-xl ">
              <p className=" font-Montserrat text-xs">
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
          </div>
        </div>
      </div>

      <div className="w-full h-auto md:hidden block py-3 bg-[#ffffff]">
        <div className="w-full flex flex-col justify-center items-start px-4 space-y-4">
          <h2 className="text-2xl font-semibold font-Playfair text-gray-800">
            Contact Us
          </h2>
          <p className="text-black font-Montserrat text-sm font-normal">
            Velit viverra eget faucibus vel fusce convallis molestie viverra
            tempor. Dignissim vitae accumsan sem pellentesque. Nisl rhoncus
            sapien nulla dignissim semper eu ipsum.
          </p>
          <form className="space-y-4 w-full">
            <div className=" flex flex-col justify-start items-start gap-[2px] text-black">
              <p>Name</p>
              <input
                type="text"
                className="w-full p-2 bg-[#EDEDED] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className=" flex flex-col justify-start items-start gap-[2px] text-black">
              <p>Email</p>
              <input
                type="email"
                className="w-full p-2 bg-[#EDEDED] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className=" flex flex-col justify-start items-start gap-[2px] text-black">
              <p>Subject</p>
              <input
                type="text"
                className="w-full p-2 bg-[#EDEDED] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className=" flex flex-col justify-start items-start gap-[2px] text-black">
              <p>Message</p>
              <textarea className="w-full p-2 rounded-lg bg-[#EDEDED] focus:outline-none resize-none focus:ring-2 focus:ring-orange-500 h-32" />
            </div>
            <button className="bg-[#CC5500] py-3 px-6 flex items-center justify-center rounded-lg mb-8 text-[16px] font-bold font-Inter w-44 mt-4 sm:mt-8 lg:mt-10">
              Submit{" "}
              <span className="ml-2">
                <Right />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
