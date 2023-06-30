import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalCommon(props) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
      className="mt-5"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg" className="ms-auto">
          <h3 className="Headings text-justify">
            {props.type == "loadPdf" ?  <>
            Access the case study by<br/> providing a few details!
          </> : props.Title}
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <props.Body></props.Body>
      </Modal.Body>
    </Modal>
  );
}
