import React, { useEffect, useState } from "react";
import "./about.scss";
import logo from "../../../assets/images/Logo/dsweb_logo.png";
import contentData from "../../../common/content/content.json";
import WhatWeDo from "./WhatWeDo";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { elementIds, routesPath } from "../../../constants";

function AboutMain() {
  const [content, setContent] = useState({});

  useEffect(() => {
    setContent(contentData?.about);
  }, []);

  const stats = contentData?.stats || {};

  return (
    <>
      <section className="about-section" id={elementIds.about}>
        <div className="container">
          <div className="about-content">
            <div className="about-header">
              <h2 className="about-heading">
                {content.title}
                <img src={logo} alt="Logo" className="about-logo" />
              </h2>
              <p className="about-description">{content.description}</p>
              <div className="about-cta">
                <Link to={routesPath.about} className="ds-btn">
                  <span>
                    {content.buttonText} <BsArrowUpRight strokeWidth={1} size={16} />
                  </span>
                </Link>
              </div>
            </div>

            <div className="stats-bar">
              <div className="stat-item">
                <span className="stat-number">{stats.projects}</span>
                <span className="stat-label">{stats.projectsLabel}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">{stats.clients}</span>
                <span className="stat-label">{stats.clientsLabel}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">{stats.years}</span>
                <span className="stat-label">{stats.yearsLabel}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">{stats.countries}</span>
                <span className="stat-label">{stats.countriesLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whatwedo-section">
        <div className="container">
          <WhatWeDo />
        </div>
      </section>
    </>
  );
}

export default AboutMain;
