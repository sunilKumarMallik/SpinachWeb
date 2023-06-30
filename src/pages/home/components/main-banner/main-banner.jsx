import React from "react";
import "./main-banner.css";
const MainBanner = ({ data }) => {
  console.log(data && data);
  return (
    <section id="main-homepage-banner">
      <div className="img-animation-sec ">
        <div className="expence-tracker ">
          <div>
            <img
              src="images/banner/expense-tracker.svg"
              alt=""
              className="shake-animation paper-plane"
            />
          </div>
        </div>
        <div className="goal">
          <img
            src="images/banner/goal.svg"
            alt=""
            className=" shake-animation"
          />
        </div>

        <div className="smartbytes">
          <img
            src="images/banner/smartbytes.svg"
            alt=""
            className=" shake-animation"
          />
        </div>

        <div className="Budgeting">
          <div className="animation ">
            <img
              src="images/banner/Budgeting.svg"
              alt=""
              className="shake-animation   paper-plane1"
            />
          </div>
        </div>

        <div className="consumer">
          <img
            src="images/banner/consumer.svg"
            alt=""
            className=" shake-animation"
          />
        </div>

        <div className="assets-manager">
          <img
            src="images/banner/assets-manager.svg"
            alt=""
            className=" shake-animation"
          />
        </div>

        <div className="merchant-data">
          <img
            src="images/banner/merchant-data.svg"
            alt=""
            className=" shake-animation"
          />
        </div>

        <div className="incomes">
          <img
            src="images/banner/incomes.svg"
            alt=""
            className=" shake-animation"
          />
        </div>

        <div className="competitor-analytic">
          <img
            src="images/banner/competitor-analytic.svg"
            alt=""
            className=" shake-animation"
          />
        </div>
      </div>
      <div className="img-animation-sec-mobile">
        <div className="expence-tracker-mobile">
          <div>
            <img
              src="images/banner/expense-tracker.svg"
              alt=""
              className="shake-animation paper-plane"
            />
          </div>
        </div>
        <div className="smartbytes">
          <img
            src="images/banner/smartbytes.svg"
            alt=""
            className=" shake-animation"
          />
        </div>

        <div className="consumer-mobile">
          <img
            src="images/banner/consumer.svg"
            alt=""
            className=" shake-animation"
          />
        </div>
        <div className="merchant-data-mobile">
          <img
            src="images/banner/merchant-data.svg"
            alt=""
            className="shake-animation"
          />
        </div>
        <div className="competitor-analytic-mobile">
          <img
            src="images/banner/competitor-analytic.svg"
            alt=""
            className=" shake-animation"
          />
        </div>
      </div>
      <div className="content-box">
        <div className="mob-top-header">
          <div className="child-mob-top-header">
            <p >{data && data.heroTitle}</p>
          </div>

        </div>

        <h1 data-aos="fade-right" className="headerContainer">
          {data && data.headerText1}
          <svg
            width="11"
            height="11"
            className="mx-4 headerIcon"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="11" height="11" fill="#08051E" />
          </svg>
          <span data-aos="fade-in" className="headerText"> {data && data.headerText2}</span>
          <svg
            width="11"
            height="11"
            className="mx-4 headerIcon"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="11" height="11" fill="#08051E" />
          </svg>
          {data && data.headerText3}
        </h1>
        <div>

        </div>
      </div>
      <div className="buttonContainer">
        <button className="bookDemoButton">Book Demo</button>
      </div>

    </section>
  );
};

export default MainBanner;
