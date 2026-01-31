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
            Our Expertise
          </span>
          <h2 className="section-title">
            Enterprise <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-description">
            Leverage our comprehensive suite of technology services designed to accelerate
            your digital transformation and drive measurable business outcomes.
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
