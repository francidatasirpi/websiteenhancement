import React from "react";
import "../services.scss";
import settings_icon from "../../../assets/images/icons/settings_icon.svg";
import seamless_icon from "../../../assets/images/icons/seamless_icon.svg";
import scalable_icon from "../../../assets/images/icons/scalable_icon.svg";
import tailered_icon from "../../../assets/images/icons/tailered_icon.svg";
import optimized_icon from "../../../assets/images/icons/optimized_icon.svg";
import platformContent from "../../../common/content/platforms.json";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { routesPath } from "../../../constants";

function PlatformEngSubContentCard() {
  const navigate = useNavigate()
  const iconMap = {
    "settings_icon.svg": settings_icon,
    "seamless_icon.svg": seamless_icon,
    "scalable_icon.svg": scalable_icon,
    "tailered_icon.svg": tailered_icon,
    "optimized_icon.svg": optimized_icon,
  };

  return (
    <div className="row mt-5">
      {platformContent.map((item, index) => (
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
      <div className="p-5 p-md-0 ds-btn d-flex w-100 align-items-center justify-content-center rounded-8px" onClick={() => navigate(routesPath.platformEngineering)}>
        <span>Explore More <BsArrowUpRight strokeWidth={1} size={16} /></span>
      </div>
      </div>
    </div>
  );
}

export default PlatformEngSubContentCard;
