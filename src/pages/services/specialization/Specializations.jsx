import React from "react";
import { Link } from "react-router-dom";
import Platform from "../../../assets/images/Specialization/Platform_Eng.jpg";
import Application from "../../../assets/images/Specialization/Application_Eng.jpg";
import SalesForce from "../../../assets/images/Specialization/SalesForce.png";
import Cyber from "../../../assets/images/Specialization/Cyber.png";
import "../services.scss";
import specializationsContent from "../../../common/content/specializations.json";
import { routesPath } from "../../../constants";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ image, service, to }) => (
  <Link to={to} className="specialization-card">
    <img src={image} className="card-image" alt={service.alt} />
    <div className="card-overlay"></div>
    <div className="card-content">
      <h3 className="card-title">{service.title}</h3>
      <p className="card-text">{service.description}</p>
      <div className="card-cta">
        <span>Learn More</span>
        <BsArrowRight />
      </div>
    </div>
  </Link>
);

function Specializations() {
  return (
    <div className="specialization-grid four-col">
      <ServiceCard
        image={Platform}
        service={specializationsContent.platforms}
        to={routesPath.platformEngineering}
      />
      <ServiceCard
        image={Application}
        service={specializationsContent.applications}
        to={routesPath.applicationEngineering}
      />
      <ServiceCard
        image={SalesForce}
        service={specializationsContent.salesforce}
        to={routesPath.salesforceCrm}
      />
      <ServiceCard
        image={Cyber}
        service={specializationsContent.cybersecurity}
        to={routesPath.cyberSecurity}
      />
    </div>
  );
}

export default Specializations;
