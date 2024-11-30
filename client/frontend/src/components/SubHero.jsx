import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hook/useAnimation";
import { animations } from "../shared/animation";

const SubHero = () => {
  const childReveal = useScrollAnimation(animations.revealChildren);
  return (
    <motion.div className="w-full h-auto xl:my-10">
      <motion.div
        {...childReveal}
        className="w-full h-full px-5 py-10 flex flex-col  items-start  justify-start "
      >
        <motion.h1 className="font-Cinzel text-[20px] 2xl:text-6xl text-mayblack">
          THE{" "}
          <motion.span className="text-gardenslight">EXPERIENCE</motion.span>
        </motion.h1>

        <motion.div className="flex flex-col xl:flex-row justify-between gap-8">
          <motion.div className="flex-1 flex flex-row items-start justify-start">
            <motion.img
              loading="lazy"
              src="https://ik.imagekit.io/0y99xuz0yp/img/Rectangle%209.png?updatedAt=1732792250843"
              alt="Someone drumming"
              className="img rounded-3xl w-[50%] object-contain"
            />
            <motion.img
              loading="lazy"
              src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%207.png?updatedAt=1731698634083"
              alt="Medusa's hair"
              className="img roundedn-3xl w-[52%] object-contain mx-auto"
            />
          </motion.div>

          <motion.div className="flex-1 flex flex-col items-start justify-start xl:gap-6">
            <motion.h1 className="mt-6 text-mayblack font-Cinzel text-[16px] 2xl:text-4xl 2xl:mt-12">
              <motion.span className="text-gardenslight">
                Welcome to May Gardens
              </motion.span>
            </motion.h1>
            <motion.p className="w-[90%] font-normal text-mayblack text-justify text-[12px] 2xl:text-xl">
              The Lagos Event Center that Feels like Home. Just for You!
              <br />
              Imagine stepping into a world without boundaries... where art,
              architecture, and nature blend seamlessly to create an atmosphere
              of elegance. Every detail, from our picturesque gardens to our
              thoughtfully designed sitting areas, has been carefully crafted
              for your comfort. Time stands still as you bask in the infinite
              reflections of our Infinity Chamber and the tranquility of our
              captivating waterfall. Where nature's beauty meets modern
              sophistication... every inch of this space is a picture-perfect
              backdrop waiting for your story.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SubHero;
