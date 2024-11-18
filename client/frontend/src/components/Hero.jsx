import React from "react";
import videoBg from "../assets/video/background.mp4";

export const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="h-48 xl:h-96 w-full flex items-center">
        <h1 className="font-Cinzel px-5 text-[24px] xl:text-[60px] text-mayblack xl:w-[70%]">
          <span className="text-gardenslight">UNFORGETTABLE</span> MOMENTS
          AWAITS
        </h1>
      </div>
      <div className="relative h-96 xl:h-screen w-full flex items-center justify-center">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center text-white p-4 lg:p-10">
          <img
            src="https://ik.imagekit.io/0y99xuz0yp/May%20Gardens%20Elements-01.png?updatedAt=1727604763546"
            alt="Main Logo"
            className="w-[100%] lg:w-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
