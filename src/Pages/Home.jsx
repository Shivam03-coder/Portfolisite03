import React from "react";
import "../styles/Home.css";
import Video from "../assets/video/1.mp4";
import SkillsIcons from "../components/HomePage-components/SkillsIcons";
import { useSelector } from "react-redux";

function Home() {
  const { colorValue } = useSelector((state) => state.Color);
  const { about } = useSelector(({ FetchData }) => FetchData.DataValue);
  return (
    <section
      className="HomePage w-[80%] mx-auto grid md:grid-cols-2 gap-12 py-[8%] "
      id="home"
      style={{ color: `${colorValue}` }}
    >
      <section className="VideoText relative">
        <video
          className="Video max-sm:size-full size-[90%]"
          muted
          loop
          autoPlay
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="Text bg-Creamy font-extrabold text-4xl md:text-6xl max-sm:size-full size-[90%] Center uppercase">
          {about.title}
        </h1>
        <h2 className="IntroText text-xl px-2 max-sm:w-full max-sm:text-center">
          Hi, I'm {about.name}
          <span className="hidden md:block">{about.subTitle}</span>
        </h2>
      </section>
      <section className="ProfilePic">
        <img
          src={about.avatar.url}
          className="ProfileImage size-80 mx-auto "
          alt={about.avatar.alternateAvatars}
          style={{
            borderColor: `${colorValue}`,
          }}
        />
      </section>
      <section className="SkillsIconsPage col-span-full py-9">
        <SkillsIcons />
      </section>
    </section>
  );
}

export default Home;
