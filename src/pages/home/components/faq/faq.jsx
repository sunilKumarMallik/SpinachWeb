import React from "react";
// import Tab2 from "../../../../assets/images/tab-1/tab-2.svg";
import clay from "../../../../assets/images/clayfin.svg";
import parse from "html-react-parser";
import Zigzagbg from "../zigzag/Zigzagbg";
import { Link } from "react-router-dom";
import { Accordion, Card } from 'react-bootstrap';
import "./faq.css"

export default function Faq({ handleShow, data }) {
  console.log("faqData", data && data.faqs && data.faqs.data);
  let faq_data =
    data &&
    data.faqs &&
    data.faqs.data.map((x, i) => {
      return i == 0 ? x.attributes.Question : "";
    });
  console.log(faq_data);
  return (
    <section id="faq-sec" className="ptb_50 ">
      <div className="container">
        <div className="faq-section-bg">
          <div className="faq-box">
            <h3>FAQs</h3>
            <p className="subtitle">
              Find more ways we can assist you in <br />
              expanding your banking business.
            </p>
            <div className="row">
              <div className="col-md-5 p-0 m-0">
                <div
                  className="nav flex-column nav-pills "
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    {data && data.faqs && data.faqs.data[0].attributes.Question}
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    {data && data.faqs && data.faqs.data[1].attributes.Question}
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    {data && data.faqs && data.faqs.data[2].attributes.Question}
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    {data && data.faqs && data.faqs.data[3].attributes.Question}
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    {data && data.faqs && data.faqs.data[4].attributes.Question}
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-settings-tab2"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings2"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings2"
                    aria-selected="false"
                  >
                    {data && data.faqs && data.faqs.data[5].attributes.Question}
                  </button>
                </div>
              </div>
              <div className="col-md-7 p-0 m-0">
                <div className="tab-content " id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active   "
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <p>
                      {parse(
                        `${data &&
                        data.faqs &&
                        data.faqs.data[0].attributes.Answer
                        }`
                      )}
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <p>
                      {parse(
                        `${data &&
                        data.faqs &&
                        data.faqs.data[1].attributes.Answer
                        }`
                      )}
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <p>
                      {parse(
                        `${data &&
                        data.faqs &&
                        data.faqs.data[2].attributes.Answer
                        }`
                      )}
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <p>
                      {parse(
                        `${data &&
                        data.faqs &&
                        data.faqs.data[3].attributes.Answer
                        }`
                      )}
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings2"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab2"
                  >
                    <p>
                      {parse(
                        `${data &&
                        data.faqs &&
                        data.faqs.data[5].attributes.Answer
                        }`
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mob-faq-section font-styling">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{data && data.faqs && data.faqs.data[0].attributes.Question}</Accordion.Header>
                <Accordion.Body>
                  {parse(
                    `${data &&
                    data.faqs &&
                    data.faqs.data[0].attributes.Answer
                    }`
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{data && data.faqs && data.faqs.data[1].attributes.Question}</Accordion.Header>
                <Accordion.Body>
                  {parse(
                    `${data &&
                    data.faqs &&
                    data.faqs.data[1].attributes.Answer
                    }`
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>{data && data.faqs && data.faqs.data[2].attributes.Question}</Accordion.Header>
                <Accordion.Body>
                  {parse(
                    `${data &&
                    data.faqs &&
                    data.faqs.data[2].attributes.Answer
                    }`
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>{data && data.faqs && data.faqs.data[3].attributes.Question}</Accordion.Header>
                <Accordion.Body>
                  {parse(
                    `${data &&
                    data.faqs &&
                    data.faqs.data[3].attributes.Answer
                    }`
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>{data && data.faqs && data.faqs.data[4].attributes.Question}</Accordion.Header>
                <Accordion.Body>
                  {parse(
                    `${data &&
                    data.faqs &&
                    data.faqs.data[4].attributes.Answer
                    }`
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>{data && data.faqs && data.faqs.data[5].attributes.Question}</Accordion.Header>
                <Accordion.Body>
                  {parse(
                    `${data &&
                    data.faqs &&
                    data.faqs.data[5].attributes.Answer
                    }`
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <div id="demo-box">
        <div className="flex-box-sec">
          <div>
            <img src="images/book-demo-profile.svg" />
          </div>
          <div>
            <p className="content-txt">Still have questions?</p>
            <p className="sub-txt">
              Can’t find the answer you’re looking for? Get in touch with us
            </p>
          </div>
        </div>
        <div>
          <button className="cta-btn first-color m-0" onClick={handleShow}>
            Book a Demo{" "}
          </button>
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
            Made with <img src={clay} className="heart" alt="" /> by
            <Link
              to="https://www.clayfin.com/"
              target="_blank"
              style={{ color: "gray", marginLeft: '5px' }}
            >
              Clayfin
            </Link>
          </p>
        </div>
      </section>
    </section>
  );
}
