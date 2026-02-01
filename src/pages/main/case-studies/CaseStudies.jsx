import React from "react";
import "./case-studies.scss";
import content from "../../../common/content/content.json";
import { BsArrowRight } from "react-icons/bs";

function CaseStudies() {
  const caseStudies = content.caseStudies || [];

  return (
    <section className="case-studies-section">
      <div className="section-header">
        <span className="section-badge">
          <span className="badge-dot"></span>
          Recent Work
        </span>
        <h2 className="section-title">
          Project <span className="gradient-text">Highlights</span>
        </h2>
        <p className="section-description">
          Real outcomes from real engagements with growing businesses.
        </p>
      </div>

      <div className="case-studies-grid">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-card">
            <div className="case-study-number">0{index + 1}</div>
            <h3 className="case-study-title">{study.title}</h3>
            <p className="case-study-desc">{study.description}</p>
            <div className="case-study-tech">{study.tech}</div>
            <button className="case-study-link">
              Read more <BsArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
