import React from "react";
import CustomerProfilingColumnChart from "../customerProfiling/customerProfilingColumn";
import BankSpin from "../BankSpin/BankSpin";
import TransactionData from "../transactionData/TransactionData";
import HyperPersonalized from "../HyperPersonalized/HyperPersonalized";
import parse from "html-react-parser";
import { useState } from "react";
import "./accordion.css";
function AccordionFunction({ data }) {
  const [selectedAccordion, setSelectedAccordion] = useState("collapseOne");

  const getSelectedAccordion = (accordion) => {
    let res = <CustomerProfilingColumnChart />;
    switch (accordion) {
      case "collapseOne":
        res = <CustomerProfilingColumnChart />;
        break;
      case "collapseTwo":
        res = <BankSpin />;
        break;
      case "collapseThree":
        res = <TransactionData />;
        break;
      case "collapsefour":
        res = <HyperPersonalized />;
        break;

      default:
        break;
    }
    return res;
  };

  return (
    <div className="row">
      <div className="col-12">
        <p style={{ fontWeight: "600" }}>
          How banks can drive growth with Spinach.
        </p>
      </div>

      <div className="col-md-5">
        <div className="accordion" id="accordionExample">
          <div
            id="first-acc"
            className="accordion-item radius-border-accordion"
          >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                onClick={() => setSelectedAccordion("collapseOne")}
              >
                <img
                  src="images/costomer-experiance/costomer-profiling.svg"
                  alt="Customer profiling & engagement"
                  className="accordion-images"
                />{" "}
                {parse(`${data && data[0].attributes.Title}`)}
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="pt-4 px-3">{data && data[0].attributes.Details}</p>
              </div>
            </div>
          </div>
          <div id="sec-acc" className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                onClick={() => setSelectedAccordion("collapseTwo")}
              >
                <img
                  src="images/costomer-experiance/open-bank.svg"
                  alt="Customer profiling & engagement"
                  className="accordion-images"
                />{" "}
                {parse(`${data && data[1].attributes.Title}`)}
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="pt-4 px-3">{data && data[1].attributes.Details}</p>
              </div>
            </div>
          </div>
          <div id="three-acc" className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                onClick={() => setSelectedAccordion("collapseThree")}
              >
                <img
                  src="images/costomer-experiance/transaction-data.svg"
                  alt="Customer profiling & engagement"
                  className="accordion-images"
                />

                {parse(`${data && data[2].attributes.Title}`)}
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  <p className="pt-4 px-3">{data && data[2].attributes.Details}</p>
                </p>
              </div>
            </div>
          </div>
          <div id="four-acc" className="accordion-item">
            <h2 className="accordion-header" id="headingfour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
                onClick={() => setSelectedAccordion("collapsefour")}
              >
                <img
                  src="images/costomer-experiance/hyper-personalized.svg"
                  alt="Customer profiling & engagement"
                  className="accordion-images"
                />
                {parse(`${data && data[3].attributes.Title}`)}
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="headingfour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  <p className="pt-4 px-3">{data && data[3].attributes.Details}</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-7 position-relative">
        {getSelectedAccordion(selectedAccordion)}
      </div>
    </div>
  );
}

export default AccordionFunction;
