import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Faaji = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between text-mayblack">
      <div className="flex-1 h-full my-[10%] hover:-translate-y-4 transition-transform duration-1000">
        <RouterLink
          to="/"
          className="w-full h-full hidden lg:flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="rounded-xl h-[60%] w-[75%] border-gardenslight shadow-xl">
            <div className="h-full w-full flex flex-col">
              <div className="h-3/4 w-full">
                <img
                  src="https://ik.imagekit.io/0y99xuz0yp/ik-genimg-prompt-Wedding/b568ac21-defa-41b2-b8c6-97bfad15fa48/image.jpg?tr=f-jpg%2Ch-1024%2Cw-1024&ik-s=ce1d82c0c01138279bcb60441f0a144fe038fb1a"
                  alt="Weddings"
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="rounded-b-xl h-1/4 w-full bg-gray-200">
                <h1 className="text-center my-[12.5%] text-3xl font-Cinzel font-bold">
                  Weddings
                </h1>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>

      <div className="flex-1 h-full my-[10%] hover:-translate-y-4 transition-transform duration-1000">
        <RouterLink
          to="/"
          className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="rounded-xl h-[60%] w-full lg:w-[75%] border-gardenslight shadow-xl">
            <div className="h-full w-full flex flex-col">
              <div className="h-full lg:h-3/4 w-full">
                <img
                  src="https://ik.imagekit.io/0y99xuz0yp/ik-genimg-prompt-Yoruba%20Party/e588f5ac-6441-44c6-b309-34265c8724a1/image.jpg?tr=f-jpg%2Ch-1024%2Cw-1024&ik-s=61e3d879f088163d34377a5812b301d8a172ceab"
                  alt="Weddings"
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="rounded-b-xl h-1/4 w-full bg-gray-200">
                <h1 className="text-center py-[12.5%] text-3xl font-Cinzel font-bold">
                  Faaji
                </h1>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>

      <div className="flex-1 h-full my-[10%] hover:-translate-y-4 transition-transform duration-1000">
        <RouterLink
          to="/"
          className="w-full h-full hidden lg:flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="rounded-xl h-[60%] w-[75%] border-gardenslight shadow-xl">
            <div className="h-full w-full flex flex-col">
              <div className="h-3/4 w-full">
                <img
                  src="https://ik.imagekit.io/0y99xuz0yp/ik-genimg-prompt-Wedding/b568ac21-defa-41b2-b8c6-97bfad15fa48/image.jpg?tr=f-jpg%2Ch-1024%2Cw-1024&ik-s=ce1d82c0c01138279bcb60441f0a144fe038fb1a"
                  alt="Weddings"
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="rounded-b-xl h-1/4 w-full bg-gray-200">
                <h1 className="text-center my-[12.5%] text-3xl font-Cinzel font-bold">
                  Others
                </h1>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  );
};

export default Faaji;
