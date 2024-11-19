import React from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { animations } from "../shared/animation";

const Memories = () => {
  const containerVariants = animations.containerVariants;
  const childVariants = animations.childVariants;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-screen"
    >
      <Navbar />
      <motion.div className="w-full h-auto flex flex-col px-10">
        <motion.div className="w-full flex flex-col">
          <motion.div
            variants={childVariants}
            className="h-96 w-full flex items-center"
          >
            <motion.h1 className="font-Cinzel px-5 text-center text-[24px] xl:text-[60px] text-mayblack">
              TAKE A TRIP DOWN MEMEORY LANE AT
              <span className="text-gardenslight"> MAYGARDENS</span>{" "}
            </motion.h1>
          </motion.div>

          <motion.div className="h-auto w-full">
            <motion.div className="h-full w-full flex flex-col gap-20">
              <motion.div className="h-full flex flex-col animate-fade-in">
                <motion.h1
                  variants={childVariants}
                  className="font-Cinzel text-black text-center text-[20px] xl:text-[40px]"
                >
                  WEDDING PARTIES
                </motion.h1>
                <motion.div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-4">
                  <motion.div variants={childVariants} className="col-span-1">
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image13.png?updatedAt=1725131400575"
                      alt="2"
                      className="w-full h-[94%] object-cover"
                    />
                  </motion.div>
                  <motion.div
                    variants={childVariants}
                    className="grid grid-rows-2 gap-2"
                  >
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                      alt="1"
                      className="w-full object-cover"
                    />
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                      alt="1"
                      className="w-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    variants={childVariants}
                    className="grid grid-rows-2 gap-2"
                  >
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                      alt="1"
                      className="w-full object-cover"
                    />
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                      alt="1"
                      className="w-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    variants={childVariants}
                    className="grid grid-rows-2 gap-2"
                  >
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                      alt="1"
                      className="w-full object-cover"
                    />
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                      alt="1"
                      className="w-full object-cover"
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={childVariants}
                  className="flex flex-col mt-4 lg:mt-0 lg:flex-row gap-4"
                >
                  <motion.img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                    alt="4"
                    className="w-full h-full object-cover"
                  />
                  <motion.img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                    alt="4"
                    className="w-full h-full object-cover"
                  />
                  <motion.img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                    alt="4"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>

              <motion.div className="h-full flex flex-col animate-fade-in gap-6">
                <motion.h1 className="font-Cinzel text-black text-center text-[20px] xl:text-[40px]">
                  BIRTHDAY PARTIES
                </motion.h1>
                <motion.div className="flex flex-col mt-4 lg:mt-0 lg:flex-row gap-4">
                  <motion.img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                    alt="4"
                    className="w-full h-full object-cover"
                  />
                  <motion.img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                    alt="4"
                    className="w-full h-full object-cover"
                  />
                  <motion.img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                    alt="4"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-4">
                  <motion.div className="col-span-1">
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image13.png?updatedAt=1725131400575"
                      alt="2"
                      className="w-full h-[94%] object-cover"
                    />
                  </motion.div>
                  <motion.div className="grid grid-rows-2 gap-2">
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                      alt="1"
                      className="w-full object-cover"
                    />
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                      alt="1"
                      className="w-full object-cover"
                    />
                  </motion.div>
                  <motion.div className="grid grid-rows-2 gap-2">
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                      alt="1"
                      className="w-full object-cover"
                    />
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                      alt="1"
                      className="w-full object-cover"
                    />
                  </motion.div>
                  <motion.div className="grid grid-rows-2 gap-2">
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                      alt="1"
                      className="w-full object-cover"
                    />
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                      alt="1"
                      className="w-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div className="h-full flex flex-col animate-fade-in gap-6">
                <motion.h1 className="font-Cinzel text-black text-center text-[20px] xl:text-[40px]">
                  Anniversary
                </motion.h1>
                <motion.div className="flex flex-col mt-4 lg:mt-0 lg:flex-row gap-4">
                  <motion.img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                    alt="4"
                    className="w-full h-full object-cover"
                  />
                  <motion.img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                    alt="4"
                    className="w-full h-full object-cover"
                  />
                  <motion.img
                    loading="lazy"
                    src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                    alt="4"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-4">
                  <motion.div className="grid grid-rows-2 gap-2">
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                      alt="1"
                      className="w-full object-cover"
                    />
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                      alt="1"
                      className="w-full object-cover"
                    />
                  </motion.div>
                  <motion.div className="grid grid-rows-2 gap-2">
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                      alt="1"
                      className="w-full object-cover"
                    />
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                      alt="1"
                      className="w-full object-cover"
                    />
                  </motion.div>
                  <motion.div className="grid grid-rows-2 gap-2">
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                      alt="1"
                      className="w-full object-cover"
                    />
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                      alt="1"
                      className="w-full object-cover"
                    />
                  </motion.div>
                  <motion.div className="col-span-1">
                    <motion.img
                      loading="lazy"
                      src="https://ik.imagekit.io/tsfcuw1ce/Images/image13.png?updatedAt=1725131400575"
                      alt="2"
                      className="w-full h-[94%] object-cover"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Memories;
