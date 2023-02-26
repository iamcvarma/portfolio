import React from "react";
import Arrow from "./Arrow";

const FancyArrow = ({color,scale}) => {
  console.log(color)
  return (
    <div className="h-full w-full grid grid-rows-3 grid-cols-3">
      <Arrow dur = {200} color={color} scale={scale}/>
      <Arrow dur = {100} color={color} scale={scale}/>
      <Arrow dur = {200} color={color} scale={scale}/>
      <Arrow dur = {100} color={color} scale={scale}/>
      <Arrow dur = {0} color={color} scale={scale}/>
      <Arrow dur = {100} color={color} scale={scale}/>
      <Arrow dur = {200} color={color} scale={scale}/>
      <Arrow dur = {100} color={color} scale={scale}/>
      <Arrow dur = {200} color={color} scale={scale}/>
    </div>
  );
};

export default FancyArrow;
