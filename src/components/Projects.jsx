import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    name: "Bubble Wrap",
    url: "https://mern-social-media-fullstack-app.vercel.app/",
    imageUrl: "/src/assets/images/bubblewrap.jpg",
  },
  {
    name: "Netflix",
    url: "https://netflix-iamcvarma.vercel.app/",
    imageUrl: "/src/assets/images/netflix.jpg",
  },
  {
    name: "Vine",
    url: "https://vine-iamcvarma.vercel.app/",
    imageUrl: "/src/assets/images/vine.jpg",
    accent:"cyan"
  },
  {
    name: "Change Log",
    url: "https://changelog-api-server.onrender.com/",
    imageUrl: "/src/assets/images/changelog.jpg",
  },
  {
    name: "Copy.ai",
    url: "https://open-ai-snippets.vercel.app/",
    imageUrl: "/src/assets/images/copyai.jpg",
  },
];

const Projects = () => {
  return (
    <div className="grid project-container w-full h-full gap-2">
      {projectsData.map(({ name, url, imageUrl }) => (
        <ProjectCard
          name={name}
          url={url}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
