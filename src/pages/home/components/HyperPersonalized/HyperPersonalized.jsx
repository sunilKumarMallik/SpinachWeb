import React from "react";
import { Container } from "react-bootstrap";

import "./HyperPersonalized.css";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";

import HyperPersonalizedChart from "./HyperPersonalizedChart";
import Bars from "../../components/SVG/geographBars/bars";
import macdots from "../../../../assets/images/macdots.svg";
import Sidebar from "../sidebar/sidebar";

function HyperPersonalized() {
  return (
    <>
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
          right:"-20%"
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
          className="col-10 col-xs-10 mt-2 position-relative mx-auto"
          style={{ width: "90%" }}
        >
          <div className="text-start">
            <img src={arrowLeft} />{" "}
            <span className="Behaviour-Campaign">Campaign</span>
          </div>
          <div
            className="p-2"
            style={{ background: "rgba(255, 255, 255, 0.88)" }}
          >
            <marquee
              behavior="slide"
              direction="left"
              scrollamount="12"
            >
              <div className="d-flex justify-content-between">
                <div>
                  <div className="header-card text-uppercase">campaign id</div>
                  <span className="auto-1010">auto 1010</span>
                </div>
                <div>
                  <div className="header-card text-uppercase">
                    campaign name
                  </div>
                  <span className="auto-1010 text-capitalize">home loan</span>
                </div>
                <div>
                  <div className="header-card text-uppercase">status</div>
                  <span className="auto-1010 text-capitalize">Active</span>
                </div>
                <div>
                  <div className="header-card text-uppercase">start date</div>
                  <span className="auto-1010 text-capitalize">
                    15 Aug,2022 | 07:25 Am
                  </span>
                </div>
                <div>
                  <div className="header-card text-uppercase">end date</div>
                  <span className="auto-1010 text-capitalize">
                    {" "}
                    28 Aug,2022 | 07:25 Am
                  </span>
                </div>
              </div>
            </marquee>
          </div>

          <div>
            <HyperPersonalizedChart />
          </div>

          <div className="mx-auto mt-2">
            <div className="bar-width">
              {" "}
              <Bars />
            </div>
          </div>
        </div>
      </div>
      <div className="hideLoweSection2"></div>
    </>
  );
}

export default HyperPersonalized;
