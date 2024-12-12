import React, { useRef } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import AboutMayflower from "./AboutMayflower";
import About from "./About";
import Moments from "./Moments";
import BookForm from "./BookForm";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const TestimonialRef = useRef(null);

  // Scroll to section function
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-page h-screen w-full overflow-y-scroll scroll-smooth">
      <Navbar />
      <div className="full-page-sections">
        <section
          ref={homeRef}
          className="full-page bg-mayblack text-white flex items-center justify-center"
        >
          <Hero />
        </section>
        <section
          ref={aboutRef}
          className="full-page bg-gardens text-white flex items-center justify-center"
        >
          <About />
        </section>

        <section
          ref={servicesRef}
          className="full-page bg-mayblack text-white flex items-center justify-center"
        >
          <Moments />
        </section>

        <section
          ref={contactRef}
          className="full-page bg-white text-mayblack flex items-center justify-center"
        >
          <BookForm />
        </section>

        <section
          ref={TestimonialRef}
          className="full-page bg-mayblack text-white flex items-center justify-center"
        >
          <Testimonials />
        </section>
      </div>
      <Footer />

      {/* Custom CSS for full-page sections */}
      <style jsx>{`
        .full-page {
          height: 100vh;
          width: 100%;
          scroll-snap-align: start;
        }

        .landing-page {
          scroll-snap-type: y mandatory;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
