import React from "react";
import AnimatedCursor from "react-animated-cursor";

function Cursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      color="193, 11, 111"
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "orange",
      }}
      outerStyle={{
        border: "1px solid orange",
        boxShadow: "orange 0px 22px 70px 4px;",
      }}
    />
  );
}

export default Cursor;
