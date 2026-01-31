import React from "react";
import Consulting from "../../../assets/images/About/Consulting.jpg";
import Development from "../../../assets/images/About/Development.png";
import Implementation from "../../../assets/images/About/Implementation.png";
import Support from "../../../assets/images/About/Support.png";
import { LuCircleArrowOutUpLeft } from "react-icons/lu";
import "./about.scss";
import aboutcontent from "../../../common/content/aboutcard.json";

const imageMap = {
  "Consulting.jpg": Consulting,
  "Development.jpg": Development,
  "Implementation.jpg": Implementation,
  "Support.jpg": Support,
};

const WhatWeDo = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h3 className="about-heading fw-bold text-center mb-5">What We Do?</h3>
      <div className="row">
        {aboutcontent.map((item, index) => (
          <div key={index} className="col-12 col-md-6 mb-4">
            <div className="card consultant-card">
              <img
                src={imageMap[item.image]}
                className="card-img hover-img"
                alt={item.title}
              />
              <div className="consultant-content">
                <div className="consultant-label">{item.title}</div>
                <div className="consultant-description d-none d-md-block">{item.description}</div>
              </div>
              <div className="hover-icon">
                <LuCircleArrowOutUpLeft />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
