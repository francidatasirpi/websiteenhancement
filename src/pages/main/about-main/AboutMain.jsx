import React, { useEffect, useState } from "react";
import "./about.scss";
import logo from "../../../assets/images/Logo/dsweb_logo.png";
import contentData from "../../../common/content/content.json";
import WhatWeDo from "./WhatWeDo";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { elementIds, routesPath } from "../../../constants";
import { HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi";

const valueIcons = {
  excellence: HiOutlineSparkles,
  integrity: HiOutlineShieldCheck,
  innovation: HiOutlineLightBulb,
  partnership: HiOutlineUserGroup,
};

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

      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="mv-label">Our Mission</div>
              <p className="mv-text">{content.mission}</p>
            </div>
            <div className="vision-card">
              <div className="mv-label">Our Vision</div>
              <p className="mv-text">{content.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h3 className="section-title">Our Core Values</h3>
          <div className="values-grid">
            {content.values?.map((value, index) => {
              const IconComponent = valueIcons[value.icon] || HiOutlineSparkles;
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <IconComponent size={28} />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <h3 className="section-title">Why Choose DataSirpi?</h3>
          <div className="why-choose-grid">
            {content.whyChooseUs?.map((item, index) => (
              <div key={index} className="why-choose-item">
                <div className="why-choose-icon">
                  <HiOutlineCheckCircle size={24} />
                </div>
                <div className="why-choose-content">
                  <h4 className="why-choose-title">{item.title}</h4>
                  <p className="why-choose-description">{item.description}</p>
                </div>
              </div>
            ))}
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
