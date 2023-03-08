import React from "react";
import github from "/src/assets/icons/github.svg";
import githubColor from "/src/assets/icons/githubColor.svg";
import leetcode from "/src/assets/icons/leetcode.svg";
import leetcodeColor from "/src/assets/icons/leetcodeColor.svg";
import linkedin from "/src/assets/icons/linkedin.svg";
import linkedinColor from "/src/assets/icons/linkedinColor.svg";
import twitter from "/src/assets/icons/twitter.svg";
import twitterColor from "/src/assets/icons/twitterColor.svg";

const social = [
  {
    name: "github",
    url: "https://github.com/iamcvarma/",
    icon: github,
    iconColor: githubColor,
  },
  {
    name: "leetcode",
    url: "https://leetcode.com/iamcvarma/",
    icon: leetcode,
    iconColor: leetcodeColor,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/g-chaitanya-varma-50b088267/",
    icon: linkedin,
    iconColor: linkedinColor,
  },
  {
    name: "twitter",
    url: "",
    icon: twitter,
    iconColor: twitterColor,
  },
];

const Socials = ({handleCursorChange}) => {
  return (
    <div className=" flex flex-row justify-evenly  py-4  blur-container ">
      {social.map(({ name, url, icon, iconColor }) => (
        <div
        onMouseEnter={()=>handleCursorChange("blurLogoXl",(<img src={iconColor} width={45} height={45}/>))}
        onMouseLeave={()=>handleCursorChange("default")}
        >
            <a href={url} target="_blank">

          <img src={icon} alt={name} width={30} height={30} />
            </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
