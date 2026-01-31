import React, { useState } from "react";
import "./bussinessform.scss";
import logo from "../../../assets/images/Logo/dsweb_logo.png";
import { BsArrowUpRight } from "react-icons/bs";
import { elementIds } from "../../../constants";
import links from "../../../common/content/links.json";

const BussinessForm = () => {
  const [formData, setFormData] = useState({
    last_name: "",
    email: "",
    phone: "",
    company: "",
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
    }, 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      oid: links.OID,
      retURL: links.datasirpi + "/#ds-contact",
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
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
        phone: "",
        company: "",
      });
      formSubmitted();
    }
  };

  return (
    <div id={elementIds.contact} className="container mt-4">
      <div className="row">
        {/* Left Content Section */}
        <div className="col-12 col-md-6 bussiness_content mt-4">
          <div className="d-flex align-items-center mb-3">
            <div className="h3 me-md-3">Let's talk about what
              <img
                src={logo}
                alt="Salesforce Consulting Partners"
                className="img-fluid mx-2"
                style={{ maxWidth: "100px" }}
              />
              can do for your business.</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form__group field mt-0">
              <input
                type="text"
                className="form__field"
                placeholder="Full Name"
                name="last_name"
                id="last_name"
                maxLength="80"
                required
                value={formData.last_name}
                onChange={handleChange}
              />
              <label htmlFor="last_name" className="form__label">
                Name
              </label>
            </div>
            <div className="form__group field">
              <input
                type="email"
                className="form__field"
                placeholder="Email Address"
                name="email"
                id="email"
                maxLength="80"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group field">
              <input
                type="tel"
                className="form__field"
                placeholder="Phone Number"
                name="phone"
                id="phone"
                maxLength="40"
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="phone" className="form__label">
                Phone
              </label>
            </div>
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Company"
                name="company"
                id="company"
                maxLength="40"
                value={formData.company}
                onChange={handleChange}
              />
              <label htmlFor="company" className="form__label">
                Company
              </label>
            </div>
            <div className="my-5">
              {isSuccess && (
                <div className="alert alert-success mt-2">
                  <span>✔️ Form submitted successfully!</span>
                </div>
              ) || (<button type="submit" className="ds-btn">
              <span>Send <BsArrowUpRight strokeWidth={1} size={16} /></span>
            </button>)}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BussinessForm;
