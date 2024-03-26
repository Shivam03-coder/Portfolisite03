import React from "react";

function PopUpContent({ items }) {
  const TechItems = items.techStack;
  return (
    <>
      <div className="w-64 md:w-[400px] carousel rounded-box h-auto">
        <div className="carousel-item grid  w-full bg-slate-600 text-white text-xl font-Poppins">
          <p className="mx-auto p-3 bg">{items.description}</p>
          <span className="p-6">
            <h1 className="text-center my-4">Tech Used</h1>
            <section className="grid grid-cols-2 place-content-center gap-5">
              {TechItems.map((text, index) => (
                <button key={index} className="btn join-item">
                  {text}
                </button>
              ))}
            </section>
          </span>
        </div>
      </div>
    </>
  );
}

export default PopUpContent;
