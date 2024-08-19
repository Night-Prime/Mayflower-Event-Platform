import React from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Events } from "../components/Events";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Landingpage = () => {
  return (
    <div className="bg-[#212121]">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="events">
        <Events />
      </section>
      <Footer />
    </div>
  );
};
