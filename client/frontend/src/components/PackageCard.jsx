import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Right } from "../icons/Right";

const PackageCard = ({ packageDetails }) => {
  const { name, description, capacity } = packageDetails;

  return (
    <div className="flex flex-col shadow-2xl gap-4 justify-start items-start bg-white rounded-2xl w-full sm:w-[48%] lg:w-[30%] h-[80%] cursor-pointer relative">
      <div className="h-full relative overflow-hidden rounded-lg">
        <img
          loading="lazy"
          src="https://ik.imagekit.io/tsfcuw1ce/Images/concert.png?updatedAt=1725131399684"
          alt={name}
          className="w-full h-full rounded-2xl"
        />
        <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-evenly items-start px-5 text-white">
          <h1 className="font-Cinzel text-[20px] xl:text-[40px]">{name}</h1>
          <button className="bg-transparent border-2 border-white rounded-3xl px-4 py-2">
            <RouterLink
              to="/memories"
              className="flex items-center justify-center"
            >
              Learn more
              <span className="text-white ml-2">
                <Right />
              </span>
            </RouterLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
