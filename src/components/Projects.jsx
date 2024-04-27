import React from "react";
import ProjectCard from "./ProjectCard";
import bubble from '../assets/images/bubblewrap.jpg'
import netflix from '../assets/images/netflix.jpg'
import vine from '../assets/images/vine.jpg'
import logVault from '../assets/images/logVault.jpg'
import copyai from '../assets/images/copyai.jpg'
const projectsData = [
  {
    name: "BubbleWrap",
    url: "https://mern-social-media-fullstack-app.vercel.app/",
    imageUrl: bubble,
    color:"#0038a8"
  },
  {
    name: "Cinematica",
    url: "https://netflix-iamcvarma.vercel.app/",
    imageUrl: netflix,
    color:"#e10000"
  },
  {
    name: "Vine",
    url: "https://vine-iamcvarma.vercel.app/",
    imageUrl: vine,
    accent:"cyan",
    color:"#f90788"
  },
  {
    name: "LogVault",
    url: "https://changelog-api-server.onrender.com/",
    imageUrl:logVault,
    color:"#81a7f3"
  }
];

const Projects = ({handleColor,handleCursorChange}) => {
  return (
    <div className="grid project-container w-full h-full gap-4">
      {projectsData.map(({ name, url, imageUrl,color }) => (
        <ProjectCard
          name={name}
          url={url}
          imageUrl={imageUrl}
          color={color}
          handleColor={handleColor}
          handleCursorChange = {handleCursorChange}
        />
      ))}
      {/* <div className="flex flex-col justify-center items-center ">
        <div 
        className="flex justify-start w-full ml-1"
        > 
        <h1 className="text-white font-extralight text-3xl text-left">Selected</h1>

        </div>
        <div>
        <h1
        className="text-white text-5xl -mt-2 font-extrabold font-[Nunito Sans] italic"
        >projects</h1>

        </div>
      </div> */}
    </div>
  );
};

export default Projects;
