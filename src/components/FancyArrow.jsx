import React from "react";
import Arrow from "./Arrow";

const FancyArrow = ({color}) => {
  console.log(color)
  return (
    <div className="h-full w-full grid grid-rows-3 grid-cols-3">
      <Arrow dur = {200} color={color}/>
      <Arrow dur = {100} color={color}/>
      <Arrow dur = {200} color={color}/>
      <Arrow dur = {100} color={color}/>
      <Arrow dur = {0} color={color}/>
      <Arrow dur = {100} color={color}/>
      <Arrow dur = {200} color={color}/>
      <Arrow dur = {100} color={color}/>
      <Arrow dur = {200} color={color}/>
    </div>
  );
};

export default FancyArrow;
