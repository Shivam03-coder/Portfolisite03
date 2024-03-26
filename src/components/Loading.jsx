import React from "react";
import { BallTriangle } from "react-loader-spinner";
function Loading() {
  return (
    <div className="absolute w-[100%] h-[100vh] top-0 left-0 bg-black Center ">
      <BallTriangle
        height={200}
        width={200}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loading;
