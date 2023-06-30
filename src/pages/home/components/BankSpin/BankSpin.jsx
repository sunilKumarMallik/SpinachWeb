import React from "react";
import "./BankSpin.css";

import Group11616 from "../../../../assets/images/bankss.png";
import Rectangle3986 from "../../../../assets/images/Rectangle3986.svg";
import Rectangle3987 from "../../../../assets/images/Rectangle3987.svg";
import Rectangle3988 from "../../../../assets/images/Rectangle3988.svg";
import Rectangle3989 from "../../../../assets/images/Rectangle3989.svg";
import BagImage from "../../../../assets/images/Rectangle3994.svg";
import AeroPlane from "../../../../assets/images/Rectangle3993.svg";
import TeaCup from "../../../../assets/images/Rectangle3992.svg";
import HeartDumble from "../../../../assets/images/Rectangle3991.svg";
import Group11615 from "../../../../assets/images/Group11615.svg";
import Bank2 from "../../../../assets/images/Bank2.svg";
import Bank1 from "../../../../assets/images/Bank1.svg";
function BankSpin() {
  const spinObjects = [
    {
      icon: BagImage,
    },
    {
      icon: AeroPlane,
    },
    {
      icon: TeaCup,
    },
    {
      icon: HeartDumble,
    },
    {
      icon: Bank2,
    },
    {
      icon: BagImage,
    },
    {
      icon: AeroPlane,
    },
    {
      icon: TeaCup,
    },
    {
      icon: HeartDumble,
    },
    {
      icon: Bank2,
    },
  ];
  function renderInnerCircle(initialDelay, delayDelta) {
    return (
      <div className="mainBankSpin">
        <img className="theSmiley" src={Group11616} />
        {spinObjects.reverse().map((spinObject, index) => {
          return (
            <div
              className="circleItem"
              style={{
                animationDelay: `${(initialDelay + index) * delayDelta}s`,
              }}
            >
              <img
                src={spinObject.icon}
                style={{
                  transform:
                    index == 0
                      ? "rotate(17deg)"
                      : index == 5
                      ? "rotate(17deg)"
                      : "rotate(74deg)",
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="row col-7 p-0  mx-auto">
        <div
          className="col-10 col-xs-10 mt-2 position-relative mx-auto"
          style={{ width: "100%" }}
        >
          <div className="mainBankSpin2">
            <div className="circleItem2" style={{ animationDelay: "-0.5s" }}>
              <img src={Rectangle3986} style={{ transform: "rotate(74deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-3.5s" }}>
              <img src={Rectangle3987} style={{ transform: "rotate(90deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-6.5s" }}>
              <img src={Rectangle3988} style={{ transform: "rotate(90deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-9.5s" }}>
              <img src={Rectangle3989} style={{ transform: "rotate(90deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-12.5s" }}>
              <img src={Group11615} style={{ transform: "rotate(71deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-15.5s" }}>
              <img src={Bank1} style={{ transform: "rotate(111deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-18.5s" }}>
              <img src={Rectangle3986} style={{ transform: "rotate(74deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-21.5s" }}>
              <img src={Rectangle3987} style={{ transform: "rotate(90deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-24.5s" }}>
              <img src={Rectangle3988} style={{ transform: "rotate(90deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-27.5s" }}>
              <img src={Rectangle3989} style={{ transform: "rotate(90deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-30.5s" }}>
              <img src={Group11615} style={{ transform: "rotate(71deg)" }} />
            </div>
            <div className="circleItem2" style={{ animationDelay: "-33.5s" }}>
              <img src={Bank1} style={{ transform: "rotate(111deg)" }} />
            </div>
            {renderInnerCircle(-2.0, -4.2)}
          </div>
        </div>
        <div className="hideLayOut"></div>
      </div>
    </>
  );
}

export default BankSpin;
