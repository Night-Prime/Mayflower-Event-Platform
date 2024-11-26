import React, { useState, useEffect } from "react";
import { clientMakeRequest } from "../helper/makeRequest";
import PackageCard from "./PackageCard";
import { Link as RouterLink } from "react-router-dom";
import { Right } from "../icons/Right";
import Preloader from "./Preloader";

const Tour = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    clientMakeRequest
      .get("/package/all")
      .then((res) => {
        setIsLoading(true);
        const item = res.data.data;
        console.log("Package: ", item);
        setPackages(item);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="w-full h-auto xl:h-screen">
      <div className="h-full py-12 px-6 flex flex-col justify-evenly gap-5 items-center">
        <h1 className="font-Cinzel text-center font-semibold text-[20px] xl:text-[40px] text-mayblack">
          BOOK A TOUR
          <br /> AT <span className="text-gardenslight">MAYGARDENS</span>
        </h1>
        <div className="h-full flex-wrap flex flex-row justify-between items-center gap-4">
          {packages.map((packageDetails, index) => (
            <PackageCard key={index} packageDetails={packageDetails} />
          ))}
        </div>
        <button className="bg-transparent border-2 border-mayblack text-mayblack p-3 rounded-2xl cursor-pointer">
          <RouterLink
            to="/booking"
            className="flex items-center justify-center"
          >
            Book a tour
            <span className="text-mayblack ml-2">
              <Right />
            </span>
          </RouterLink>
        </button>
      </div>
    </div>
  );
};

export default Tour;
