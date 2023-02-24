import FancyArrow from "./components/FancyArrow";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useState } from "react";
const defaultColor = "#b2b8c9"
function App() {
  const [arrowColor,setArrowColor] = useState(defaultColor)
  const handleClick = (color)=>{
    setArrowColor(color)
    setTimeout(()=>setArrowColor(defaultColor),300)
  }
  return (
    <div className="w-full h-full grid grid-rows-4 grid-cols-6 gap-4">
      <div className="row-start-1 row-end-3 col-start-1 col-end-3 neo hover-shrink"></div>
      <div className="row-start-1 row-end-3 col-start-3 col-end-5">
        <FancyArrow color={arrowColor}/>
      </div>
      <div className="row-start-1 col-start-5 row-end-5 col-end-7 neo hover-shrink"></div>
      <div className="row-start-3 col-start-3 row-end-5 col-end-5">
        <Skills handleColor = {handleClick}/>
      </div>
      <div className="row-start-3 col-start-1 row-end-5 col-end-3 ">
        <Projects />
      </div>
    </div>
  );
}

export default App;
