import React from "react";
import "../../styles/ProjectPage.css";
import PopUpContent from "./PopUpContent";
import { useSelector } from "react-redux";

function ProjectPage() {
  const { projects } = useSelector(({ FetchData }) => FetchData.DataValue);

  return (
    <section className="Projects grid md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-14">
      {projects.map((items) => (
        <div
          key={items._id}
          className="ProjectCards h-80 w-96 mx-auto ItemsHorizontalCenter cursor-pointer"
        >
          <a href={items.githuburl} className="href">
            <img
              onClick={() => document.getElementById("PopUpBox").showModal()}
              src={items.image.url}
              className="Image h-80 w-96 absolute rounded-xl"
              alt=""
            />
          </a>
          <div className="AnimationBox h-80 w-96 -z-10"> </div>
          <div className="Content absolute mt-[40%] md:mt-[12%]">
            <h3>{items.title}</h3>
          </div>
          <dialog id="PopUpBox" className="modal">
            <form method="dialog">
              <div className="rounded-box ModalBoxButtonsTop md:ItemsHorizontalCenter ">
                <PopUpContent key={items._id} items={items} />
                <button className="btn btn-sm btn-circle text-xl  btn-ghost  relative right-5">
                  ✕
                </button>
              </div>
            </form>
          </dialog>
        </div>
      ))}
    </section>
  );
}

export default ProjectPage;
