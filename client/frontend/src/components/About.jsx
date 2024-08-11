import React from "react";
import drumer from "../Images/drumer.png";
import medusa from "../Images/medusa.png";
import laugh from "../Images/laugh.png";
import LeftIcon from "../components/leftIcon";
import RightIcon from "../components/rightIcon";

export const About = () => {
  return (
    <div className="flex flex-col items-center gap-5 mx-4 sm:mx-6 lg:mx-[30px] mt-[100px] sm:mt-[150px] lg:mt-[270px] bg-white rounded-[32px] text-black py-8 lg:py-10">
      <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair px-4 lg:px-10 text-center">
        About Mayflower
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-2">
        <img
          src={drumer}
          alt="Someone drumming"
          className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
        />
        <img
          src={medusa}
          alt="Medusa's hair"
          className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
        />
        <img
          src={laugh}
          alt="Someone laughing"
          className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
        />
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal text-center w-full max-w-[320px] sm:max-w-[720px] lg:max-w-[1375px] leading-5 sm:leading-6 lg:leading-7 px-4 mx-2 font-Montserrat">
        Eget consectetur at tincidunt malesuada integer dictumst a nisl et. Et
        ut integer tortor sem. Volutpat lorem sed nulla risus velit lacus.
        Mattis risus tortor tristique morbi gravida elementum non fusce. Viverra
        mi risus gravida risus augue hac cras. In at tempus euismod eget massa.
        Elit mattis eu justo viverra. Sem lacus ac egestas varius pharetra dui.
        In aliquam cursus sed pharetra tincidunt. Praesent at morbi hendrerit
        augue ipsum id placerat. Facilisi phasellus bibendum interdum purus
        maecenas diam ultrices. Parturient nunc elit sed diam proin interdum
        nunc tincidunt.
      </p>
      <div className="flex gap-4 sm:gap-6 lg:gap-10 justify-center mt-6 sm:mt-8 lg:mt-10">
        <button>
          <LeftIcon />
        </button>
        <button>
          <RightIcon />
        </button>
      </div>
    </div>
  );
};
