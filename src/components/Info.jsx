import React, { useState, useEffect } from "react";
import FancyText from "./FancyText";
const words = [
  "i obsess",
  "i leetcode",
  "i break code ",
  "i code with adhd",
  "i build solutions",
  "perfectionist by nature",
  "i embrace the grind",
  "master of my craft",
  "always learning more",
  "music is my muse",
  "obsessed with precision",
];
const Info = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div >
      <FancyText text={words[idx]} />
    </div>
  );
};

export default Info;
