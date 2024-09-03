// PackageCard.js
import React from "react";

const PackageCard = ({ packageDetails }) => {
  const { name, description } = packageDetails;

  return (
    <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-xl w-full sm:w-[48%] lg:w-[30%]">
      <img
        src="https://ik.imagekit.io/tsfcuw1ce/Images/concert.png?updatedAt=1725131399684"
        alt={name}
        className="w-full h-auto rounded-t-2xl"
      />
      <div className="flex flex-col gap-4 justify-start items-start px-4 pb-6">
        <div className="flex flex-col gap-1 justify-start items-start text-black">
          <p className="text-[24px] font-Playfair font-bold text-[#CC5500]">
            {name}
          </p>
          <span className="w-full h-[1px] bg-[#CC5500]"></span>
          <p className="text-[18px] font-Montserrat font-normal text-start">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
