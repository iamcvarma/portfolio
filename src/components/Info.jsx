import React, { useState, useEffect } from "react";
import FancyText from "./FancyText";
const words = ["am Chaitanya","write code","obsess","debug"];
const Info = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-5">
      <FancyText text={words[idx]} />
    </div>
  );
};

export default Info;
