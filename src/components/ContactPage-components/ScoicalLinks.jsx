import React from "react";
import { useSelector } from "react-redux";

function ScoicalLinks() {
  const { colorValue } = useSelector((state) => state.Color);
  const { social_handles } = useSelector(
    ({ FetchData }) => FetchData.DataValue
  );
  
  return (
    <footer
      className="footer p-10 bg-neutral grid md:grid-cols-2 text-neutral-content"
      style={{ backgroundColor: `${colorValue}` }}
    >
      <aside className="mx-auto flex md:p-8">
        <b className="text-lg font-Farro text-center">
          Copyright © 2021. All rights are reserved
        </b>
      </aside>
      <section className=" mx-auto space-x-5 flex text-xl  p-6">
        {social_handles.map((items) => (
          <span key={items._id}>
            <a href={items.url} className="href">
              <img className="size-10" src={items.image.url} alt="" />
            </a>
          </span>
        ))}
      </section>
    </footer>
  );
}

export default ScoicalLinks;
