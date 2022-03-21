import React, { useEffect, useState } from "react";
import "./ProgramEvent.css";
const ProgramEvents = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <section className="upcoming-events">
      <div className="bg-[#1F1F52] events-c md:py-20 py-5">
        <div className="mx-auto px-2 sm:px-6 lg:px-44">
          <div className="eventContainer">
            <div className="grid grid-cols-12 gap-y-10">
              <div className=" text-white col-span-12 md:col-span-5 event-photos flex flex-col justify-center items-center ">
                <h1 className="text-3xl lg:text-4xl font-semibold ">
                  {" "}
                  {dateState.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </h1>
                <p className="text-base lg:text-xl mt-2">
                  {dateState.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
              </div>
              <div className="col-span-12 md:col-span-7  flex flex-col justify-center px-10">
                <h3 className="text-gray-100 text-xl">
                  UPCOMING EVENT{" "}
                  <span className="text-sm">AUGUST 18, 2022</span>
                </h3>
                <h1 className="text-white text-4xl font-semibold py-2">
                  WEEKEND AT SAYIDAN SIERRA CAMP
                </h1>
                <p className="text-gray-100 text-sm">
                  <span></span> 160 Market St. Mays Landing, NJ 08330
                </p>
                <button
                  type="button"
                  class="text-white mt-8 bg-[#da330e] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center uppercase justify-around md:justify-start w-fit"
                >
                  Join with Alumni Forum
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-2 sm:px-6 lg:px-44">
        <h1 className="text-[#1F1F52] rounded shadow bg-[#ffffff] py-5 pl-2 text-3xl font-bold my-5">
          Recent successfully completed Events
        </h1>
      </div>
    </section>
  );
};

export default ProgramEvents;
