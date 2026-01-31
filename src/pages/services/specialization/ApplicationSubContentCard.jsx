import React from "react";
import "../services.scss";
import usercentric_icon from "../../../assets/images/icons/usercentric_icon.svg";
import highperformance_icon from "../../../assets/images/icons/highperformance_icon.svg";
import customized_icon from "../../../assets/images/icons/customized_icon.svg";
import secure_icon from "../../../assets/images/icons/secure_icon.svg";
import lifecycle_icon from "../../../assets/images/icons/lifecycle_icon.svg";
import ApplicationContent from "../../../common/content/application.json";
import { BsArrowUpRight } from "react-icons/bs";
import { routesPath } from "../../../constants";
import { useNavigate } from "react-router-dom";

function ApplicationSubContentCard() {
  const navigate = useNavigate()
  const iconMap = {
    "usercentric_icon.svg": usercentric_icon,
    "highperformance_icon.svg": highperformance_icon,
    "customized_icon.svg": customized_icon,
    "secure_icon.svg": secure_icon,
    "lifecycle_icon.svg": lifecycle_icon,
  };

  return (
    <div className="row mt-5">
      {ApplicationContent.map((item, index) => (
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
      <div className="p-5 p-md-0 ds-btn d-flex w-100 align-items-center justify-content-center rounded-8px" onClick={() => navigate(routesPath.applicationEngineering)}>
        <span>Explore More <BsArrowUpRight strokeWidth={1} size={16} /></span>
      </div>
      </div>
    </div>
  );
}

export default ApplicationSubContentCard;
