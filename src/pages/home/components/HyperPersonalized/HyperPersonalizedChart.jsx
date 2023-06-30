import React from "react";
import Rectangle2093 from "../../../../assets/images/Rectangle2093.svg";
import Rectangle2094 from "../../../../assets/images/Rectangle2094.svg";
import Rectangle2095 from "../../../../assets/images/Rectangle2095.svg";
import biCaretDownFill from "../../../../assets/images/biCaretDownFill.svg";
import Rectangle2122 from "../../../../assets/images/Rectangle2122.svg";
import perBetterPerformed from "../../../../assets/images/perBetterPerformed.svg";

import { FaPen } from "react-icons/fa";
import PieDoughnutChart from "../doughnutChart/PieDoughnutChart";

function HyperPersonalizedChart() {
  return (
    <div className="row  mt-1">
      <div className="col-4">
        <div className="p-2 card-outer">
          <div className="HeaderHyperPersonalized mb-2 text-center">
            Home Loan @5.5 Interest rate
          </div>
          <div className="mt-2 fill">
            <img height={'150px'} src={Rectangle2122} />
          </div>
          <div
            className="text-center p-1"
            style={{ background: "#EEF0F4", color: "black" }}
          >
            <FaPen style={{ height: "8px" }} /> Edit
          </div>
        </div>
      </div>
      <div className="col-8">
        <div
          className="p-1"
          style={{ backgroundColor: "#FFFFFF", borderRadius: "4.43045px" }}
        >
          <div className="Competition-Merchant-outerlayer mt-1">
            <div className="d-flex">
              <div className="col-6">
                <span className="campaign-perfomance">Campaign Perfomance</span>
              </div>
              <div className="col-6">
                <div className="row mt-1">
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
                      className="dropdown text-start"
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
                          top: "2px",
                          left: "7px",
                        }}
                      >
                        All
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          right: "2px",
                          top: "-8px",
                        }}
                      >
                        <img src={biCaretDownFill} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-3 ">
              <div className="d-flex ">
                <div className="col-4  d-flex justify-content-end">
                  <div className="row mt-2 merchant-campaign">
                    <div
                      className="position-relative "
                      style={{
                        backgroundColor: "#F7F9FE",
                        borderRadius: "11.6501px",
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
                    <div
                      className="position-relative mt-2"
                      style={{
                        backgroundColor: "#F7F9FE",
                        borderRadius: "11.6501px",
                      }}
                    >
                      <div className="text-nowrap campaign-clicked-counts">
                        <div className="text-start">13,478</div>
                        <div className="text-start">
                          Campaign Served Counts
                        </div>
                      </div>
                      <span
                        className="position-absolute translate-middle "
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
                <div className="col-4">
                  <PieDoughnutChart />
                </div>
                <div className="col-4">
                  <div className="row mt-2 ">
                    <div className="position-relative merchant-campaign-7613" style={{width:"143px"}}>
                      <div className="text-nowrap campaign-clicked-counts">
                        <div className="text-start">7,613</div>
                        <div className="text-start">
                          Campaign Reached Counts
                        </div>
                      </div>
                      <span
                        className="position-absolute translate-middle "
                        style={{
                          left: "128px",
                          top: "12px",
                          backgroundColor: "#2A2E43",
                        }}
                      >
                        <span style={{ visibility: "hidden" }}>99+</span>
                      </span>
                    </div>
                    <div style={{ position: "relative", left: "-12%" }}>
                      <div className="position-relative mt-2 merchant-campaign-Served-hyperPersonalized">
                        <div className="text-nowrap campaign-clicked-counts d-flex justify-content-center">
                          <spn className="style-13478">13,478</spn>
                        </div>
                        <span
                          className="position-absolute translate-middle "
                          style={{
                            left: "44px",
                            top: "14px",
                            height: "10.19px",
                            width: "10.19px",
                            backgroundColor: "#E4E591",
                          }}
                        >
                          <span style={{ visibility: "hidden" }}>99+</span>
                          <span
                            style={{
                              top: "-10px",
                              left: "-11px",
                              position: "relative",
                              fontFamily: "Roundo",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "8.93125px",
                              lineHeight: "11px",
                              /* identical to box height */

                              color: "#080317",
                            }}
                          >
                            Served
                          </span>
                        </span>
                      </div>
                      <div className="better-perfomed-hyper">
                        <img src={perBetterPerformed} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-2 justify-content-center mt-2">
              <div className="Reached">
                Reached
                <div>
                  <img src={Rectangle2093} />
                </div>
              </div>
              <div className="Reached">
                Clicked
                <div>
                  <img src={Rectangle2094} />
                </div>
              </div>
              <div className="Reached">
                Served
                <div>
                  <img src={Rectangle2095} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HyperPersonalizedChart;
