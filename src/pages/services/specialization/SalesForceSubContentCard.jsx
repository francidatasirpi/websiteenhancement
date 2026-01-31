import React from "react";
import "../services.scss";
import personalazied_icon from "../../../assets/images/icons/personalazied_icon.svg";
import automation_icon from "../../../assets/images/icons/automation_icon.svg";
import driven_icon from "../../../assets/images/icons/driven_icon.svg";
import enhanced_icon from "../../../assets/images/icons/enhanced_icon.svg";
import collabration_icon from "../../../assets/images/icons/collabration_icon.svg";
import SalesForceContent from "../../../common/content/salesforce.json";
import { BsArrowUpRight } from "react-icons/bs";
import { routesPath } from "../../../constants";
import { useNavigate } from "react-router-dom";

function SalesForceSubContent() {
  const navigate = useNavigate()
  const iconMap = {
    "personalazied_icon.svg": personalazied_icon,
    "automation_icon.svg": automation_icon,
    "driven_icon.svg": driven_icon,
    "enhanced_icon.svg": enhanced_icon,
    "collabration_icon.svg": collabration_icon,
  };

  return (
    <div className="row mt-5">
      {SalesForceContent.map((item, index) => (
        <div key={index} className="col-12 col-md-4 mb-4 d-flex">
          <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
            <div className="feature-icon mb-3">
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
        <div className="p-5 p-md-0 ds-btn d-flex w-100 align-items-center justify-content-center rounded-8px" onClick={() => navigate(routesPath.salesforceCrm)}>
          <span>Explore More <BsArrowUpRight strokeWidth={1} size={16} /></span>
        </div>
      </div>
    </div>
  );
}

export default SalesForceSubContent;
