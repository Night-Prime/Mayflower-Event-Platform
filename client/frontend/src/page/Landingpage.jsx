import React from "react";
import { Footer } from "../components/Footer.jsx";
import { Hero } from "../components/Hero.jsx";
import { Navbar } from "../components/Navbar.jsx";
import SubHero from "../components/SubHero.jsx";
import AboutMayflower from "../components/AboutMayflower.jsx";
import Moments from "../components/Moments.jsx";
import Tour from "../components/Tour.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Team from "../components/Team.jsx";

const Landingpage = () => {
  return (
    <div className="bg-white h-screen overflow-y-scroll overflow-x-hidden scroll-snap-type-y scroll-snap-mandatory m-0">
      <Navbar />
      <section id="home" className="h-max scroll-snap-align-start m-0">
        <Hero />
        <SubHero />
        <AboutMayflower />
        <Moments />
        <Tour />
        <Testimonials />
        <Team />
      </section>
      <Footer />
    </div>
  );
};

export default Landingpage;
