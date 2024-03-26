import React from "react";
import { useSelector } from "react-redux";
function TimeLine() {
  const { colorValue } = useSelector((state) => state.Color);
  const { timeline } = useSelector(({ FetchData }) => FetchData.DataValue);
  return (
    <section
      className="NeTimeLines grid place-self-center cols w-[90%] mx-auto gap-14"
      style={{ color: `${colorValue}` }}
    >
      <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative">
        <div class="border-l-2 mt-10 ">
          {timeline.map((items) => (
            <div
              key={items._id}
              class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#141c38] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0"
              style={{
                background: `${colorValue}`,
              }}
            >
              <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
              <div class="flex-auto font-Poppins space-y-4">
                <h1 class="text-lg">
                  {items.startDate} to {items.endDate}
                </h1>
                <h1 class="text-xl hidden md:block font-medium">
                  {items.summary}
                </h1>
                <h3 className="text-2xl underline">{items.company_name}</h3>
                <h3>{items.jobTitle}</h3>
                <h3>{items.jobLocation}</h3>
                <ul className="hidden md:block">
                  {items.bulletPoints.map((items, index) => (
                    <li
                      key={index}
                      className="list-disc text-xl font-Poppins mx-3 font-light"
                    >
                      {items}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimeLine;
