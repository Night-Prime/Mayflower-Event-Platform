import React, { useState, useRef } from "react";
import { Menu, X } from "react-feather";
import { motion } from "framer-motion";
import { animations } from "../shared/animation.js";

export const Navbar = ({ scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerVariants = animations.containerVariants;
  const childVariants = animations.childVariants;

  return (
    <motion.div
      rref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full h-24 xl:py-2 bg-mayblack m-0 xl:my-2"
    >
      <motion.div className="w-[100%] xl:w-[96%] h-full flex justify-between items-center mx-auto px-6">
        <motion.div variants={childVariants} className="w-full cursor-pointer">
          <motion.img
            variants={childVariants}
            src="https://ik.imagekit.io/0y99xuz0yp/May%20Gardens%20Elements-01.png?updatedAt=1727604763546"
            alt="Main Logo"
            className="w-[17.5%] 2xl:w-[7.5%] object-contain"
          />
        </motion.div>

        <motion.div className="xl:hidden z-50 text-white">
          <motion.button onClick={toggleMenu} className="cursor-pointer p-2">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </motion.div>

        {/* Navigation Links */}
        <div
          className={`
            fixed inset-y-0 right-0 xl:relative
            w-[100%] xl:w-full
            ${menuOpen ? "translate-x-0" : "translate-x-full"} 
            xl:translate-x-0
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "bg-black/90" : "bg-transparent"}
            xl:bg-transparent
            flex items-center
            z-40
          `}
        >
          <ul className="flex flex-col xl:flex-row items-center justify-end gap-5 tracking-wide p-6 xl:p-0 w-full text-white">
            <li
              className="relative w-full xl:w-auto text-center"
              onClick={() => {
                scrollToSection(refs.homeRef);
                setMenuOpen(false);
              }}
            >
              <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Home
              </span>
            </li>

            <li
              className="relative w-full xl:w-auto text-center"
              onClick={() => {
                scrollToSection(refs.aboutRef);
                setMenuOpen(false);
              }}
            >
              <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                About
              </span>
            </li>

            <li
              className="relative w-full xl:w-auto text-center"
              onClick={() => {
                scrollToSection(refs.FaajiRef);
                setMenuOpen(false);
              }}
            >
              <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Faaji
              </span>
            </li>

            <li
              className="relative w-full xl:w-auto text-center"
              onClick={() => {
                scrollToSection(refs.servicesRef);
                setMenuOpen(false);
              }}
            >
              <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Moments
              </span>
            </li>

            <li
              className="hidden relative w-full xl:w-auto text-center"
              onClick={() => {
                scrollToSection(refs.TestimonialRef);
                setMenuOpen(false);
              }}
            >
              <span className="cursor-pointer text-[10px] sm:text-[12px] xl:text-[18px] font-normal pb-2 hover:border-b border-transparent border-b-white transition-all duration-100">
                Testimonials
              </span>
            </li>

            <li className="relative w-full xl:w-auto text-center">
              <button
                onClick={() => {
                  scrollToSection(refs.contactRef);
                  setMenuOpen(false);
                }}
                className="bg-transparent border-2 border-gardenslight text-white flex items-center justify-center rounded-lg text-[12px] xl:text-[18px] font-normal py-2 px-4 w-full xl:w-auto"
              >
                Bookings
              </button>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
