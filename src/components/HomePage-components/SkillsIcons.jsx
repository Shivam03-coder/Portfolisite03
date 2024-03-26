import React from "react";
import { useSelector } from "react-redux";

function SkillsIcons() {
  const { skills } = useSelector(({ FetchData }) => FetchData.DataValue);

  return (
    <section className="Skill w-full grid md:grid-cols-2 gap-4 ">
      <span className=" text-3xl font-semibold max-md:text-center">
        High knowledge on <br /> softwares .
      </span>
      <section className="p-5 grid grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-5 place-content-center rounded-full">
        {skills.map((items, index) => (
          <span key={index} className="p-4 Center rounded-full shadow-Rx">
            <img
              className="size-14 md:size-9 "
              src={items.image.url}
              alt="Html"
            />
          </span>
        ))}
      </section>
    </section>
  );
}

export default SkillsIcons;
