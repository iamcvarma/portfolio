import React from "react";
import Info from "./Info";
import Socials from "./Socials";
import photo from '../assets/images/photo.png'
const About = ({ handleCursorChange }) => {
  return (
    <div className="w-full h-full p-5  relative flex flex-col justify-between">
      <div className="relative">
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
            I'm <span className="text-red-500 font-[yesteryear]">C</span>
            haitanya
          </h1>
        </div>
        {/* <Info /> */}
        <div>
          <p className="text-slate-400 from-inherit">
          Results-driven technology professional with a passion for optimizing system performance and ensuring data integrity. Proven track record of delivering significant improvements through innovative solutions and strategic problem-solving. Expertise in microservices, concurrency, and data modeling drives my success in fast-paced environments.
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 flex justify-end">
          <img
            src={photo}
            alt="Chaitanya"
            className="w-[20%] rounded-full "
          />

          <span class="absolute flex h-3 w-3 bottom-2 right-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
      </div>
      <div className="absolute right-0 top-[50%] -translate-y-[50%]">
        <Socials handleCursorChange={handleCursorChange} />
      </div>
      <div className=" flex flex-row  text-white justify-evenly">
        <div className="flex flex-col gap-0">
          <div className="flex justify-center">
            <div className="relative">
              <p className="text-7xl font-extrabold">2</p>
              <p className="absolute -top-1 -right-1 text-red-500">+</p>
            </div>
          </div>
          <p className="-mt-3 text-xs">Years Experience</p>
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex justify-center">
            <div className="relative">
              <p className="text-7xl font-extrabold">3</p>
              <p className="absolute -top-1 -right-1 text-red-500">%</p>
            </div>
          </div>
          <p className="-mt-3 text-xs">Top Ranked LeetCode</p>
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex justify-center">
            <div className="relative">
              <p className="text-7xl font-extrabold">6</p>
              <p className="absolute -top-1 -right-1 text-red-500">+</p>
            </div>
          </div>
          <p className="-mt-3 text-xs">Full-stack projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
