import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { doGet } from "../../api-services/axiosservice";
import parse from "html-react-parser";
import { imageBaseUrl } from "../../api-services/config";
import MainLoader from "../common/Loader/main-loader";
export default function About() {
  const [loading, setLoading] = useState(false);
  const [aboutPageData, setAboutData] = useState({});
  const [leaderShipList, setLeaderShipList] = useState({});
  const [bankLogoData, setBankLogoData] = useState({});
  const [intoducingCardData, setIntoducingCardData] = useState([]);
  useEffect(() => {
    getAboutData();
  }, []);
  const getAboutData = async () => {
    setLoading(true);
    try {
      let aboutData = doGet("/about?populate=*");
      let introducingData = doGet("/introducing-card-sections?populate=*");
      let leaderData = doGet("/leadership-lists?populate=*");
      let bankLogo = doGet("/bank-growing-color-images?populate=*");
      let [
        aboutDataSelected,
        introducingDataSelected,
        leaderDataSelected,
        bankLogoData,
      ] = await Promise.all([aboutData, introducingData, leaderData, bankLogo]);
      setAboutData(aboutDataSelected.data.data);
      setIntoducingCardData(introducingDataSelected.data.data);
      setLeaderShipList(leaderDataSelected.data.data);
      setBankLogoData(bankLogoData.data.data[0].attributes.image.data);
      console.log("dkfjgh", leaderDataSelected.data.data);
      // console.log(
      //   "introducingData",
      //   introducingDataSelected.data.data
      // );
      setLoading(false);
      // setImageDta(aboutDataSelected.data.data.attributes.AboutImages.data)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  console.log("aboutPageData", aboutPageData);
  // console.log("leaderShipList", leaderShipList),
  //   console.log(
  //     "aboutPageData",
  //     aboutPageData &&
  //       aboutPageData.attributes &&
  //       aboutPageData.attributes.AboutImages.data[0].attributes.url
  //   );
  if (loading) {
    return <MainLoader />;
  } else {
    return (
      <article>
        <section id="inner-banner-sec">
          <div className="banner-box">
            <div className="container">
              <div className="content-box">
                <div className="sec-title">
                  <h1>
                    {
                        aboutPageData && aboutPageData.attributes
                          ? aboutPageData.attributes.title
                          : ""
                      }{" "}
                      <br />{" "}
                      <span>
                        {" "}
                        {aboutPageData && aboutPageData.attributes
                          ? aboutPageData.attributes.subtitle
                          : ""}{" "}
                      </span>
                      <br />
                  </h1>
                </div>
                <p>
                  {parse(
                    `${
                      aboutPageData && aboutPageData.attributes
                        ? aboutPageData.attributes.Description
                        : ""
                    }`
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="inner-banner-img img-fluid mx-auto d-block">
              <div className="row col-lg-10 mx-auto">
                <div className="col-md-5">
                  {aboutPageData &&
                  aboutPageData.attributes &&
                  aboutPageData.attributes.AboutImages &&
                  aboutPageData.attributes.AboutImages.data &&
                  aboutPageData.attributes.AboutImages.data[0] &&
                  aboutPageData.attributes.AboutImages.data[0].attributes
                    .url ? (
                    <img
                      loading="lazy"
                      src={`${imageBaseUrl}${
                        aboutPageData &&
                        aboutPageData.attributes &&
                        aboutPageData.attributes.AboutImages &&
                        aboutPageData.attributes.AboutImages.data &&
                        aboutPageData.attributes.AboutImages.data[0] &&
                        aboutPageData.attributes.AboutImages.data[0].attributes
                          .url
                      }`}
                      alt=""
                      className="first-image"
                    />
                  ) : null}
                </div>
                <div className="col-md-2">
                  <div className="row d-md-block">
                    <div className="col-6 ps-0  ps-1 px-md-0 col-md-12 ">
                      {aboutPageData &&
                      aboutPageData.attributes &&
                      aboutPageData.attributes.AboutImages &&
                      aboutPageData.attributes.AboutImages.data &&
                      aboutPageData.attributes.AboutImages.data[1] &&
                      aboutPageData.attributes.AboutImages.data[1].attributes
                        .url ? (
                        <img
                          loading="lazy"
                          src={`${imageBaseUrl}${
                            aboutPageData &&
                            aboutPageData.attributes &&
                            aboutPageData.attributes.AboutImages &&
                            aboutPageData.attributes.AboutImages.data &&
                            aboutPageData.attributes.AboutImages.data[1] &&
                            aboutPageData.attributes.AboutImages.data[1]
                              .attributes.url
                          }`}
                          alt=""
                          className="second-image"
                        />
                      ) : null}
                    </div>

                    <div className="col-6 col-md-12 px-md-0 pe-md-1 ">
                      {aboutPageData &&
                      aboutPageData.attributes &&
                      aboutPageData.attributes.AboutImages &&
                      aboutPageData.attributes.AboutImages.data &&
                      aboutPageData.attributes.AboutImages.data[2] &&
                      aboutPageData.attributes.AboutImages.data[2].attributes
                        .url ? (
                        <img
                          loading="lazy"
                          src={`${imageBaseUrl}${
                            aboutPageData &&
                            aboutPageData.attributes &&
                            aboutPageData.attributes.AboutImages &&
                            aboutPageData.attributes.AboutImages.data &&
                            aboutPageData.attributes.AboutImages.data[2] &&
                            aboutPageData.attributes.AboutImages.data[2]
                              .attributes.url
                          }`}
                          alt=""
                          className="third-image"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  {aboutPageData &&
                  aboutPageData.attributes &&
                  aboutPageData.attributes.AboutImages &&
                  aboutPageData.attributes.AboutImages.data &&
                  aboutPageData.attributes.AboutImages.data[3] &&
                  aboutPageData.attributes.AboutImages.data[3].attributes
                    .url ? (
                    <img
                      loading="lazy"
                      src={`${imageBaseUrl}${
                        aboutPageData &&
                        aboutPageData.attributes &&
                        aboutPageData.attributes.AboutImages &&
                        aboutPageData.attributes.AboutImages.data &&
                        aboutPageData.attributes.AboutImages.data[3] &&
                        aboutPageData.attributes.AboutImages.data[3].attributes
                          .url
                      }`}
                      alt=""
                      className="four-image"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container"></div>
        <section id="our-story">
          <div className="container">
            <h2> {parse(`${aboutPageData?.attributes?.Our_Story_Header}`)}</h2>
            <div className="row">
              <div className="col-md-5  my-md-0 my-3 me-auto d-block">
                <p>
                  {parse(`${aboutPageData?.attributes?.Our_Story_Description}`)}
                </p>
              </div>
              <div className="col-md-5 my-md-0 my-3  me-auto d-block">
                <p>
                  {parse(
                    `${aboutPageData?.attributes?.Our_Story_Description1}`
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          id="smart-bytes-about"
          className="ptb_50 "
          style={{ padding: "0px 0px" }}
        >
          <div className="container">
            <div className="bg-image">
              <div className="content-box">
                <div className="txt-title-sm">
                  <p>Introducing</p>
                </div>
                <div className="title-box">
                  <img
                    loading="lazy"
                    src="images/spinach-logo-about.svg"
                    alt="spinach-logo-about"
                    className="img-fluid mx-auto "
                  />
                </div>
              </div>{" "}
              <img
                loading="lazy"
                src="images/introduction-image.svg"
                alt=""
                className="line-pattern"
              />
              <div className="row">
                {intoducingCardData &&
                  intoducingCardData.map((item) => {
                    return (
                      <div className="col-md-6 col-lg-4   my-2 my-lg-0">
                        <div className="box-sec">
                          <p>{item.attributes.title}</p>
                          <div className="content-box">
                            <h4> {parse(`${item.attributes.description}`)}</h4>
                            {item &&
                              item.attributes &&
                              item.attributes.emoji &&
                              item.attributes.emoji.data &&
                              item.attributes.emoji.data.attributes && item.attributes.emoji.data.attributes.url ? (
                            <img
                              loading="lazy"
                              src={`${imageBaseUrl}${item.attributes.emoji.data.attributes.url}`}
                              alt=""
                              className="icon"
                            />
                            ):null}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="bank-costomer-box">
              <div className="content-box">
                <p>
                  Tailor made for both of you’re{" "}
                  <span className="badge me-2">Banks</span> &{" "}
                  <span className="badge ms-2">Customers</span>
                </p>
              </div>
            </div>
            <div className="mission-box">
              <h3>
                {parse(
                  `${aboutPageData?.attributes?.Our_Mission_Vision_Header}`
                )}
              </h3>
              <p>
                {parse(
                  `${aboutPageData?.attributes?.Our_Mission_Vision_Description}`
                )}
              </p>
            </div>
          </div>
        </div>

        <div id="ledership-page">
          <div className="container">
            <div className="content-box">
              <h3>
                {" "}
                {parse(`${aboutPageData?.attributes?.Leadership_Header}`)}
              </h3>
              <p>
                {parse(`${aboutPageData?.attributes?.Leadership_Description}`)}
              </p>
              <div className="row mt-md-3 mt-2">
                {leaderShipList &&
                  leaderShipList.length &&
                  leaderShipList.map((x) => {
                    return (
                      <div className="col-xl-4   col-md-6">
                        <div className="box">
                          <div>
                            {x &&
                            x.attributes &&
                            x.attributes.Leader_Photo &&
                            x.attributes.Leader_Photo.data &&
                            x.attributes.Leader_Photo.data.attributes &&
                            x.attributes.Leader_Photo.data.attributes.url ? (
                              <img
                                loading="lazy"
                                src={`${imageBaseUrl}${x.attributes.Leader_Photo.data.attributes.url}`}
                                alt="mia ward"
                                className="img-fluid"
                              />
                            ) : null}
                          </div>
                          <div className="content">
                            <h5>{x.attributes.Leader_Name}</h5>
                            <h6>{x.attributes.Leader_Role}</h6>
                            <a href={x.attributes.Linkeden_ID} target="_blank">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                className="icon"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.429 6.969H11.143V8.819C11.678 7.755 13.05 6.799 15.111 6.799C19.062 6.799 20 8.917 20 12.803V20H16V13.688C16 11.475 15.465 10.227 14.103 10.227C12.214 10.227 11.429 11.572 11.429 13.687V20H7.429V6.969V6.969ZM0.57 19.83H4.57V6.799H0.57V19.83V19.83ZM5.143 2.55C5.14315 2.88528 5.07666 3.21724 4.94739 3.52659C4.81812 3.83594 4.62865 4.11651 4.39 4.352C3.9064 4.83262 3.25181 5.10165 2.57 5.1C1.88939 5.09954 1.23631 4.8312 0.752 4.353C0.514211 4.11671 0.325386 3.83582 0.196344 3.52643C0.0673015 3.21704 0.000579132 2.88522 0 2.55C0 1.873 0.27 1.225 0.753 0.747C1.23689 0.268158 1.89024 -0.000299211 2.571 2.50265e-07C3.253 2.50265e-07 3.907 0.269 4.39 0.747C4.872 1.225 5.143 1.873 5.143 2.55Z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <Link to="/offer" target="_blank">
          <div className="explore-sec">
            <div className="container">
              <div className="title-sm">
                <Link to="/offer" target="_blank">
                  <sup>
                    <img
                      loading="lazy"
                      src="images/heart.svg"
                      className="heart"
                      alt=""
                    />
                  </sup>
                  Explore our offerings
                  <img loading="lazy" src="images/arrow.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
        <div className="branded-link-of-spinach">
          <div className="container">
            <p>{aboutPageData&&aboutPageData.attributes&&aboutPageData.attributes.bank_logo_Heading} </p>
            <div className="container">
              {!!bankLogoData && !!bankLogoData.length && (
                <ReactOwlCarousel
                  className="brand owl-carousel owl-theme-default  d-flex align-items-center"
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
                      items: 4,
                    },
                  }}
                >
                  {!!bankLogoData &&
                    !!bankLogoData.length &&
                    bankLogoData.map((item) => (
                      <div>
                        {item && item.attributes && item.attributes.url ? (
                          <img
                            loading="lazy"
                            src={`${imageBaseUrl}${item.attributes.url}`}
                            className="img-fluid mx-auto d-block"
                          />
                        ) : null}
                      </div>
                    ))}
                </ReactOwlCarousel>
              )}
            </div>
          </div>
        </div>

        <section id="new-age-bank" className="ptb_50  mt-3">
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
      </article>
    );
  }
}
