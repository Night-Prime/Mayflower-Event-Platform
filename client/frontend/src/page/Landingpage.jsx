import React from "react";
import { Hero } from "../components/Hero";
import { Events } from "../components/Events";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import SubHero from "../components/SubHero";
import History from "../components/History";
import Mission from "../components/Mission";

export const Landingpage = () => {
  return (
    <div className="bg-[#212121] h-screen overflow-y-scroll scroll-snap-type-y scroll-snap-mandatory">
      <Navbar />

      <section id="home" className="h-screen scroll-snap-align-start">
        <Hero />
      </section>
      <section className="h-screen scroll-snap-align-start">
        <Events />
      </section>
      <section className="h-screen scroll-snap-align-start">
        <SubHero />
      </section>
      <section className="h-screen scroll-snap-align-start">
        <Mission />
      </section>
      <section className="h-screen scroll-snap-align-start">
        <History />
      </section>

      <Footer />
    </div>
  );
};
