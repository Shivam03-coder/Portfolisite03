import React from "react";
import { useSelector } from "react-redux";

function ProgressSection() {
  const { colorValue } = useSelector((state) => state.Color);
  const { skills } = useSelector(({ FetchData }) => FetchData.DataValue);
  return (
    <section className="Progress grid md:grid-cols-2 gap-7  text-xl place-items-center">
      {skills.map((items) => (
        <div className="skills w-[80%] space-y-4 font-semibold">
          <div className="ProgressText w-[100%] flex justify-between uppercase">
            <h1>{items.name}</h1>
            <h1>{items.percentage}%</h1>
          </div>
          <div className="h-2 w-[100%] bg-gray-500 rounded-full">
            <div
              className={`h-full rounded bg-black `}
              style={{
                background: `${colorValue}`,
                width: `${items.percentage}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProgressSection;
