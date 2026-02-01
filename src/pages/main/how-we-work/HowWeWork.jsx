import React from "react";
import "./how-we-work.scss";
import content from "../../../common/content/content.json";

function HowWeWork() {
  const steps = content.howWeWork || [];

  return (
    <section className="how-we-work-section">
      <div className="section-header">
        <span className="section-badge">
          <span className="badge-dot"></span>
          Our Process
        </span>
        <h2 className="section-title">
          How We <span className="gradient-text">Work</span>
        </h2>
        <p className="section-description">
          A straightforward process designed to get you results quickly.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.step}</div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className="step-connector" />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowWeWork;
