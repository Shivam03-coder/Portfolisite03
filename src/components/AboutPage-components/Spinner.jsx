import React from "react";
import "../../styles/Spinner.css";
import Experience from "../../assets/img/svg/Experience.svg";

function Spinner({about}) {
  return (
    <section className="relative bg-black">
      <div className="Spinner  bg-black relative">
        <div className="circular-text size-[150px] md:size-[200px] shadow-Bx animate-pulse">
          <img
            className="Image mx-auto pl-3 SpinAnimation"
            src={Experience}
            alt="Experience"
          />
          <h1 className="text-8xl absolute t-0 left-0 w-full h-full Center">
            {about.exp_year}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Spinner;
