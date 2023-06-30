import React, { useEffect, useState } from "react";
import dashboard_image from "../../../../assets/images/background-new.svg";
import custom_modal from "../../../../assets/images/custom-modal.svg";
import Tab2 from "../../../../assets/images/tab-1/tab-2.svg";
import Tab3 from "../../../../assets/images/tab-1/tab-3.svg";
import Tab4 from "../../../../assets/images/tab-1/tab-4.svg";
import Tabx from "../../../../assets/images/tab-1/image1.png";
import Taby from "../../../../assets/images/tab-1/image2.png";
import Tabz from "../../../../assets/images/tab-1/image3.png";
import Taba from "../../../../assets/images/tab-1/image4.png";
import Bank from "../../../../assets/images/banking-experiance/bank.jpg";
import ReactOwlCarousel from "react-owl-carousel";
import parse from "html-react-parser";
import "./benefits.css";
import Zigzagbg from "../zigzag/Zigzagbg";
import { Accordion, Modal } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AccordionFunction from "../Accordion/accordion";
import { Next } from "react-bootstrap/esm/PageItem";
import { imageBaseUrl } from "../../../../api-services/config";
import { doGet } from "../../../../api-services/axiosservice";
import Mobileview from "../Accordion/mobileview";
import MobieEngaging from "./mobieEngaging";
import Slider from "react-slick";
import TrustedByBanks from "./component/trustedbybanks";
import MobileTrustedByBanks from "./component/mobileTrustedbybanks";

