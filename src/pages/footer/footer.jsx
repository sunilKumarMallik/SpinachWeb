import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-sm-6 my-2 d-none d-md-block">
            <Link className="navbar-brand" to="/">
              <img
                src="images/footer-logo.svg"
                alt="logo"
                className="footer-logo img-fluid"
              />
            </Link>
            <div className="footer-logo-txt">
              <p>
                Made for New <br /> Age Banks
              </p>
            </div>
          </div>

          {/* mobile view of footer logo*/}
          <div className="col-md-5 col-sm-6 my-2 d-flex d-block d-xs-none d-sm-none">
            <div className="col-4">
              <Link className="navbar-brand" to="/">
                <img
                  src="images/footer-logo.svg"
                  alt="logo"
                  className="footer-logo img-fluid"
                />
              </Link>
            </div>
            <div className="col-8 footer-logo-txt">
              <p>
                Made for New <br /> Age Banks
              </p>
            </div>
          </div>
          <div className="col-md-7 row mainFooterDiv">
            <div className="col-xl-4 col-md-6 col-xs-4 my-2 mobileFooter">
              <ul className="mobileLi">
                <li>
                  {" "}
                  <Link className="footerLinks" to="/offer">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link className="footerLinks" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link className="footerLinks" to="/CaseStudy">
                    Case Study
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-md-6 col-xs-4 my-2 mobileFooter">
              <ul className="mobileLi">
                <li>
                  {" "}
                  <Link className="footerLinks" to="/about">
                    About Us
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className="footerLinks" to="/ContactUs">
                    Contact Us
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className="footerLinks" to="/privacy-policy">
                    Privacy Policy
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className="footerLinks" to="/terms-condition">
                    T & C
                  </Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-md-6 col-xs-4 my-2">
              <ul className="mobSocial">
                <li>
                  <Link
                    className="footerLinks"
                    target="_blank"
                    to="https://www.linkedin.com/showcase/spinachmoney/"
                  >
                    {" "}
                    <img src="images/footer-icon/linkedian.svg" alt="" />{" "}
                    LinkedIn{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="footerLinks"
                    target="_blank"
                    to="https://twitter.com/SpinachMoney"
                  >
                    {" "}
                    <img
                      src="images/footer-icon/twitter.svg"
                      alt=""
                    /> Twitter{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="footerLinks"
                    target="_blank"
                    to="https://www.facebook.com/profile.php?id=100090107960179&is_tour_dismissed=true"
                  >
                    {" "}
                    <img src="images/footer-icon/facebook.svg" alt="" />{" "}
                    Facebook{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="footerLinks"
                    target="_blank"
                    to="https://www.instagram.com/spinach_money/"
                  >
                    {" "}
                    <img src="images/footer-icon/Instagram.svg" alt="" />{" "}
                    Instagram{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="copyright-sec">
          <div>
            <p>
              {" "}
              <Link
                to="https://www.noboruworld.com/"
                target="_blank"
                style={{ color: "gray" }}
              >
                {" "}
                Built At Noboru World
              </Link>{" "}
            </p>
          </div>
          <div className="b-line"></div>
          <div>
            <p>© 2022, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
