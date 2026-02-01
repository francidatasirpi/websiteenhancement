import React from "react";
import "./proof-strip.scss";
import awsLogo from "../../../assets/images/OurPartnership/aws.png";
import salesforceLogo from "../../../assets/images/OurPartnership/salesforce.png";
import isoLogo from "../../../assets/images/ISO27001.png";

const partners = [
  { logo: awsLogo, name: "AWS Partner" },
  { logo: salesforceLogo, name: "Salesforce Partner" },
  { logo: isoLogo, name: "ISO 27001 Certified" }
];

function ProofStrip() {
  return (
    <section className="proof-strip">
      <div className="proof-container">
        <span className="partners-label">Trusted By</span>
        <div className="partners-logos">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="partner-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProofStrip;
