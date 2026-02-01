import React, { useState } from "react";
import "./bussinessform.scss";
import { BsArrowUpRight, BsCheckCircle, BsShieldCheck, BsClock } from "react-icons/bs";
import { elementIds } from "../../../constants";
import links from "../../../common/content/links.json";

const serviceOptions = [
  { value: "", label: "What do you need help with?" },
  { value: "platform-engineering", label: "Platform Engineering" },
  { value: "application-development", label: "Application Development" },
  { value: "salesforce-crm", label: "Salesforce & CRM" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "other", label: "Other / Not sure" }
];

const BussinessForm = () => {
  const [formData, setFormData] = useState({
    last_name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formSubmitted = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      oid: links.OID,
      retURL: links.datasirpi + "/#ds-contact",
      last_name: formData.last_name,
      email: formData.email,
      company: formData.company,
      description: `Service: ${formData.service}\n\n${formData.message}`,
      lead_source: "DS-WebSite",
    };

    try {
      await fetch(links.contactSubmission, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setFormData({
        last_name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
      formSubmitted();
    }
  };

  return (
    <section id={elementIds.contact} className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <span className="contact-badge">
            <span className="badge-dot"></span>
            Get Started
          </span>
          <h2 className="contact-heading">
            Book a Free <span className="gradient-text">Consultation</span>
          </h2>
          <p className="contact-description">
            Tell us about your project and we'll get back to you within 24 hours with a plan.
          </p>

          <div className="trust-indicators">
            <div className="trust-item">
              <BsClock size={18} />
              <span>We respond within 24 hours</span>
            </div>
            <div className="trust-item">
              <BsShieldCheck size={18} />
              <span>NDA available on request</span>
            </div>
            <div className="trust-item">
              <BsCheckCircle size={18} />
              <span>No obligation consultation</span>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {isSuccess ? (
            <div className="success-message">
              <BsCheckCircle size={48} />
              <h3>Thank you!</h3>
              <p>We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="last_name">Name *</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Your name"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="ds-btn submit-btn">
                <span>Book a Free Consultation <BsArrowUpRight strokeWidth={1} size={16} /></span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BussinessForm;
