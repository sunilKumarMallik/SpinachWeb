import React from "react";
import GreenZigzag from "./GreenZigzag";
import RegularZigzag from "./RegularZigzag";
import SmallZigzag from "./smallZigzag";
import "./Zigzag.css";

function Zigzagbg({
  width = "444",
  height = "182",
  large = false,
  color = "green",
}) {
  return (
    <>
      {large ? (
        <>
          {color == "green" ? (
            <GreenZigzag />
          ) : (
            <RegularZigzag
              height={height}
              width={width}

              color={color}
            ></RegularZigzag>
          )}
        </>
      ) : (
        <SmallZigzag
          height={height}
          width={width}
        
          color={color}
        ></SmallZigzag>
      )}
    </>
  );
}

export default Zigzagbg;
