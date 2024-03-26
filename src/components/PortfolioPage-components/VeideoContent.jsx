import React from "react";
import "../../styles/VideoContent.css";
import Video from "../../assets/video/1.mp4";
import { AiTwotonePlayCircle } from "react-icons/ai";

function VideoContent() {
  return (
    <section className="VideoSection">
      <div className="OverlayContent z-20 gap-y-16 Center h-full">
        <button className="VideoPlayButton text-5xl md:text-7xl">
          <AiTwotonePlayCircle />
        </button>
        <h1 className="text-4xl md:text-5xl text-center font-bold px-3">
          I am delivering beautiful digital <br /> products for my clients
        </h1>
        <button
          onClick={() => document.getElementById("VideoModel").showModal()}
          className="outline text-2xl  font-semibold"
        >
          Watch Video
        </button>
        <dialog id="VideoModel" className="modal w-[100%] h-full">
          <div className="modal-box w-[100%] bg-transparent">
            <form method="dialog">
              <button className="btn Border1 btn-sm btn-circle btn-ghost absolute right-2 top-1">
                ✕
              </button>
            </form>
            <video className="size-full mt-5" controls>
              <source className="w-[80%]" src={Video} type="video/mp4" />
            </video>
          </div>
        </dialog>
      </div>
    </section>
  );
}

export default VideoContent;
