import React from "react";

import "./customerProfileBelowsection.css";
import Rectangle2093 from "../../../../assets/images/Rectangle2093.svg";
import Rectangle2094 from "../../../../assets/images/Rectangle2094.svg";
import Rectangle2095 from "../../../../assets/images/Rectangle2095.svg";
import biCaretDownFill from "../../../../assets/images/biCaretDownFill.svg";

import ProgressGraph from "./ProgressGraph";

import PieDoughnutChart from "../../components/doughnutChart/PieDoughnutChart";
import { Doughnut } from "react-chartjs-2";


function CustomerProfileBelowsection() {
  const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: "# of Votes",
        data: [15, 54, 31],
        rotation: "135",
        cutout: 40,
        backgroundColor: [
          "rgba(0, 0, 0)",//black
          "rgb(154,235,235)",//sky
          "rgb(228,229,145)", //brown
        ],
      },
    ],
  };
  return (
    <div className="row">
      <div className="col-6">
        <div style={{zIndex:-8}}>
          <ProgressGraph />
        </div>
      </div>
      <div className="col-6">
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "4.43045px",
            // width: "370px",
            height: "232.46px",
            border: "1px solid #E8E8E8",
          }}
        >
          <div className="campaign-Dashboard text-start">
            Campaign Dashboard
          </div>
          <div className="row mt-2">
            <div className="d-flex gap-2">
              <div
                style={{
                  width: "70.26px",
                  height: "15.91px",
                  background: "#EEF0F4",
                  borderRadius: "1.76757px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Roundo",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "7.07028px",
                    textAlign: "center",
                    color: " #000000",
                    position: "relative",
                    top: "-8px",
                  }}
                >
                  05/11/2022
                </span>
              </div>
              <div
                style={{
                  fontFamily: "Roundo",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "7.07028px",
                  textAlign: "center",
                  color: " #000000",
                  position: "relative",
                  top: " 3px",
                }}
              >
                to
              </div>
              <div
                style={{
                  width: "70.26px",
                  height: "15.91px",
                  background: "#EEF0F4",
                  borderRadius: "1.76757px",
                }}
              >
                {" "}
                <span
                  style={{
                    fontFamily: "Roundo",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "7.07028px",
                    textAlign: "center",
                    color: " #000000",
                    position: "relative",
                    top: "-8px",
                  }}
                >
                  15/01/2022
                </span>
              </div>
              <div
                className="d-flex dropdown position-relative"
                style={{
                  width: "159.96px",
                  height: "15.91px",
                  background: "#EEF0F4",
                  borderRadius: "1.76757px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Roundo",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "7.07028px",
                    textAlign: "center",
                    color: " #000000",
                    position: "absolute",
                    top: " 3px",
                    left: "7px",
                  }}
                >
                  All
                </div>
                <div
                  className=""
                  style={{ position: "absolute", right: "2px", top: "-8px" }}
                >
                  <img src={biCaretDownFill} />
                </div>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-6">
                {/* <h4></h4> */}
                <Doughnut data={data}/>
                <div className="col-12 d-flex gap-2 justify-content-center mt-4">
                  <div className="Reached">
                    Reached
                    <div>
                      <img src={Rectangle2093} style={{ width: "29px" }} />
                    </div>
                  </div>
                  <div className="Reached">
                    Clicked
                    <div>
                      <img src={Rectangle2094} style={{ width: "29px" }} />
                    </div>
                  </div>
                  <div className="Reached">
                    Served
                    <div>
                      <img src={Rectangle2095} style={{ width: "29px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <div>
                  <div className="row mt-2 count ">
                    <div
                      className="position-relative "
                      style={{
                        backgroundColor: "#F7F9FE",
                        borderRadius: "11.6501px",
                        height:"50px"
                      }}
                    >
                      <div className="text-nowrap campaign-clicked-counts">
                        <div className="text-start">18,241</div>
                        <div className="text-start">
                          Campaign Clicked Counts
                        </div>
                      </div>
                      <span
                        className="position-absolute translate-middle "
                        style={{
                          left: "130px",
                          top: "12px",
                          backgroundColor: "#6FE3E3",
                        }}
                      >
                        <span style={{ visibility: "hidden" }}>99+</span>
                      </span>
                    </div>
                  </div>
                  <div className="row mt-1 count">
                    <div
                      className="position-relative"
                      style={{
                        backgroundColor: "#F7F9FE",
                        borderRadius: "11.6501px",
                        height:"50px"
                      }}
                    >
                      <div className="text-nowrap campaign-clicked-counts">
                        <div className="text-start">7,613</div>
                        <div className="text-start">
                          Campaign Reached Counts
                        </div>
                      </div>
                      <span
                        className="position-absolute translate-middle"
                        style={{
                          left: "130px",
                          top: "12px",
                          backgroundColor: "#2A2E43",
                        }}
                      >
                        <span style={{ visibility: "hidden" }}>99+</span>
                      </span>
                    </div>
                  </div>
                  <div className="row mt-1 count">
                    <div
                      className="position-relative"
                      style={{
                        backgroundColor: "#F7F9FE",
                        borderRadius: "11.6501px",
                        height:"50px"
                      }}
                    >
                      <div className="text-nowrap campaign-clicked-counts">
                        <div className="text-start">13,478</div>
                        <div>Campaign Served Counts</div>
                      </div>
                      <span
                        className="position-absolute  translate-middle"
                        style={{
                          left: "130px",
                          top: "12px",
                          backgroundColor: "#E4E591",
                        }}
                      >
                        <span style={{ visibility: "hidden" }}>99+</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfileBelowsection;
