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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Use the ref to access the container element
      const container = app.current;

      gsap.fromTo(
        container.querySelectorAll(".text"),
        {
          y: 0,
          opacity: 0,
          ease: "power2.in",
        },
        {
          y: -15,
          opacity: 1,
          ease: "cubic-bezier(0.280, 0.840, 0.420, 1)",
          duration: 0.5,
          stagger: 0.5,
        }
      );
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      <div
        ref={app}
        className="relative font-Playfair h-screen w-full flex items-center justify-center"
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
        <div className="relative text-center text-white">
          <p className="text text-[32px] sm:text-[48px] lg:text-[80px] font-bold max-w-[300px] sm:max-w-[450px] lg:max-w-[600px] mx-auto tracking-[1%]">
            May Gardens
          </p>
          <p className="text font-Allura text-[24px] sm:text-[32px] lg:text-[40px] font-normal tracking-[-1%] px-4">
            A Place To Cultivate Memorable Experiences.
          </p>
          <div className=" flex gap-4 justify-center items-center">
            <button className="bounce bg-[#CC5500] py-[12px] px-[20px] sm:py-[14px] sm:px-[22px] lg:py-[16px] lg:px-[24px] rounded-lg text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-Inter w-[160px] sm:w-[180px] lg:w-[222px] mt-6 sm:mt-8 lg:mt-10">
              <RouterLink to="/booking">Schedule Now</RouterLink>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-screen flex items-center justify-center">
        <div className="contain flex flex-col items-center gap-5 my-10 mx-10">
          <div className="w-full bg-[#212121] text-white py-2">
            {/* <p className="text-4xl font-bold font-Playfair text-center">
              Who Are We?
            </p> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-2">
            <div className="relative">
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
                alt="Someone drumming"
                className="img w-full object-cover rounded-lg"
              />
              <div
                onMouseOutCapture={missionMouseEnter}
                className="absolute top-3/4 left-[70%] transform -translate-x-1/2 -translate-y-3/4 cursor-pointer rounded-s bg-[#CC5500] w-[40%] h-[15%] flex flex-row justify-center items-center"
              >
                <h1 className="text-white text-2xl font-bold font-Playfair">
                  Mission
                </h1>
              </div>
            </div>
            {showMission && (
              <div className="absolute top-0 z-10 left-0">
                <Mission leave={missionMouseLeave} />
              </div>
            )}

            {showValue && (
              <div className="absolute top-0 z-10 right-0">
                <Vision leave={valueMouseLeave} />
              </div>
            )}

            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/medusa.png?updatedAt=1725131405183"
              alt="Medusa's hair"
              className="img w-full object-cover rounded-lg"
            />

            <div className="relative">
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/laugh.png?updatedAt=1725131393999"
                alt="Someone laughing"
                className="img w-full object-cover rounded-lg"
              />
              <div
                onMouseOutCapture={valueMouseEnter}
                className="absolute top-3/4 left-[70%] transform -translate-x-1/2 -translate-y-3/4 cursor-pointer rounded-s bg-[#CC5500] w-[40%] h-[15%] flex flex-row justify-center items-center"
              >
                <h1 className="text-white text-2xl font-bold font-Playfair">
                  Values
                </h1>
              </div>
            </div>
          </div>
          <p className="text text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-center w-full leading-5 sm:leading-6 lg:leading-7 px-4 mx-2 font-Montserrat">
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

      <Events />

      <div className="w-full h-screen">
        <div className="mx-10 flex h-full flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex-1">
              <div className="flex-col ml-10 relative">
                <img
                  loading="lazy"
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
                  alt="Someone drumming"
                  className="w-1/2 object-cover rounded-lg"
                />
                <img
                  loading="lazy"
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/medusa.png?updatedAt=1725131405183"
                  alt="Medusa's hair"
                  className="w-[55%] object-cover rounded-lg absolute top-20 left-20 transform rotate-[-10deg]"
                />
                <img
                  loading="lazy"
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/laugh.png?updatedAt=1725131393999"
                  alt="Someone laughing"
                  className="w-1/2 object-cover rounded-lg transform rotate-[10deg]"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex-col">
                <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-start my-4">
                  The Property
                </p>

                <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-justify mx-1 font-Montserrat">
                  May Event Garden is an event center with a natural garden-like
                  setting that accommodates up to 350 guests. The innovative
                  fiberglass roofing allows guests to see and feel the sky,
                  adding a unique element to your event. Inside the venue, you
                  will find top-quality, imported facilities, a waterfall, and
                  360 rotators that make the atmosphere vibrant. We’ve spared no
                  expense in ensuring the highest standards of comfort and
                  luxury. With excellent power supply, impeccable conditioning,
                  and tight security, your event will run smoothly from start to
                  finish. Our dedicated maintenance team is always on hand to
                  address any needs, and our exceptional customer service
                  ensures an easy and enjoyable experience. For added
                  convenience, our hotel, restaurant, and bar are located
                  nearby, making it easy for your guests to relax and enjoy
                  their time. Every detail of our property is made to create a
                  memorable and spectacular event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
