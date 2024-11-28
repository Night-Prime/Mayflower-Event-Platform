import React from "react";
import { Footer } from "../components/Footer.jsx";
import { Hero } from "../components/Hero.jsx";
import { Navbar } from "../components/Navbar.jsx";
import SubHero from "../components/SubHero.jsx";
import Chat from "../components/Chat.jsx";
import Grid from "../components/Grid.jsx";

const Landingpage = () => {
  return (
    <div className="bg-white h-screen overflow-y-scroll overflow-x-hidden scroll-snap-type-y scroll-snap-mandatory m-0 relative">
      <Navbar />
      <section id="home" className="h-max scroll-snap-align-start m-0">
        <Hero />
        <SubHero />
        <Grid />
      </section>
      <Chat />
      <Footer />
    </div>
  );
};

export default Landingpage;
