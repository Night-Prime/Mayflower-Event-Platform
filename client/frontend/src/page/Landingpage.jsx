import React from 'react'
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

export const Landingpage = () => {
  return (
    <div className=" bg-[#212121]">
     <Navbar/>
     <Hero/>
     <About/> 
    </div>
  )
}
