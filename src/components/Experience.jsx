import Socials from "./Socials";
import amazonLogo from "/src/assets/icons/amazon.svg";
import microsoftLogo from "/src/assets/icons/microsoft.svg";

const Experience = ({ handleCursorChange }) => {
  return (
    <div className=" text-gray-400 flex flex-col justify-around p-2">
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <img
              onMouseEnter={() =>
                handleCursorChange(
                  "blurLogoXl",
                  <img src={amazonLogo} width={35} height={35} />
                )
              }
              onMouseLeave={() => handleCursorChange("default")}
              src={amazonLogo}
              alt="amazon"
              className="w-[20px] h-[20px] object-fit"
            />
            <h2 className="font-bold text-md">Amazon</h2>
            <p className="inline italic">Contract</p>
          </div>
          <h5>Oct. 2021 - Present</h5>
        </div>
        <div className="flex justify-between italic">
          <h3>Search Relevance Data Engineer</h3>
          <h5>Remote</h5>
        </div>
        <div className="text-sm">
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700 "></div>
            </div>
            <p>
              Contributed to Amazon's Product Recommendations Engine, that
              drives{" "}
              <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >
                {" "}
                35% of customer purchases
              </span>
              .
            </p>
          </div>
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700 "></div>
            </div>
            <p>
              Improved Amazon's search results by Fine-tuning context-based
              search, resulting in a{" "}
              {/* <span className="hover-underline-animation">
                  12.9% conversion rate
                </span>{" "} */}
              <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >
                {" "}
                12.9% conversion rate{" "}
              </span>
              compared to competitor's 2-3%.
            </p>
          </div>
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700"></div>
            </div>
            <p>
              Transformed user data to train ML models,
              <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >
                {" "}
                reducing bounce rates by 35%{" "}
              </span>
              .
            </p>
          </div>
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700"></div>
            </div>
            <p>
              Contributed to ML models that enhanced Amazon's targeted ads,
              resulting in a
              <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >
                {" "}
                20% increase in click-through rates.{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <img
              onMouseEnter={() =>
                handleCursorChange(
                  "blurLogoXl",
                  <img src={microsoftLogo} width={35} height={35} />
                )
              }
              onMouseLeave={() => handleCursorChange("default")}
              src={microsoftLogo}
              alt="amazon"
              className="w-[20px] h-[20px] object-fit"
            />
            <h2 className="font-bold text-md">Microsoft</h2>
            <p className="inline italic">Contract</p>
          </div>
          <h5>Nov. 2020 - Oct. 2021</h5>
        </div>
        <div className="flex justify-between italic">
          <h3>Search Data Analyst</h3>
          <h5>Remote</h5>
        </div>
        <div className="text-sm">
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700 circle"></div>
            </div>
            <p>
              Helped train Bing Maps' Turing Image Super Resolution, used by{" "}
              {/* <span className="link-hover-cursor">
                millions of global users
              </span>{" "} */}
              <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >
                {" "}
                millions of global users{" "}
              </span>
              to upscale aerial imagery
            </p>
          </div>
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700 circle"></div>
            </div>
            <p>
              Fine-tuned Bing Image Search's Image Aesthetic ML model, boosting{" "}
              {/* <span className="hover-underline-animation">
                click-through rate by 36%
              </span> */}
              <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >
                {" "}
                click-through rate by 36%{" "}
              </span>
              .
            </p>
          </div>
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700 circle"></div>
            </div>
            <p>
              Trained ML models for Nordstrom's fashion ads, increasing
              click-through rate by{" "}
              <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >
                {" "}
                5.9% through improved ad ranking{" "}
              </span>
              based on CTR
            </p>
          </div>
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700 circle"></div>
            </div>
            <p>
              Refined data for
              <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >
                {" "}
                Next Phrase Prediction{" "}
              </span>
              feature, generating full phrase suggestions in under 10 ms.
            </p>
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default Experience;
