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
const defaultScale = "14px";
function App() {
  const [arrowColor, setArrowColor] = useState(defaultColor);
  const [arrowScale, setArrowScale] = useState(defaultScale);
  const [idle,setIdle] = useState(true)
  const [cursorVarient, setCursorVarient] = useState({
    cursorVarient: "default",
    innerComp: "",
  });
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setArrowColor(defaultColor);
      setArrowScale(defaultScale);
      setIdle(true)
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [arrowColor, arrowScale]);
  const handleClick = (color) => {
    if (!idle) return
    setIdle(false)
    setArrowColor(color);
    setArrowScale("11px")
  };
  const handleCursorChange = (varient, comp) =>{
    setCursorVarient({ cursorVarient: varient, innerComp:comp });
  }
  return (
    <div className="w-full h-full grid grid-rows-4 grid-cols-6 gap-4">
      <div className="row-start-1 row-end-3 col-start-1 col-end-3 p-2  blur-container ">
        <ArrowWrapper>
          <About handleCursorChange={handleCursorChange}/>
        </ArrowWrapper>
      </div>
      <div className="absolute -z-10 w-full h-full ">
        <FancyArrow color={arrowColor} scale={defaultScale} />
      </div>
      <div className="row-start-1 col-start-5 row-end-5 col-end-7  blur-container   p-2l">
        <ArrowWrapper>
          <Experience handleCursorChange={handleCursorChange} />
        </ArrowWrapper>
      </div>
      <div className="row-start-1 col-start-3 row-end-3 col-end-5 blur-container">
        <ArrowWrapper>
        <Skills
          handleColor={handleClick}
          handleCursorChange={handleCursorChange}
        />
        </ArrowWrapper>
      </div>
      <div className="row-start-3 col-start-1 row-end-5 col-end-5">
        <Projects
          handleColor={handleClick}
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
