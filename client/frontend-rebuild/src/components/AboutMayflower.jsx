import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useAnimation";
import { animations } from "../shared/animation";

const AboutMayflower = () => {
  const childReveal = useScrollAnimation(animations.boxReveal);
  return (
    <motion.div className="w-full h-full overflow-x-hidden">
      <motion.div className="w-full h-full xl:h-full flex flex-col justify-between items-start px-5 py-12 xl:py-2 my-6">
        <motion.div className="w-full flex-1 flex flex-col xl:flex-row items-start justify-between py-10 px-5 gap-6">
          <motion.div {...childReveal} className="flex-1">
            <motion.h1 className="text-[20px] xl:text-[40px] font-Cinzel">
              GET TO
              <motion.span className="text-gardenslight"> KNOW US!</motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            {...childReveal}
            className="flex-1 hidden xl:flex flex-row justify-center xl:relative px-8 xl:px-0"
          >
            <motion.img
              loading="lazy"
              src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%209.png?updatedAt=1731525610543"
              alt="Someone drumming"
              className="img w-[55%] object-contain"
            />
            <motion.img
              loading="lazy"
              src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%208.png?updatedAt=1731525634992"
              alt="Laughing & Partying"
              className="img w-[55%] object-contain xl:absolute xl:top-1/2 xl:transform xl:-translate-y-1/4"
            />
            <motion.img
              loading="lazy"
              src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%207.png?updatedAt=1731525636949"
              alt="Medusa Hair"
              className="img w-[55%] object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div className="w-[96%] flex-1 flex flex-wrap xl:flex-nowrap xl:flex-row gap-5 xl:gap-20 mx-auto">
          <motion.div
            {...childReveal}
            className="w-full xl:w-1/3 xl:h-[75%] border-2 border-gardenslight hover:bg-white hover:text-mayblack rounded-tr-2xl rounded-b-2xl p-2 xl:px-6 xl:py-6"
          >
            <motion.h1 className="font-Cinzel text-[16px] xl:text-[20px]">
              OUR DRIVE
            </motion.h1>
            <motion.p className="text-xs xl:text-md">
              <br />
              You probably don’t remember your first walk, but you will always
              remember your first event with us, and this is our mission; to
              make every event an unforgettable and memorable experience. For
              your second event with us, invitation cards might not even be
              necessary—everyone will be eager to secure one. After all, who
              wouldn’t want to experience another unforgettable celebration?
            </motion.p>
          </motion.div>
          <motion.div
            {...childReveal}
            className="w-full xl:w-1/3 xl:h-[75%] border-2 border-gardenslight hover:bg-white hover:text-mayblack rounded-tr-2xl p-2 rounded-b-2xl xl:px-6 xl:py-6"
          >
            <motion.h1 className="font-Cinzel text-[16px] xl:text-[20px]">
              OUR BLUEPRINTS
            </motion.h1>
            <motion.p className="text-xs xl:text-md">
              <br />
              With creativity and excellence at the forefront, we visualize
              turning your events into unforgettable experiences because
              ordinary just wouldn’t do. At May Gardens our vision is for you to
              step into a space so heavenly that you’ll momentarily forget
              you’re in Nigeria. With every step, you will enter into your dream
              event, enjoying every moment, wishing it would never end.
            </motion.p>
          </motion.div>
          <motion.div
            {...childReveal}
            className="w-full xl:w-1/3 xl:h-[75%] border-2 border-gardenslight hover:bg-white hover:text-mayblack rounded-tr-2xl p-2 rounded-b-2xl p-0 xl:px-6 xl:py-6"
          >
            <motion.h1 className="font-Cinzel text-[16px] xl:text-[20px]">
              WHO ARE WE?
            </motion.h1>
            <motion.p {...childReveal} className="text-xs xl:text-md">
              <br />
              May Event Garden is an event center with a natural garden-like
              setting that accommodates up to 350 guests. The innovative
              fiberglass roofing allows guests to see and feel the sky, adding a
              unique element to your event. Inside the venue, you will find
              top-quality, state-of-the-art facilities, a waterfall, and 360
              rotators that make the atmosphere vibrant. We’ve spared no expense
              in ensuring the highest standards of comfort and luxury.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMayflower;
