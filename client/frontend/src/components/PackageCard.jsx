// PackageCard.js
import React from "react";
import concert from "../assets/Images/concert.png";
import dinner from "../assets/Images/dinner.png";
import wedding from "../assets/Images/wedding.png";

const PackageCard = ({ packageDetails }) => {
  const { name, description } = packageDetails;

  return (
    <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%]">
      <img src={concert} alt={name} className="w-full h-auto rounded-t-2xl" />
      <div className="flex flex-col gap-4 justify-start items-start px-4 pb-6">
        <div className="flex flex-col gap-1 justify-start items-start text-black">
          <p className="text-[24px] font-Playfair font-bold text-[#CC5500]">
            {name}
          </p>
          <p className="text-[18px] font-Montserrat font-normal text-start">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
