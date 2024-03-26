import React from "react";
import ProgressSection from "../components/ServicesPage-components/ProgressSection";
import ServicesCards from "../components/ServicesPage-components/ServicesCards";
import { useSelector } from "react-redux";

function Services() {
  const { colorValue } = useSelector((state) => state.Color);
  return (
    <section
      className="Service-Page w-[90%] mx-auto  place-items-center"
      id="services"
    >
      <div className="Skills p-5">
        <section className="Titlesection">
          <h1 className="underline">SERVICES</h1>
          <h2 className="font-bold text-3xl py-4">
            I offer a Full-cycle of Web <br /> Development Services
          </h2>
        </section>
        <section className="ProgressSection">
          <ProgressSection />
        </section>
      </div>
      <div className="SrviceCards" style={{ color: `${colorValue}` }}>
        <ServicesCards />
      </div>
    </section>
  );
}

export default Services;
