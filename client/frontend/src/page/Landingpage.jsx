import React from "react";
import { Footer } from "../components/Footer.jsx";
import { Hero } from "../components/Hero.jsx";
import { Navbar } from "../components/Navbar.jsx";

export const Landingpage = () => {
  return (
    <div className="bg-[#212121] h-screen overflow-y-scroll scroll-snap-type-y scroll-snap-mandatory">
      <Navbar />

      <section id="home" className="h-max scroll-snap-align-start">
        <Hero />
      </section>
      <Footer />
    </div>
  );
};
