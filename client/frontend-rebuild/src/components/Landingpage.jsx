import React, { useRef } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import About from "./About";
import Moments from "./Moments";
import BookForm from "./BookForm";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Faaji from "./Faaji";

const LandingPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const TestimonialRef = useRef(null);
  const FaajiRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-page h-screen bg-white text-mayblack w-full overflow-y-scroll scroll-smooth">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          aboutRef,
          servicesRef,
          contactRef,
          TestimonialRef,
          FaajiRef,
        }}
      />
      <div className="full-page-sections">
        <section
          ref={homeRef}
          className="full-page flex items-center justify-center"
        >
          <Hero />
        </section>
        <section
          ref={aboutRef}
          className="full-page flex items-center justify-center"
        >
          <About />
        </section>

        <section
          ref={FaajiRef}
          className="full-page flex items-center justify-center"
        >
          <Faaji />
        </section>

        <section
          ref={servicesRef}
          className="full-page  flex items-center justify-center"
        >
          <Moments />
        </section>

        <section
          ref={contactRef}
          className="full-page flex items-center justify-center"
        >
          <BookForm />
        </section>

        <section
          ref={TestimonialRef}
          className="full-page flex items-center justify-center"
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
