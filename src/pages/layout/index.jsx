import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import CustomModal from "../common/modal/custommodal";
import ModalCommon from "../common/modal/modalcommon";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Document} from 'react-pdf';

import RequiredPdf from "../../assets/Full_Book_V1.pdf";
export default function ParentLayout() {
  // console.log("propsData",props);
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState(undefined);
  const [pdfUrl, setPdfUrl] = useState("");
  // const [loadPdfData, setLoadPdfData] = useState("loadPdf");
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);
  const handleShow = (props) => {
    console.log("props", props);
    setType(props.type);
    setPdfUrl(props.pdfUrl)
    setShow(true);
  };
  // console.log("props.type",props.type);
  const handleClose = () => setShow(false);
  const handleSubmit = (event) => {
    // event.preventDefault();
    // handleClose();
    setType(props.type);
    // setLoadPdfData(props.type);
    setSubmitted(true);
  };
  // console.log("type",type)
  return (
    <>
      <ModalCommon
        Body={() => CustomModal({ handleSubmit, handleClose, type,pdfUrl })}
        type={type}
        show={show}
        
        Title={
          <>
            Eager for more <br />
            Book a demo now
          </>
        }
        onHide={handleClose}
      />
      <Modal
        show={submitted}
        size={type == "loadPdf" ? "xl" : "lg"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="confetti-wrapper">
          <Confetti
            width={1500}
            height={500}
            recycle={false}
            numberOfPieces={500}
            style={{ position: "absolute", left: "-19rem" }}
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
     
          {type == "loadPdf" ? (
            <Document file={pdfUrl}>
            </Document>
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
      <Header handleShow={handleShow} />
      <Outlet context={{ handleShow }}></Outlet>
      <Footer />
    </>
  );
}
