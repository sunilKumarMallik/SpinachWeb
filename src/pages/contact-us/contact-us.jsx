import React, { useEffect, useState } from "react";
import clay from "../../assets/images/clayfin.svg";
import Confetti from "react-confetti";
import { useForm } from "react-hook-form";
import "./contact-us.css";
import { Modal } from "react-bootstrap";
import { useLocation } from "react-router";
import { doGet, doPost } from "../../api-services/axiosservice";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import MainLoader from "../common/Loader/main-loader";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { pathname } = useLocation();
  const [contactData, setContactData] = useState({});
  const [contactDataAdress, setContactDataAdress] = useState([]);
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    getAboutData();
  }, [pathname]);
  const getAboutData = async () => {
    setLoading(true);
    try {
      let contact = doGet("/contact-us?populate=*");
      let contactAdress = doGet("/contact-us-addresses?populate=*");
      let [contactDataSelected, contactAdressSelected] = await Promise.all([
        contact,
        contactAdress,
      ]);
      // console.log(
      //   "contactDataSelected",
      //   contactDataSelected &&
      //     contactDataSelected.data &&
      //     contactDataSelected.data.data && contactDataSelected.data.data.attributes.header
      // );
      // console.log(contactDataSelected.data.data);
      console.log("contactAdressSelected", contactAdressSelected.data.data);
      setContactData(contactDataSelected.data.data);
      setContactDataAdress(contactAdressSelected.data.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handleModalSubmit = (event) => {
    setSubmitted(true);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    // setLoading(true);

    console.log(data);
    try {
      doPost("/enquiries", {
        data: {
          ...data,
          Name: data.Name,
          Organization: data.Organization,
          Email: data.Email,
          Phone: data.Phone,
          Message: data.Message,
        },
      }).then((res) => {
        handleModalSubmit();
        reset({
          Name: "",
          Organization: "",
          Email: "",
          Phone: "",
          Message: "",
        });
      });
      // setLoading(false);
    } catch (e) {
      // setLoading(false);
      console.log("error", e);
      alert("Something went wrong.Please contact helpdesk");
    }
  };
  // console.log(contactData && contactData.attributes.header )
  console.log(contactData);
  console.log(contactDataAdress);

  let header =
    contactData && contactData.attributes && contactData.attributes.header;
  let subHeader =
    contactData && contactData.attributes && contactData.attributes.subHeader;
  let desc =
    contactData && contactData.attributes && contactData.attributes.desc;
  let fold2header =
    contactData && contactData.attributes && contactData.attributes.fold2header;
  let fold2Desc =
    contactData && contactData.attributes && contactData.attributes.fold2Desc;
  let joinusheader =
    contactData &&
    contactData.attributes &&
    contactData.attributes.joinusheader;
  let joinusdesc =
    contactData && contactData.attributes && contactData.attributes.joinusdesc;
  let joinusmail =
    contactData && contactData.attributes && contactData.attributes.joinusmail;

  if (loading) {
    return <MainLoader />;
  } else {
    return (
      <main id="contatc-us">
        <article>
          <section id="inner-banner-sec">
            <div className="banner-box">
              <div className="container">
                <div className="content-box">
                  <div className="sec-title mob-title1">
                    <h1 className='mob-title'>
                      {header ? header : ""} <br />{" "}
                      <span> {subHeader ? subHeader : ""} </span>
                      <br />
                    </h1>
                  </div>
                  <p>{parse(`${desc ? desc : ""}`)}</p>
                </div>
              </div>
            </div>
          </section>

          <section id="enquiry-box">
            <div className="container">
              <div className="row col-lg-10 col-md-11 mx-auto ">
                {contactData &&
                  contactData.attributes &&
                  contactData.attributes.enquiry &&
                  contactData.attributes.enquiry.map((item) => {
                    // console.log(item)
                    return (
                      <div className="col-md-6">
                        <div className="content-box">
                          <div className="d-flex align-items-center ">
                            <img
                              src="images/general-enquiry.svg"
                              alt="General Enquiry"
                              title="General Enquiry"
                              className="me-3"
                            />
                            <h2>{item.type_of_enquiry}</h2>
                          </div>
                          <hr />
                          <div className="flex-box">
                            <div>
                              <a href="tel:+91 8585852825">{item.number}</a>
                            </div>
                            <div>
                              <a href="mailto:info@spinach.money">
                                {item.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                {/* <div className="col-md-6">
                <div className="content-box">
                  <div className="d-flex align-items-center ">
                    <img
                      src="images/sales-enquiry.svg"
                      alt="General Enquiry"
                      title="General Enquiry"
                      className="me-3"
                    />
                    <h2>Sales Enquiry</h2>
                  </div>
                  <hr />
                  <div className="flex-box">
                    <div>
                      <a href="tel:+918585845454">+91 85858 -45454</a>
                    </div>
                    <div>
                      <a href="mailto:sales@spinach.money">
                        sales@spinach.money
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </section>
          <div>
            <div
              id="contact-form"
              //  onSubmit={handleModalSubmit}
            >
              <div className="container">
                <h3>{fold2header}</h3>
                <p>{parse(`${fold2Desc}`)}</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-section row">
                    <div className="form-floating  col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Name"
                        {...register("Name", { required: true })}
                        aria-invalid={errors.Name ? "true" : "false"}
                      />
                      {errors.Name?.type === "required" && (
                        <p className="text-danger text-start" role="alert">
                          Name is required
                        </p>
                      )}
                      <label for="floatingInput">Name*</label>
                    </div>

                    <div className="form-floating mb-3 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="Organization"
                        placeholder="Organization"
                        {...register("Organization", { required: true })}
                        aria-invalid={errors.Organization ? "true" : "false"}
                      />
                      {errors.Organization?.type === "required" && (
                        <p className="text-danger text-start" role="alert">
                          Organization name is required
                        </p>
                      )}
                      <label for="floatingInput">Organization*</label>
                    </div>

                    <div className="form-floating mb-3 col-md-6">
                      <input
                        type="email"
                        pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                        oninvalid="setCustomValidity('Please enter business email')"
                        onchange="try{setCustomValidity('')}catch(e){}')"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        {...register("Email", { required: true })}
                        aria-invalid={errors.Email ? "true" : "false"}
                      />
                      {errors.Email?.type === "required" && (
                        <p className="text-danger text-start" role="alert">
                          Organization email is required
                        </p>
                      )}
                      <label for="floatingInput">Email*</label>
                    </div>

                    <div className="form-floating mb-3 col-md-6">
                      <input
                        type="number"
                        className="form-control btnColor"
                        id="phone"
                        placeholder="Phone"
                        {...register("Phone", {
                          required: true,
                          maxLength: 10,
                          minLength: 10,
                        })}
                        aria-invalid={errors.Phone ? "true" : "false"}
                      />
                      {errors.Phone?.type === "required" && (
                        <p className="text-danger text-start" role="alert">
                          Mobile number is required
                        </p>
                      )}
                      {errors.Phone && errors.Phone.type === "maxLength" && (
                        <p className="text-danger" role="alert">
                          Mobile Number should not exceed more than 10 digits
                        </p>
                      )}
                      {errors.Phone && errors.Phone.type === "minLength" && (
                        <p className="text-danger" role="alert">
                          Mobile Number should be minimum of 10 digits
                        </p>
                      )}
                      <label for="floatingInput">Phone*</label>
                    </div>
                    <div className="form-floating col-md-12">
                      <textarea
                        className="form-control textarea"
                        placeholder="Message"
                        id="floatingTextarea"
                        {...register("Message", {})}
                      ></textarea>
                      <label for="floatingTextarea">Message</label>
                    </div>
                    <div className="d-flex justify-content-center">
                      {" "}
                      <input type="submit" className="cta-btn" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <Modal
              show={submitted}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <div className="confetti-wrapper">
                <Confetti
                  width={1500}
                  height={500}
                  recycle={false}
                  numberOfPieces={500}
                  style={{ position: "absolute", left: "-22rem" }}
                />
              </div>

              <Modal.Header
                className="px-4"
                closeButton
                onClick={() => setSubmitted(false)}
              >
                <Modal.Title>
                  {" "}
                  <h3 className="Headings text-center">Thank you!</h3>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="tq-modal-body">
                  {" "}
                  <p className="text-center">
                    We're glad to hear that you're interested in our product!{" "}
                    <br /> One of our representatives will be contacting you
                    soon.
                  </p>
                  <h4>Have a fantastic day!</h4>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <div className="container">
            <div className="join-us-box">
              <div className="row">
                <div className="col-md-6">
                  <h3>{joinusheader}</h3>
                  <p>{parse(`${joinusdesc}`)}</p>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <img
                      src="images/email-box.svg"
                      alt="email"
                      className="email-contact"
                    />
                    <a href="mailto:career@clayfin.com">
                      {" "}
                      {parse(`${joinusmail}`)}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="map-sec">
            <div className="container">
              <div className="row">
                {contactDataAdress &&
                  contactDataAdress.map((item) => {
                    console.log(item);
                    return (
                      <div className="col-lg-4 col-sm-6 my-3">
                        <div className="position-relative">
                          <div className="map-box  mx-1">
                            <iframe
                              src={item.attributes.GmapURL}
                              width="100%"
                              allowfullscreen=""
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                          </div>
                          <div className="address-box">
                            <h3>{item.attributes.Location}</h3>
                            <p>{parse(`${item.attributes.AddressDetails}`)}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
                Made with <img src={clay} className="heart" alt="" />
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
      </main>
    );
  }
};

export default ContactUs;
