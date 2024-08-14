import React from 'react';
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Contact } from "../components/Contacts";
import { Events } from "../components/Events";

export const LandingPage = () => {
  return (
    <div className="bg-[#212121]">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="events">
        <Events/>
      </section>
    </div>
  );
}
