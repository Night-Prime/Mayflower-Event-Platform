import React, { useState } from "react";

const PackageCard = ({ packageDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, description, capacity } = packageDetails;

  return (
    <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-lg w-full sm:w-[48%] lg:w-[30%] cursor-pointer relative">
      <div
        className="relative overflow-hidden rounded-t-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          loading="lazy"
          src="https://ik.imagekit.io/tsfcuw1ce/Images/concert.png?updatedAt=1725131399684"
          alt={name}
          className={`w-full h-auto rounded-t-lg ${
            isHovered ? "transform scale-110 rounded-t-lg" : ""
          } transition-transform duration-400`}
        />
        {isHovered && (
          <div className="rounded-t-lg absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white">
            <p className="animate-fade-in font-semibold w-3/4 text-[12px] font-Montserrat text-justify">
              {description}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 justify-start items-start px-4 pb-6">
        <div className="flex flex-col gap-1 justify-start items-start text-black">
          <p className="text-[24px] font-Playfair font-bold text-[#CC5500]">
            {name}
          </p>
          <span className="w-full h-[1px] bg-[#CC5500]"></span>
          <p className="text-[18px] font-Montserrat font-normal text-start my-2">
            {capacity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
