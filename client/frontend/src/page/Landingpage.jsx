import React from 'react';

import { Events } from '../components/Events.jsx';
import { Footer } from '../components/Footer.jsx';
import { Hero } from '../components/Hero.jsx';
import History from '../components/History.jsx';
import Mission from '../components/Mission.jsx';
import { Navbar } from '../components/Navbar.jsx';
import SubHero from '../components/SubHero.jsx';

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
