import React from "react";
import "../../styles/ColorPicker.css";
import SideBarBox from "./SideBarBox";
import ColorsButtons from "./ColorsButtons";

function ColorPicker() {
  let HEXCOLORS = [
    "#ff0000",
    "#FA7070",
    "#0000ff",
    "#00224D",
    "#ff00ff",
    "#49108B",
    "#800080",
    "#008000",
    "#000080",
  ];
  return (
    <section className="ColorPicker drawer z-50 drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ColorPicker">
        <label htmlFor="my-drawer-4" className="fixed">
          <SideBarBox />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="my-auto w-60 h-48 bg-black">
          <ColorsButtons HEXCOLORS={HEXCOLORS} />
        </ul>
      </div>
    </section>
  );
}

export default ColorPicker;
