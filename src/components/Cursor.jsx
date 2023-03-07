import React, { useState, useEffect } from "react";
import { motion, useWillChange } from "framer-motion";
const Cursor = ({ cursorVarient, innerComp}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const willChange = useWillChange();
  console.log(innerComp)
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 30,
      y: mousePos.y - 30,
      width: "30px",
      height: "30px",
      "background-color": "#22222",
    },
    blur: {
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      width: "50px",
      height: "50px",
      "backdrop-filter": "blur(3px)",
    },
    blurXl: {
      x: mousePos.x - 50,
      y: mousePos.y - 50,
      width: "70px",
      height: "70px",
      "backdrop-filter": "blur(5px)",
    },
    invert: {
      x: mousePos.x - 50,
      y: mousePos.y - 50,
      width: "70px",
      height: "70px",
      "background-color": "#0678a2",
      "mix-blend-mode": "luminosity",
    },
  };
  return (
    <motion.div
      className="fixed rounded-full pointer-events-none flex justify-center items-center"
      variants={variants}
      animate={cursorVarient}
      style={{ willChange }}
    >
      {innerComp}
    </motion.div>
  );
};

export default Cursor;
