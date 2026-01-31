import React from "react";
import "./services.scss";
import Specializations from "./specialization/Specializations";
import AccreditationCard from "./accreditation/AccreditationCard";
import OurPartnership from "./our-partnership/OurPartnership";
import OurClients from "./our-clients/OurClients";
import { elementIds } from "../../constants";

function Services() {
  return (
    <>
      <div id={elementIds.services} className="services-section">
        <div className="section-header">
          <span className="section-badge">
            <span className="badge-dot"></span>
            What We Do
          </span>
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-description">
            We build and maintain software systems that help businesses operate more
            efficiently and serve their customers better.
          </p>
        </div>

        <div className="services-content">
          <Specializations />
          <AccreditationCard />
          <OurClients />
          <OurPartnership />
        </div>
      </div>
    </>
  );
}

export default Services;
