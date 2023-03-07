import FancyArrow from "./components/FancyArrow";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useEffect, useState, useRef } from "react";
import Experience from "./components/Experience";
import Info from "./components/Info";
import ArrowWrapper from "./components/ArrowWrapper";
import Cursor from "./components/Cursor";
import About from "./components/About";
const defaultColor = "#b2b8c9";
const defaultScale = "50px";
function App() {
  const [arrowColor, setArrowColor] = useState(defaultColor);
  const [arrowScale, setArrowScale] = useState(defaultScale);
  const [cursorVarient, setCursorVarient] = useState({
    cursorVarient: "default",
    innerComp: "",
  });
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setArrowColor(defaultColor);
      setArrowScale(defaultScale);
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [arrowColor, arrowScale]);
  const handleClick = (color) => {
    setArrowColor(color);
    setArrowScale("54px");
  };
  const handleCursorChange = (varient, comp) =>{
    setCursorVarient({ cursorVarient: varient, innerComp:comp });
  }
  return (
    <div className="w-full h-full grid grid-rows-4 grid-cols-6 gap-4">
      <div className="row-start-1 row-end-3 col-start-1 col-end-3 p-2 hover:scale-[.98] transition-all ">
        <ArrowWrapper>
          <About />
        </ArrowWrapper>
      </div>
      <div className="row-start-1 row-end-3 col-start-3 col-end-5">
        <FancyArrow color={arrowColor} scale={arrowScale} />
      </div>
      <div className="row-start-1 col-start-5 row-end-5 col-end-7  bg-[#B6B6B6]  p-2 hover:scale-[.98] transition-all">
        <ArrowWrapper>
          <Experience handleCursorChange={handleCursorChange} />
        </ArrowWrapper>
      </div>
      <div className="row-start-3 col-start-3 row-end-5 col-end-5">
        <Skills
          handleColor={handleClick}
          handleCursorChange={handleCursorChange}
        />
      </div>
      <div className="row-start-3 col-start-1 row-end-5 col-end-3 ">
        <Projects
          handleColor={() => {}}
          handleCursorChange={handleCursorChange}
        />
      </div>
      <Cursor
        cursorVarient={cursorVarient.cursorVarient}
        innerComp={cursorVarient.innerComp}
      />
    </div>
  );
}

export default App;
