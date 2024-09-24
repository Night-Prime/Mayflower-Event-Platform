import React from "react";

const Mission = ({ leave }) => {
  return (
    <div
      className="relative w-screen h-screen flex justify-center items-center bg-black bg-opacity-90 z-40"
      onClick={leave}
    >
      <div className="animate-fade-in-left w-5/6 h-1/2 rounded-lg bg-[#212121] backdrop-blur-md text-white flex flex-row gap-6">
        <button
          onClick={leave}
          className=" absolute top-2 right-5 text-goldLight text-right text-2xl animate-fade-in-left"
        >
          &times;
        </button>
        <div className="flex-1 flex flex-row">
          <img
            loading="lazy"
            src="https://ik.imagekit.io/tsfcuw1ce/Images/drumer.png?updatedAt=1725131393913"
            alt="Someone drumming"
            className="w-full object-contain rounded-lg mx-auto "
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start px-4">
          <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Quicksand text-center my-2">
            Our Drive
          </p>
          <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-start font-Lato">
            You probably don’t remember your first walk, but you will always
            remember your first event with us, and this is our mission; to make
            every event an unforgettable and memorable experience. For your
            second event with us, you probably would not have to send out
            invitation cards, everyone will be begging for one, because who
            wouldn’t want to relive that epic celebration?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
