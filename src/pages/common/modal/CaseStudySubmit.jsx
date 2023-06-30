import React from "react";

export default function CaseStudySubmit() {
  return (
    <>
      <div id="contact-form" className="bgColor">
        <div className="container">
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s
          </p>

          <div className="form-section row modalBody  bg-box-gray">
            <div className="form-floating mb-3 col-md-6">
              <input
                 
                type="email"
                className="form-control btnColor border border-green"
                id="floatingInput"
                placeholder="Name*"
              />

              <label
                for="floatingInput"
                className="text-dark"
                style={{ padding: "1rem 1.75rem" }}
              >
                Name
              </label>
            </div>

            <div className="form-floating mb-3 col-md-6">
              <input
                type="email"
                className="form-control btnColor"
                id="Organization"
                placeholder="Name"
              />
              <label
                for="floatingInput"
                className="text-dark"
                style={{ padding: "1rem 1.75rem" }}
              >
                Organization*
              </label>
            </div>

            <div className="form-floating mb-3 col-md-6">
              <input
                type="email"
                className="form-control btnColor"
                id="Organization"
                placeholder="Email"
              />
              <label
                for="floatingInput"
                className="text-dark"
                style={{ padding: "1rem 1.75rem" }}
              >
                Email
              </label>
            </div>

            <div className="form-floating mb-3 col-md-6">
              <input
                type="email"
                className="form-control btnColor"
                id="phone"
                placeholder="Phone"
              />
              <label
                for="floatingInput"
                className="text-dark"
                style={{ padding: "1rem 1.75rem" }}
              >
                phone
              </label>
            </div>
            <div className="form-floating col-md-12 mt-3">
              <textarea
                className="form-control textarea btnColor"
                placeholder="Message"
                id="floatingTextarea"
              ></textarea>
              <label
                for="floatingTextarea"
                className="text-dark"
                style={{ padding: "1rem 1.75rem" }}
              >
                Message
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="text-center">
          <button className="modalbtn cta-btn">Submit</button>
        </div>
      </div>
    </>
  );
}
