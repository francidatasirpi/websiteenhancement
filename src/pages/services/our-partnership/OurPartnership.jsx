import React from "react";
import "./OurPartnership.scss";

// Import your images
import aws from "../../../assets/images/OurPartnership/aws.png";
import salesforce from "../../../assets/images/OurPartnership/salesforce.png";

const OurPartnership = () => {
  return (
    <div className="container text-center my-5 pt-3">
      <h2 className="mb-5 fw-bold">Our partnerships</h2>
      <div className="row pt-3">
        <div className="col-12 p-0 col-md-4 mt-5 mt-md-0 d-flex flex-column flex-md-row align-items-center justify-content-center">
              <img
                src={aws}
                alt="AWS Partner Network"
                className="w-25"
              />
            <div className="text-start ps-2 fs-4">
              <div>partner</div>
              <div>network</div>
            </div>
        </div>
        <div className="col-12 p-0 col-md-4 mt-5 mt-md-0 d-flex flex-column flex-md-row align-items-center justify-content-center">
              <img
                src={salesforce}
                alt="Salesforce Consulting Partners"
                className="w-25"
              />
            <div className="text-start ps-2">
              <div className="small">Registered</div>
              <div className="fs-4 text-nowrap">Consulting Partners</div>
            </div>
          </div>
        <div className="col-12 p-0 col-md-4 mt-5 mt-md-0 d-flex flex-column flex-md-row align-items-center justify-content-center">
              <img
                src={salesforce}
                alt="Salesforce Billing"
                className="w-25"
              />
            <div className="text-start ps-2">
              <div className="fs-4">Billing</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default OurPartnership;
