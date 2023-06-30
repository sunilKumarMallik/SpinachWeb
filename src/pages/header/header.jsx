import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Header({ handleShow }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <header className="navbar-sec">
      <nav className="navbar navbar-expand-lg shadownav">
        <div className="container-fluid px-md-5 ">
          <Link className="navbar-brand" to="/">
            <img src="images/logo.svg" alt="logo" className="logo" />
          </Link>

          <button
            className={collapse ? "navbar-toggler collapsed" : "navbar-toggler"}
            type="button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarSupportedContent"
            // aria-controls="navbarSupportedContent"
            // aria-expanded="false"
            // aria-label="Toggle navigation"
            onClick={() => setCollapse(!collapse)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <Collapse in={collapse}>
            <div
              className={
                collapse
                  ? "navbar-collapse collapse show"
                  : "navbar-collapse collapse"
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/about"
                    onClick={() => setCollapse(!collapse)}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link act-offering"
                    to="/offer"
                    onClick={() => setCollapse(!collapse)}
                  >
                    Offering
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link act-case-study"
                    to="/CaseStudy"
                    onClick={() => setCollapse(!collapse)}
                  >
                    Case Study
                  </NavLink>
                </li>
                {/* <li className="nav-item">
              <a className="nav-link act-Pricing" href="#hire/">
                Pricing
              </a>
            </li> */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link act-blogs"
                    to="/blogs"
                    onClick={() => setCollapse(!collapse)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link act-contact"
                    to="/ContactUs"
                    onClick={() => setCollapse(!collapse)}
                  >
                    Contact us
                  </NavLink>
                </li>
                <li className="book-demo-btn">
                  <a
                    className="nav-link"
                    onClick={() => {
                      handleShow({ type: "", pdfUrl: "" });
                      setCollapse(!collapse);
                    }}
                  >
                    Book Demo
                  </a>
                </li>
              </ul>
            </div>
          </Collapse>
        </div>
      </nav>
    </header>
  );
}
