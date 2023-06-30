import React, { useEffect, useState } from "react";
import demos from "../../assets/images/solutions/demopupup.svg";
import acc from "../../assets/images/solutions/accrdn.svg";
import group11684 from "../../assets/images/solutions/Group11684.svg";
import group11682 from "../../assets/images/solutions/Group11682.svg";
import group11312 from "../../assets/images/solutions/Group11312.svg";
import group11442 from "../../assets/images/solutions/Group11442.svg";
import lock from "../../assets/images/services/lock1.svg";
import book from "../../assets/images/services/lock2.svg";
import crosshair from "../../assets/images/services/lock3.svg";
import aligncenter from "../../assets/images/services/lock4.svg";
import users from "../../assets/images/services/lock5.svg";

import ellipse64 from "../../assets/images/Ellipse64.svg";
import group11685 from "../../assets/images/Group11685.svg";
import classic from "../../assets/images/services/ChooseClassic.svg";
import modern from "../../assets/images/services/ChooseModern.svg";
import neo from "../../assets/images/services/ChooseNeo.svg";

import dash2 from "../../assets/images/solutions/2nddash.svg";
import "./services.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import client from "../../assets/images/test-bg.svg";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import user from "../../assets/images/user.png";
import parse from "html-react-parser";
import { doGet } from "../../api-services/axiosservice";
import { imageBaseUrl } from "../../api-services/config";
import MainLoader from "../common/Loader/main-loader";

