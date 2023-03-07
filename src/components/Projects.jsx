import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    name: "Bubble Wrap",
    url: "https://mern-social-media-fullstack-app.vercel.app/",
    imageUrl: "/src/assets/images/bubblewrap.jpg",
    color:"#0038a8"
  },
  {
    name: "Netflix",
    url: "https://netflix-iamcvarma.vercel.app/",
    imageUrl: "/src/assets/images/netflix.jpg",
    color:"#e10000"
  },
  {
    name: "Vine",
    url: "https://vine-iamcvarma.vercel.app/",
    imageUrl: "/src/assets/images/vine.jpg",
    accent:"cyan",
    color:"#f90788"
  },
  {
    name: "Change Log",
    url: "https://changelog-api-server.onrender.com/",
    imageUrl: "/src/assets/images/changelog.jpg",
    color:"#81a7f3"
  },
  {
    name: "Copy.ai",
    url: "https://open-ai-snippets.vercel.app/",
    imageUrl: "/src/assets/images/copyai.jpg",
    color:"#0a9893"
  },
];

const Projects = ({handleColor,handleCursorChange}) => {
  return (
    <div className="grid project-container w-full h-full gap-2">
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
    </div>
  );
};

export default Projects;
