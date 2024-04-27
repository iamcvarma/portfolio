import amazonLogo from "/src/assets/icons/amazon.svg";
import microsoftLogo from "/src/assets/icons/microsoft.svg";
import PreciselyLogo from "/src/assets/icons/Precisely.svg";

const Experience = ({ handleCursorChange }) => {
  return (
    <div className=" text-gray-400 flex flex-col justify-around p-2">
      <div className="relative p-4">
        <div className="absolute w-2 h-2 p-7 -top-1 -left-1"
          onMouseEnter={() =>
            handleCursorChange(
              "blurLogoXl",
              <img src={PreciselyLogo} width={35} height={35} />
            )
          }
          onMouseLeave={() => handleCursorChange("default")}>

        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <img

              src={PreciselyLogo}
              alt="precisely"
              className="w-[14px] h-[20px] object-fit"
            />
            <h2 className="font-bold text-md">Precisely</h2>
            <p className="inline italic">Full Time</p>
          </div>
          <h5>May 2023 - Present</h5>
        </div>
        <div className="flex justify-between italic">
          <h3>Software Engineer</h3>
          <h5>Remote</h5>
        </div>
        <div className="text-sm">
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700 "></div>
            </div>
            <p>
              Contributed to the successful migration of a monolithic data management system to a microservices architecture,
              <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >
                {" "}drastically reducing processing time from 48 hours to 2 hours{" "}
              </span>. As the owner of 20% of the endpoints, I played a key role in achieving this 24x performance improvement, enabling faster data access and processing.
            </p>
          </div>
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700 "></div>
            </div>
            <p>
              Developed an in-memory solution to overcome a critical bottleneck in our data model, resolving cyclical dependencies. By optimizing the existing method, <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >{" "}I achieved a 15x performance boost, reducing processing time from 15 seconds to under 1 second{" "}</span>, and removed the 2 million record limit, enabling seamless data processing.
            </p>
          </div>
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700"></div>
            </div>
            <p>
            Recognized and <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >{" "}resolved critical concurrency issues, including race conditions{" "}</span>. Implemented solutions to safeguard against phantom reads and write loss, enhancing data integrity during concurrent updates. This strategic approach improved data ingestion performance, efficiently handling millions of records.
            </p>
          </div>
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700"></div>
            </div>
            <p>
            Transformed database performance through strategic indexing, <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >{" "}reducing query time from 120ms to 2ms. Identified critical bugs, reduced server memory usage by 30%{" "}</span>, and engineered innovative aggregation pipelines, improving overall performance from seconds to under 300ms.
            </p>
          </div>
          <div className="flex p-1 ml-2 ">
            <div className="flex justify-center items-start p-3">
              <div className="w-[5px] h-[5px] bg-red-700"></div>
            </div>
            <p>
            Developed a scalable solution to prevent unauthorized field updates across all microservices, ensuring data integrity and reliability. Leveraging expertise in JSONpatch and JSONschema, <span
                className="specialLink"
                onMouseEnter={() => handleCursorChange("invert")}
                onMouseLeave={() => handleCursorChange("default")}
              >{" "}I implemented efficient validation that adds only 10ms latency{" "}</span>, enabling fast and secure data processing.
            </p>
          </div>
        </div>
      </div>
      <div className="relative p-4">
        <div className="absolute w-2 h-2 p-7 -top-1 -left-1"
          onMouseEnter={() =>
            handleCursorChange(
              "blurLogoXl",
              <img src={amazonLogo} width={35} height={35} />
            )
          }
          onMouseLeave={() => handleCursorChange("default")}>

        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <img
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
      <div className="relative p-4">
        <div className="absolute w-2 h-2 p-7 -top-1 -left-1"
          onMouseEnter={() =>
            handleCursorChange(
              "blurLogoXl",
              <img src={microsoftLogo} width={35} height={35} />
            )
          }
          onMouseLeave={() => handleCursorChange("default")}>

        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <img
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