function Benefits({ handleShow, data, testimonials, intelligentTextData }) {
  // console.log(intelligentTextData, "intelligentTextData");
  // console.log(data, "benfits data nergvjhsdbgmhhm");
  // console.log(testimonials, "benfits data testimonials");
  const [lgShow, setLgShow] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);
  const [tabId, setTabId] = useState("modern-tab");
  const [ticking, setTicking] = useState(true),
    [count, setCount] = useState(0);
  const [benefitsHeader, setbenefitsHeader] = useState({});
  const [foldData, setFoldDataFirst] = useState([]);
  const [foldDataSecond, setFoldDataSecond] = useState([]);
  const [foldDataThird, setFoldDataThird] = useState([]);
  const [foldDataFourth, setFoldDataFourth] = useState([]);
  const [foldDataHeader, setFoldDataHeader] = useState("");
  const [foldDataSecondHeader, setFoldDataSecondHeader] = useState({});
  const [foldDataThirdHeader, setFoldDataThirdHeader] = useState({});
  const [foldDataFourthHeader, setFoldDataFourthHeader] = useState({});
  const [customActiveTab, setCustomActiveTab] = useState("modern-tab");
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    getAboutData();
    window.addEventListener("resize", handleResize);
  }, []);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  });
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  const getAboutData = async () => {
    // setLoading(true);
    try {
      let foldData = doGet("/fold3-headers?populate=*");

      let [foldDataSelected] = await Promise.all([foldData]);
      // console.log("foldDataSelected", foldDataSelected.data.data[0].attributes.tabDetails.split("<br/>"));
      console.log("foldDataSelected", foldDataSelected.data.data);
      console.log("foldDataSelected", foldDataSelected.data.data[0]);
      console.log(
        "foldDataSelectedSecond",
        foldDataSelected.data.data[1].attributes.tabDetails
      );

      setFoldDataFirst(
        foldDataSelected.data.data[0].attributes.tabDetails.split("<br/>")
      );
      setFoldDataSecond(
        foldDataSelected.data.data[1].attributes.tabDetails.split("<br/>")
      );
      setFoldDataThird(
        foldDataSelected.data.data[2].attributes.tabDetails.split("<br/>")
      );
      setFoldDataFourth(
        foldDataSelected.data.data[3].attributes.tabDetails.split("<br/>")
      );

      console.log("Header", foldDataSelected.data.data[0].attributes.tabText);
      setFoldDataHeader(foldDataSelected.data.data[0].attributes.tabText);
      setFoldDataSecondHeader(foldDataSelected.data.data[1].attributes.tabText);
      setFoldDataThirdHeader(foldDataSelected.data.data[2].attributes.tabText);
      setFoldDataFourthHeader(foldDataSelected.data.data[3].attributes.tabText);

      // setFoldData(foldDataSelected.data.data);

      // setLoading(false);
      // setImageDta(aboutDataSelected.data.data.attributes.AboutImages.data)
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };
  //  console.log(data.customersection.map((x)=>{
  //   return x.Header
  //  }));
  let inteli_Header =
    data &&
    data.customersection &&
    data.customersection.length > 0 &&
    data.customersection.map((x) => {
      return x.Header;
    });
  let testimonial_Header =
    testimonials &&
    testimonials.length &&
    testimonials.map((item) => {
      return item.attributes.Header;
    });
  // console.log(testimonial_Header);
  let testimonial_Desc =
    testimonials &&
    testimonials.length &&
    testimonials.map((item) => {
      return item.attributes.Description;
    });
  // console.log(testimonial_Desc);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    if (tabIndex == 4) {
      const timer = setTimeout(() => {
        ticking && onContiniousDownChange();
        ticking && setCount(count + 1);
      }, 2e3);

      return () => clearTimeout(timer);
    }
  }, [count, ticking, tabIndex]);

  const onTabChange = (name) => {
    setTicking(true);
    console.log(name);
    const tabIndexConstant = 4;
    if (name == "btnNext") {
      console.log("here1");
      console.log(tabIndex);
      if (tabIndex >= 1 && tabIndex < 4) {
        console.log("here");
        setTabIndex((prev) => prev + 1);
      }
    }
    if (name == "btnPrevious") {
      console.log("here1");
      if (tabIndex > 1 && tabIndex <= 4) {
        console.log("here");
        setTabIndex((prev) => prev - 1);
      }
    }
  };
  const onContiniousTabChange = (id) => {
    console.log("id", id);

    if (tabId == "modern-tab") {
      setTabId("classic-tab");
    } else {
      setTabId("modern-tab");
    }
    setCustomActiveTab(tabId);
  };

  //  setbenefitsHeader(testimonials &&
  //       testimonials.length &&
  //       testimonials.map((item) => {
  //         return item.attributes.Heading
  //       }))
  const onContiniousDownChange = () => {
    // console.log("change");
    // setCustomActiveTab('modern-tab');
    if (customActiveTab == "modern-tab") {
      setCustomActiveTab("classic-tab");
    } else {
      setCustomActiveTab("modern-tab");
    }
  };
  const handleClick = (e) => {
    // access to e.target here
    setTicking(!ticking);
    console.log(e.currentTarget.id);
    let id = e.currentTarget.id;
    // onContiniousTabChange(id === "modern-tab" ? "modern-tab" :"classic-tab")
    setCustomActiveTab(e.currentTarget.id);
    // const timer = setTimeout(() => {
    //   ticking && onContiniousTabChange(tabId);
    //   ticking && setCount(count + 1);
    // }, 2e3);

    // return () => clearTimeout(timer);
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 50,
    nav: false,
    arrows: false,
    autoplay: false,
    autoplayspeed: 2000,
  };
  // console.log(benefitsHeader);
  // console.log("foldDataHeader", foldDataHeader);
  return (
    <section id="spinach-benefit-sec">
      <div className="sticky-rotate-btn-green">
        <button className="sticky-btn sticky-Styles">Spinach for Banks</button>
      </div>

      <div className="container">
        <section id="accordion-section">
          <div className="sec-title-green d-flex justify-content-center">
            <div className="sec-title-green">
              <h4 className="mob-driver-heading">{parse(`${data && data.HeaderText4}`)}</h4>
            </div>
          </div>

          {isMobile ? (
            <Mobileview data={data?.banks_accordions?.data} />
          ) : (
            <AccordionFunction data={data?.banks_accordions?.data} />
          )}
          <button
            className="cta-btn get-start"
            style={{ position: "relative" }}
            onClick={handleShow}
          >
            {" "}
            <span>Get Started</span>
          </button>
        </section>

        <div className="carousel-arrow-sec">
          <div>
            <p id="tab-1-title" style={{ fontWeight: "600" }}>
              Our Models of Engagement
            </p>
          </div>
          <div className="carousel-arrow ">
            <a
              className="btnPrevious "
              onClick={() => onTabChange("btnPrevious")}
            >
              <svg
                width="9"
                height="13"
                viewBox="0 0 9 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12L2 6.5L8 1"
                  className="arrow-left"
                  strokeWidth="2"
                />
              </svg>
            </a>
            <a
              className="btnNext active-btn"
              onClick={() => onTabChange("btnNext")}
            >
              <svg
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="arrow-right"
                  d="M1.5 12.5L7.5 7L1.5 1.5"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="main-tab">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={tabIndex == 1 ? `nav-link active` : "nav-link"}
                data-bs-toggle="tab"
                id="powerful-api-txt"
                href="#powerful-api"
                onClick={() => {
                  setTabIndex(1);
                  // setTicking(false);
                }}
              >
                {parse(`${foldDataHeader}`)}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={tabIndex == 2 ? `nav-link active` : "nav-link"}
                data-bs-toggle="tab"
                id="powerful-api-txt-2"
                href="#bank-ready-experience"
                onClick={() => {
                  setTabIndex(2);
                  // setTicking(false);
                }}
              >
                {parse(`${foldDataSecondHeader}`)}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={tabIndex == 3 ? `nav-link active` : "nav-link"}
                data-bs-toggle="tab"
                id="powerful-api-txt-3"
                href="#data-service"
                onClick={() => {
                  setTabIndex(3);
                  // setTicking(false);
                }}
              >
                {parse(`${foldDataThirdHeader}`)}
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                onContiniousTabChange(tabId);
              }}
            >
              <a
                className={tabIndex == 4 ? `nav-link active` : "nav-link"}
                data-bs-toggle="tab"
                id="powerful-api-txt-4"
                href="#costom-experience"
                onClick={() => {
                  setTabIndex(4);
                  // setTicking(false);
                }}
              >
                {parse(`${foldDataFourthHeader}`)}
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className={
                tabIndex == 1
                  ? "tab-pane container active"
                  : "tab-pane container"
              }
              id="powerful-api"
              style={{ padding: "1px" }}
            >
              <div className="content-box">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <ul className="powerful-api">
                      {foldData &&
                        foldData.length &&
                        foldData.map((x) => {
                          // console.log("Hello",x);
                          return <li>{x}</li>;
                        })}
                    </ul>

                    <Link to="/Offer">
                      <button
                        className="cta-btn"
                        style={{ position: "relative", left: "30px" }}
                      >
                        {" "}
                        <span> Explore More </span>
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-7">
                    <div className="main-box">
                      <div className="box">
                        <div className="badge-box">
                          <p>Flexible UI</p>
                        </div>
                        <div className="animation-border-box">
                          <div className="border-line"></div>
                          <div>
                            <img
                              src="images/tab-1/spinach-tab-logo.svg"
                              alt=""
                            />
                          </div>
                          <div>
                            <p>
                              POST /legal_entities/123456
                              <br />
                              {` { `}
                              <br />
                              “country”:”us”, “entity_country_info”:{`{...}`}{" "}
                              <br />
                              {` } `}
                            </p>
                          </div>
                        </div>
                      </div>
                      <img
                        src="images/tab-1/tab-bg-code.svg"
                        className=" ms-md-auto d-block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                tabIndex == 2
                  ? "tab-pane container active"
                  : "tab-pane container fade"
              }
              //className="tab-pane container fade"
              id="bank-ready-experience"
              style={{ padding: "10px" }}
            >
              <div className="content-box">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <p>{foldDataSecond}</p>

                    <Link to="/Offer">
                      <button className="cta-btn">
                        {" "}
                        <span> Explore More </span>
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <img src={Tab2} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                tabIndex == 3
                  ? "tab-pane container active"
                  : "tab-pane container fade"
              }
              // className="tab-pane container fade"
              id="data-service"
              style={{ padding: "10px" }}
            >
              <div className="content-box">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <ul className="powerful-api">
                      {foldDataThird &&
                        foldDataThird.length &&
                        foldDataThird.map((details) => {
                          // console.log("Hello",x);
                          return <li>{details}</li>;
                        })}
                    </ul>

                    <Link to="/Offer">
                      <button
                        className="cta-btn"
                        style={{ position: "relative", left: "30px" }}
                      >
                        {" "}
                        <span> Explore More </span>
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-8" style={{ maxHeight: "330px" }}>
                    <img src={Tab3} className="img-fluid imgbgmain" alt="" />
                    <img src={Tabx} className="imgx iconswave" alt="" />
                    <img src={Taby} className="imgy iconswave" alt="" />
                    <img src={Tabz} className="imgz iconswave" alt="" />
                    <img src={Taba} className="imga iconswave" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                tabIndex == 4
                  ? "tab-pane container active"
                  : "tab-pane container fade"
              }
              // className="tab-pane container fade"
              id="costom-experience"
              style={{ padding: "10px" }}
            >
              <div className="content-box">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <p>{foldDataFourth}</p>
                    <div className="tab-box-sec">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li
                          className={
                            customActiveTab == "modern-tab"
                              ? "nav-item active"
                              : "nav-item"
                          }
                          role="presentation"
                          // onClick={() => {
                          //   setTabIndex(1);
                          //   setTicking(false);
                          // }}
                        >
                          <button
                            // className="nav-link active"
                            className={
                              customActiveTab == "modern-tab"
                                ? "nav-link active"
                                : "nav-link"
                            }
                            id="modern-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#modern"
                            type="button"
                            role="tab"
                            aria-controls="modern"
                            aria-selected="true"
                            onClick={(e) => handleClick(e)}
                          >
                            <p> Choose Modern</p>
                            <p>
                              {" "}
                              <span className="upparcase-txt"> TT</span>{" "}
                              <span className="lowercase-txt">tt</span>
                            </p>
                            <svg
                              width="67"
                              height="20"
                              viewBox="0 0 67 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="10"
                                cy="10"
                                r="9.5"
                                fill="#2A2E43"
                                stroke="#78E295"
                              />
                              <circle
                                cx="26"
                                cy="10"
                                r="9.5"
                                fill="#F7F9FE"
                                stroke="#78E295"
                              />
                              <circle
                                cx="42"
                                cy="10"
                                r="9.5"
                                fill="#DE8452"
                                stroke="#78E295"
                              />
                              <circle
                                cx="57"
                                cy="10"
                                r="9.5"
                                fill="#24A6DE"
                                stroke="#78E295"
                              />
                            </svg>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            // className="nav-link"
                            className={
                              customActiveTab != "modern-tab"
                                ? "nav-link active"
                                : "nav-link"
                            }
                            id="classic-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#classic"
                            type="button"
                            role="tab"
                            aria-controls="classic"
                            aria-selected="false"
                            onClick={(e) => handleClick(e)}
                          >
                            <p> Choose Classic</p>
                            <p>
                              {" "}
                              <span className="upparcase-txt"> TT</span>{" "}
                              <span className="lowercase-txt">tt</span>
                            </p>
                            <svg
                              width="68"
                              height="20"
                              viewBox="0 0 68 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="10"
                                cy="10"
                                r="9.5"
                                fill="#B39446"
                                stroke="#409457"
                              />
                              <circle
                                cx="25.8333"
                                cy="10"
                                r="9.5"
                                fill="#FEFA97"
                                stroke="#409457"
                              />
                              <circle
                                cx="41.6667"
                                cy="10"
                                r="9.5"
                                fill="#D87BF9"
                                stroke="#409457"
                              />
                              <circle
                                cx="57.5"
                                cy="10"
                                r="9.5"
                                fill="#F7F9FE"
                                stroke="#409457"
                              />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <Link to="/Offer" >
                      <button className="cta-btn ">
                        {" "}
                        <span> Explore More </span>
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="tab-content" id="myTabContent">
                      <div
                        // className="tab-pane fade show active"
                        className={
                          customActiveTab == "modern-tab"
                            ? "tab-pane fade show active"
                            : "tab-pane fade "
                        }
                        id="modern"
                        role="tabpanel"
                        aria-labelledby="modern-tab"
                      >
                        <img src={Tab4} alt="" />
                      </div>
                      <div
                        className={
                          customActiveTab != "modern-tab"
                            ? "tab-pane fade show active"
                            : "tab-pane fade "
                        }
                        id="classic"
                        role="tabpanel"
                        aria-labelledby="classic-tab"
                      >
                        {" "}
                        <img src="images/tab-1/tab-4-1.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile view slider */}
        <div className="mobile-view-our-model">
          <Slider {...settings}>
            <div className=" mobile-card-body" >
              <div>
                <h3 className="text-center mob-card-header" style={{ fontWeight: "600" }}>
                  <span>
                    {foldDataHeader
                      ? parse(`${foldDataHeader.replace("<br/>", "")}`)
                      : ""}
                  </span>
                </h3>

                <div className="content-box mt-5">
                  <div className="row align-items-center">
                    <div className="col-sm-12">
                      <div className="main-box">
                        <div className="box">
                          <div className="badge-box">
                            <p>Flexible UI</p>
                          </div>
                          <div className="animation-border-box">
                            <div className="border-line"></div>
                            <div>
                              <img
                                src="images/tab-1/spinach-tab-logo.svg"
                                alt=""
                              />
                            </div>
                            <div>
                              <p>
                                POST /legal_entities/123456
                                <br />
                                {` { `}
                                <br />
                                “country”:”us”, “entity_country_info”:{`{...}`}{" "}
                                <br />
                                {` } `}
                              </p>
                            </div>
                          </div>
                        </div>
                        <img
                          src="images/tab-1/tab-bg-code.svg"
                          className=" ms-md-auto d-block p-api"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 mt-3">
                      <ul className="powerful-api">
                        {foldData &&
                          foldData.length &&
                          foldData.map((x) => {
                            return <li className="li-checkbox">{x}</li>;
                          })}
                      </ul>

                      <Link to="/Offer" >
                        <button
                          className="cta-btn mob-cta-btn-1"
                          style={{ position: "relative", left: "30px" }}
                        >
                          {" "}
                          <span> Explore More </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className=" mobile-card-body" >
              <div>
                <h3 className="text-center  mob-card-header" style={{ fontWeight: "600" }}>
                  <span>
                    {foldDataHeader
                      ? parse(`${foldDataSecondHeader.replace("<br/>", "")}`)
                      : ""}
                  </span>
                </h3>
                <div className="content-box mt-5">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <img src={Tab2} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-12 mt-3">
                      <p className="mob-foldDataSection">{foldDataSecond}</p>

                      <Link to="/Offer" >
                        <button className="cta-btn mob-cta-btn-2">
                          {" "}
                          <span> Explore More </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div className=" mobile-card-body" >
              <div>
                <h3 className="text-center  mob-card-header" style={{ fontWeight: "600" }}>
                  <span>
                    {foldDataHeader
                      ? parse(`${foldDataThirdHeader.replace("<br/>", "")}`)
                      : ""}
                  </span>
                </h3>
                <div className="content-box mt-5">
                  <div className="row align-items-center">
                    <div className="col-md-12" style={{ maxHeight: "330px" }}>
                      <img
                        src={Bank}
                        className="img-fluid imgbgmain-mobile"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <ul className="powerful-api">
                      {foldDataThird &&
                        foldDataThird.length &&
                        foldDataThird.map((details) => {
                          return <li className="li-checkbox">{details}</li>;
                        })}
                    </ul>

                    <Link to="/Offer">
                      <button
                        className="cta-btn mob-cta-btn-3"
                        style={{ position: "relative", left: "30px" }}
                      >
                        {" "}
                        <span> Explore More </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* 4th */}
            <div className=" mobile-card-body">
              <div>
                <h3 className="text-center  mob-card-header" style={{ fontWeight: "600" }}>
                  <span>
                    {foldDataHeader
                      ? parse(`${foldDataFourthHeader.replace("<br/>", "")}`)
                      : ""}
                  </span>
                </h3>
                <div className="content-box mt-5">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <p className="mob-foldDataForth">{foldDataFourth}</p>
                      <div className="tab-box-sec">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li
                            className={
                              customActiveTab == "modern-tab"
                                ? "nav-item active"
                                : "nav-item"
                            }
                            role="presentation"
                          >
                            <button
                              className={
                                customActiveTab == "modern-tab"
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                              id="modern-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#modern"
                              type="button"
                              role="tab"
                              aria-controls="modern"
                              aria-selected="true"
                              onClick={(e) => handleClick(e)}
                            >
                              <p> Choose Modern</p>
                              <p>
                                {" "}
                                <span className="upparcase-txt"> TT</span>{" "}
                                <span className="lowercase-txt">tt</span>
                              </p>
                              <svg
                                width="67"
                                height="20"
                                viewBox="0 0 67 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="10"
                                  cy="10"
                                  r="9.5"
                                  fill="#2A2E43"
                                  stroke="#78E295"
                                />
                                <circle
                                  cx="26"
                                  cy="10"
                                  r="9.5"
                                  fill="#F7F9FE"
                                  stroke="#78E295"
                                />
                                <circle
                                  cx="42"
                                  cy="10"
                                  r="9.5"
                                  fill="#DE8452"
                                  stroke="#78E295"
                                />
                                <circle
                                  cx="57"
                                  cy="10"
                                  r="9.5"
                                  fill="#24A6DE"
                                  stroke="#78E295"
                                />
                              </svg>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={
                                customActiveTab != "modern-tab"
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                              id="classic-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#classic"
                              type="button"
                              role="tab"
                              aria-controls="classic"
                              aria-selected="false"
                              onClick={(e) => handleClick(e)}
                            >
                              <p> Choose Classic</p>
                              <p>
                                {" "}
                                <span className="upparcase-txt"> TT</span>{" "}
                                <span className="lowercase-txt">tt</span>
                              </p>
                              <svg
                                width="68"
                                height="20"
                                viewBox="0 0 68 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="10"
                                  cy="10"
                                  r="9.5"
                                  fill="#B39446"
                                  stroke="#409457"
                                />
                                <circle
                                  cx="25.8333"
                                  cy="10"
                                  r="9.5"
                                  fill="#FEFA97"
                                  stroke="#409457"
                                />
                                <circle
                                  cx="41.6667"
                                  cy="10"
                                  r="9.5"
                                  fill="#D87BF9"
                                  stroke="#409457"
                                />
                                <circle
                                  cx="57.5"
                                  cy="10"
                                  r="9.5"
                                  fill="#F7F9FE"
                                  stroke="#409457"
                                />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <Link to="/Offer">
                        <button className="cta-btn mob-cta-btn-4">
                          {" "}
                          <span> Explore More </span>
                        </button>
                      </Link>
                    </div>
                    <div className="col-md-8">
                      <div className="tab-content" id="myTabContent">
                        <div
                          // className="tab-pane fade show active"
                          className={
                            customActiveTab == "modern-tab"
                              ? "tab-pane fade show active"
                              : "tab-pane fade "
                          }
                          id="modern"
                          role="tabpanel"
                          aria-labelledby="modern-tab"
                        >
                          <img src={Tab4} alt="" />
                        </div>
                        <div
                          className={
                            customActiveTab != "modern-tab"
                              ? "tab-pane fade show active"
                              : "tab-pane fade "
                          }
                          id="classic"
                          role="tabpanel"
                          aria-labelledby="classic-tab"
                        >
                          {" "}
                          <img src="images/tab-1/tab-4-1.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div id="dashboard-banker-sec" className="ptb_50">
        <h3 className="text-center" style={{ fontWeight: "600" }}>
          {inteli_Header && inteli_Header[5]}
        </h3>
        <div className="container">
          <div className="col-md-12 mx-auto d-block">
            <img
              src={dashboard_image}
              className="img-fluid mx-auto d-block admin-dashboard"
            />
            <div className="row col-md-10 mx-auto">
              {intelligentTextData?.map((x) => {
                return (
                  <div className="col-md-4">
                    <ul className="dashboard-checkbox">
                      <li className="das-checkbox-fonts">
                        {x?.attributes?.text}
                      </li>
                    </ul>
                  </div>
                );
              })}

              <div className="col-12">
                {" "}
                <button className="cta-btn mx-auto" onClick={handleShow}>
                  {" "}
                  <span> Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* desktop view goal based planinng */}
      <div id="trusted-by-banks" className="ptb_50  ">
        <img
          src="images/testimonial-bg-shape.svg"
          alt=""
          className="test-bg-image"
        />
        <div className="content-box">
          <div className="content">
            <div className="mx-auto d-block">
              <h3>{data.testimonial_Header}</h3>
              <p>{data.testimonial_desc}</p>
              <Link to="/ContactUs" target="_blank">
                <button className="cta-btn">
                  {" "}
                  <span style={{ fontFamily: "roundo" }}> Talk to us</span>
                </button>
              </Link>
            </div>
          </div>
          <TrustedByBanks
            display={display}
            testimonials={testimonials}
          ></TrustedByBanks>
        </div>
      </div>
      {/* mobile view goal based planinng */}
      <div className="mob-trusted">
        <div className="mx-auto d-block">
      
          <h3 className="text-start px-2">{data.testimonial_Header}</h3>
          <p className="text-start px-2">{data.testimonial_desc}</p>
    
          <MobileTrustedByBanks
          display={display}
          testimonials={testimonials}
        ></MobileTrustedByBanks>
        <Link to="/ContactUs" target="_blank">
        <div className="text-center">
        <button className="text-center trusted-btn">
          {" "}
          <span style={{ fontFamily: "roundo" }}> Talk to us</span>
        </button>
        </div>
      </Link>
        </div>
      </div>

      <div className="container">
        <div className="sec-change-line-blue"></div>
      </div>
    </section>
  );
}

export default Benefits;
