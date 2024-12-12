import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useAnimation";
import { animations } from "../shared/animation";

const About = () => {
  const childReveal = useScrollAnimation(animations.revealChildren);
  return (
    <motion.div className="w-full h-full flex flex-row items-center justify-between text-white">
      <motion.div className="flex-1">
        <motion.div
          {...childReveal}
          className="w-[90%] mx-auto h-full grid grid-cols-2 grid-rows-2 gap-4"
        >
          <motion.img
            src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%209.png?updatedAt=1731525610543"
            alt="Description 1"
            className="object-cover w-full h-full"
          />
          <motion.img
            src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%208.png?updatedAt=1731525634992"
            alt="Description 2"
            className="object-cover w-full h-full"
          />
          <motion.img
            src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%209.png?updatedAt=1731525610543"
            alt="Description 4"
            className="object-cover w-full h-full"
          />
          <motion.img
            src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%208.png?updatedAt=1731525634992"
            alt="Description 3"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
      <motion.div className="flex-1">
        <motion.div
          {...childReveal}
          className="w-[80%] mx-auto h-full flex flex-col gap-6"
        >
          <h1 className="font-Cinzel text-4xl">About Mayflower</h1>
          <p className="text-sm xl:text-md text-justify">
            May Event Garden is an event center with a natural garden-like
            setting that accommodates up to 350 guests. The innovative
            fiberglass roofing allows guests to see and feel the sky, adding a
            unique element to your event. Inside the venue, you will find
            top-quality, state-of-the-art facilities, a waterfall, and 360
            rotators that make the atmosphere vibrant. We’ve spared no expense
            in ensuring the highest standards of comfort and luxury. With
            creativity and excellence at the forefront, we visualize turning
            your events into unforgettable experiences because ordinary just
            wouldn’t do. At May Gardens our vision is for you to step into a
            space so heavenly that you’ll momentarily forget you’re in Nigeria.
            With every step, you will enter into your dream event, enjoying
            every moment, wishing it would never end.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
