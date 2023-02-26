import React from "react";

const ProjectCard = ({ name, url, imageUrl ,color,handleColor}) => {
  return (
    <div className="min-w-full min-h-full relative overflow-clip rounded-2xl hover-shrink group cursor-pointer"
    onMouseEnter={()=>handleColor(color)}
    >
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      
      <a href={url} target="_blank" className="link">
      <div
      className="absolute top-2 left-2 w-full h-full text-white font-semibold text-5xl opacity-0 group-hover:opacity-100 transition-all z-10"
      >
        <h3>{name}</h3>
      </div>
        <div className={`w-[30px] h-[30px]  bg-black/30 rounded-full absolute bottom-2 right-2 group-hover:scale-[12] transition-all ease-in-out duration-300  cursor-pointer flex justify-center items-center text-white`}>
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
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
