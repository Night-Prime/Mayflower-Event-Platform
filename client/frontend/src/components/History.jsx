import React from "react";
import drumer from "../assets/Images/drumer.png";
import medusa from "../assets/Images/medusa.png";
import laugh from "../assets/Images/laugh.png";

const History = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center gap-5 mb-10 sm:mx-6 lg:mx-[30px] sm:my-[120px] lg:my-[80px] rounded-[32px] py-5 lg:py-6">
        <div className="flex-1">
          <div className="flex-col ml-10 relative">
            <img
              src={drumer}
              alt="Someone drumming"
              className="w-1/2 object-cover rounded-lg"
            />
            <img
              src={medusa}
              alt="Medusa's hair"
              className="w-[55%] object-cover rounded-lg absolute top-20 left-20 transform rotate-[-10deg]"
            />
            <img
              src={laugh}
              alt="Someone laughing"
              className="w-1/2 object-cover rounded-lg transform rotate-[10deg]"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-col">
            <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair text-center my-4">
              Our Origin
            </p>

            <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-center px-4 mx-2 font-Montserrat">
              Eget consectetur at tincidunt malesuada integer dictumst a nisl
              et. Et ut integer tortor sem. Volutpat lorem sed nulla risus velit
              lacus. Mattis risus tortor tristique morbi gravida elementum non
              fusce. Viverra mi risus gravida risus augue hac cras. In at tempus
              euismod eget massa. Elit mattis eu justo viverra. Sem lacus ac
              egestas varius pharetra dui. In aliquam cursus sed pharetra
              tincidunt. Praesent at morbi hendrerit augue ipsum id placerat.
              Facilisi phasellus bibendum interdum purus maecenas diam ultrices.
              Parturient nunc elit sed diam proin interdum nunc tincidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
