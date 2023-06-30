import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import parse from "html-react-parser";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { imageBaseUrl } from "../../../../../api-services/config";
export default function MobileTrustedByBanks({ display, testimonials }) {
  return (
    <div className="slider-sec px-2">
      {display && !!testimonials && !!testimonials.length && (
        <ReactOwlCarousel
          // {...settings}
          className="trusted-by-banks-carousel mt-5 "
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
            1200: {
              items: 1,
            },
          }}
          loop={true}
          margin={30}
          nav={true}
          autoplay={false}
          autoplayTimeout={2000}
          autoplayHoverPause={true} // pause autoplay on hover
          autoplaySpeed={4000} // transition speed
        >
          {!!testimonials &&
            !!testimonials.length &&
            testimonials.map((item) => (
              // console.log(item.attributes, "somthing"),
              <div
                className="card-item "
                style={{ background: "#F8FAFE", borderRadius: "8.9931px" }}
              >
                <div className="d-flex row">
                  <div className="mob-trusted-quote col-2"></div>
                  <div className="col-10 ml-2">
                    <p className="sectxt-para-trusted">{item.attributes.Description}</p>
                  </div>
                </div>
                <div className="user-details p-3 d-flex">
                  <div>
                    <img
                      src={`${imageBaseUrl}${item.attributes.clientImage.data.attributes.url}`}
                      alt="user"
                      className="sec-img"
                      style={{
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                      }}
                    />
                  </div>
                  <div className="ml-3">
                    <h4
                      className=""
                      style={{
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      {item.attributes.clientName}
                    </h4>
                    <p className="">{item.attributes.clientCompany}</p>
                  </div>
                </div>
              </div>
            ))}
        </ReactOwlCarousel>
      )}
    </div>
  );
}
