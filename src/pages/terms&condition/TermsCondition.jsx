import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { doGet } from "../../api-services/axiosservice";
import parse from "html-react-parser";

import clay from "../../assets/images/clayfin.svg";
import Zigzagbg from "../home/components/zigzag/Zigzagbg";
function TermsCondition() {
  const { pathname } = useLocation();
  const [terms, setTerms] = useState({});
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
    // setLoading(true);
    try {
      let termsData = doGet("/terms-and-condition?populate=*");

      let [termsSelected] = await Promise.all([termsData]);
      console.log("termsSelected", termsSelected.data.data.attributes);

      setTerms(termsSelected.data.data.attributes);

      // console.log("dkfjgh", caseStudySelected.data.data.attributes);
      // console.log("iotDataSelected", iotDataSelected.data);
      // console.log("ecommerceDataSelected", ecommerceDataSelected.data);

      // setImageDta(aboutDataSelected.data.data.attributes.AboutImages.data)
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };
  // console.log("terms.title",terms.term_and_condition_tabs.data[0].attributes.tabName)
  // console.log("terms.title",terms.term_and_condition_tabs.data[1].attributes.tabName)
  // console.log("terms.title",terms.term_and_condition_tabs.data[0].attributes.FirstSectionDescription)
  // console.log("terms.title",terms.term_and_condition_tabs.data[1].attributes.tabName)

  let title_one =
    terms &&
    terms.term_and_condition_tabs &&
    terms.term_and_condition_tabs.data &&
    terms.term_and_condition_tabs.data[0].attributes.tabName;
  let title_two =
    terms &&
    terms.term_and_condition_tabs &&
    terms.term_and_condition_tabs.data &&
    terms.term_and_condition_tabs.data[1].attributes.tabName;
  let section_one =
    terms &&
    terms.term_and_condition_tabs &&
    terms.term_and_condition_tabs.data &&
    terms.term_and_condition_tabs.data[0].attributes.FirstSectionDescription;
  let section_two =
    terms &&
    terms.term_and_condition_tabs &&
    terms.term_and_condition_tabs.data &&
    terms.term_and_condition_tabs.data[0].attributes.SecondSectionDescription;
  let section_three =
    terms &&
    terms.term_and_condition_tabs &&
    terms.term_and_condition_tabs.data &&
    terms.term_and_condition_tabs.data[0].attributes.FirstSectionDescription;
  let section_four =
    terms &&
    terms.term_and_condition_tabs &&
    terms.term_and_condition_tabs.data &&
    terms.term_and_condition_tabs.data[0].attributes.SecondSectionDescription;
  return (
    <>
      <main id="terms-and-condition">
        <article>
          <section id="inner-banner-sec">
            <div className="banner-box">
              <div className="container">
                <div className="content-box">
                  <div className="sec-title">
                    <h1>{terms && terms.Title ? terms.Title:""}</h1>
                  </div>
                  <p>{parse(`${terms && terms.TitleDescription ? terms.TitleDescription:""}`)}</p>
                </div>
              </div>
            </div>
          </section>

          <section id="tabsec">
            <div className="ptb_50 ">
              <div className="container vtabs">
                <div className="row">
                  <div className="col-md-4">
                    <div className="sticky">
                      <ul
                        className="nav nav-tabs left-tabs mt-3 "
                        role="tablist"
                      >
                        <p className="text-start">General Terms</p>
                        <li className="nav-item" role="presentation">
                          <div
                            id="lorem-left-tab"
                            className="nav-link tab-clickable   active"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#lorem-left"
                            aria-controls="lorem-left"
                            aria-selected="true"
                          >
                            <span className="font-weight-bold">
                              {title_one}
                            </span>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            id="sapien-left-tab"
                            className="nav-link tab-clickable  "
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#sapien-left"
                            aria-controls="sapien-left"
                            aria-selected="false"
                          >
                            <span className="font-weight-bold">
                              {title_two}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="">
                      <div
                        id="accordion-left-tabs"
                        className="tab-content accordion px-0"
                      >
                        <div
                          id="lorem-left"
                          className="tab-pane fade show active accordion-item"
                          role="tabpanel"
                        >
                          <div className="accordion-header" role="tab">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              role="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#lorem-left-article"
                              aria-expanded="true"
                              aria-controls="lorem-left-article"
                            >
                              Lorem Ipsum
                            </button>
                          </div>
                          <article
                            id="lorem-left-article"
                            className="accordion-body  accordion-collapse collapse"
                            data-bs-parent="#accordion-left-tabs"
                            aria-labelledby="lorem-left-tab"
                          >
                            <section className="servicePage">
                              <section>
                                <div className="content-box ">
                                  <p className="text-start">{section_one}</p>
                                  <h5 className="text-start">
                                    Lorem Ipsum dummy text
                                  </h5>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <p className="text-start">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s Lorem
                                        Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s
                                      </p>
                                    </div>
                                    <div className="col-md-6">
                                      <p className="text-start">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s Lorem
                                        Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </section>

                              <section>
                                <div className="content-box ">
                                  <p className="text-start">{section_two}</p>
                                </div>
                              </section>
                            </section>
                          </article>
                        </div>
                        <div
                          id="sapien-left"
                          className="tab-pane fade accordion-item"
                          role="tabpanel"
                        >
                          <div className="accordion-header" role="tab">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              role="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#sapien-left-article"
                              aria-expanded="false"
                              aria-controls="sapien-left-article"
                            >
                              Lorem Ipsum
                            </button>
                          </div>
                          <article
                            id="sapien-left-article"
                            className="accordion-body  accordion-collapse collapse"
                            data-bs-parent="#accordion-left-tabs"
                            aria-labelledby="sapien-left-tab"
                          >
                            <section className="servicePage">
                              <div className="container-fluid p-0">
                                <section>
                                  <div className="content-box ">
                                    <div className="bg-light-sec">
                                      <p className="text-start">
                                        {section_three}
                                      </p>
                                    </div>
                                  </div>
                                </section>

                                <section>
                                  <div className="content-box">
                                    <p className="text-start">
                                    {section_four}
                                    </p>

                                    <h5 className="text-start">
                                      Lorem Ipsum dummy text
                                    </h5>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <p className="text-start">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard dummy text ever since the
                                          1500s Lorem Ipsum is simply dummy text
                                          of the printing and typesetting
                                          industry. Lorem Ipsum has been the
                                          industry's standard dummy text ever
                                          since the 1500s
                                        </p>
                                      </div>
                                      <div className="col-md-6">
                                        <p className="text-start">
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard dummy text ever since the
                                          1500s Lorem Ipsum is simply dummy text
                                          of the printing and typesetting
                                          industry. Lorem Ipsum has been the
                                          industry's standard dummy text ever
                                          since the 1500s
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </section>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="new-age-bank"
            className="ptb_50  mt-3"
            style={{ backgroundColor: "transparent" }}
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
                  style={{ color: "gray" , marginLeft:'5px'}}
                >
                  Clayfin
                </Link>
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default TermsCondition;
