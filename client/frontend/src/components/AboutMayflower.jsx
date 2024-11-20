import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hook/useAnimation";
import { animations } from "../shared/animation";

const AboutMayflower = () => {
  const childReveal = useScrollAnimation(animations.boxReveal);
  return (
    <motion.div className="w-full h-auto">
      <motion.div className="w-full h-[200%] xl:h-[120vh] rounded-t-3xl bg-mayblack flex flex-col justify-between items-start px-5 py-2 my-6">
        <motion.div className="w-full flex-1 flex flex-col xl:flex-row items-start justify-between py-10 px-5 gap-6">
          <motion.div {...childReveal} className="flex-1">
            <motion.h1 className="text-[20px] xl:text-[40px] font-Cinzel">
              About <br />{" "}
              <motion.span className="text-gardenslight">
                MayGardens
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            {...childReveal}
            className="flex-1 flex flex-row justify-center xl:relative px-8 xl:px-0"
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
            className="w-full xl:w-1/3 xl:h-[90%] border-2 border-gardenslight hover:bg-white hover:text-mayblack rounded-tr-2xl rounded-b-2xl p-2 xl:px-6 xl:py-6"
          >
            <motion.h1 className="font-Cinzel text-[16px] xl:text-[24px]">
              Mission
            </motion.h1>
            <motion.p className="text-xs xl:text-sm">
              <br />
              You probably don’t remember your first walk, but you will always
              remember your first event with us, and this is our mission; to
              make every event an unforgettable and memorable experience. For
              your second event with us, you probably would not have to send out
              invitation cards, everyone will be begging for one, because who
              wouldn’t want to relive that epic celebration?
            </motion.p>
          </motion.div>
          <motion.div
            {...childReveal}
            className="w-full xl:w-1/3 xl:h-[90%] border-2 border-gardenslight hover:bg-white hover:text-mayblack rounded-tr-2xl p-2 rounded-b-2xl xl:px-6 xl:py-6"
          >
            <motion.h1 className="font-Cinzel text-[16px] xl:text-[24px]">
              Vision
            </motion.h1>
            <motion.p className="text-xs xl:text-sm">
              <br />
              With creativity and excellence at the forefront, we turn your
              events into unforgettable experiences because ordinary just
              wouldn’t do. Happiness is one of the many things we bring to the
              table so expect us to make you shine and dance with joy.
              Collaboration is key here - think of us as your event’s cheer
              squad, minus the pom-poms. And yes, if it’s not fun, it’s not May
              Gardens.
            </motion.p>
          </motion.div>
          <motion.div
            {...childReveal}
            className="w-full xl:w-1/3 xl:h-[90%] border-2 border-gardenslight hover:bg-white hover:text-mayblack rounded-tr-2xl p-2 rounded-b-2xl p-0 xl:px-6 xl:py-6"
          >
            <motion.h1 className="font-Cinzel text-[16px] xl:text-[24px]">
              Values
            </motion.h1>
            <motion.p {...childReveal} className="text-xs xl:text-sm">
              <br />
              At May Gardens Event Center, we are your intimate escape for
              life’s most cherished celebrations. Our facilities are maintained
              to the highest standards to ensure that every event is a massive
              success. Working closely with top event planners and vendors
              alike, we ensure that your ideas are valid and your vision for
              your event is brought to life. From our breathtaking space to our
              exceptional hospitality, your guests will have stories of your
              event on their lips for years to come.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMayflower;
