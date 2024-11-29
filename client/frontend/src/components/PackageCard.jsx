import React, { useState } from "react";
import { Right } from "../icons/Right";
import PackageDetails from "./PackageDetails";
import { motion } from "framer-motion";

const PackageCard = ({ packageDetails }) => {
  const { name } = packageDetails;
  const [showDetails, setShowDetails] = useState(false);

  const showModal = () => {
    setShowDetails(true);
  };

  const closeModal = () => {
    setShowDetails(false);
  };

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
          <button
            onClick={() => showModal()}
            className="bg-transparent border-2 border-white rounded-3xl px-6 py-2 flex flex-row"
          >
            Learn more
            <span className="text-white ml-2">
              <Right />
            </span>
          </button>
        </div>
      </div>
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { ease: "easeIn", type: "spring" },
          }}
          className="fade-in-left rounded-tl-3xl fixed top-20 left-0 h-[100vh] xl:h-[80vh] w-[75%] xl:w-[30%] bg-white z-10 shadow-md flex items-center justify-center p-6"
        >
          <PackageDetails
            packageDetails={packageDetails}
            closeModal={closeModal}
          />
        </motion.div>
      )}
    </div>
  );
};

export default PackageCard;
