import React from "react";

const Vision = ({ leave }) => {
  return (
    <div
      className="relative w-screen h-screen flex justify-center items-center bg-black bg-opacity-90 z-40"
      onClick={leave}
    >
      <div className="animate-fade-in-right w-5/6 h-1/2 rounded-lg bg-[#212121] backdrop-blur-md text-white flex flex-row gap-6">
        <button
          onClick={leave}
          className=" absolute top-2 right-5 text-[#CC5500] text-right text-2xl animate-fade-in-left"
        >
          &times;
        </button>
        <div className="flex-1 flex flex-row">
          <img
            src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
            alt="Someone drumming"
            className="w-full object-contain rounded-lg mx-auto "
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start px-4">
          <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-2">
            Our Commitments
          </p>
          <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-start font-Montserrat">
            With creativity and excellence at the forefront, we turn your events
            into unforgettable experiences because ordinary just wouldn’t do.
            Happiness is one of the many things we bring to the table so expect
            us to make you shine and dance with joy. Collaboration is key here -
            think of us as your event’s cheer squad, minus the pom-poms. And
            yes, if it’s not fun, it’s not May Gardens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
