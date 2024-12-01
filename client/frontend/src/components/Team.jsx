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
];

const AccordionItem = ({ item, isOpen, onClick, index }) => {
  // Define the set of colors
  const colors = [
    { r: 200, g: 230, b: 201 }, // #C8E6C9
    { r: 112, g: 191, b: 115 }, // #70BF73
    { r: 69, g: 159, b: 73 }, // #459F49
    { r: 42, g: 96, b: 44 }, // #2A602C
    { r: 45, g: 61, b: 38 }, // #2D3D26
  ];

  const color = colors[index % colors.length]; // Use modulo to wrap around if index exceeds colors array length

  const backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  const borderColor = backgroundColor;

  const startColorH4 = { r: 78, g: 78, b: 78 }; // #4E4E4E
  const endColorH4 = { r: 255, g: 255, b: 255 }; // white
  const colorH4 = {
    r: Math.round(
      startColorH4.r +
        ((endColorH4.r - startColorH4.r) * index) / (imgSlides.length - 1)
    ),
    g: Math.round(
      startColorH4.g +
        ((endColorH4.g - startColorH4.g) * index) / (imgSlides.length - 1)
    ),
    b: Math.round(
      startColorH4.b +
        ((endColorH4.b - startColorH4.b) * index) / (imgSlides.length - 1)
    ),
  };

  const h4Color = `rgb(${colorH4.r}, ${colorH4.g}, ${colorH4.b})`;

  return (
    <div className="h-auto m-0">
      <div
        onClick={onClick}
        className="w-full py-6 border-b-2 cursor-pointer xl:rounded-tl-3xl xl:rounded-br-3xl mt-0 xl:-mt-5"
        style={{ backgroundColor, borderColor }} // Apply dynamic background color
      >
        <h4
          className="font-semibold text-gardens font-Cinzel text-2xl mx-4"
          style={{ color: h4Color }}
        >
          {item.title}
        </h4>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            isOpen
              ? "max-h-full opacity-100 transform scale-100"
              : "max-h-0 opacity-0 transform scale-95"
          }`}
        >
          <div className="py-5">
            <h4
              className="text-gardens font-normal text-md px-4"
              style={{ color: h4Color }}
            >
              role description here
            </h4>
            <div className="w-full h-[.25px] bg-mayblack"></div>
            <img src={item.url} alt={item.alt} className="w-3/4 h-auto" />
            <p
              className="text-gray-700 mx-4 h-[30%]"
              style={{ color: h4Color }}
            >
              {item.alt}
            </p>
          </div>
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
    <div className="h-full w-full">
      <div className="h-full flex flex-row justify-between">
        <div className="flex items-center justify-center w-1/3 xl:w-1/6">
          {" "}
          <h1 className="font-Cinzel text-2xl transform -rotate-90 whitespace-nowrap">
            MEET THE TEAM THAT MAKES THE
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
