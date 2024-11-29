import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Link as RouterLink } from "react-router-dom";
import { Right } from "../icons/Right";

const imgSlides = [
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%209.png?updatedAt=1731525610543",
    alt: "Someone drumming",
    title: "CEO, MD",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%208.png?updatedAt=1731525634992",
    alt: "People Partying",
    title: "CEO, MD",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%207.png?updatedAt=1731525636949",
    alt: "Medussa Hair",
    title: "CEO, MD",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2012.png?updatedAt=1731583996976",
    alt: "Drinking with the guys",
    title: "CEO, MD",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2010.png?updatedAt=1731583997575",
    alt: "May Garden",
    title: "CEO, MD",
  },
  {
    url: "https://ik.imagekit.io/0y99xuz0yp/Rectangle%2013.png?updatedAt=1731583997983",
    alt: "Selfie with Friends",
    title: "CEO, MD",
  },
];

const AccordionItem = ({ item, isOpen, onClick, index }) => {
  // Calculate the color based on the index
  const startColor = { r: 143, g: 184, b: 125 }; // #8FB87D
  const endColor = { r: 64, g: 86, b: 54 };

  // Calculate the color based on the index
  const color = {
    r: Math.round(
      startColor.r +
        ((endColor.r - startColor.r) * index) / (imgSlides.length - 1)
    ),
    g: Math.round(
      startColor.g +
        ((endColor.g - startColor.g) * index) / (imgSlides.length - 1)
    ),
    b: Math.round(
      startColor.b +
        ((endColor.b - startColor.b) * index) / (imgSlides.length - 1)
    ),
  };

  const backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

  return (
    <div className="h-auto m-0">
      <div
        onClick={onClick}
        className="w-full border-b-2 border-gardens cursor-pointer p-4"
        style={{ backgroundColor }} // Apply dynamic background color
      >
        <h4 className="font-semibold text-gardens font-Cinzel text-2xl mx-4">
          {item.title}
        </h4>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-full animate-fade-in-bottom" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <img src={item.url} alt={item.alt} className="w-3/4 h-auto mb-2" />
          <p className="text-gray-700 mx-4">{item.alt}</p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-full w-full ">
      <div className="h-full flex flex-row justify-between">
        <div className="flex items-center justify-center w-1/3">
          {" "}
          <h1 className="font-Cinzel text-xl transform -rotate-90 whitespace-nowrap">
            MEET THE TEAM THAT MAKES THE{" "}
            <span className="text-gardenslight">MAGIC</span> HAPPENS
          </h1>
        </div>
        <div className="h-full flex flex-col items-end justify-end">
          <div className="w-full h-auto rounded-tl-3xl rounded-br-3xl bg-gardenslight">
            {imgSlides.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
