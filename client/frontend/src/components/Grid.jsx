import React from "react";
import Moments from "./Moments";
import Testimonials from "./Testimonials";
import Team from "./Team";

const Grid = () => {
  return (
    <div className="w-full h-auto 2xl:h-auto xl:mt-0 bg-mayblack rounded-b-3xl overflow-y-hidden">
      <div className="w-full h-full xl:grid xl:grid-cols-3">
        <div className="col-span-2">
          <div className="h-full w-full flex flex-col">
            <div>
              <Moments />
            </div>
            <div className="hidden xl:flex xl:h-full xl:w-full">
              <div>
                <Testimonials />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 border-l-2 xl:border-gardenslight h-full">
          <Team />
        </div>
      </div>
    </div>
  );
};

export default Grid;
