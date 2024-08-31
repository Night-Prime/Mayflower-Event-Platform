import React, { useLayoutEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import gsap from "gsap";
import videoBg from "../assets/video/background.mp4";
import { Events } from "./Events";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Hero = () => {
  // set up element reference
  const app = useRef(null);
  const containerRef = useRef(null);
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
              <RouterLink to="/booking">Book A Tour</RouterLink>
            </button>
          </div>
        </div>
      </div>

      <Events />

      <div className="w-full h-full flex items-center justify-center">
        <div className="contain flex flex-col items-center gap-5 my-10 mx-10">
          <div className="w-full bg-[#212121] text-white py-2">
            {/* <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair px-4 lg:px-10 text-center">
              The Experience
            </p> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-2">
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
              alt="Someone drumming"
              className="img w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
            />
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/medusa.png?updatedAt=1725131405183"
              alt="Medusa's hair"
              className="img w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
            />
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/laugh.png?updatedAt=1725131393999"
              alt="Someone laughing"
              className="img w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
            />
          </div>
          <p className="text text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-center w-5/6 leading-5 sm:leading-6 lg:leading-7 px-4 mx-2 font-Montserrat">
            Eget consectetur at tincidunt malesuada integer dictumst a nisl et.
            Et ut integer tortor sem. Volutpat lorem sed nulla risus velit
            lacus. Mattis risus tortor tristique morbi gravida elementum non
            fusce. Viverra mi risus gravida risus augue hac cras. In at tempus
            euismod eget massa.
          </p>
        </div>
      </div>

      <div className="w-full h-full">
        <div className="mx-10 my-20 flex flex-col gap-2 justify-center items-center">
          <div className="flex h-1/3 flex-row w-full">
            <div className="flex-1 flex justify-start items-center">
              <img
                src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
                alt="Someone drumming"
                className="w-2/3 object-contain rounded-lg "
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start px-4">
              <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-2">
                Mission
              </p>
              <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-start font-Montserrat">
                Eget consectetur at tincidunt malesuada integer dictumst a nisl
                et. Et ut integer tortor sem. Volutpat lorem sed nulla risus
                velit lacus. Mattis risus tortor tristique morbi gravida
                elementum non fusce.
              </p>
            </div>
          </div>
          <div className="flex h-1/3 flex-row-reverse w-full">
            <div className="flex-1 flex justify-end items-center">
              <img
                src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
                alt="Someone drumming"
                className="w-2/3 object-contain rounded-lg "
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start px-4">
              <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-2">
                Vision
              </p>
              <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-start font-Montserrat">
                Eget consectetur at tincidunt malesuada integer dictumst a nisl
                et. Et ut integer tortor sem. Volutpat lorem sed nulla risus
                velit lacus. Mattis risus tortor tristique morbi gravida
                elementum non fusce.
              </p>
            </div>
          </div>
          <div className="flex h-1/3 flex-row items-center justify-center gap-4">
            <div className="flex-1">
              <div className="flex-col ml-10 relative">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
                  alt="Someone drumming"
                  className="w-1/2 object-cover rounded-lg"
                />
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/medusa.png?updatedAt=1725131405183"
                  alt="Medusa's hair"
                  className="w-[55%] object-cover rounded-lg absolute top-20 left-20 transform rotate-[-10deg]"
                />
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/laugh.png?updatedAt=1725131393999"
                  alt="Someone laughing"
                  className="w-1/2 object-cover rounded-lg transform rotate-[10deg]"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex-col">
                <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-4">
                  Our Origin
                </p>

                <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-center px-4 mx-2 font-Montserrat">
                  Eget consectetur at tincidunt malesuada integer dictumst a
                  nisl et. Et ut integer tortor sem. Volutpat lorem sed nulla
                  risus velit lacus. Mattis risus tortor tristique morbi gravida
                  elementum non fusce. Viverra mi risus gravida risus augue hac
                  cras. In at tempus euismod eget massa. Elit mattis eu justo
                  viverra. Sem lacus ac egestas varius pharetra dui. In aliquam
                  cursus sed pharetra tincidunt. Praesent at morbi hendrerit
                  augue ipsum id placerat. Facilisi phasellus bibendum interdum
                  purus maecenas diam ultrices. Parturient nunc elit sed diam
                  proin interdum nunc tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
