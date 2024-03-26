import React from "react";
import Marquee from "react-fast-marquee";

function MarqueePage() {
  return (
    <Marquee
      className="text-[100px] font-extrabold text-Creamy font-Karla py-5"
      speed={100}
    >
      <span className="m-10">Testimonial</span>
    </Marquee>
  );
}

export default MarqueePage;
