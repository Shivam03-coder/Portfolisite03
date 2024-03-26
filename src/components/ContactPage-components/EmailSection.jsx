import React from "react";
import "../../styles/EmailSection.css";
import { useSelector } from "react-redux";

function EmailSection() {
  const { colorValue } = useSelector((state) => state.Color);
  return (
    <form className="EmailServices space-y-9 flex flex-col">
      <label className="OutLineLbael input Border w-[80%] mx-auto flex items-center gap-2 ">
        <input
          type="text"
          className="grow text-xl font-Poppins "
          placeholder="Name"
        />
      </label>
      <label className="OutLineLbael input Border w-[80%] mx-auto  flex items-center gap-2">
        <input
          type="text"
          className="grow text-xl font-Poppins"
          placeholder="Email"
        />
      </label>
      <textarea
        className="textarea OutLineNone Border w-[80%] mx-auto text-xl font-Poppins"
        placeholder="Message..."
      ></textarea>
      <button
        type="submit"
        className="btn text-white bg-black w-28 mx-14 border-0"
        style={{ background: `${colorValue}` }}
      >
        SEND
      </button>
    </form>
  );
}

export default EmailSection;
