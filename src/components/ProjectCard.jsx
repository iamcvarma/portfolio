import React, { useState } from "react";

const ProjectCard = ({ name, url, imageUrl,color, handleColor,handleCursorChange }) => {
  return (
    <div className="min-w-full min-h-full relative group rounded-sm overflow-hidden blur-container"
    onMouseEnter={()=>{
      handleColor(color);
      handleCursorChange("blurXl", (<p className="font-['Mynerve'] text-white font-md justify-center align-middle">{name}</p>))}}
    onMouseLeave={()=>handleCursorChange("default","")}
    >
      <a href={url} target="_blank" className="link">
      <img src={imageUrl} alt={name} className="w-full h-full  object-cover hover:scale-[1.1] transition duration-300" />

      {/* <div
      className="absolute top-2 left-2 w-full h-full text-white font-semibold text-5xl opacity-0 group-hover:opacity-100 transition-all"
      >
      </div>  */}
        {/* <div className={`w-[30px] h-[30px]  bg-black/30 rounded-full absolute bottom-2 right-2 group-hover:scale-[12] transition-all ease-in-out duration-300  cursor-pointer flex justify-center items-center text-white`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div> */}
      </a>
    </div>
  );
};

export default ProjectCard;
