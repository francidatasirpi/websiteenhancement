import React from "react";
import "./accreditation.scss"; // Include custom styles
import badgeImage from "../../../assets/images/ISO27001.png";

const AccreditationCard = () => {
  return (
    <div
      className="accreditation-card-container text-white my-5"
    >
      <h5 className="card-header text-center text-white fs-3">Accreditation</h5>
      <div className="card accreditation-card">
        <div className="row g-4 align-items-center">
          <div className="col-lg-8">
            <div className="card-body py-4 px-3">
              <h5 className="card-subtitle fs-5 text-center text-lg-start">
                Setting the Gold Standard in Information Security!
              </h5>
              <h2 className="card-title display-6 text-center text-lg-start">
                "ISO 27001 Certified – Where Security Meets Excellence!"
              </h2>
              <p className="card-text fs-6 text-center text-lg-start">
                ISO 27001 Certification is a global benchmark for information
                security. Our commitment to safeguarding your data is built on
                the highest standards, giving you peace of mind in a digital
                world.
              </p>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={badgeImage}
              alt="ISO 27001 Certified Badge"
              className="img-fluid w-75 h-auto iso-badge"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccreditationCard;
