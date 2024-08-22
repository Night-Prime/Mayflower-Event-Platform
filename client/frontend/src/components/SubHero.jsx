import React from "react";
import drumer from "../assets/Images/drumer.png";
import medusa from "../assets/Images/medusa.png";
import laugh from "../assets/Images/laugh.png";

const SubHero = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-10 sm:mx-6 lg:mx-[30px] sm:my-[120px] lg:my-[80px] bg-[#212121] rounded-[32px]  py-5 lg:py-6">
      <div className="w-full bg-[#212121] text-white py-2">
        <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[56px] font-Playfair px-4 lg:px-10 text-center">
          The Experience
        </p>
      </div>
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
      <p className="text-white text-[12px] sm:text-[12px] lg:text-[16px] font-normal text-center w-full max-w-[320px] sm:max-w-[720px] lg:max-w-[1375px] leading-5 sm:leading-6 lg:leading-7 px-4 mx-2 font-Montserrat">
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
    </div>
  );
};

export default SubHero;
