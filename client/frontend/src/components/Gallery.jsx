import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Navbar } from "./Navbar.jsx";

const INITIAL_DATES = [2022, 2023, 2024];
const BUFFER_SIZE = 3;

const Gallery = () => {
  const [dates, setDates] = useState([
    ...Array(BUFFER_SIZE).fill(INITIAL_DATES).flat(),
  ]);
  const [activeIndex, setActiveIndex] = useState(INITIAL_DATES.length);
  const dateItemsRef = useRef([]);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "10px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = dateItemsRef.current.indexOf(entry.target);
          const dateElement = entry.target.querySelector("h1");
          const date = dateElement.textContent;
          setDate(date);
          handleIntersection(index);
        }
      });
    }, observerOptions);

    dateItemsRef.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [dates]);

  useEffect(() => {
    gsap.to(".date-item", { scale: 1, duration: 0.3 });
    gsap.to(`.date-item:nth-child(${activeIndex + 1})`, {
      scale: 1.5,
      duration: 0.5,
      ease: "power2.inOut",
    });

    if (dateItemsRef.current[activeIndex]) {
      dateItemsRef.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeIndex]);

  const handleIntersection = (index) => {
    if (index === 0) {
      setActiveIndex(dates.length - INITIAL_DATES.length * 2);
      setDates([...dates, ...INITIAL_DATES]);
    } else if (index === dates.length - 1) {
      setActiveIndex(INITIAL_DATES.length);
      setDates([...INITIAL_DATES, ...dates]);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-gardens w-full h-screen overflow-hidden">
      <Navbar />
      <div className="overflow-hidden w-full h-full flex flex-row">
        <div className="w-[25%] h-full overflow-y-hidden flex flex-col justify-center items-center">
          <div className="h-[20%] w-full overflow-y-scroll">
            <div className="time-container h-full flex flex-col items-center justify-between gap-20">
              {dates.map((date, index) => (
                <div
                  key={index}
                  ref={(el) => (dateItemsRef.current[index] = el)}
                  className={`date-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  <h1 className="text-2xl">{date}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[75%] h-full overflow-y-scroll">
          <div className=" w-full flex flex-col gap-6 p-8 font-Cinzel mt-20 animate-fade-in">
            <Content date={date} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = ({ date }) => {
  if (date === "2024") {
    return (
      <div className="h-full flex flex-col gap-6 animate-fade-in">
        <p className="font-Cinzel font-bold text-[32px] leading-[38.4px]">
          Marriage Ceremony
        </p>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1 xl:col-span-2 lg:col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/seun/images/tea.png?updatedAt=1726558041845"
              alt="2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <img
                  loading="lazy"
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image13.png?updatedAt=1725131400575"
                  alt="1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1">
                <img
                  loading="lazy"
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                  alt="4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full">
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                alt="3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image17.png?updatedAt=1725131393931"
              alt="5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image18.png?updatedAt=1725131405300"
              alt="6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image10.png?updatedAt=1725131402063"
              alt="7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image11.png?updatedAt=1725131399391"
              alt="8"
              className="w-full h-full object-cover"
            />
          </div>
          {/* <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image12.png?updatedAt=1725131399443"
              alt="9"
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>
      </div>
    );
  } else if (date === "2023") {
    return (
      <div className="h-full flex flex-col gap-6 animate-fade-in">
        <p className="font-Cinzel font-bold text-[32px] leading-[38.4px]">
          Tech Events
        </p>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1 xl:col-span-2 lg:col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/laughing.png?updatedAt=1725131406021"
              alt="4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <img
                  loading="lazy"
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image14.png?updatedAt=1725131393740"
                  alt="2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1">
                <img
                  loading="lazy"
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                  alt="3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1">
                <img
                  loading="lazy"
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image14.png?updatedAt=1725131393740"
                  alt="3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full">
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/image13.png?updatedAt=1725131400575"
                alt="1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image17.png?updatedAt=1725131393931"
              alt="5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image18.png?updatedAt=1725131405300"
              alt="6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image10.png?updatedAt=1725131402063"
              alt="7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image11.png?updatedAt=1725131399391"
              alt="8"
              className="w-full h-full object-cover"
            />
          </div>
          {/* <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image12.png?updatedAt=1725131399443"
              alt="9"
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>
      </div>
    );
  } else if (date === "2022") {
    return (
      <div className="h-full flex flex-col gap-6 animate-fade-in">
        <p className="font-Cinzel font-bold text-[32px] leading-[38.4px]">
          Tech Events
        </p>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1 xl:col-span-2 lg:col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image13.png?updatedAt=1725131400575"
              alt="1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <img
                  loading="lazy"
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image14.png?updatedAt=1725131393740"
                  alt="2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1">
                <img
                  loading="lazy"
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                  alt="3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full">
              <img
                loading="lazy"
                src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                alt="4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image17.png?updatedAt=1725131393931"
              alt="5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image18.png?updatedAt=1725131405300"
              alt="6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image10.png?updatedAt=1725131402063"
              alt="7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image11.png?updatedAt=1725131399391"
              alt="8"
              className="w-full h-full object-cover"
            />
          </div>
          {/* <div className="col-span-1">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image12.png?updatedAt=1725131399443"
              alt="9"
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>
      </div>
    );
  }
  return null;
};

export default Gallery;
