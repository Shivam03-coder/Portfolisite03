import React from "react";
import { FaHandPointer } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ColorChangerActions } from "../../ReduxStore/Slices/ColorChanger";
import {
  CursorChangerAction,
  MagicCursorAction,
} from "../../ReduxStore/Slices/CursorChanger";

function ColorsButtons({ HEXCOLORS }) {
  const dispatch = useDispatch();
  const HandleOnclick = (colors) => {
    dispatch(ColorChangerActions.ColorChanger(colors));
  };
  const HandleOnChangeCursor = () => {
    dispatch(CursorChangerAction());
  };
  const HandleMagicCursor = () => {
    dispatch(MagicCursorAction());
  };

  return (
    <section className="ButtonBox h-full p-3">
      <section className="Buttons grid grid-cols-3 place-items-center h-[70%]">
        {HEXCOLORS.map((colors, index) => (
          <button
            onClick={() => HandleOnclick(colors)}
            key={index}
            style={{ backgroundColor: `${colors}` }}
            className="size-[30px] rounded-full "
          ></button>
        ))}
      </section>
      <hr className="my-1" />
      <span className="grid grid-cols-2 py-3 place-items-center">
        <button className="size-[30px] rounded-full ">
          <FaHandPointer
            onClick={HandleOnChangeCursor}
            className="text-3xl text-[#ffffff]"
          />
        </button>
        <button className="size-[30px] rounded-full">
          <FaRegDotCircle
            onClick={HandleMagicCursor}
            className="text-3xl text-orange"
          />
        </button>
      </span>
    </section>
  );
}

export default ColorsButtons;
