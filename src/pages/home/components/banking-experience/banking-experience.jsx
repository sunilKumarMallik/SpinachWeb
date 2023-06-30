import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
//import "owl.carousel/dist/assets/owl.theme.default.css";
import card1 from "../../../../assets/images/banking-experiance/card1.svg";
import group11635 from "../../../../assets/images/banking-experiance/Group11635.svg";
import group11294 from "../../../../assets/images/Group11294.svg";
import group182 from "../../../../../images/goal-base-planing/Group182.svg";
import parse from "html-react-parser";
import card from "../../../../assets/images/automatic-entries/card-1.svg";
import { imageBaseUrl } from "../../../../api-services/config";
import { doGet } from "../../../../api-services/axiosservice";
import "./banking-experience.css";
function BankingExperience({ handleShow, data, goalBasedData }) {
  console.log("bank data", data);
  // console.log("bank data123", data.customersection[2]);
  console.log(data.customersection);
  console.log(goalBasedData[0]);
  const [financialText, setFinancialText] = useState({});
  const [spinText, setSpinText] = useState([]);
  const [display, setDisplay] = useState(false);
  const [awardLogo, setAwardLogo] = useState([]);
  console.log(
    data &&
      data.customersection &&
      data.customersection.map((x) => {
        return x.Header;
      }),
    "from benifit section"
  );

  //setFinancialText(financial_data);
  console.log("financialText", financialText);
  useEffect(() => {
    setDisplay(true);
    initJquery();
    getAboutData();
  }, []);

  const getAboutData = async () => {
    // setLoading(true);
    try {
      let dataText = doGet("/goal-based-planning-spin-texts?populate=*");
      let Awards = doGet("/home?populate=*");
      let AwardLogo = doGet("/award-logos?populate=*");

      let [dataTextSelected, AwardsSelected, AwardLogoSelected] =
        await Promise.all([dataText, Awards, AwardLogo]);
      // console.log(dataTextSelected);
      console.log(AwardLogoSelected);

      console.log(AwardsSelected.data.data, "awards");
      setSpinText(dataTextSelected.data.data);
      setAwardLogo(AwardLogoSelected.data.data);
      // console.log(AwardLogoSelected.data.data);

      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };
  console.log(awardLogo, "awardss");
  // console.log(
  //   "awardUrl",
  //   awardLogo &&
  //     awardLogo[1] &&
  //     awardLogo[1].attributes &&
  //     awardLogo[1].attributes.avtar &&
  //     awardLogo[1].attributes.avtar.data[0] &&
  //     awardLogo[1].attributes.avtar.data[0].attributes &&
  //     awardLogo[1].attributes.avtar.data[0].attributes.url
  // );
  let awardTitle =
    awardLogo[0] &&
    awardLogo[0].attributes &&
    awardLogo[0].attributes.logoTitle;
  // let awardImage =awardLogo[0]&&awardLogo[0].attributes&& awardLogo[0].attributes.logoTitle;
  let awardTitle1 =
    awardLogo[1] &&
    awardLogo[1].attributes &&
    awardLogo[1].attributes.logoTitle;
  let awardImage1 =
    awardLogo &&
    awardLogo[0] &&
    awardLogo[0].attributes &&
    awardLogo[0].attributes.avtar &&
    awardLogo[0].attributes.avtar.data &&
    awardLogo[0].attributes.avtar.data[0] &&
    awardLogo[0].attributes.avtar.data[0].attributes &&
    awardLogo[0].attributes.avtar.data[0].attributes.url
      ? awardLogo[0].attributes.avtar.data[0].attributes.url
      : "";
  let awardImage2 =
    awardLogo &&
    awardLogo[1] &&
    awardLogo[1].attributes &&
    awardLogo[1].attributes.avtar &&
    awardLogo[1].attributes.avtar.data &&
    awardLogo[1].attributes.avtar.data[0] &&
    awardLogo[1].attributes.avtar.data[0] &&
    awardLogo[1].attributes.avtar.data[0].attributes &&
    awardLogo[1].attributes.avtar.data[0].attributes.url
      ? awardLogo[1].attributes.avtar.data[0].attributes.url
      : "";
  console.log("awardImage1", awardImage1);
  console.log("awardImage1", awardImage2);
  console.log("spinText", spinText);
  const initJquery = () => {
    var maxData = 4;
    let i = 2;
    $(document).ready(function () {
      var radius = 200;
      var fields = $(".itemDot");
      var container = $(".dotCircle");
      var width = container.width();
      radius = width / 2.5;

      var height = container.height();
      var angle = 0,
        step = (2 * Math.PI) / fields.length;
      fields.each(function () {
        var x = Math.round(
          width / 2 + radius * Math.cos(angle) - $(this).width() / 2
        );
        var y = Math.round(
          height / 2 + radius * Math.sin(angle) - $(this).height() / 2
        );
        if (window.console) {
          //console.log($(this).text(), x, y);
        }

        $(this).css({
          left: x + "px",
          top: y + "px",
        });
        angle += step;
      });
      $(".itemDot").click(function () {
        var dataTab = $(this).data("tab");
        $(".itemDot").removeClass("active");
        $(this).addClass("active");
        $(".CirItem").removeClass("active");
        $(".CirItem" + dataTab).addClass("active");
        i = dataTab;
        circleRotValue = 360 - i * 90;
        itemRotValue = i * 90;
        $(".dotCircle").css({
          transform: "rotate(" + circleRotValue + "deg) ",
          transition: "2s",
        });
        $(".itemDot").css({
          transform: "rotate(" + itemRotValue + "deg)",
          transition: "1s",
        });
      });
      setActiveTabOnTop();
    });

    function setActiveTabOnTop() {
      var dataTab = 1;
      i = dataTab;
      circleRotValue = 360 - i * 90;
      itemRotValue = i * 90;
      $(".dotCircle").css({
        transform: "rotate(" + circleRotValue + "deg)",
        transition: "2s",
      });
      $(".itemDot").css({
        transform: "rotate(" + itemRotValue + "deg)  ",
        transition: "1s",
      });
    }
  };
  let financial_data =
    data &&
    data.financical_assets &&
    data.financical_assets.data.map((x) => {
      return x.attributes.text;
    });
  let customersection_data =
    data &&
    data.customersection &&
    data.customersection.map((x) => {
      return x.Description;
    });
  console.log(customersection_data);

  const options = {
    items: 2.2,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2.2,
      },
    },
  };

  return (
    <section id="banking-experiance">
      <div className="container position-relative">
        <div className="sec-change-line-green"></div>
      </div>

      <div className="container">
        <div className="sec-title-blue d-flex justify-content-center">
          <div className="sec-title-blue">
            <h4 className="mob-driver-heading" style={{ color: "#3FCA66" }}>
              {parse(`${data && data.BankingHeader}`)}
            </h4>
          </div>
          -
        </div>
      </div>
      <div className="sticky-rotate-btn">
        <button
          className="sticky-btn-costomer sticky-Styles"
          style={{ position: "sticky", top: "31%" }}
        >
          Spinach for your Customers
        </button>
      </div>
      <div
        id="banking-experiance-sec"
        className="ptb_50 pb-0"
        style={{ marginTop: "-167px" }}
      >
        {/*desktop Section best banking experiance */}
        <div className="content-box">
          <div className="content">
            <div className="mx-auto d-block">
              <h3>{parse(`${data && data.bankingDescription}`)}</h3>
              <ul className="bul-points white">
                <li>
                  <img loading="lazy" src={group11294} className="img-tik" />
                  {financial_data && financial_data[0]}
                </li>
                <li>
                  <img loading="lazy" src={group11294} className="img-tik" />
                  {financial_data && financial_data[1]}
                </li>
                <li>
                  <img loading="lazy" src={group11294} className="img-tik" />
                  {financial_data && financial_data[2]}
                </li>
              </ul>
              <button className="cta-btn first-color" onClick={handleShow}>
                {" "}
                <span> Get Started </span>
              </button>
            </div>
          </div>
          <div className="slider-sec">
            {display && (
              <ReactOwlCarousel
                className="banking-experiance-carousel owl-carousel owl-theme-default mt-5"
                responsive={{
                  700: {
                    items: 1,
                  },
                  300: {
                    items: 2,
                  },
                }}
                loop
                autoplay={true}
                margin={10}
                autoplayTimeout={4000}
                smartSpeed={3000}
              >
                <div className="item">
                  <img
                    loading="lazy"
                    src={card1}
                    alt="send fund require-fund"
                  />
                </div>
                <div className="item">
                  <img
                    loading="lazy"
                    src={group11635}
                    alt="send fund require-fund"
                  />
                </div>
              </ReactOwlCarousel>
            )}
          </div>
        </div>

        {/*mobile Section best banking experiance */}
        <div
          className="mob-banking-exp  mx-auto decorated-bg"
          style={{ width: "30rem" }}
        >
          <div className="row justify-content-center d-flex">
            <h3
              className="text-center text-header"
              style={{ fontSize: "22px" }}
            >
              {parse(`${data && data.bankingDescription}`)}
            </h3>
          </div>

          <div className="slider-sec">
            {display && (
              <ReactOwlCarousel
                className="banking-experiance-carousel owl-carousel owl-theme-default mt-5"
                responsive={{
                  700: {
                    items: 1,
                  },
                  300: {
                    items: 1,
                  },
                }}
                loop
                autoplay={true}
                margin={10}
                autoplayTimeout={4000}
                smartSpeed={3000}
              >
                <div className="item">
                  <img
                    loading="lazy"
                    src={card1}
                    alt="send fund require-fund"
                    height={300}
                    width={400}
                  />
                </div>
                <div className="item">
                  <img
                    loading="lazy"
                    src={group11635}
                    alt="send fund require-fund"
                  />
                </div>
              </ReactOwlCarousel>
            )}

            <ul className="col-10  bank-card bul-points white mx-auto mob-banking-exp-copy">
              <li>
                <img loading="lazy" src={group11294} className="img-tik" />
                {financial_data && financial_data[0]}
              </li>
              <li>
                <img loading="lazy" src={group11294} className="img-tik" />
                {financial_data && financial_data[1]}
              </li>
              <li>
                <img loading="lazy" src={group11294} className="img-tik" />
                {financial_data && financial_data[2]}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="automatic-entering-sec" className="ptb_50 pb-0">
        <div className="container">
          <h5>
            {data &&
              data?.customersection?.length > 0 &&
              data?.customersection[0].Header}
          </h5>

          <p className="subtitle">
            {parse(`${customersection_data && customersection_data[0]}`)}
          </p>
        </div>

        {display && (
          <ReactOwlCarousel
            className="automatic-entering-carousel owl-carousel owl-theme-default mt-5"
            items={2.2}
            {...options}
            animateOut="fadeOut"
            animateIn="fadeIn"
            loop
            center
            nav={true}
            autoplay={true}
            margin={0}
            autoplayTimeout={4000}
            smartSpeed={4000}
            autoplayHoverPause={true}
          >
            <div className="item">
              <img loading="lazy" src={card} alt="send fund require-fund" />
              <p className="text-center">Convenient Monthly Budgeting</p>
            </div>
            <div className="item">
              <img
                loading="lazy"
                src="images/automatic-entries/card-2.svg"
                alt="send fund require-fund"
              />
              <p className="text-center">Money-In / Money-Out With Labelling</p>
            </div>
            <div className="item">
              <img
                loading="lazy"
                src="images/automatic-entries/card-3.svg"
                alt="send fund require-fund"
              />
              <p className="text-center">Free To Use Amount</p>
            </div>
          </ReactOwlCarousel>
        )}
      </div>
      {/* desktop view goal based planinng */}
      <div id="goal-based-planing" className="ptb_50 pb-0">
        <div className="content-box">
          <div className="content">
            <div className="mx-auto d-block">
              <h3>
                {data &&
                  data?.customersection?.length > 0 &&
                  data?.customersection[4].Header}
              </h3>

              <ul className="bul-points white">
                <li>
                  {" "}
                  <img loading="lazy" src={group11294} className="img-tik" />
                  {goalBasedData[0]}
                </li>
                <li>
                  {" "}
                  <img loading="lazy" src={group11294} className="img-tik" />
                  {goalBasedData[1]}
                </li>
                <li>
                  {" "}
                  <img loading="lazy" src={group11294} className="img-tik" />
                  {goalBasedData[2]}
                </li>
                <li>
                  {" "}
                  <img loading="lazy" src={group11294} className="img-tik" />
                  {goalBasedData[3]}
                </li>
              </ul>
              <button className="cta-btn first-color" onClick={handleShow}>
                {" "}
                <span> Enquire Now</span>
              </button>
            </div>
          </div>
          <div className="slider-sec">
            <section className="iq-features">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-12"></div>
                  <div className="col-lg-12 col-md-12">
                    <div className="holderCircle">
                      <div className="round"></div>
                      <div className="round-1"></div>
                      <div className="dotCircle">
                        <span className="itemDot active itemDot1" data-tab="1">
                          <img
                            loading="lazy"
                            src="images/goal-base-planing/buy-home.svg"
                            alt=""
                          />
                          <span className="forActive"></span>
                        </span>

                        <span className="itemDot itemDot2" data-tab="2">
                          <img
                            loading="lazy"
                            src="images/goal-base-planing/beach.svg"
                            alt=""
                          />
                          <span className="forActive"></span>
                        </span>

                        <span className="itemDot itemDot3" data-tab="3">
                          <img
                            loading="lazy"
                            src="images/goal-base-planing/family.svg"
                            alt=""
                          />
                          <span className="forActive"></span>
                        </span>
                        <span className="itemDot itemDot3" data-tab="4">
                          <img
                            loading="lazy"
                            src="images/goal-base-planing/car.svg"
                            alt=""
                          />
                          <span className="forActive"></span>
                        </span>
                      </div>
                      <div className="contentCircle">
                        {spinText &&
                          spinText.map((item, i) => {
                            // console.log("item", item);
                            return (
                              <div
                                className={
                                  i == 0
                                    ? "CirItem title-box active CirItem1"
                                    : i == 1
                                    ? "CirItem title-box  CirItem2"
                                    : i == 2
                                    ? "CirItem title-box  CirItem3"
                                    : i == 3
                                    ? "CirItem title-box  CirItem4"
                                    : ""
                                }
                                // "CirItem title-box active CirItem1"
                              >
                                <h2 className="title">
                                  <span>{item.attributes.header}</span>
                                </h2>
                                <p>{parse(`${item.attributes.description}`)}</p>
                                <h3>
                                  <span>{item.attributes.subDescription} </span>{" "}
                                </h3>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div></div>
        </div>
      </div>
      {/* mobile view goal based planinng */}
      <div className="mob-goal-based">
        <div className="mx-auto d-block">
          <h3 className="text-center">
            {data &&
              data?.customersection?.length > 0 &&
              data?.customersection[4].Header}
          </h3>
          <div className=" d-flex aligns-items-center justify-content-center mx-auto thumbnail">
            <img loading="lazy" src={group182} style={{ width: "100%" }} />

            <div className="contentCircle caption">
              {display && spinText && spinText.length > 0 && (
                <ReactOwlCarousel
                  className="automatic-entering-carousel owl-carousel owl-theme-default mt-5"
                  items={1.2}
                  loop
                  center
                  nav={false}
                  autoplay={true}
                  margin={50}
                  autoplayTimeout={3000}
                  autoplayHoverPause={true}
                  smartSpeed={3000}
                  dots={false}
                >
                  {spinText &&
                    spinText.map((goals, i) => {
                      const { header, description, subDescription } =
                        goals.attributes;
                      return (
                        <div key={i}>
                          {header && (
                            <h2 className="title">
                              <span className="mob-goal-header text-center">
                                {header}
                              </span>
                            </h2>
                          )}
                          {description && (
                            <p className="mob-goal-desc">
                              {parse(`${description}`)}
                            </p>
                          )}
                          {subDescription && (
                            <h3>
                              <span className="mob-goal-subdesc">
                                {subDescription}{" "}
                              </span>{" "}
                            </h3>
                          )}
                        </div>
                      );
                    })}
                </ReactOwlCarousel>
              )}
            </div>
          </div>

          <div className="col-10 mx-auto goalbased-card">
            <ReactOwlCarousel
              className="automatic-entering-carousel owl-carousel owl-theme-default mt-5"
              items={1.2}
              loop
              center
              nav={false}
              autoplay={true}
              margin={50}
              autoplayTimeout={4000}
              smartSpeed={4000}
              dots={false}
            >
              <div className="item">
                <ul className="bul-points white ">
                  <li>
                    <div>
                      <img
                        loading="lazy"
                        src={group11294}
                        className="img-tik"
                      />
                    </div>
                    <div className="text-nowrap text-start">
                      {goalBasedData[0]}
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        loading="lazy"
                        src={group11294}
                        className="img-tik"
                      />
                    </div>
                    <div className="text-nowrap text-start">
                      {" "}
                      {goalBasedData[1]}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="item">
                <ul className="bul-points white">
                  <li>
                    <div>
                      <img
                        loading="lazy"
                        src={group11294}
                        className="img-tik"
                      />
                    </div>
                    <div className="text-nowrap">{goalBasedData[2]}</div>
                  </li>
                  <li>
                    <div>
                      <img
                        loading="lazy"
                        src={group11294}
                        className="img-tik"
                      />
                    </div>
                    <div className="text-nowrap">{goalBasedData[3]}</div>
                  </li>
                </ul>
              </div>
            </ReactOwlCarousel>
          </div>
          <div className="text-center">
            <button className="goalBased-btn text-center" onClick={handleShow}>
              {" "}
              <span> Enquire Now</span>
            </button>
          </div>
        </div>
      </div>
      <div id="smart-bytes" className="ptb_50 ">
        <div className="container">
          <div className="bg-image">
            <div className="content-box">
              <div className="txt-title-sm">
                <p>
                  {data &&
                    data?.customersection?.length > 0 &&
                    data?.customersection[1].Header1}
                </p>
              </div>
              <div className="title-box">
                <img
                  loading="lazy"
                  src="images/smart-bytes/logo-icon.svg"
                  className="mob-image-size"
                  alt=""
                />
                <h3 className="smart-heading">
                  {data &&
                    data?.customersection?.length > 0 &&
                    data?.customersection[1].Header}
                </h3>
              </div>
              <div className="txt-title-md">
                <p>{customersection_data && customersection_data[1]}</p>
              </div>
            </div>{" "}
            <img
              loading="lazy"
              src="images/smart-bytes/smart-bytes-lines.svg"
              alt=""
              className="line-pattern"
            />
          </div>
        </div>
        <div className="container-fluid">
          <div id="card-sec" className="col-md-11 mx-auto d-block">
            <div className="row">
              <div className="col-md-4">
                <div className="tab-card-box left-card mob-left-card">
                  <div className="nav-inline-sec">
                    <a className="active-btn">Expense</a>
                    <a> Income</a>
                  </div>
                  <div className="over-spent-box">
                    <div className="content-box">
                      <div className="col-7">
                        <div className="d-flex align-items-center mb-3">
                          {" "}
                          <svg
                            className="me-2"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="0.292969"
                              width="12"
                              height="12"
                              rx="6"
                              fill="#EA8C8C"
                            />
                            <path
                              d="M2.14254 9.30297L4.71269 6.75173L6.42612 8.44973L10.0672 4.39151L9.46318 3.79297L6.42612 7.17623L4.71269 5.47823L1.5 8.66622L2.14254 9.30297Z"
                              fill="white"
                            />
                          </svg>
                          <p className="  over-spent">Over Spent</p>
                        </div>
                        <p className="amt">
                          {" "}
                          <b>
                            <small>$</small> 600
                          </b>
                        </p>
                      </div>
                      <div className=" col-md-5 bl-line">
                        <div className="mb-2">
                          <p className=" over-spent">Over Spent</p>
                          <p className="amt-sm">$ 1,800</p>
                        </div>
                        <div className=" ">
                          <p className=" over-spent">Total Budget</p>
                          <p className="amt-sm">$ 1,200</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box-dark">
                    <div className="d-flex align-items-start   mb-3">
                      <img
                        loading="lazy"
                        src="images/smart-bytes/instant-credit.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <p className="txt-content">
                        Your expenses are higher than income. Do you need an
                        instant credit?
                      </p>
                    </div>
                    <a href="#"> Click to avail </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="tab-card-box center-card">
                  <p className="your-goal">Your Goals</p>
                  <div className="ctr-content">
                    <div className="content-box">
                      <div className="col-12">
                        <div className="d-flex align-items-center  ">
                          <img
                            loading="lazy"
                            src="images/smart-bytes/flat.svg"
                            alt=""
                            className="me-2"
                          />
                          <p className="over-spent mb-0">
                            3 BHK Flat in my dream city
                          </p>
                        </div>
                        <div className="progress-sec">
                          <div>
                            <p>
                              <span> $ </span> 58,14,501
                            </p>
                          </div>
                          <div>
                            <p>
                              <span> $ </span> 18,14,501
                            </p>
                          </div>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div className="progress-sec">
                          <div>
                            <p>
                              <span> Total Needed </span>{" "}
                            </p>
                          </div>
                          <div>
                            <p>
                              <span> Current Savings</span>{" "}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center  mt-4">
                          <img
                            loading="lazy"
                            src="images/smart-bytes/car.svg"
                            alt=""
                            className="me-2"
                          />
                          <p className="over-spent mb-0">
                            7 Seater SUV Family Car
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box-dark">
                    <div className="d-flex align-items-start   mb-3">
                      <img
                        loading="lazy"
                        src="images/smart-bytes/instant-credit.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <p className="txt-content">
                        You have a total of $ 38,260 in your saving account and
                        earning less interest on it. Do not have a urgent need
                        for it ?Then we suggest you invest the same in Mutual
                        Funds to achieve your goals faster.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="tab-card-box right-card">
                  <div className="nav-inline-sec">
                    <a>Expense</a>
                    <a className="active-btn"> Income</a>
                  </div>
                  <div className="over-spent-box">
                    <div className="content-box">
                      <div className="col-7">
                        <div className="d-flex align-items-center mb-3">
                          {" "}
                          <svg
                            className="me-2"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="0.292969"
                              width="12"
                              height="12"
                              rx="6"
                              fill="#EA8C8C"
                            />
                            <path
                              d="M2.14254 9.30297L4.71269 6.75173L6.42612 8.44973L10.0672 4.39151L9.46318 3.79297L6.42612 7.17623L4.71269 5.47823L1.5 8.66622L2.14254 9.30297Z"
                              fill="white"
                            />
                          </svg>
                          <p className="  over-spent">Free to spend</p>
                        </div>
                        <p className="amt">
                          {" "}
                          <b>
                            <small>$</small> 7,215
                          </b>
                        </p>
                      </div>
                      <div className=" col-md-5 bl-line">
                        <div className="mb-2">
                          <p className=" over-spent">Expense</p>
                          <p className="amt-sm">$ 1,785</p>
                        </div>
                        <div className=" ">
                          <p className=" over-spent">Income</p>
                          <p className="amt-sm">$ 9,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box-dark">
                    <div className="d-flex align-items-start   mb-3">
                      <img
                        src="images/smart-bytes/instant-credit.svg"
                        loading="lazy"
                        className="img-fluid"
                        alt=""
                      />
                      <p className="txt-content">
                        You have an extra monthly excess amount of $ 7,215
                        available. We suggest you invest in an SIP.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="growing-us" className="ptb_50 pb-0">
        <p className="text-white text-center ">
          {data &&
            data?.customersection?.length > 0 &&
            data?.customersection[2].Header1}
        </p>
        <div className="container">
          {/* <div className="row justify-content-center">
            {data &&
              data?.bank_images?.data.length > 0 &&
              data?.bank_images?.data.map((x) => {
                console.log("bank_images", x);
                return (
                  <div className="col-md-3">
                    <img
                      src={`${imageBaseUrl}${x.attributes.url}`}
                      loading="lazy"
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                );
              })}
          </div> */}

          {display && (
            <ReactOwlCarousel
              className="brand owl-carousel owl-theme-default  d-flex align-items-center p-4"
              loop
              autoplay={true}
              autoplayHoverPause={true}
              autoplayTimeout={3000}
              smartSpeed={3000}
              responsive={{
                0: {
                  items: 2,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 3,
                },
              }}
            >
              {data &&
                data.bank_images &&
                data.bank_images.data &&
                data.bank_images.data.map((x) => {
                  console.log("bank_images", x);
                  return (
                    <div>
                      {x && x.attributes && x.attributes.url ? (
                        <img
                          loading="lazy"
                          src={`${imageBaseUrl}${
                            x && x.attributes && x.attributes.url
                          }`}
                          className=" bank-carousel "
                        />
                      ) : null}
                    </div>
                  );
                })}
            </ReactOwlCarousel>
          )}
        </div>
      </section>
      <section id="awards-sec" className="ptb_50 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              {awardImage1 ? (
                <img
                  src={`${imageBaseUrl}${awardImage1}`}
                  loading="lazy"
                  className="img-fluid mx-auto d-block mb-2"
                  alt=""
                />
              ) : null}
              <p className="subtitle">{parse(`${awardTitle}`)}</p>
            </div>
            <div className="col-md-6">
              <h3 className="text-center">
                {parse(
                  `${
                    data &&
                    data?.customersection?.length > 0 &&
                    data?.customersection[2].Header
                  }`
                )}
              </h3>
              <p className="subtitle">
                {parse(
                  `${
                    data &&
                    data?.customersection?.length > 0 &&
                    data?.customersection[2].Description
                  }`
                )}
              </p>
            </div>
            <div className="col-md-3">
              {awardImage2 ? (
                <img
                  src={`${imageBaseUrl}${awardImage2}`}
                  loading="lazy"
                  className="img-fluid mx-auto d-block mb-2"
                  alt=""
                />
              ) : null}
              <p className="subtitle">
                <p className="subtitle">{parse(`${awardTitle1}`)}</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default BankingExperience;
