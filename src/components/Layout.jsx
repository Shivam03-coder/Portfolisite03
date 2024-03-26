import React, { useEffect } from "react";
import Contact from "../Pages/Contact";
import Portfolio from "../Pages/Portfolio";
import Services from "../Pages/Services";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Experience from "../Pages/Experience";

function Layout() {
  return (
    <section className="Pages">
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Services />
      <Contact />
    </section>
  );
}

export default Layout;
