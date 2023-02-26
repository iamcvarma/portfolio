import React from "react";

const ExperienceCard = ({
  company,
  position,
  fromDate,
  toDate,
  location,
  points,
  logo
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
        <img src={logo} alt="amazon" className="w-[20px] h-[20px] object-fit"/>
        <h2>{company}</h2>
        </div>
        <h5>
          {fromDate} - {toDate}
        </h5>
      </div>
      <div className="flex justify-between">
        <h3>{position}</h3>
        <h5>{location}</h5>
      </div>
      <div>
        {points.map((point) => (
          <div className="flex p-1 ml-2">
            <div className="flex justify-center items-start p-3">
              <div className="w-[4px] h-[4px] bg-black "></div>
            </div>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
