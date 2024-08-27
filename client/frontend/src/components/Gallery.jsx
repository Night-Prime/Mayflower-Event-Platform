import React from 'react';

import image1 from '../assets/Images/image1.png';
import image10 from '../assets/Images/image10.png';
import image11 from '../assets/Images/image11.png';
import image12 from '../assets/Images/image12.png';
import image13 from '../assets/Images/image13.png';
import image14 from '../assets/Images/image14.png';
import image15 from '../assets/Images/image15.png';
import image16 from '../assets/Images/image16.png';
import image17 from '../assets/Images/image17.png';
import image18 from '../assets/Images/image18.png';
import image2 from '../assets/Images/image2.png';
import image3 from '../assets/Images/image3.png';
import image4 from '../assets/Images/image4.png';
import image5 from '../assets/Images/image5.png';
import image6 from '../assets/Images/image6.png';
import image7 from '../assets/Images/image7.png';
import image8 from '../assets/Images/image8.png';
import image9 from '../assets/Images/image9.png';
import { Footer } from './Footer.jsx';
import { Navbar } from './Navbar.jsx';

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
            <img src={image1} alt="1" className="w-full h-full object-cover" />
          </div>

          <div className=" w-full flex flex-col gap-6">
            <div className=" w-full flex gap-6">
              <div className="col-span-4 row-span-1">
                <img
                  src={image2}
                  alt="2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 row-span-1">
                <img
                  src={image3}
                  alt="3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 row-span-2">
                <img
                  src={image4}
                  alt="4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className=" w-full flex gap-6">
              <div className="col-span-2 row-span-1">
                <img
                  src={image5}
                  alt="5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1">
                <img
                  src={image6}
                  alt="6"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex gap-6">
          <div className="col-span-4 row-span-1">
            <img src={image7} alt="7" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-4 row-span-2">
            <img src={image8} alt="8" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-4 row-span-1">
            <img src={image9} alt="9" className="w-full h-full object-cover" />
          </div>
        </div>
        <p className=" font-Playfair font-bold text-[32px] leading-[38.4px] mt-20">
          Birthday Parties
        </p>
        <div className=" w-full flex gap-6">
          <div className="col-span-4 row-span-1">
            <img src={image10} alt="7" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-4 row-span-2">
            <img src={image11} alt="8" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-4 row-span-1">
            <img src={image12} alt="9" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className=" w-full flex gap-6">
          <div className="col-span-4 row-span-2">
            <img src={image13} alt="1" className="w-full h-full object-cover" />
          </div>
          <div className=" w-full flex flex-col gap-6">
            <div className=" w-full flex gap-6">
              <div className="col-span-4 row-span-1">
                <img
                  src={image14}
                  alt="2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 row-span-1">
                <img
                  src={image15}
                  alt="3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 row-span-2">
                <img
                  src={image16}
                  alt="4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className=" w-full flex gap-6">
              <div className="col-span-2 row-span-1">
                <img
                  src={image17}
                  alt="5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1">
                <img
                  src={image18}
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
