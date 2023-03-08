import React from "react";
import Info from "./Info";

const About = ({ handleCursorChange }) => {
  return (
    <div className="w-full h-full p-5  relative flex flex-col justify-between">
      <div>
      <div>
        <h1 className="font-extrabold font-[Be Vietnam Pro] text-5xl text-white hero-text">
          Hello
        </h1>
      </div>
      <div
        onMouseEnter={() => handleCursorChange("invert")}
        onMouseLeave={() => handleCursorChange("default")}
        className="flex gap-1 items-start"
      >
        <h1 className="font-extrabold font-[Be Vietnam Pro] text-6xl text-white">
          I'm <span className="text-red-500 font-[yesteryear]">C</span>haitanya
        </h1>
      </div>
    {/* <Info /> */}
      <img
        src="src/assets/images/photo.png"
        alt="Chaitanya"
        className="w-[20%]  absolute right-[5%] top-[5%] -z-10 rounded-full filter "
      />
      </div>
      <div className=" flex flex-row  text-white justify-evenly">
          <div className="flex flex-col gap-0">
            <div className="flex justify-center">
              <div className="relative">

              <p className="text-7xl font-extrabold">2</p>
              <p className="absolute -top-1 -right-1">+</p>
              </div>
            </div>
              <p
              className="-mt-3 text-xs"
              >Years Experience</p>
            
          </div>
          <div className="flex flex-col gap-0">
            <div className="flex justify-center">
              <div className="relative">

              <p className="text-7xl font-extrabold">5</p>
              <p className="absolute -top-2 -right-2">%</p>
              </div>
            </div>
              <p
              className="-mt-3 text-xs"
              >Top Ranked LeetCode</p>
            
          </div>
          <div className="flex flex-col gap-0">
            <div className="flex justify-center">
              <div className="relative">

              <p className="text-7xl font-extrabold">6</p>
              <p className="absolute -top-2 -right-2">+</p>
              </div>
            </div>
              <p
              className="-mt-3 text-xs"
              >Full-stack projects</p>
            
          </div>

      </div>
    </div>
  );
};

export default About;
