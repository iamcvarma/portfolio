import React from "react";
import Info from "./Info";

const About = () => {
  return (
    <div className="w-full h-full p-4 ">
      <div>
        <h1 
        className="font-extrabold font-[Newake] text-7xl text-white z-10"
        >Hello</h1>
      </div>
      <div className="flex gap-1 items-start">

      <h1
      className="font-extrabold font-[Newake] text-9xl text-white"
      >I</h1>
      <Info />
      </div>
    </div>
  );
};

export default About;
