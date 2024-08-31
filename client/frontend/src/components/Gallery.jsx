import React from "react";
import { Footer } from "./Footer.jsx";
import { Navbar } from "./Navbar.jsx";

export const Gallery = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <div className=" w-full flex flex-col gap-6 p-8">
        <p className=" font-Playfair font-bold text-[32px] leading-[38.4px] mt-20">
          Wedding Party
        </p>
        <div className=" w-full flex gap-6">
          <div className="col-span-4 row-span-2">
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image1.png?updatedAt=1725131443965"
              alt="1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className=" w-full flex flex-col gap-6">
            <div className=" w-full flex gap-6">
              <div className="col-span-4 row-span-1">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image2.png?updatedAt=1725131445439"
                  alt="2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 row-span-1">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image3.png?updatedAt=1725131445516"
                  alt="3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 row-span-2">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image4.png?updatedAt=1725131440315"
                  alt="4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className=" w-full flex gap-6">
              <div className="col-span-2 row-span-1">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image5.png?updatedAt=1725131443372"
                  alt="5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image6.png?updatedAt=1725131406323"
                  alt="6"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex gap-6">
          <div className="col-span-4 row-span-1">
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image7.png?updatedAt=1725131405328"
              alt="7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-2">
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image8.png?updatedAt=1725131393743"
              alt="8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-1">
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image9.png?updatedAt=1725131393783"
              alt="9"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className=" font-Playfair font-bold text-[32px] leading-[38.4px] mt-20">
          Birthday Parties
        </p>
        <div className=" w-full flex gap-6">
          <div className="col-span-4 row-span-1">
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image10.png?updatedAt=1725131402063"
              alt="7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-2">
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image11.png?updatedAt=1725131399391"
              alt="8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-1">
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image12.png?updatedAt=1725131399443"
              alt="9"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className=" w-full flex gap-6">
          <div className="col-span-4 row-span-2">
            <img
              src="https://ik.imagekit.io/tsfcuw1ce/Images/image13.png?updatedAt=1725131400575"
              alt="1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" w-full flex flex-col gap-6">
            <div className=" w-full flex gap-6">
              <div className="col-span-4 row-span-1">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image14.png?updatedAt=1725131393740"
                  alt="2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 row-span-1">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image15.png?updatedAt=1725131393433"
                  alt="3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 row-span-2">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image16.png?updatedAt=1725131393483"
                  alt="4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className=" w-full flex gap-6">
              <div className="col-span-2 row-span-1">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image17.png?updatedAt=1725131393931"
                  alt="5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1">
                <img
                  src="https://ik.imagekit.io/tsfcuw1ce/Images/image18.png?updatedAt=1725131405300"
                  alt="6"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
