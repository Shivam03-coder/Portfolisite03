import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import Spinner from "../components/AboutPage-components/Spinner";
import { useSelector } from "react-redux";

function About() {
  const { colorValue } = useSelector((state) => state.Color);
  const { about } = useSelector(({ FetchData }) => FetchData.DataValue);

  return (
    <section
      className="AbouPage PageLayout"
      id="about"
      style={{ color: `${colorValue}` }}
    >
      <section className="Image my-auto max-md:order-2">
        <div className="Image relative">
          <img
            className="size-10/12 rounded-xl mx-auto"
            src={about.avatar.url}
            alt="Image"
          />
        </div>
        <Spinner about={about} />
      </section>
      <section className="Inroduction max-md:order-1">
        <section className="p-6 text-xl font-bold">
          <h1>ABOUT ME</h1>
          <h2 className="text-2xl">
            A passionate Senior {about.title} based In {about.address}
          </h2>
        </section>
        <p className="w-[90%] p-6 text-xl">{about.description}</p>
        <section className="p-6 space-y-5">
          <span className="ItemsVerticalCenter gap-5 text-xl font-semibold">
            <p className="text-3xl font-semibold">{about.quote}</p>
          </span>
          <span className="ItemsVerticalCenter gap-5 text-xl font-semibold">
            <MdAddIcCall className="text-4xl" />: {about.phoneNumber}
          </span>
          <span className="ItemsVerticalCenter gap-5 text-xl font-semibold">
            <IoMdMail className="text-4xl" />: {about.contactEmail}
          </span>
        </section>
      </section>
    </section>
  );
}

export default About;
