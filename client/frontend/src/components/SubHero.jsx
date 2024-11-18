import React from "react";

const SubHero = () => {
  return (
    <div className="w-full h-auto xl:h-screen">
      <div className="w-full h-5/6 px-5 mt-[10%] flex flex-col  items-start  justify-start ">
        <h1 className="font-Cinzel text-[20px] xl:text-[40px] text-mayblack">
          THE <span className="text-gardenslight">EXPERIENCE</span>
        </h1>

        <div className="flex flex-col xl:flex-row justify-between gap-8">
          <div className="flex-1 flex flex-row items-start justify-start">
            <img
              loading="lazy"
              src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%209.jpg?updatedAt=1731510631913"
              alt="Someone drumming"
              className="img rounded-3xl w-[50%] object-contain mt-12"
            />
            <img
              loading="lazy"
              src="https://ik.imagekit.io/0y99xuz0yp/Rectangle%207.png?updatedAt=1731698634083"
              alt="Medusa's hair"
              className="img roundedn-3xl w-[50%] object-contain"
            />
          </div>

          <div className="flex-1 items-start justify-start">
            <h1 className="mt-6 text-mayblack font-Cinzel text-[16px] xl:text-[32px]">
              MAY GARDEN <br />{" "}
              <span className="text-gardenslight">LOVE STORY</span>
            </h1>
            <p className="w-[90%] text-mayblack text-justify text-[12px] xl:text-[14px]">
              At May Gardens, we believe every love story deserves to be
              celebrated. That’s why we’re excited to announce our bi-annual
              Love Story Contest, exclusively for engaged couples residing
              around Alimosho and the Mainland axis. Join us in making your love
              story a part of our legacy. Subscribe to our newsletter to get
              information on when the contest commences. Get ready to submit
              your entry and let May Gardens be the perfect backdrop for your
              unforgettable wedding celebration. For more details on how to
              participate and the contest guidelines, please contact our team
              directly. We can’t wait to hear your love story and help you
              create beautiful memories that will last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
