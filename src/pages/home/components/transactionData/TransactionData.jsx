import React from "react";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import Vector1 from "../../../../assets/images/Vector1.svg";
import Rectanglepink from "../../../../assets/images/Rectanglepink.svg";

import RectangleYellow from "../../../../assets/images/RectangleYellow.svg";
import RectangleViolet from "../../../../assets/images/RectangleViolet.svg";
import Rectangle4015 from "../../../../assets/images/Rectangle4015.svg";
import Rectangle4015A from "../../../../assets/images/Rectangle4015A.svg";
import Rectangle4015B from "../../../../assets/images/Rectangle4015B.svg";
import Rectangle4015C from "../../../../assets/images/Rectangle4015C.svg";
import RectangleOla from "../../../../assets/images/RectangleOla.svg";
import RectangleFood from "../../../../assets/images/RectangleFood.svg";

import Rectangle4015D from "../../../../assets/images/Rectangle4015D.svg";
import Rectangle2094 from "../../../../assets/images/Rectangle2094.svg";
import baselineAutoGraph from "../../../../assets/images/baselineAutoGraph.svg";
import baselineAutoGraphGreen from "../../../../assets/images/baselineAutoGraphGreen.svg";
import StandardCollection6 from "../../../../assets/images/StandardCollection6.svg";
import Rectangle4011 from "../../../../assets/images/Rectangle4011.svg";
import Rectangle4012 from "../../../../assets/images/Rectangle4012.svg";
import Rectangle4013 from "../../../../assets/images/Rectangle4013.svg";
import Rectangle4014 from "../../../../assets/images/Rectangle4014.svg";
import Rectangle2096 from "../../../../assets/images/Rectangle2096.svg";
import Vector from "../../../../assets/images/Vector.svg";
import Group from "../../../../assets/images/Group.svg";
import Group1 from "../../../../assets/images/Group1.svg";
import Vector129 from "../../../../assets/images/Vector129.svg";
import Rectangle2093 from "../../../../assets/images/Rectangle2093.svg";
import Rectangle2095 from "../../../../assets/images/Rectangle2095.svg";
import biCaretDownFill from "../../../../assets/images/biCaretDownFill.svg";
import perBetterPerformed from "../../../../assets/images/perBetterPerformed.svg";
import macdots from "../../../../assets/images/macdots.svg";
import Sidebar from "../sidebar/sidebar";
import "./TransactionData.css";
import ProgressGraph from "../customerProfiling/ProgressGraph";
import PieDoughnutChart from "../../components/doughnutChart/PieDoughnutChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function TransactionData() {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [10, 39, 20, 65],
        rotation: "15",
        cutout: 60,
        backgroundColor: [
          "rgb(255,206,86)", //yellow
          "rgb(54,162,235)", //sky
          "rgb(197,111,227)", //purpul

          "rgb(255,99,132)", //pink
        ],
      },
    ],
  };
  const traData = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: "# of Votes",
        data: [15, 54, 31],
        rotation: "135",
        cutout: 62,
        backgroundColor: [
          "rgba(0, 0, 0)",//black
          "rgb(154,235,235)",//sky
          "rgb(228,229,145)", //brown
        ],
      },
    ],
  };
  const options= {
    cutout: 20,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  return (
    <div
      className="row rounded-top"
      style={{
        backgroundColor: "#F8FAFE",
        maxHeight: "31rem",
        position: "absolute",
        // width: "100%",
        boxShadow: "38.0675px 38.0675px 57.1012px #3FA35B",
        borderRadius: "0px 0px 5.30271px 5.30271px",
        marginLeft: "60px",
        right: "-20%",
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
        className="col-10 col-xs-10 mt-1 position-relative mx-auto"
        style={{ width: "93%" }}
      >
        <div className="text-start">
          <img src={arrowLeft} /> <span className="Behaviour">Merchant</span>
        </div>
        <div className="Competition-Merchant-outerlayer mx-auto">
          <div className="p-2 compt-for-merchant text-start">
            Competition for Merchant
          </div>
          <div>
            <img src={Vector129} style={{ width: "100%" }} />
          </div>
          <div className="row d-flex mt-4">
            <div className="col-4">
              <div className="d-flex justify-content-center">
                <div style={{ height: "180px" }}>
                  <Doughnut data={data} options={options}/>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-6 text-center rectanglePink">
                  XYZ Bank{" "}
                  <div>
                    <img src={Rectanglepink} />
                  </div>
                </div>
                <div
                  className="col-6 ml-2 text-start"
                  style={{
                    fontFamily: "Roundo",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "8.28953px",
                    lineHeight: "9px",
                    color: "#3E4647",
                  }}
                >
                  Pivot Bank
                  <div>
                    <img src={Rectangle2094} />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="col-6 text-center"
                  style={{
                    fontFamily: "Roundo",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "8.28953px",
                    lineHeight: "9px",
                    color: "#3E4647",
                  }}
                >
                  ABC Bank{" "}
                  <div>
                    <img src={RectangleYellow} />
                  </div>
                </div>
                <div
                  className="col-6 ml-2 text-start"
                  style={{
                    fontFamily: "Roundo",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "8.28953px",
                    lineHeight: "9px",
                    color: "#3E4647",
                  }}
                >
                  Second Bank
                  <div>
                    <img src={RectangleViolet} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{ position: "relative", top: "-22px" }}
              >
                <div className="collapse navbar-collapse" id="navbarNav">
                  <marquee behavior="slide" direction="left" scrollamount="12">
                    <ul className="navbar-nav">
                      <img src={Vector1} />
                      <li className="nav-item d-flex nav-link">
                        <div>
                          <img src={Rectangle4015A} />
                        </div>
                        <div className="nav-text">Swiggy</div>
                      </li>
                      <li className="nav-item d-flex nav-link">
                        <div>
                          <img src={Rectangle4015B} />
                        </div>
                        <div className="nav-text">Zomato</div>
                      </li>
                      <li className="nav-item d-flex nav-link">
                        <div>
                          <img src={Rectangle4015C} />
                        </div>
                        <div className="nav-text">STC</div>
                      </li>
                      <li className="nav-item d-flex nav-link">
                        <div>
                          <img src={Rectangle4015D} />
                        </div>
                        <div className="nav-text">IRTC</div>
                      </li>
                      <li className="nav-item d-flex nav-link">
                        <div>
                          <img src={Rectangle4015} />
                        </div>
                        <div className="nav-text">Biz Bazar</div>
                      </li>
                      <li className="nav-item d-flex nav-link">
                        <div>
                          <img src={RectangleOla} />
                        </div>
                        <div className="nav-text">Ola</div>
                      </li>
                      <li className="nav-item d-flex nav-link">
                        <div>
                          <img src={RectangleFood} />
                        </div>
                        <div className="nav-text">Food</div>
                      </li>
                    </ul>
                  </marquee>
                </div>
              </nav>

              <div className="col-10 mb-2 mx-5">
                <div className="row d-flex">
                  <div className="col-6">
                    {" "}
                    <div className="row mt-2 ">
                      <div
                        className="position-relative"
                        style={{
                          backgroundColor: "#F7F9FE",
                          borderRadius: "11.6501px",
                          width: "185px",
                          height: "73px",
                        }}
                      >
                        <div
                          className=" d-flex"
                          style={{
                            fontFamily: "Roundo",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "8.99972px",
                            lineHeight: "147.2%",
                            position: "relative",
                            top: "30px",
                            /* or 13px */

                            color: "#000000",
                          }}
                        >
                          <div className="col-6">
                            Count{" "}
                            <img
                              src={baselineAutoGraph}
                              style={{
                                width: "11px",
                                height: "11px",
                                position: "relative",
                                left: "3px",
                              }}
                            />
                          </div>
                          <div className="col-6">Value</div>
                        </div>

                        <div className="d-flex icon-number">
                          <div
                            className="col-6"
                            style={{ transform: " rotate(-3.37deg)" }}
                          >
                            23
                          </div>
                          <div className="col-6">14.90L</div>
                        </div>

                        <span
                          className="position-absolute  translate-middle"
                          style={{
                            left: "31px",
                            top: "5px",
                            backgroundColor: "#FEFEFE",
                            border: "1px solid #F5F5F5",
                            borderRadius: "8px",
                          }}
                        >
                          <span>
                            <img src={StandardCollection6} />
                          </span>
                        </span>
                        <div className="bar-position">
                          <span>
                            <img src={Rectangle4011} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    {" "}
                    <div className="row mt-2 ">
                      <div
                        className="position-relative"
                        style={{
                          backgroundColor: "#F7F9FE",
                          borderRadius: "11.6501px",
                          width: "185px",
                          height: "73px",
                        }}
                      >
                        <div
                          className=" d-flex"
                          style={{
                            fontFamily: "Roundo",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "8.99972px",
                            lineHeight: "147.2%",
                            position: "relative",
                            top: "30px",
                            /* or 13px */

                            color: "#000000",
                          }}
                        >
                          <div className="col-6">
                            Count{" "}
                            <img
                              src={baselineAutoGraphGreen}
                              style={{
                                width: "11px",
                                height: "11px",
                                position: "relative",
                                left: "3px",
                              }}
                            />
                          </div>
                          <div className="col-6">Value</div>
                        </div>

                        <div className="d-flex icon-number">
                          <div
                            className="col-6"
                            style={{ transform: " rotate(-3.37deg)" }}
                          >
                            4
                          </div>
                          <div className="col-6">42.00K</div>
                        </div>

                        <span
                          className="position-absolute  translate-middle"
                          style={{
                            left: "31px",
                            top: "5px",
                            backgroundColor: "#FEFEFE",
                            border: "1px solid #F5F5F5",
                            borderRadius: "8px",
                          }}
                        >
                          <span>
                            <img src={Vector} />
                          </span>
                        </span>
                        <div className="bar-position">
                          <span>
                            <img src={Rectangle4012} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 mt-2">
                    {" "}
                    <div className="row mt-2 ">
                      <div
                        className="position-relative"
                        style={{
                          backgroundColor: "#F7F9FE",
                          borderRadius: "11.6501px",
                          width: "185px",
                          height: "73px",
                        }}
                      >
                        <div
                          className=" d-flex"
                          style={{
                            fontFamily: "Roundo",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "8.99972px",
                            lineHeight: "147.2%",
                            position: "relative",
                            top: "30px",
                            /* or 13px */

                            color: "#000000",
                          }}
                        >
                          <div className="col-6">
                            Count{" "}
                            <img
                              src={baselineAutoGraphGreen}
                              style={{
                                width: "11px",
                                height: "11px",
                                position: "relative",
                                left: "3px",
                              }}
                            />
                          </div>
                          <div className="col-6">Value</div>
                        </div>

                        <div className="d-flex icon-number">
                          <div
                            className="col-6"
                            style={{ transform: " rotate(-3.37deg)" }}
                          >
                            21
                          </div>
                          <div className="col-6">58.80K</div>
                        </div>

                        <span
                          className="position-absolute  translate-middle"
                          style={{
                            left: "31px",
                            top: "5px",
                            backgroundColor: "#FEFEFE",
                            border: "1px solid #F5F5F5",
                            borderRadius: "8px",
                          }}
                        >
                          <span>
                            <img src={Group} />
                          </span>
                        </span>
                        <div className="bar-position">
                          <span>
                            <img src={Rectangle4013} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 mt-2">
                    {" "}
                    <div className="row mt-2 ">
                      <div
                        className="position-relative"
                        style={{
                          backgroundColor: "#F7F9FE",
                          borderRadius: "11.6501px",
                          width: "185px",
                          height: "73px",
                        }}
                      >
                        <div
                          className=" d-flex"
                          style={{
                            fontFamily: "Roundo",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "8.99972px",
                            lineHeight: "147.2%",
                            position: "relative",
                            top: "30px",
                            /* or 13px */

                            color: "#000000",
                          }}
                        >
                          <div className="col-6">
                            Count{" "}
                            <img
                              src={baselineAutoGraph}
                              style={{
                                width: "11px",
                                height: "11px",
                                position: "relative",
                                left: "3px",
                              }}
                            />
                          </div>
                          <div className="col-6">Value</div>
                        </div>

                        <div className="d-flex icon-number">
                          <div
                            className="col-6"
                            style={{ transform: " rotate(-3.37deg)" }}
                          >
                            15
                          </div>
                          <div className="col-6">8.26L</div>
                        </div>

                        <span
                          className="position-absolute  translate-middle"
                          style={{
                            left: "31px",
                            top: "5px",
                            backgroundColor: "#FEFEFE",
                            border: "1px solid #F5F5F5",
                            borderRadius: "8px",
                          }}
                        >
                          <span>
                            <img src={Group1} />
                          </span>
                        </span>
                        <div className="bar-position">
                          <span>
                            <img src={Rectangle4014} />
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

        <div className="Competition-Merchant-outerlayer mt-2">
          <div className="d-flex">
            <div className="col-6">
              <span className="campaign-perfomance">Campaign Perfomance</span>
            </div>
            <div className="col-6">
              <div className="row mt-2">
                <div className="d-flex gap-1">
                  <div
                    className="text-start"
                    style={{
                      width: "80.26px",
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
                        top: "-10px",
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
                    className="text-start"
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
                        top: "-10px",
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
                        top: "3px",
                        position: "absolute",
                        left: "7px",
                      }}
                    >
                      All
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        right: "2px",
                        top: "-6px",
                      }}
                    >
                      <img src={biCaretDownFill} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
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
                    <div className="text-start">Campaign Clicked Counts</div>
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
                    <div className="text-start">Campaign Served Counts</div>
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
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div style={{ width: "180px", height: "180px" }}>
                <Doughnut data={traData}/>
              </div>
            </div>
            <div className="col-4">
              <div className="row mt-2 ">
                <div
                  className="position-relative merchant-campaign-7613"
                  style={{ width: "143px" }}
                >
                  <div className="text-nowrap campaign-clicked-counts">
                    <div className="text-start">7,613</div>
                    <div className="text-start">Campaign Reached Counts</div>
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
                <div style={{ position: "relative", left: "-24%" }}>
                  <div className="position-relative mt-2 merchant-campaign-Served">
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
                          top: "-13px",
                          left: "-17px",
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
                  <div className="better-perfomed">
                    <img src={perBetterPerformed} />
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
      <div className="hideLoweSection"></div>
    </div>
  );
}

export default TransactionData;
