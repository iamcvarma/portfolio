import React from "react";
import { Tooltip } from "react-tooltip";
import htmlIcon from "/src/assets/icons/html.svg";
import cssIcon from "/src/assets/icons/css.svg";
import reactIcon from "/src/assets/icons/react.svg";
import typescriptIcon from "/src/assets/icons/typescript.svg";
import expressIcon from "/src/assets/icons/express.svg";
import javascriptIcon from "/src/assets/icons/javascript.svg";
import materialIcon from "/src/assets/icons/material-ui.svg";
import mongodbIcon from "/src/assets/icons/mongodb.svg";
import nextIcon from "/src/assets/icons/next-js.svg";
import nodejsIcon from "/src/assets/icons/nodejs.svg";
import pythonIcon from "/src/assets/icons/python.svg";
import reduxIcon from "/src/assets/icons/redux.svg";
import tailwindIcon from "/src/assets/icons/tailwind.svg";
import postgreIcon from "/src/assets/icons/postgresql.svg";
import prismaIcon from "/src/assets/icons/prisma.svg";
import sanityIcon from "/src/assets/icons/sanity.svg";
import fastapiIcon from "/src/assets/icons/fastapi.svg";
import awslambdaIcon from "/src/assets/icons/aws-lambda.svg";
import awsIcon from "/src/assets/icons/aws.svg";
import jestIcon from "/src/assets/icons/jest.svg";
import dockerIcon from "/src/assets/icons/docker.svg";
import gitIcon from "/src/assets/icons/git.svg";

const icons = [
  {
    name: "HTML",
    icon: htmlIcon,
    color: "#ce4a08",
  },
  {
    name: "CSS",
    icon: cssIcon,
    color: "#0b7def",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    color: "#fefe09",
  },
  {
    name: "TypeScript",
    icon: typescriptIcon,
    color: "#024fcb",
  },
  {
    name: "React",
    icon: reactIcon,
    color: "#33c9ff",
  },
  {
    name: "NodeJS",
    icon: nodejsIcon,
    color: "#269700",
  },
  {
    name: "Express",
    icon: expressIcon,
    color: "#4b4b4b",
  },
  {
    name: "M-UI",
    icon: materialIcon,
    color: "#038ad3",
  },
  {
    name: "NextJS",
    icon: nextIcon,
    color: "#000000",
  },
  {
    name: "Python",
    icon: pythonIcon,
    color: "#3f86e4",
  },
  {
    name: "MongoDB",
    icon: mongodbIcon,
    color: "#89ef0b",
  },
  {
    name: "Redux",
    icon: reduxIcon,
    color: "#4d25fd",
  },
  {
    name: "TailwindCSS",
    icon: tailwindIcon,
    color: "#09c1e6",
  },
  {
    name: "PostgreSQL",
    icon: postgreIcon,
    color: "#265786",
  },
  {
    name: "Prisma",
    icon: prismaIcon,
    color: "#1b2a52",
  },
  {
    name: "Sanity",
    icon: sanityIcon,
    color: "#d95e5e",
  },
  {
    name: "FastAPI",
    icon: fastapiIcon,
    color: "#46855a",
  },
  {
    name: "AWS-Lambda",
    icon: awslambdaIcon,
    color: "#eea617",
  },
  {
    name: "AWS",
    icon: awsIcon,
    color: "#f29214",
  },
  {
    name: "Docker",
    icon: dockerIcon,
    color: "#58b3e0",
  },
];
const Skills = ({ handleColor, handleCursorChange }) => {
  return (
    <div>

    <div className="grid grid-cols-5">
      {icons.map(({ name, icon, color }) => (
        <div
          className=" w-full flex flex-col items-center justify-center"
          onMouseEnter={() => {
            handleColor(color);
            handleCursorChange("blurXl", (<p className="font-['Mynerve'] text-white font-md">{name}</p>));
          }}
          onMouseLeave={()=>handleCursorChange("default","")}
        >
          <img
            src={icon}
            alt={name}
            height={40}
            width={40}
            className="m-3"
          />
        </div>
      ))}
    </div>
    <h1
        className="text-white text-5xl text-center font-extrabold font-[Nunito Sans] italic"
        >skills</h1>
    </div>
  );
};

export default Skills;
