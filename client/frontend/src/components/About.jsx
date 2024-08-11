import React from "react";
import drumer from "../Images/drumer.png";
import medusa from "../Images/medusa.png";
import laugh from "../Images/laugh.png";
import LeftIcon from "../components/leftIcon";
import RightIcon  from "../components/rightIcon";

export const About = () => {
  return (
    <div className="flex flex-col items-center gap-5 mx-[30px] mt-[270px] bg-white rounded-[32px] text-black h-[740px]">
      <p className="text-[40px] font-normal leading-[56px] font-Playfair p-10">About Mayflower</p>
      <div className="grid grid-cols-3 justify-center mx-2">
        <img
          src={drumer}
          alt="Someone druming"
          className="w-[450px] h-[350px]"
        />
        <img src={medusa} alt="Medusa's hair" className="w-[450px] h-[350px]" />
        <img
          src={laugh}
          alt="Someone laughing"
          className="w-[450px] h-[350px]"
        />
      </div>
      <p className=" text-[18px] font-normal text-center flex justify-center items-center w-[1375px] leading-6 mx-2 font-Montserrat">
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
      <div className=" flex gap-10 justify-center mt-10">
        <button>
          <LeftIcon/>
        </button>
        <button>
          <RightIcon/>
        </button>
      </div>
    </div>
  );
};
