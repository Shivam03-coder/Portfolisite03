import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import EmailSection from "../components/ContactPage-components/EmailSection";
import MapSection from "../components/ContactPage-components/MapSection";
import ScoicalLinks from "../components/ContactPage-components/ScoicalLinks";
import { useSelector } from "react-redux";

function Contact() {
  const { colorValue } = useSelector((state) => state.Color);
  const { email , about } = useSelector(({ FetchData }) => FetchData.DataValue);

  return (
    <section className="Contact-Page my-6" id="contacts">
      <div className=" px-8 md:px-28 py-8">
        <h1 className="text-2xl my-3 font-Karla font-bold underline">
          CONTACTS
        </h1>
        <p className="text-lg hidden md:block font-semibold opacity-60">
          Feel free to contact me if any <br />
          assistance is needed in the future
        </p>
      </div>

      <section
        className="ContactsInfo py-7 w-11/12 grid md:grid-cols-3 gap-10 md:gap-4 mx-auto font-Karla text-center text-base"
        style={{ color: `${colorValue}` }}
      >
        <div className="Location ItemsCenter ">
          <span className="RoundedShadow">
            <IoLocationOutline className="text-2xl" />
          </span>
          <span>
            <h3 className=" font-medium">Location</h3>
            <p className="font-medium opacity-50">{about.address}</p>
          </span>
        </div>
        <div className="Phone ItemsCenter">
          <span className="RoundedShadow">
            <LuPhoneCall className="text-2xl" />
          </span>
          <span>
            <h3 className=" font-medium">Phone Number</h3>
            <p className="font-medium opacity-50">{about.phoneNumber}</p>
          </span>
        </div>
        <div className="Mail ItemsCenter">
          <span className="RoundedShadow">
            <MdMailOutline className="text-2xl" />
          </span>
          <span>
            <h3 className=" font-medium">E-Mail</h3>
            <p className="font-medium opacity-50">{email}</p>
          </span>
        </div>
        <div className="grid col-span-full md:grid-cols-2 gap-16 md:gap-3 my-8 bg-base-100 py-9">
          <div className="MessageForm">
            <EmailSection />
          </div>
          <div className="MapServices">
            <MapSection />
          </div>
        </div>
      </section>
      <div className="col-span-full">
        <ScoicalLinks />
      </div>
    </section>
  );
}

export default Contact;
