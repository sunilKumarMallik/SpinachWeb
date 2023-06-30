import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import parse from "html-react-parser";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { imageBaseUrl } from "../../../../../api-services/config";
export default function TrustedByBanks({ display, testimonials }) {
    return (

        <div className="slider-sec">
            {display && !!testimonials && !!testimonials.length && (
                <ReactOwlCarousel
                    // {...settings}
                    className="trusted-by-banks-carousel mt-5 "
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
                    autoplay= {true}
                    autoplayTimeout= {2000}
                    autoplayHoverPause= {true} // pause autoplay on hover
                    autoplaySpeed= {4000} // transition speed
                >
                    {!!testimonials &&
                        !!testimonials.length &&
                        testimonials.map((item) => (
                            // console.log(item.attributes, "somthing"),
                            <div className="card-item ">
                                <p className="sectxt-para mt-5">
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
                        ))}
                </ReactOwlCarousel>
            )}
        </div>
    );
}
