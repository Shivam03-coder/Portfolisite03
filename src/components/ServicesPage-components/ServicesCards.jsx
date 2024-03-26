import React from "react";
import { VscTools } from "react-icons/vsc";
import { GiExpense } from "react-icons/gi";
import { LuSquareDashedBottomCode } from "react-icons/lu";
import { LiaAwardSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
function ServicesCards() {
  const { services } = useSelector(({ FetchData }) => FetchData.DataValue);

  return (
    <section className="CardsSection grid lg:grid-cols-2 place-items-center gap-12 py-20">
      {services.map((items) => (
        <div
          className="grid md:grid-cols-2 place-items-center bg-base-100 max-sm:pt-5 shadow-Rx rounded-2xl"
          key={items._id}
        >
          <img className="size-64" src={items.image.url} alt="Shoes" />
          <div className="card-body mx-auto space-y-3">
            <h2 className="card-title text-2xl font-bold underline">
              {items.name}
            </h2>
            <p className="font-Poppins">{items.desc}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-2xl">
                {items.charge}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ServicesCards;
