import React from "react";
import Moments from "./Moments";
import Testimonials from "./Testimonials";
import Team from "./Team";

const Grid = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-full bg-mayblack grid grid-cols-3 rounded-b-3xl">
        <div className="col-span-2">
          <div className="h-full w-full flex-col">
            <div>
              <Moments />
            </div>
            <div>
              <Testimonials />
            </div>
          </div>
        </div>
        <div className="col-span-1 border-l-2 border-gardenslight h-full flex items-end">
          <Team />
        </div>
      </div>
    </div>
  );
};

export default Grid;
