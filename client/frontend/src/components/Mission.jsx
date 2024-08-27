import React from "react";
import drumer from "../assets/Images/drumer.png";

const Mission = () => {
  return (
    <div className="w-full h-full">
      <div className="px-4 flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-row w-full">
          <div className="flex-1 flex justify-start items-center">
            <img
              src={drumer}
              alt="Someone drumming"
              className="w-3/4 object-contain rounded-lg "
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start px-4">
            <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-4">
              Mission
            </p>
            <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-start font-Montserrat">
              Eget consectetur at tincidunt malesuada integer dictumst a nisl
              et. Et ut integer tortor sem. Volutpat lorem sed nulla risus velit
              lacus. Mattis risus tortor tristique morbi gravida elementum non
              fusce.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse w-full">
          <div className="flex-1 flex justify-end items-center">
            <img
              src={drumer}
              alt="Someone drumming"
              className="w-3/4 object-contain rounded-lg "
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start px-4">
            <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-4">
              Vision
            </p>
            <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-start font-Montserrat">
              Eget consectetur at tincidunt malesuada integer dictumst a nisl
              et. Et ut integer tortor sem. Volutpat lorem sed nulla risus velit
              lacus. Mattis risus tortor tristique morbi gravida elementum non
              fusce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
