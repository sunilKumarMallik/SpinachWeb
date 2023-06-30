import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./custommodal.css";
import Confetti from "react-confetti";
import { Modal } from "react-bootstrap";
import { doGet, doPost } from "../../../api-services/axiosservice";
import { imageBaseUrl } from "../../../api-services/config";
import {
  Viewer,
  Document,
  Page,
  PageNavigation,
  LoadingSpinner,
  Worker
} from "@react-pdf-viewer/core";
import { Link } from "react-router-dom";


export default function CustomModal(props) {
  console.log("props", props);
  console.log("props.pdfUrl", props.pdfUrl);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const handleModalSubmit = (event) => {
    // event.preventDefault();
    setSubmitted(true);
  };
  const handleLoad = () => {
    setIsLoading(true);
  };
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  // console.log("errors.Phone", errors);
  const [submitted, setSubmitted] = useState(false);
  const [casestydyList, setCasestydyList] = useState();
  const onSubmit = async (data) => {
    // async request which may result error

    console.log(data);
    try {
      // await fetch()
      let caseStudyData = doGet("/case-study?populate=*");
      let [caseStudySelected] = await Promise.all([caseStudyData]);
      console.log("dkfjgh", caseStudySelected.data.data.attributes);
      setCasestydyList(caseStudySelected.data.data.attributes);
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
      //  props.handleClose();
      });
    } catch (e) {
      console.log("error", e);
      alert("Something went wrong.Please contact help-desk");
    }
  };
  console.log(
    "pdf",
    casestydyList &&
      casestydyList.pdf_file &&
      casestydyList.pdf_file.data &&
      casestydyList.pdf_file.data.attributes &&
      casestydyList.pdf_file.data.attributes.url
  );
  console.log("imageBaseUrl", imageBaseUrl);
  // console.log("imageBaseUrlLink", );
  let pdf_url = `${imageBaseUrl}${
    casestydyList &&
    casestydyList.pdf_file &&
    casestydyList.pdf_file.data &&
    casestydyList.pdf_file.data.attributes &&
    casestydyList.pdf_file.data.attributes.url
  }`;
  let url = `${imageBaseUrl}${props.pdfUrl}`;
  console.log("newpdfUrl", url);
  return (
    <>
      <div id="contact-form" className="bgColor">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-section row modalBody  bg-box-gray">
              <div className="form-floating mb-2 col-md-6">
                <input
                  type="text"
                  className="form-control btnColor border border-green"
                  id="floatingInput"
                  placeholder="Name*"
                  {...register("Name", { required: true })}
                  aria-invalid={errors.Name ? "true" : "false"}
                />
                {errors.Name?.type === "required" && (
                  <p className="text-danger" role="alert">
                    Name is required
                  </p>
                )}
                <label
                  for="floatingInput"
                  className="text-dark"
                  style={{ padding: "1rem 1.75rem" }}
                >
                  Name*
                </label>
              </div>

              <div className="form-floating mb-2 col-md-6">
                <input
                  type="text"
                  className="form-control btnColor"
                  id="Organization"
                  placeholder="Organization"
                  {...register("Organization", { required: true })}
                  aria-invalid={errors.Organization ? "true" : "false"}
                />
                {errors.Organization?.type === "required" && (
                  <p className="text-danger" role="alert">
                    Organization name is required
                  </p>
                )}

                <label
                  for="floatingInput"
                  className="text-dark"
                  style={{ padding: "1rem 1.75rem" }}
                >
                  Organization Name*
                </label>
              </div>

              <div className="form-floating mb-2 col-md-6">
                <input
                  type="email"
                  className="form-control btnColor"
                  id="Organization"
                  placeholder="Email"
                  required
                  pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                  oninvalid="setCustomValidity('Please enter business email')"
                  onchange="try{setCustomValidity('')}catch(e){}')"
                  {...register("Email", { required: true })}
                  aria-invalid={errors.Email ? "true" : "false"}
                />
                {errors.Email?.type === "required" && (
                  <p className="text-danger" role="alert">
                    Organization email is required
                  </p>
                )}

                <label
                  for="floatingInput"
                  className="text-dark"
                  style={{ padding: "1rem 1.75rem" }}
                >
                  Email*
                </label>
              </div>

              <div className="form-floating mb-2 col-md-6">
                <input
                  className="form-control btnColor"
                  id="phone"
                  type="number"
                  placeholder="Phone"
                  {...register("Phone", {
                    required: true,
                    maxLength: 10,
                    minLength: 10,
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    },
                  })}
                  aria-invalid={errors.Phone ? "true" : "false"}
                />
                {errors.Phone && errors.Phone.type == "required" && (
                  <span className="textRed" style={{ color: "red" }}>
                    Mobile number is required{" "}
                  </span>
                )}
                {errors.Phone && errors.Phone.type === "maxLength" && (
                  <span className="text-danger">
                    Mobile Number should not exceed more than 10 digits
                  </span>
                )}
                {errors.Phone && errors.Phone.type === "minLength" && (
                  <span className="text-danger">
                    Mobile Number should be minimum of 10 digits
                  </span>
                )}
                <label
                  for="floatingInput"
                  className="text-dark"
                  style={{ padding: "1rem 1.75rem" }}
                >
                  Phone*
                </label>
              </div>
              <div className="form-floating col-md-12 mt-2">
                <textarea
                  className="form-control textarea"
                  placeholder="Message"
                  id="floatingTextarea"
                  {...register("Message", {})}
                ></textarea>
                <label
                  for="floatingTextarea"
                  className="text-dark"
                  style={{ padding: "1rem 1.75rem" }}
                >
                  Message
                </label>
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
        size={props.type == "loadPdf" ? "xl" : "lg"}
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
          onClick={() => {
            setSubmitted(false);
            props.handleClose();
          }}
        >
          <Modal.Title>
            {" "}
            <h3 className="Headings text-center">Thank you!</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {props.type == "loadPdf" ? (
             <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                 fileUrl={url}
                 onDocumentLoad={handleLoad}
                 className="mx-auto"
               >
                </Viewer>
             </Worker>
          ) : (
            <div className="tq-modal-body">
              <p className="text-center">
                We're glad to hear that you're interested in our product! <br />{" "}
                One of our representatives will be contacting you soon.
              </p>
              <h4>Have a fantastic day!</h4>
            </div>
          )}
        </Modal.Body>
      </Modal>
      {/* <Modal
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
            <h3 className="Headings text-center">Thank you! </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="tq-modal-body">
            {" "}
            <p className="text-center">
              We're glad to hear that you're interested in our product! <br />{" "}
              One of our representatives will be contacting you soon.
            </p>
            <h4>Have a fantastic day!</h4>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
}