function Service() {
  const { handleShow } = useOutletContext();
  const { pathname } = useLocation();
  const [homePageData, setHomeData] = useState({});
  const [offering, setOffering] = useState({});
  const [simplifiedData, setsimplifiedData] = useState({});
  const [dataServices, setDataServices] = useState({});
  const [testimonialServices, setTestimonialServices] = useState({});
  const [businessData, setBusinessData] = useState();
  const [bankLogoData, setBankLogoData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
    getAboutData();
  }, [pathname]);
  const getAboutData = async () => {
    setLoading(true);
    try {
      let homeData = doGet("/home?populate=*");
      let offeringData = doGet("/offering?populate=*");
      let testimonialData = doGet("/testimonals?populate=*");
      let simplified = doGet("/simplified-but-powerfuls?populate=*");
      let dataAsService = doGet("/data-as-services?populate=*");
      let businessGrowthData = doGet("/your-business-growths?populate=*");
      let bankLogo = doGet("/bank-growing-color-images?populate=*");

      let [
        homeDataSelected,
        offeringSelected,
        simplifiedSelected,
        testimonialSelected,
        dataAsServiceSelected,
        businessGrowthDataSelected,
        bankLogoData,
      ] = await Promise.all([
        homeData,
        offeringData,
        simplified,
        testimonialData,
        dataAsService,
        businessGrowthData,
        bankLogo,
      ]);
      // console.log("offeringSelected", offeringSelected.data.data.attributes);
      // console.log(
      //   "section_image1",
      //   offeringSelected.data.data.attributes.section1_image.data.attributes.url
      // );

      // console.log("testimonialSelected_offering", testimonialSelected);

      setHomeData(homeDataSelected.data.data.attributes);
      setOffering(offeringSelected.data.data.attributes);
      setsimplifiedData(simplifiedSelected.data.data);
      setDataServices(dataAsServiceSelected.data.data);
      setTestimonialServices(testimonialSelected.data.data);
      setBusinessData(businessGrowthDataSelected.data.data);
      setBankLogoData(bankLogoData.data.data[0].attributes.image.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // console.log("offering", offering);
  // console.log("offering", offering && offering.offeringImages && offering.offeringImages.data &&  offering.offeringImages.data[0].attributes.url );
  // console.log("  simplifiedSelected", simplifiedData);
  // console.log("  simplifiedSelected", dataServices);
  // console.log(testimonialServices);
  // console.log("homePageData", homePageData);
  // console.log("businessData", businessData);
  // console.log(
  //   "businessData123",
  //   offering &&
  //     offering.section1_image &&
  //     offering.section1_image.data.attributes.url
  // );
  console.log("offering", offering);
  // console.log("Hello", offering.section1_Heading);
  // console.log("bankLogoData", bankLogoData.data);
  if (loading) {
    return <MainLoader />;
  } else {
    return (
      <>
        <section
          id="inner-banner-sec"
          style={{ width: "100%", overflow: "hidden" }}
        >
          <div className="banner-box" style={{ height: "512px" }}>
            <div className="container">
              <div className="content-box">
                <div className="sec-title">
                  <h1>
                   {offering && offering.Title ? offering.Title : ""}{" "}
                   <br />{" "}
                   <span>
                     {" "}
                     {offering && offering.subTitle ? offering.subTitle : ""}{" "}
                   </span>
                   <br />
                  </h1>
                </div>
                <p>
                  {parse(
                    `${offering && offering.TitleDescription ? offering.TitleDescription : ""}`
                  )}
                </p>
              </div>
            </div>
          </div>
          {/* desktop view simplified but powerful*/}
          <div style={{ backgroundColor: "#45AE63", height: "556px" }} className="desktop-simplified">
            <div
              className="col-10 mx-auto d-flex position-relative row"
              style={{ top: "50px" }}
              // style={{ backgroundColor: "#45AE63", height: "656px" }}
            >
              <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                <div className="simplified-api">
                  {offering.section1_Heading}
                </div>
                <div
                  className="col-4 d-flex flex-column gap-3 "
                  style={{ position: "relative", top: "27px" }}
                >
                  {simplifiedData &&
                    simplifiedData.length &&
                    simplifiedData.map((x) => {
                      return (
                        <div
                          className="data-service-bg d-flex align-items-center"
                          style={{
                            height: "60px",
                            width: "372px",
                            backgroundColor: "#5ACC79",
                          }}
                        >
                          <div className="col-2 p-2">
                            {x &&
                            x.attributes &&
                            x.attributes.avtar &&
                            x.attributes.avtar.data &&
                            x.attributes.avtar.data.attributes &&
                            x.attributes.avtar.data.attributes.url ? (
                              <img
                                loading="lazy"
                                src={`${imageBaseUrl}${x.attributes.avtar.data.attributes.url}`}
                                style={{ color: "black" }}
                              />
                            ) : null}
                          </div>
                          <div className="col-10">{x.attributes.text}</div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12 position-relative">
                {" "}
                <div className="position-absolute" style={{ top: "10%" }}>
                  {" "}
                  {offering &&
                  offering.section1_image &&
                  offering.section1_image.data &&
                  offering.section1_image.data.attributes &&
                  offering.section1_image.data.attributes.url ? (
                    <img
                      loading="lazy"
                      src={`${imageBaseUrl}${offering.section1_image.data.attributes.url}`}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* mobile view simplified but powerful*/}
          <div style={{ backgroundColor: "#45AE63"}} className="mob-simplified">
          <p class="text-center"> {offering.section1_Heading}</p>
          <div class="container">
          <div
          className="col-4 d-flex flex-column gap-3 "
          style={{ position: "relative", top: "-9px" }}
        >
          {simplifiedData &&
            simplifiedData.length &&
            simplifiedData.map((x) => {
              return (
                <div
                  className="data-service-bg d-flex align-items-center"
                  style={{
                    height: "60px",
                    width: "367px",
                    backgroundColor: "#5ACC79",
                  }}
                >
                  <div className="col-2 p-2">
                    {x &&
                    x.attributes &&
                    x.attributes.avtar &&
                    x.attributes.avtar.data &&
                    x.attributes.avtar.data.attributes &&
                    x.attributes.avtar.data.attributes.url ? (
                      <img
                        loading="lazy"
                        src={`${imageBaseUrl}${x.attributes.avtar.data.attributes.url}`}
                        style={{ color: "black" }}
                      />
                    ) : null}
                  </div>
                  <div className="col-10">{x.attributes.text}</div>
                </div>
              );
            })}
        </div>
    
        
        </div>
          </div>


       {/* desktop view Bank ready experience */}   
          <div
            className=" desktop-bank-ready-exp  col-10 mx-auto d-flex row "
            style={{ backgroundColor: "#FFF", height: "550px" }}
          >
            <div className="col-xl-6 col-md-6 col-sm-12 ">
              <div className="experience"> {parse(`${offering.Heading}`)}</div>
              <div>
                <p
                  className="exp-p"
                  style={{
                    position: "relative",
                    top: "130px",
                    maxWidth: "600px",
                  }}
                >
                  {parse(`${offering.Description}`)}
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12 mt-5">
              <div>
                {offering &&
                offering.section2_image &&
                offering.section2_image.data &&
                offering.section2_image.data.attributes &&
                offering.section2_image.data.attributes.url ? (
                  <img
                    loading="lazy"
                    src={`${imageBaseUrl}${offering.section2_image.data.attributes.url}`}
                  />
                ) : null}
              </div>
            </div>
          </div>
 


          <div
              style={{ backgroundColor: "#45AE63", height: "595px" }}
          >
            <div
              className="col-10 d-flex mx-auto mt-5 justify-content-center"
              style={{ position: "relative", bottom: "42px " }}
            >
              <div
                className="col-10 d-flex  "
                style={{
                  background: "#EEF6F7",
                  borderRadius: "6.13298px",
                }}
              >
                <div className="col-7 d-flex">
                  <div className="col-1 mt-3 p-2">
                    <img loading="lazy" src={ellipse64} />
                  </div>
                  <div className="col-11 p-1 mx-3">
                    <div className="mt-3">
                      <div
                        style={{
                          fontFamily: "Roundo",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "18px",
                          color: " #353535",
                        }}
                        onClick={handleShow}
                      >
                        Book a demo now
                      </div>

                      <div
                        style={{
                          fontFamily: "Roundo",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "17px",
                          color: "#353535",
                        }}
                      >
                        Can’t find the answer you’re looking for? Get in
                        touch with us
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5 d-flex justify-content-end p-3">
                  {" "}
                  <button
                    className="cta-btn first-color m-0 mt-2"
                    onClick={handleShow}
                    style={{ background: "#3FCA66" }}
                  >
                    Book a Demo{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-10 d-flex  mx-auto row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="position-relative">
                  <div className="data-service mb-3">
                    {" "}
                    {offering.section3_Heading}
                  </div>
                  <div className="col-4 d-flex flex-column gap-3">
                    {dataServices &&
                      dataServices.length &&
                      dataServices.map((x) => {
                        return (
                          <div
                            className="data-service-bg d-flex align-items-center"
                            style={{
                              height: "60px",
                              width: "372px",
                              backgroundColor: "#5acc79",
                            }}
                          >
                            <div className="col-2 p-2">
                              <img
                                loading="lazy"
                                src={`${imageBaseUrl}${x.attributes.av.data.attributes.url}`}
                                style={{ color: "black" }}
                              />
                            </div>
                            <div className="col-10">{x.attributes.text}</div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12 position-relative">
                {" "}
                <div className="position-absolute">
                  {" "}
                  {offering &&
                  offering.section3_image &&
                  offering.section3_image.data &&
                  offering.section3_image.data.attributes &&
                  offering.section3_image.data.attributes.url ? (
                    <img
                      loading="lazy"
                      src={`${imageBaseUrl}${offering.section3_image.data.attributes.url}`}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="" style={{ backgroundColor: "#FFF" }}>
            <div className="col-10 mx-auto d-flex row">
              <div className="col-xl-6 col-md-6 col-sm-12 mt-5">
                <div className="mt-5">
                  <p className="cust">{parse(`${offering.Section4Heading}`)}</p>
                </div>
                <div>
                  <p className="plan-big-p">
                    {parse(`${offering.Section4description}`)}
                  </p>
                </div>
                <div className="col-7 d-flex gap-3">
                  <div>
                    <img loading="lazy" src={classic} alt="choose Classic" />
                  </div>
                  <div>
                    <img loading="lazy" src={modern} alt="choose Classic" />
                  </div>
                  <div>
                    <img loading="lazy" src={neo} alt="choose Classic" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12 mt-5">
                {" "}
                <div className="">
                  {offering &&
                  offering.section4_image &&
                  offering.section4_image.data &&
                  offering.section4_image.data.attributes &&
                  offering.section4_image.data.attributes.url ? (
                    <img
                      loading="lazy"
                      src={`${imageBaseUrl}${offering.section4_image.data.attributes.url}`}
                      style={{ width: "800.9px", height: "430.3px" }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-10 d-flex mx-auto demo-button mt-5 justify-content-center">
              <div
                className="col-10 d-flex row  "
                style={{
                  background: "#EEF6F7",
                  boxShadow: "0px 36px 48px rgba(236, 236, 236, 0.7)",
                  borderRadius: "6.13298px",
                  boxSizing: "border-box",
                }}
              >
                <div className="col-xl-7 col-md-7 col-sm-12 d-flex">
                  <div className="col-1 mt-3 p-1">
                    <img loading="lazy" src={ellipse64} />
                  </div>
                  <div className="col-11 p-1 mx-3">
                    <div className="mt-3">
                      <div
                        style={{
                          fontFamily: "Roundo",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "18px",
                          color: " #353535",
                        }}
                        onClick={handleShow}
                      >
                        Book a demo now
                      </div>

                      <div
                        style={{
                          fontFamily: "Roundo",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "17px",
                          color: "#353535",
                        }}
                      >
                        Can’t find the answer you’re looking for? Get in
                        touch with us
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-5 col-sm-12 d-flex justify-content-end p-3">
                  {" "}
                  <button
                    className="cta-btn first-color m-0 mt-2"
                    style={{ background: "#3FCA66" }}
                    onClick={handleShow}
                  >
                    Book a Demo{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-10 d-flex mx-auto demo-button-business mt-5 row">
              <div className="col-xl-5 col-md-5 col-sm-12" style={{ zIndex: "1" }}>
                <div className="mt-2">
                  <div className="b-growth">
                    {" "}
                    {parse(`${offering.Your_business_growth_Header}`)}
                  </div>
                </div>

                <div className="box-sec mt-2">
                  <div className="first-row d-flex">
                    <div className="box-first">
                      <h4 style={{ fontFamily: "Roundo" }}>
                        {" "}
                        {businessData &&
                          businessData.length > 0 &&
                          businessData[0].attributes &&
                          businessData[0].attributes.header}
                      </h4>
                      <p style={{ fontFamily: "Roundo" }}>
                        {parse(
                          `${
                            businessData &&
                            businessData.length > 0 &&
                            businessData[0].attributes &&
                            businessData[0].attributes.text
                          }`
                        )}
                      </p>
                    </div>
                    <div className="box-second">
                      <h4 style={{ fontFamily: "Roundo" }}>
                        {businessData &&
                          businessData.length > 0 &&
                          businessData[1].attributes &&
                          businessData[1].attributes.header}
                      </h4>
                      <p style={{ fontFamily: "Roundo" }}>
                        {parse(
                          `${
                            businessData &&
                            businessData.length > 0 &&
                            businessData[1].attributes &&
                            businessData[1].attributes.text
                          }`
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="second-row d-flex">
                    <div className="box-first">
                      <h4 style={{ fontFamily: "Roundo" }}>
                        {businessData &&
                          businessData.length > 0 &&
                          businessData[2].attributes &&
                          businessData[2].attributes.header}
                      </h4>
                      <p style={{ fontFamily: "Roundo" }}>
                        {parse(
                          `${
                            businessData &&
                            businessData.length > 0 &&
                            businessData[2].attributes &&
                            businessData[2].attributes.text
                          }`
                        )}
                      </p>
                    </div>
                    <div className="box-second">
                      <h4 style={{ fontFamily: "Roundo" }}>
                        {businessData &&
                          businessData.length > 0 &&
                          businessData[3].attributes &&
                          businessData[3].attributes.text}
                      </h4>
                      <button
                        className="cta-btn first-color m-0 mt-2"
                        onClick={handleShow}
                        style={{ background: "#3FCA66" }}
                      >
                        Book a Demo{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-7 col-md-7 col-sm-12"
                style={{ position: "relative", right: " 5px" }}
              >
                {offering &&
                offering.offeringImages &&
                offering.offeringImages.data &&
                offering.offeringImages.data.attributes &&
                offering.offeringImages.data.attributes.url ? (
                  <img
                    src={`${imageBaseUrl}${offering.offeringImages.data.attributes.url}`}
                  />
                ) : null}
              </div>
            </div>
            <div
              className="mt-5"
              style={{ position: "relative", left: "-69px" }}
            >
              <img loading="lazy" src={"demos"} />
            </div>
            <div style={{ position: "relative", left: "-19px" }}>
              <img src={"group11612"} />
            </div>
            <div style={{ backgroundColor: "#45AE63" }}>
              <div id="trusted-by-banks" className="ptb_50">
                <div className="content-box d-flex">
                  <div className="content">
                    <div className="mx-auto d-block">
                      <h3
                        style={{
                          textAlign: "start",
                          fontFamily: "roundo",
                          fontSize: "32px",
                          fontWeight: "600",
                          fontStyle: "normal",
                          marginBottom: "20px",
                          textShadow: "0px 4px 13px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        {homePageData.testimonial_Header}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Roundo",
                          fontStyle: "normal",
                          textAlign: "left",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {homePageData.testimonial_desc}
                      </p>
                      <Link to="/ContactUs" target="_blank">
                        <button className="cta-btn">
                          {" "}
                          <span style={{ fontFamily: "roundo" }}>
                            {" "}
                            Talk to us
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="slider-sec">
                    {!!testimonialServices && !!testimonialServices.length && (
                      <ReactOwlCarousel
                        className="trusted-by-banks-carousel owl-carousel owl-theme-default mt-4 "
                        responsive={{
                          0: {
                            items: 1.2,
                          },
                          600: {
                            items: 1.5,
                          },
                          1000: {
                            items: 1.5,
                          },
                          1200: {
                            items: 1.3,
                          },
                        }}
                        loop={true}
                        margin={30}
                        nav={true}
                      >
                        {!!testimonialServices &&
                          !!testimonialServices.length &&
                          testimonialServices.map(
                            (item) => (
                              console.log(item.attributes, "somthing"),
                              (
                                <div className="card-item">
                                  <p
                                    className="sectxt-para"
                                    style={{
                                      fontFamily: "roundo",
                                      textAlign: "start",
                                      marginLeft: "40px",
                                    }}
                                  >
                                    {item.attributes.Description}
                                  </p>
                                  <div className="user-details">
                                    <div>
                                      <img
                                        src={`${imageBaseUrl}${item.attributes.clientImage.data.attributes.url}`}
                                        alt="user"
                                        className="sec-img"
                                      />
                                    </div>
                                    <div>
                                      <p className="sectxt-title">
                                        {" "}
                                        {item.attributes.clientName}
                                      </p>
                                      <p className="sectxt-subtitle">
                                        {item.attributes.clientCompany}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )
                            )
                          )}
                      </ReactOwlCarousel>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="branded-link-of-spinach">
                <div className="container">
                  <p>{offering.bank_logo_Heading}</p>
                  <div className="container">
                    {!!bankLogoData && !!bankLogoData.length && (
                      <ReactOwlCarousel
                        className="brand owl-carousel owl-theme-default  d-flex align-items-center"
                        loop
                        autoplay={true}
                        autoplayHoverPause={true}
                        autoplayTimeout={3000}
                        smartSpeed={3000}
                      >
                        {!!bankLogoData &&
                          !!bankLogoData.length &&
                          bankLogoData.map((item) => {
                            // console.log("bala sir",item.Heading)
                            return (
                              <div>
                                {item &&
                                item.attributes &&
                                item.attributes.url ? (
                                  <img
                                    loading="lazy"
                                    src={`${imageBaseUrl}${item.attributes.url}`}
                                    className="img-fluid mx-auto d-block"
                                  />
                                ) : null}
                              </div>
                            );
                          })}
                      </ReactOwlCarousel>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <section
              id="new-age-bank"
              className="ptb_50  mt-3"
              style={{ background: "#fff" }}
            >
              <div className="container">
                <div className="sec-title">
                  <h4>
                    Made for New <br /> Age Banks
                  </h4>
                </div>
                <p className="text-center mt-4">
                  Made with{" "}
                  <img
                    loading="lazy"
                    src="../images/clayfin.svg"
                    className="heart"
                    alt=""
                  />{" "}
                  by
                  <Link
                    to="https://www.clayfin.com/"
                    target="_blank"
                    style={{ color: "gray", marginLeft: "5px" }}
                  >
                    Clayfin
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </section>
      </>
    );
  }
}

export default Service;
