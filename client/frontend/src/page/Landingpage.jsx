import React from "react";
import { Footer } from "../components/Footer.jsx";
import { Hero } from "../components/Hero.jsx";
import { Navbar } from "../components/Navbar.jsx";
import SubHero from "../components/SubHero.jsx";
import Chat from "../components/Chat.jsx";
import Grid from "../components/Grid.jsx";

const Landingpage = () => {
  return (
    <div className="bg-white min-h-screen m-0">
      <Navbar />
      <section id="home" className="h-auto mx-0 my-10">
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
