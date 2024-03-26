import React from "react";
import { Link } from "react-scroll";

function SmoothLinks({ Opacity }) {
  return (
    <>
      <li className={`NavLinks ${Opacity ? "opacity-100" : "opacity-0"}`}>
        <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
          HOME
        </Link>
      </li>
      <li className={`NavLinks ${Opacity ? "opacity-100" : "opacity-0"}`}>
        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
          ABOUT
        </Link>
      </li>
      <li className={`NavLinks ${Opacity ? "opacity-100" : "opacity-0"}`}>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          PROJECTS
        </Link>
      </li>
      <li className={`NavLinks ${Opacity ? "opacity-100" : "opacity-0"}`}>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          EXPERIENCE
        </Link>
      </li>
      <li className={`NavLinks ${Opacity ? "opacity-100" : "opacity-0"}`}>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          SERVICES
        </Link>
      </li>
      <li className={`NavLinks ${Opacity ? "opacity-100" : "opacity-0"}`}>
        <Link
          to="contacts"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          CONTACTS
        </Link>
      </li>
    </>
  );
}

export default SmoothLinks;
