import React from "react";
import "./Banner.css";
import Fade from "react-reveal/Fade";
import { Rotate, Zoom } from "react-reveal";

const Banner = () => {
  return (
    <section className="">
      <div className="mx-auto flex flex-col justify-center items-center px-2 sm:px-6 lg:px-44 bg-[#1F1F52] banner md:py-20">
        <Fade bottom cascade>
          <div className="text-center">
            <h3 className="text-md md:text-xl mb-6 font-[500] text-[#eee] uppercase">
              We are not just Friend, We are Family
            </h3>
            <h1 className="text-3xl md:text-6xl mb-4 font-[600] text-[#eee] capitalize">
              Don’t Miss <br /> Awesome Story From Our <br />
              <Zoom right cascade>
                <span className="text-[#da330e]">CSE DIU Alumni</span>{" "}
              </Zoom>
            </h1>
            <p className="text-sm font-[500] text-[#bbbbbb] capitalize">
              Lorem ipsum dolor sit amet.
            </p>

            <button
              type="button"
              class="text-white mt-8 bg-[#da330e] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center uppercase"
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
        </Fade>
      </div>
    </section>
  );
};

export default Banner;
