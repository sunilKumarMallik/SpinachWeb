import React, { useEffect, useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import clay from "../../assets/images/clayfin.svg";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import parse from "html-react-parser";
import { doGet } from "../../api-services/axiosservice";
import { imageBaseUrl } from "../../api-services/config";
import MainLoader from "../common/Loader/main-loader";

export default function CaseStudy() {
  const { handleShow } = useOutletContext();
  const { pathname } = useLocation();
  const [casestydyList, setCasestydyList] = useState();
  const [iotData, setIotData] = useState();
  const [ecommerceData, setEcommerceData] = useState();
  const [bankLogoData, setBankLogoData] = useState({});
  const [loading, setLoading] = useState(false);
  const [downloadPdf, setDownloadPdf] = useState({});

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
      let caseStudyData = doGet("/case-study?populate=*");
      let iotData = doGet("/designing-for-io-t-and-wearables?populate=*");
      let ecommerceData = doGet(
        "/disrupting-the-future-of-e-commerces?populate=*"
      );
      let bankLogo = doGet("/bank-growing-color-images?populate=*");
      let pdfData = doGet("/case-study-pdfs?populate=*");

      let [
        caseStudySelected,
        iotDataSelected,
        ecommerceDataSelected,
        bankLogoData,
        pdfDataSelected,
      ] = await Promise.all([
        caseStudyData,
        iotData,
        ecommerceData,
        bankLogo,
        pdfData,
      ]);
      console.log("pdfDataSelected", pdfDataSelected.data.data);
      console.log(
        "pdfDataSelected",
        pdfDataSelected &&
          pdfDataSelected.data &&
          pdfDataSelected.data.data[0].attributes.pdfFile.data[0].attributes.url
      );
      setCasestydyList(caseStudySelected.data.data.attributes);
      setIotData(iotDataSelected.data.data);
      setEcommerceData(ecommerceDataSelected.data.data);
      setBankLogoData(bankLogoData.data.data[0].attributes.image.data);
      setDownloadPdf(pdfDataSelected.data.data);
      // console.log("dkfjgh", caseStudySelected.data.data.attributes);
      // console.log("iotDataSelected", iotDataSelected.data);
      // console.log("ecommerceDataSelected", ecommerceDataSelected.data);

      // setImageDta(aboutDataSelected.data.data.attributes.AboutImages.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  console.log("downloadPdf", downloadPdf);
  let downloadPdf1 =
    downloadPdf &&
    downloadPdf[0] &&
    downloadPdf[0].attributes &&
    downloadPdf[0].attributes.pdfFile &&
    downloadPdf[0].attributes.pdfFile.data[0] &&
    downloadPdf[0].attributes.pdfFile.data[0].attributes &&
    downloadPdf[0].attributes.pdfFile.data[0].attributes.url;
  console.log("downloadPdf1", downloadPdf1);
  let downloadPdf2 =
    downloadPdf &&
    downloadPdf[1] &&
    downloadPdf[1].attributes &&
    downloadPdf[1].attributes.pdfFile &&
    downloadPdf[1].attributes.pdfFile.data[0] &&
    downloadPdf[1].attributes.pdfFile.data[0].attributes &&
    downloadPdf[1].attributes.pdfFile.data[0].attributes.url;
  console.log("downloadPdf2", downloadPdf2);
  let downloadPdf3 =
    downloadPdf &&
    downloadPdf[2] &&
    downloadPdf[2].attributes &&
    downloadPdf[2].attributes.pdfFile &&
    downloadPdf[2].attributes.pdfFile.data[0] &&
    downloadPdf[2].attributes.pdfFile.data[0].attributes &&
    downloadPdf[2].attributes.pdfFile.data[0].attributes.url;
  console.log("downloadPdf3", downloadPdf3);
  // let textData =iotData[0].attributes.text ;
  // const myArray = textData.split(" ");
  // console.log(
  //   "iotData",
  //   iotData &&
  //     iotData.length > 0 &&
  //     iotData[0].attributes &&
  //     iotData[0].attributes.header
  // );
  // console.log("ecommerceData", ecommerceData);
  // console.log("myArray",myArray[0]);
  // console.log("myArray2",myArray[""]);
  // console.log(
  //   "casestydyList",
  //   casestydyList &&
  //     casestydyList.pdf_file &&
  //     casestydyList.pdf_file.data &&
  //     casestydyList.pdf_file.data.attributes &&
  //     casestydyList.pdf_file.data.attributes.url
  // );
  // console.log(
  //   "casestydyList",
  //   casestydyList && casestydyList.avtar_iot_werables.data.attributes.url
  // );
  // console.log("casestydyList",casestydyList)
  if (loading) {
    return <MainLoader />;
  } else {
    return (
      <main id="case-study">
        <article>
          <section id="inner-banner-sec">
            <div className="banner-box">
              <div className="container">
                <div className="content-box">
                  <div className="sec-title">
                    <h1>
                      {casestydyList && casestydyList.Main_Header1
                        ? casestydyList.Main_Header1
                        : ""}{" "}
                      <br />{" "}
                      <span>
                        {" "}
                        {casestydyList && casestydyList.Main_Header2
                          ? casestydyList.Main_Header2
                          : ""}{" "}
                      </span>
                      <br />
                    </h1>
                  </div>
                  <p>
                    {parse(
                      `${
                        casestydyList && casestydyList.main_header_Description
                          ? casestydyList.main_header_Description
                          : ""
                      }`
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="wearables-sec">
            <section className="ptb_50 pt-0">
              <div className="container">
                <div className="row align-items-end containt-box">
                  <div className="col-md-6">
                    {casestydyList &&
                    casestydyList.avtar_iot_werables &&
                    casestydyList.avtar_iot_werables.data &&
                    casestydyList.avtar_iot_werables.data &&
                    casestydyList.avtar_iot_werables.data.attributes &&
                    casestydyList.avtar_iot_werables.data.attributes.url ? (
                      <img
                        loading="lazy"
                        src={`${imageBaseUrl}${
                          casestydyList &&
                          casestydyList.avtar_iot_werables &&
                          casestydyList.avtar_iot_werables.data &&
                          casestydyList.avtar_iot_werables.data &&
                          casestydyList.avtar_iot_werables.data.attributes &&
                          casestydyList.avtar_iot_werables.data.attributes.url
                        }`}
                        alt="Designing for IoT & Wearables"
                        title="Designing for IoT & Wearables"
                        className="img-fluid"
                      />
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <h3>
                      {parse(
                        `${
                          casestydyList &&
                          casestydyList.section1_iot_wearables_Header
                        }`
                      )}
                    </h3>
                    <div className="box-sec">
                      <div className="first-row">
                        <div className="box-first">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {iotData &&
                              iotData.length > 0 &&
                              iotData[0].attributes &&
                              iotData[0].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                iotData &&
                                iotData.length > 0 &&
                                iotData[0].attributes &&
                                iotData[0].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                        <div className="box-second">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {iotData &&
                              iotData.length > 0 &&
                              iotData[1].attributes &&
                              iotData[1].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                iotData &&
                                iotData.length > 0 &&
                                iotData[1].attributes &&
                                iotData[1].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="second-row">
                        <div className="box-first">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {iotData &&
                              iotData.length > 0 &&
                              iotData[2].attributes &&
                              iotData[2].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                iotData &&
                                iotData.length > 0 &&
                                iotData[2].attributes &&
                                iotData[2].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                        <div className="box-second">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {iotData &&
                              iotData.length > 0 &&
                              iotData[3].attributes &&
                              iotData[3].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                iotData &&
                                iotData.length > 0 &&
                                iotData[3].attributes &&
                                iotData[3].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="content-flex-box">
                  <div className="w-md-75">
                    <p>
                      {casestydyList && casestydyList.Section1_iot_Description}
                    </p>
                  </div>

                  <div className="w-md-25">
                    <a
                      onClick={() =>
                        handleShow({
                          type: "loadPdf",
                          pdfUrl: downloadPdf1,
                          modalType: "viewNow",
                        })
                      }
                      style={{ cursor: "pointer" }}
                    >
                      View Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="ptb_50">
              <div className="container">
                <div className="row align-items-end flex-row-reverse containt-box-another-sec">
                  <div className="col-md-6">
                    {casestydyList &&
                    casestydyList.avtar_ecommerce &&
                    casestydyList.avtar_ecommerce.data &&
                    casestydyList.avtar_ecommerce.data.attributes &&
                    casestydyList.avtar_ecommerce.data.attributes.url ? (
                      <img
                        loading="lazy"
                        src={`${imageBaseUrl}${
                          casestydyList &&
                          casestydyList.avtar_ecommerce &&
                          casestydyList.avtar_ecommerce.data &&
                          casestydyList.avtar_ecommerce.data.attributes &&
                          casestydyList.avtar_ecommerce.data.attributes.url
                        }`}
                        alt="Designing for IoT & E-commerce"
                        title="Designing for IoT & E-commerce"
                        className="img-fluid"
                      />
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <h3 style={{ fontFamily: "Roundo" }}>
                      {parse(
                        `${
                          casestydyList &&
                          casestydyList.section2_ecommerce_Header
                        }`
                      )}
                    </h3>
                    <div className="box-sec">
                      <div className="first-row">
                        <div className="box-first">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {" "}
                            {ecommerceData &&
                              ecommerceData.length > 0 &&
                              ecommerceData[0].attributes &&
                              ecommerceData[0].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                ecommerceData &&
                                ecommerceData.length > 0 &&
                                ecommerceData[0].attributes &&
                                ecommerceData[0].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                        <div className="box-second">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {ecommerceData &&
                              ecommerceData.length > 0 &&
                              ecommerceData[1].attributes &&
                              ecommerceData[1].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                ecommerceData &&
                                ecommerceData.length > 0 &&
                                ecommerceData[1].attributes &&
                                ecommerceData[1].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="second-row">
                        <div className="box-first">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {ecommerceData &&
                              ecommerceData.length > 0 &&
                              ecommerceData[2].attributes &&
                              ecommerceData[2].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                ecommerceData &&
                                ecommerceData.length > 0 &&
                                ecommerceData[2].attributes &&
                                ecommerceData[2].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                        <div className="box-second">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {ecommerceData &&
                              ecommerceData.length > 0 &&
                              ecommerceData[3].attributes &&
                              ecommerceData[3].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                ecommerceData &&
                                ecommerceData.length > 0 &&
                                ecommerceData[3].attributes &&
                                ecommerceData[3].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="content-flex-box">
                  <div className="w-md-75">
                    <p>
                      {casestydyList &&
                        casestydyList.Section2_ecommerce_Description}
                    </p>
                  </div>

                  <div className="w-md-25">
                    <a
                      onClick={() =>
                        handleShow({ type: "loadPdf", pdfUrl: downloadPdf2 })
                      }
                      style={{ cursor: "pointer" }}
                    >
                      View Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="ptb_50">
              <div className="container">
                <div className="row align-items-end containt-box-another-sec">
                  <div className="col-md-6">
                    {casestydyList &&
                    casestydyList.avtar_iot_werables &&
                    casestydyList.avtar_iot_werables.data &&
                    casestydyList.avtar_iot_werables.data.attributes &&
                    casestydyList.avtar_iot_werables.data.attributes.url ? (
                      <img
                        loading="lazy"
                        src={`${imageBaseUrl}${
                          casestydyList &&
                    casestydyList.avtar_iot_werables &&
                    casestydyList.avtar_iot_werables.data &&
                    casestydyList.avtar_iot_werables.data.attributes &&
                    casestydyList.avtar_iot_werables.data.attributes.url
                        }`}
                        alt="Designing for IoT & Wearables"
                        title="Designing for IoT & Wearables"
                        className="img-fluid"
                      />
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <h3 style={{ fontFamily: "Roundo" }}>
                      {parse(
                        `${
                          casestydyList &&
                          casestydyList.section1_iot_wearables_Header
                        }`
                      )}
                    </h3>
                    <div className="box-sec">
                      <div className="first-row">
                        <div className="box-first">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {" "}
                            {iotData &&
                              iotData.length > 0 &&
                              iotData[0].attributes &&
                              iotData[0].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                iotData &&
                                iotData.length > 0 &&
                                iotData[0].attributes &&
                                iotData[0].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                        <div className="box-second">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {iotData &&
                              iotData.length > 0 &&
                              iotData[1].attributes &&
                              iotData[1].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                iotData &&
                                iotData.length > 0 &&
                                iotData[1].attributes &&
                                iotData[1].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="second-row">
                        <div className="box-first">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {iotData &&
                              iotData.length > 0 &&
                              iotData[2].attributes &&
                              iotData[2].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                iotData &&
                                iotData.length > 0 &&
                                iotData[2].attributes &&
                                iotData[2].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                        <div className="box-second">
                          <h4 style={{ fontFamily: "Roundo" }}>
                            {iotData &&
                              iotData.length > 0 &&
                              iotData[3].attributes &&
                              iotData[3].attributes.header}
                          </h4>
                          <p style={{ fontFamily: "Roundo" }}>
                            {parse(
                              `${
                                iotData &&
                                iotData.length > 0 &&
                                iotData[3].attributes &&
                                iotData[3].attributes.text
                              }`
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="content-flex-box">
                  <div className="w-md-75">
                    <p>
                      {casestydyList && casestydyList.Section1_iot_Description}
                    </p>
                  </div>

                  <div className="w-md-25">
                    <a
                      onClick={() =>
                        handleShow({ type: "loadPdf", pdfUrl: downloadPdf3 })
                      }
                      style={{ cursor: "pointer" }}
                    >
                      View Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </section>

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
                    <img src="images/arrow.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </Link>
          <div className="branded-link-of-spinach">
            <div className="container">
              <p> {casestydyList && casestydyList.bank_logo_Heading}</p>
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
                      bankLogoData.map((item) => (
                        <div>
                        {item && item.attributes && item.attributes.url ?(
                        <img
                          loading="lazy"
                          src={`${imageBaseUrl}${item.attributes.url}`}
                          className="img-fluid mx-auto d-block"
                        />
                        ):null}
                        </div>
                      ))}
                  </ReactOwlCarousel>
                )}
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
                Made with <img src={clay} className="heart" alt="" /> by
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
        {/* <ModalCommon
        Body={CaseStudySubmit}
        show={show}
        Title={
          <>
            Eager for more? <br />
            Book a demo now
          </>
        }
        onHide={handleClose}
      ></ModalCommon> */}
      </main>
    );
  }
}
