import React from "react";
import ProjectPage from "../components/PortfolioPage-components/ProjectPage";
import VeideoContent from "../components/PortfolioPage-components/VeideoContent";
import MarqueePage from "../components/PortfolioPage-components/Marquee";
import ReviewSection from "../components/PortfolioPage-components/ReviewSection";

function Portfolio() {
  return (
    <section className="PortFolio-Page grid" id="portfolio">
      <section className="Titlesection">
        <h1 className="underline">PORTFOLIO</h1>
        <h2>
          Each project is a unique piece of <br /> development
        </h2>
      </section>
      <section className="ProjetcPage pb-16">
        <ProjectPage />
      </section>
      <section className="VeideoContent py-16">
        <VeideoContent />
      </section>
      <section className="MarqueePage hidden lg:block py-16">
        <MarqueePage />
      </section>
      <section className="ReviewSection py-16">
        <ReviewSection />
      </section>
    </section>
  );
}

export default Portfolio;
