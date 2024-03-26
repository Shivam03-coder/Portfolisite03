import React, { useState } from "react";
import DarkLogo from "../assets/img/logo/dark.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import SmoothLinks from "./Navbar-components/SmoothLinks";
import { useDispatch, useSelector } from "react-redux";
import Audio1 from "../assets/audio/1.mp3";
import Audio2 from "../assets/audio/2.mp3";
import { AudioPlayer } from "../ReduxStore/Slices/AudioSlice";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const disptch = useDispatch();
  const { colorValue } = useSelector((state) => state.Color);
  const { IsPlaying } = useSelector((state) => state.Audio);
  const HandleOnClick = () => {
    disptch(AudioPlayer());
    setOpen(!open);
  };

  return (
    <section className="shadow-md w-full fixed top-0 left-0 z-[200] bg-slate-300">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
          <img className="cursor-pointer" src={DarkLogo} alt="Logo" />
        </Link>
        <div
          onClick={HandleOnClick}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {IsPlaying ? <RxCross2 /> : <GiHamburgerMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
          style={{ color: `${colorValue}` }}
        >
          <SmoothLinks Opacity={IsPlaying} />
          <button
            onClick={HandleOnClick}
            className="hidden md:block md:ml-8 text-3xl font-semibold px-3 py-1 rounded duration-500 md:static bg-black text-white"
          >
            {IsPlaying ? <RxCross2 /> : <GiHamburgerMenu />}
            {IsPlaying ? (
              <audio src={Audio2} autoPlay />
            ) : (
              <audio src={Audio1} autoPlay />
            )}
          </button>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
