import React from "react";
import Bargraph from "../BarGraph/bargraph";
import Sidebar from "../sidebar/sidebar";
import macdots from "../../../../assets/images/macdots.svg";
import CustomerProfileBelowsection from "./customerProfileBelowsection";

function CustomerProfilingColumnChart() {
  return (
    <>
      <div
        className="row rounded-top"
        style={{
          // backgroundColor: "#F8FAFE",
          // maxHeight: "36rem",
          // position: "relative",
          // width: "100%",
          // boxShadow: "38.0675px 38.0675px 57.1012px #3FA35B",
          // borderRadius: "0px 0px 5.30271px 5.30271px",
          // marginLeft: "31px",
          zIndex:-5,
          backgroundColor: "#F8FAFE",
          maxHeight: "31rem",

          position: "absolute",
          // width: "100%",
          boxShadow: "38.0675px 38.0675px 57.1012px #3FA35B",
          borderRadius: "0px 0px 5.30271px 5.30271px",
          marginLeft: "47.5px",
          width: "106%",
        }}
      >
        <div
          style={{
            background: "#CED0D6",
            width: "100%",
            borderRadius: "5.30271px 5.30271px 0px 0px",
          }}
        >
          <img className="mdots" src={macdots} />
        </div>
        <div
          className="col-2 position-relative"
          style={{
            backgroundColor: "#2A2E43",
            width: "35px",
            height: "29.5rem",
            borderRadius: "0px 0px 0px 5.30271px",
          }}
        >
          <Sidebar />
        </div>
        <div
          className="col-10 col-xs-10 mt-4 position-relative mx-auto"
          style={{ width: "92%" }}
        >
          <div className="text-start">
            <span className="Behaviour">Behavioural</span>
          </div>
          <div className="column-chart-outerLayer mx-auto">
            <div className="">
              <Bargraph />
            </div>
          </div>
          <div>
            <CustomerProfileBelowsection />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProfilingColumnChart;
