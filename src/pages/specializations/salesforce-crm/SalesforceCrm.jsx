import { useEffect } from "react";
import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./salesforce-crm.scss";
import sf_icon_1 from "../../../assets/images/icons/sf_icon_1.svg";
import sf_icon_2 from "../../../assets/images/icons/sf_icon_2.svg";
import sf_icon_3 from "../../../assets/images/icons/sf_icon_3.svg";
import sf_icon_4 from "../../../assets/images/icons/sf_icon_4.svg";
import sf_icon_5 from "../../../assets/images/icons/sf_icon_5.svg";
import sf_icon_6 from "../../../assets/images/icons/sf_icon_6.svg";
import sf_icon_7 from "../../../assets/images/icons/sf_icon_7.svg";
import sf_icon_8 from "../../../assets/images/icons/sf_icon_8.svg";
import sf_certificates from "../../../assets/images/sales-force/sf_certificates.png";

const stats = [
  { value: "200+", label: "CRM Implementations" },
  { value: "15+", label: "Certified Experts" },
  { value: "98%", label: "Client Retention" },
  { value: "5x", label: "ROI Average" }
];

const features = [
  {
    icon: sf_icon_4,
    title: "Configuration",
    description: "We tailor Salesforce CRM to fit your business perfectly, ensuring it matches your structure and terminology effortlessly."
  },
  {
    icon: sf_icon_5,
    title: "Customization",
    description: "Every business is unique. Our Salesforce CRM solutions are highly customizable to meet your specific needs and goals."
  },
  {
    icon: sf_icon_6,
    title: "Integration",
    description: "Datasirpi ensures that Salesforce CRM works smoothly with your current systems, creating a unified approach to managing customer interactions."
  },
  {
    icon: sf_icon_7,
    title: "Data Security",
    description: "Your data's safety is our priority. Datasirpi uses strong security measures to protect your information and comply with industry standards."
  },
  {
    icon: sf_icon_8,
    title: "Training & Support",
    description: "We provide comprehensive training and ongoing support to help your team maximize the benefits of Salesforce CRM."
  }
];

const highlights = [
  {
    icon: sf_icon_1,
    text: "We specialize in creating cutting-edge web and mobile applications with strong engineering expertise."
  },
  {
    icon: sf_icon_2,
    text: "Our apps are responsive and cater to diverse needs, ensuring seamless integration across different platforms."
  },
  {
    icon: sf_icon_3,
    text: "We focus on delivering innovative solutions that keep our clients ahead in the digital landscape."
  }
];

const processSteps = [
  { number: "01", title: "Discovery", desc: "Understanding your business needs and CRM requirements" },
  { number: "02", title: "Strategy", desc: "Creating a customized implementation roadmap" },
  { number: "03", title: "Configuration", desc: "Setting up Salesforce to match your workflows" },
  { number: "04", title: "Migration", desc: "Secure data transfer from existing systems" },
  { number: "05", title: "Training", desc: "Empowering your team with hands-on training" },
  { number: "06", title: "Support", desc: "Ongoing optimization and technical support" }
];


export default function SalesforceCrm() {
  useEffect(() => {
    document.title = "Salesforce CRM Solutions | Datasirpi - Enterprise CRM Implementation";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Salesforce CRM implementation, customization, and integration services. Datasirpi helps enterprises optimize customer relationships with certified Salesforce solutions.");
    }
  }, []);

  return (
    <div className="salesforce-page">
      <section className="hero-section">
        <div className="hero-gradient-overlay" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Salesforce Partner</span>
            <h1 className="hero-title">Salesforce CRM Solutions</h1>
            <p className="hero-subtitle">
              Transform your customer relationships with enterprise-grade Salesforce implementation,
              customization, and support services tailored to your business needs.
            </p>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <div className="highlight-icon">
                  <img src={item.icon} alt="" aria-hidden="true" />
                </div>
                <p className="highlight-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Salesforce Services</h2>
            <p className="section-subtitle">
              Comprehensive CRM solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <article key={index} className="feature-card">
                <div className="feature-icon">
                  <img src={feature.icon} alt="" aria-hidden="true" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <p className="cta-text">
            Boost your business with Datasirpi's Salesforce CRM Solutions. Partner with us today
            to accelerate your growth journey. Get in touch to discover how our tailored services
            can transform your business.
          </p>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title text-center">Implementation Process</h2>
          <p className="section-subtitle text-center">
            Our proven methodology ensures successful Salesforce deployments
          </p>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <span className="step-number">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title text-center">Certified Salesforce Expertise You Can Trust</h2>
          <p className="section-subtitle text-center">
            Our team holds industry-recognized Salesforce certifications ensuring quality delivery
          </p>
          <div className="certificates-wrapper">
            <img src={sf_certificates} alt="Salesforce Certifications" className="certificates-image" />
          </div>
        </div>
      </section>

      <section className="contact-section">
        <BussinessForm />
      </section>
    </div>
  );
}
