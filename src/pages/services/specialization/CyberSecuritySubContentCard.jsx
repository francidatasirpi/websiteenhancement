import React from "react";
import "../services.scss";
import treart_icon from "../../../assets/images/icons/treart_icon.svg";
import incident_icon from "../../../assets/images/icons/incident_icon.svg";
import complains_icon from "../../../assets/images/icons/complains_icon.svg";
import datasystem_icon from "../../../assets/images/icons/datasystem_icon.svg";
import monitoring_icon from "../../../assets/images/icons/monitoring_icon.svg";
import CyberSecurity from "../../../common/content/cybersecurity.json";
import { BsArrowUpRight } from "react-icons/bs";
import { routesPath } from "../../../constants";
import { useNavigate } from "react-router-dom";

function CyberSecuritySubContentCard() {
  const navigate = useNavigate()
  const iconMap = {
    "treart_icon.svg": treart_icon,
    "incident_icon.svg": incident_icon,
    "complains_icon.svg": complains_icon,
    "datasystem_icon.svg": datasystem_icon,
    "monitoring_icon.svg": monitoring_icon,
  };

  return (
    <div className="row mt-5">
      {CyberSecurity.map((item, index) => (
        <div key={index} className="col-12 col-md-4 mb-4 d-flex">
          <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
            <div className="feature-icon mb-3">
              {/* Dynamically assign the icon */}
              <img src={iconMap[item.icon]} alt={item.title} />
            </div>
            <div>
              <h5 className="feature-title mb-2">{item.title}</h5>
              <p className="feature-description mb-0">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
          <div className="col-12 col-md-4 mb-4 d-flex">
      <div className="p-5 p-md-0 ds-btn d-flex w-100 align-items-center justify-content-center rounded-8px" onClick={() => navigate(routesPath.cyberSecurity)}>
        <span>Explore More <BsArrowUpRight strokeWidth={1} size={16} /></span>
      </div>
      </div>
    </div>
  );
}

export default CyberSecuritySubContentCard;
