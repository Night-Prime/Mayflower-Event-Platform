import React, { useLayoutEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import gsap from "gsap";
import videoBg from "../assets/video/background.mp4";
import { Events } from "./Events";
import ScrollTrigger from "gsap/ScrollTrigger";
import Mission from "./Mission";
import Vision from "./Vision";

export const Hero = () => {
  const [showValue, setShowValue] = useState(false);
  const [showMission, setShowMission] = useState(false);
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
          <p className="text text-[20px] sm:text-[28px] lg:text-[48px] font-bold tracking-wide">
            May Gardens
          </p>
          <p className="text font-Allura text-[16px] sm:text-[22px] lg:text-[32px]">
            A Place To Cultivate Memorable Experiences.
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-[#CC5500] py-2 px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-6 rounded-lg text-xs sm:text-base lg:text-lg font-bold mt-4 sm:mt-6 lg:mt-8">
              <RouterLink to="/booking">Schedule Now</RouterLink>
            </button>
          </div>
        </div>
      </div>

      {/* Image Section with Mission and Values */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 sm:mx-6 my-6">
          <div className="relative">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
              alt="Someone drumming"
              className="img w-[80%] sm:w-[60%] object-cover rounded-lg mx-auto"
            />
            <div
              onMouseOutCapture={missionMouseEnter}
              className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#CC5500] w-[60%] sm:w-[40%] h-[15%] flex items-center justify-center rounded cursor-pointer"
            >
              <h1 className="text-white text-xs sm:text-lg font-bold">
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
            className="img w-[80%] sm:w-[60%] object-cover rounded-lg mx-auto"
          />

          <div className="relative">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/laugh.png?updatedAt=1725131393999"
              alt="Someone laughing"
              className="img w-[80%] sm:w-[60%] object-cover rounded-lg mx-auto"
            />
            <div
              onMouseOutCapture={valueMouseEnter}
              className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#CC5500] w-[60%] sm:w-[40%] h-[15%] flex items-center justify-center rounded cursor-pointer"
            >
              <h1 className="text-white text-xs sm:text-lg font-bold">
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

      {/* Events Section */}
      <Events />

      {/* Property Section */}
      <div className="w-full h-auto lg:h-lvh my-10 flex items-center justify-center">
        <div className="mx-4 sm:mx-6 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          <div className="flex flex-col items-center relative">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
              alt="Someone drumming"
              className="w-[65%] sm:w-[45%] rounded-lg object-cover"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/medusa.png?updatedAt=1725131405183"
              alt="Medusa's hair"
              className="w-[60%] sm:w-[40%] rounded-lg object-cover absolute top-10 sm:top-20 left-10 sm:left-20 rotate-[-10deg]"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/laugh.png?updatedAt=1725131393999"
              alt="Someone laughing"
              className="w-[65%] sm:w-[45%] rounded-lg object-cover rotate-[10deg]"
            />
          </div>

          <div className="flex-1 mt-8 lg:mt-0">
            <h2 className="text-[20px] sm:text-[28px] lg:text-[40px] font-Playfair leading-tight mb-4">
              The Property
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-justify leading-relaxed font-Montserrat text-white">
              May Event Garden is an event center with a natural garden-like
              setting that accommodates up to 350 guests. The innovative
              fiberglass roofing allows guests to see and feel the sky, adding a
              unique element to your event. Inside the venue, you will find
              top-quality, imported facilities, a waterfall, and 360 rotators
              that make the atmosphere vibrant. We’ve spared no expense in
              ensuring the highest standards of comfort and luxury. With
              excellent power supply, impeccable conditioning, and tight
              security, your event will run smoothly from start to finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
