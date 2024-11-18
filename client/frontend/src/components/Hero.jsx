import React from "react";
import videoBg from "../assets/video/background.mp4";
import { animations } from "../shared/animation";
import { motion } from "framer-motion";

export const Hero = () => {
  const containerVariants = animations.containerVariants;
  const childVariants = animations.childVariants;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col snap-y snap-mandatory"
    >
      <motion.div className="h-48 xl:h-96 w-full flex items-center">
        <motion.h1
          variants={childVariants}
          className="font-Cinzel px-5 text-[24px] xl:text-[60px] text-mayblack xl:w-[70%]"
        >
          <motion.span className="text-gardenslight">UNFORGETTABLE</motion.span>{" "}
          MOMENTS AWAITS
        </motion.h1>
      </motion.div>
      <motion.div className="relative h-96 xl:h-screen w-full flex items-center justify-center snap-start">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div className="relative flex flex-col items-center text-white p-4 lg:p-10 snap-start">
          <motion.img
            src="https://ik.imagekit.io/0y99xuz0yp/May%20Gardens%20Elements-01.png?updatedAt=1727604763546"
            alt="Main Logo"
            className="w-[100%] lg:w-[100%] object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
