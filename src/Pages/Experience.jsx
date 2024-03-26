import React from "react";

import TimeLine from "../components/ExperiencePage-components/TimeLine";

function Experience() {
  return (
    <section className="Experience grid" id="experience">
      <div className="Titlesection">
        <h1 className="text-2xl my-3 font-Karla font-bold underline">Working TimeLine</h1>
        <p className="text-lg font-semibold opacity-60">
          Check out my Experience as a softwear developer 
        </p>
      </div>
      <section className="NewsSection  py-10">
        <TimeLine />
      </section>
    </section>
  );
}

export default Experience;
