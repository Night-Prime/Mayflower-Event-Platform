import React, { useState, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Right } from "../icons/Right.jsx";
import { Menu, X } from "react-feather";
import { motion } from "framer-motion";
import { animations } from "../shared/animation.js";

export const Navbar = ({ scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const ref = useRef(null);
  const containerVariants = animations.containerVariants;
  const childVariants = animations.childVariants;

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full h-24 xl:py-2 bg-mayblack m-0 xl:my-2"
    >
      <motion.div className="w-[100%] xl:w-[96%] h-full flex justify-between items-center mx-auto px-6">
        <motion.div variants={childVariants} className="w-full cursor-pointer">
          <RouterLink to="/">
            <motion.img
              variants={childVariants}
              src="https://ik.imagekit.io/0y99xuz0yp/May%20Gardens%20Elements-01.png?updatedAt=1727604763546"
              alt="Main Logo"
              className="w-[17.5%] 2xl:w-[7.5%] object-contain"
            />
          </RouterLink>
        </motion.div>

        {/* <motion.div className="xl:hidden z-50 text-white">
          {menuOpen ? (
            <X onClick={toggleMenu} className=" cursor-pointer" />
          ) : (
            <Menu onClick={toggleMenu} className=" cursor-pointer" />
          )}
        </motion.div> */}

        <motion.div
          className={`w-[100%] fixed inset-y-0 right-0 xl:w-full ${
            menuOpen ? "bg-gardens h-screen w-screen" : "bg-transparent"
          } ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out xl:static xl:w-full xl:flex xl:transform-none z-40`}
        >
          <motion.ul
            variants={containerVariants}
            className="flex flex-col xl:flex-row items-center justify-end gap-5 tracking-wide  p-6 xl:p-0 w-full text-white"
          >
            <motion.li
              whileHover={{ scale: 0.75 }}
              whileTap={{ scale: 0.9 }}
              variants={childVariants}
              className="relative"
              onClick={() => scrollToSection(refs.homeRef)}
            >
              <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Home
              </span>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={childVariants}
              className="relative"
              onClick={() => scrollToSection(refs.aboutRef)}
            >
              <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                About
              </span>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={childVariants}
              className="relative"
              onClick={() => scrollToSection(refs.FaajiRef)}
            >
              <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Faaji
              </span>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={childVariants}
              className="relative"
              onClick={() => scrollToSection(refs.servicesRef)}
            >
              <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Moments
              </span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={childVariants}
              className="relative"
              onClick={() => scrollToSection(refs.TestimonialRef)}
            >
              <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Testimonials
              </span>
            </motion.li>
            <motion.li className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={childVariants}
                onClick={() => scrollToSection(refs.contactRef)}
                className="bg-transparent border-2 border-gardenslight text-white flex items-center justify-center rounded-lg text-[12px] xl:text-[18px] font-normal py-2 px-4"
              >
                Bookings
              </motion.button>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
