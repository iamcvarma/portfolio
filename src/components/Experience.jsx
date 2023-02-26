import React from "react";
import ExperienceCard from "./ExperienceCard";
import amazonLogo from '/src/assets/icons/amazon.svg'
import microsoftLogo from '/src/assets/icons/microsoft.svg'

const exp = [
  {
    company: "Amazon, Contract",
    logo:amazonLogo,
    position: "Search Relevance Data Engineer",
    fromDate: "October 2021",
    toDate: "Present",
    location: "Remote",
    points: [
      "Contributed to Amazon's Product Recommendations Engine, that drives 35% of customer purchases.",
      "Improved Amazon's search results by Fine-tuning context-based search, resulting in a 12.9% conversion rate compared to competitor's 2-3%.",
      "Transformed user data to train ML models, reducing bounce rates by 35%.",
      "Contributed to ML models that enhanced Amazon's targeted ads, resulting in a 20% increase in click-through rates.",
    ],
  },
  {
    company: "Microsoft, Contract",
    logo:microsoftLogo,
    position: "Search Data Analyst",
    fromDate: " November 2020",
    toDate: "October 2021",
    location: "Remote",
    points: [
      "Helped train Bing Maps' Turing Image Super Resolution, used by millions of global users to upscale aerial imagery",
      "Fine-tuned Bing Image Search's Image Aesthetic ML model, boosting click-through rate by 36%.",
      "Trained ML models for Nordstrom's fashion ads, increasing click-through rate by 5.9% through improved ad ranking based on CTR",
      "Refined data for Next Phrase Prediction feature, generating full phrase suggestions in under 10 ms.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col justify-around p-2">
      {exp.map((expObj) => (
        <ExperienceCard
          {...expObj}
        />
      ))}
    </div>
  );
};

export default Experience;
