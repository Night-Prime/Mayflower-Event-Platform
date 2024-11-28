import React from "react";

const PackageDetails = ({ packageDetails, closeModal }) => {
  const { name, description } = packageDetails;

  return (
    <div className="h-full w-full flex flex-col gap-2 p-6">
      <button onClick={closeModal} className="self-end text-mayblack text-2xl">
        &times;
      </button>
      <h2 className="text-xl font-bold text-mayblack">{name}</h2>
      <span className="w-full h-[0.5px] bg-mayblack"></span>

      <div className="flex flex-col items-center gap-2">
        <img
          src="https://ik.imagekit.io/tsfcuw1ce/Images/concert.png?updatedAt=1725131399684"
          alt={packageDetails.name}
          className="w-full h-auto rounded-lg"
        />
        <div className="text-mayblack text-center">
          <p className="text-[10px] md:text-xs">{description}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
