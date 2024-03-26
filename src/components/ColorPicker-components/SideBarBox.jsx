import React from "react";
import { IoMdSettings } from "react-icons/io";

function SideBarBox() {
  return (
    <section className="SideBarBox bg-black p-2 text-5xl">
      <IoMdSettings className="text-white animate-spin" />
    </section>
  );
}

export default SideBarBox;
