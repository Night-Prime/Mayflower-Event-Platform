import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Right } from "../icons/Right.jsx";
import { Navbar } from "../components/Navbar.jsx";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex justify-center items-center my-12">
        <div className="mx-auto w-[80%] h-[80%] flex flex-row items-center justify-center gap-8">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-8xl font-semibold text-[#CC5500]">Oops!</h1>

            <h3 className="text-4xl font-thin">Error has occured!</h3>

            <h5 className="text-2xl">
              An Error has occured for which we are ateending to at the moment.
            </h5>

            <button className="bg-[#CC5500] border-[2px] border-[#CC5500] text-white  flex items-center justify-center rounded-lg text-md font-semibold font-Montserrat w-44 p-2">
              <RouterLink to="/" className=" flex items-center justify-center">
                Home
                <span className=" text-white ml-2">
                  <Right />
                </span>
              </RouterLink>
            </button>
          </div>
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <img
              className="rounded-lg object-contain"
              src="https://ik.imagekit.io/0y99xuz0yp/Group.png?updatedAt=1725927423990"
              alt="Error"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
