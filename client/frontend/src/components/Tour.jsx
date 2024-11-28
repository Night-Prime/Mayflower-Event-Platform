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
        <div className="h-full flex-wrap flex flex-row justify-between items-center gap-4">
          {packages.map((packageDetails, index) => (
            <PackageCard key={index} packageDetails={packageDetails} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tour;
