import React from "react";
import videoBg from "../assets/video/landscape.mp4";
import { animations } from "../shared/animation";
import { motion } from "framer-motion";

export const Hero = () => {
  const containerVariants = animations.containerVariants;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full flex flex-col"
    >
      <motion.div className="relative h-96 xl:h-full w-full flex items-center justify-center overflow-hidden">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
        <motion.div className="relative flex flex-col items-center text-white p-4 lg:p-10 z-20">
          <motion.img
            src="https://ik.imagekit.io/0y99xuz0yp/May%20Gardens%20Elements-01.png?updatedAt=1727604763546"
            alt="Main Logo"
            className="w-[63%] lg:w-[63%] object-cover"
          />
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};
