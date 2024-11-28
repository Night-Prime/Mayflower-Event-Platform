import React from "react";
import Moments from "./Moments";
import Testimonials from "./Testimonials";
import Team from "./Team";

const Grid = () => {
  return (
    <div className="w-full h-auto mt-8 md:mt-0">
      <div className="w-full h-full bg-mayblack md:grid md:grid-cols-3 rounded-b-3xl">
        <div className="col-span-2">
          <div className="h-full w-full flex-col">
            <div>
              <Moments />
            </div>
            <div className="hidden md:flex">
              <Testimonials />
            </div>
          </div>
        </div>
        <div className="col-span-1 border-l-2 border-gardenslight h-full md:flex md:items-end my-6 md:my-0">
          <Team />
        </div>
      </div>
    </div>
  );
};

export default Grid;
