import React from "react";
import Platform from "../../../assets/images/Specialization/Platform_Eng.jpg";
import Application from "../../../assets/images/Specialization/Application_Eng.jpg";
import SalesForce from "../../../assets/images/Specialization/SalesForce.png";
import Cyber from "../../../assets/images/Specialization/Cyber.png";
import "../services.scss";
import ApplicationSubContentCard from "./ApplicationSubContentCard";
import SalesForceSubContent from "./SalesForceSubContentCard";
import CyberSecuritySubContentCard from "./CyberSecuritySubContentCard";
import PlatformEngSubContentCard from "./PlatformEngSubContentCard";
import specializationsContent from "../../../common/content/specializations.json";

// Service card component
const ServiceCard = ({ image, service }) => (
  <div className="specialization-card">
    <img src={image} className="card-image" alt={service.alt} />
    <div className="card-overlay"></div>
    <div className="card-content">
      <span className="card-enterprise-badge">
        <span className="badge-icon">⚡</span>
        Enterprise-Ready
      </span>
      <h3 className="card-title">{service.title}</h3>
      <p className="card-text">{service.description}</p>
      {service.features && (
        <div className="card-features">
          {service.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="feature-chip">{feature}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

function Specializations() {
  return (
    <>
      {/* Main Services Grid */}
      <div className="specialization-grid">
        <ServiceCard
          image={Platform}
          service={specializationsContent.platforms}
        />
        <ServiceCard
          image={Application}
          service={specializationsContent.applications}
        />
      </div>

      {/* Platform Engineering Details */}
      <PlatformEngSubContentCard />

      {/* Application Engineering Details */}
      <ApplicationSubContentCard />

      {/* CRM and Security Grid */}
      <div className="specialization-grid">
        <ServiceCard
          image={SalesForce}
          service={specializationsContent.salesforce}
        />
        <ServiceCard
          image={Cyber}
          service={specializationsContent.cybersecurity}
        />
      </div>

      {/* Salesforce Details */}
      <SalesForceSubContent />

      {/* Cybersecurity Details */}
      <CyberSecuritySubContentCard />
    </>
  );
}

export default Specializations;
