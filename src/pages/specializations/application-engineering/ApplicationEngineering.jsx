import { useEffect } from "react";
import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./application-eng.scss";
import application_icon_1 from "../../../assets/images/icons/application_icon_1.svg";
import application_icon_2 from "../../../assets/images/icons/application_icon_2.svg";
import application_icon_3 from "../../../assets/images/icons/application_icon_3.svg";
import application_icon_4 from "../../../assets/images/icons/application_icon_4.svg";
import application_icon_5 from "../../../assets/images/icons/application_icon_5.svg";
import application_icon_6 from "../../../assets/images/icons/application_icon_6.svg";
import application_icon_7 from "../../../assets/images/icons/application_icon_7.svg";
import application_icon_8 from "../../../assets/images/icons/application_icon_8.svg";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Technologies" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" }
];

const highlights = [
  {
    icon: application_icon_6,
    text: "We specialize in creating cutting-edge web and mobile applications with strong engineering expertise."
  },
  {
    icon: application_icon_7,
    text: "Our apps are responsive and cater to diverse needs, ensuring seamless integration across different platforms."
  },
  {
    icon: application_icon_8,
    text: "We focus on delivering innovative solutions that keep our clients ahead in the digital landscape."
  }
];

const services = [
  {
    icon: application_icon_1,
    title: "App Development & Design",
    features: [
      { label: "High-Quality Mobile Apps", desc: "User-friendly apps using hybrid, native, and cross-platform technologies." },
      { label: "Mobile First & Responsive", desc: "Optimized apps for all devices with a mobile-first approach." },
      { label: "User-Centric Design", desc: "Clear, crisp, and concise designs focused on user experience." }
    ]
  },
  {
    icon: application_icon_2,
    title: "Performance & Efficiency",
    features: [
      { label: "Performance Optimization", desc: "Best practices for speed, including lazy-loading and optimized images." },
      { label: "Single Page Applications", desc: "Native-like experiences with advanced JS frameworks for efficiency." },
      { label: "Microservice Architecture", desc: "Scalable, maintainable, and easily deployable services." }
    ]
  },
  {
    icon: application_icon_3,
    title: "Security & Data Management",
    features: [
      { label: "Comprehensive Security", desc: "Robust authentication, adherence to OWASP guidelines, and regular testing." },
      { label: "Data Storage Solutions", desc: "Efficient data management with SQL and NoSQL, encryption, and caching." },
      { label: "API Frameworks", desc: "Fast client-server communication with REST, GraphQL, and WebSocket." }
    ]
  },
  {
    icon: application_icon_4,
    title: "Native & Cross-Platform",
    features: [
      { label: "Native Development", desc: "Extensive experience with native platforms for smartphones and tablets." },
      { label: "Cross-Platform Development", desc: "Cost-effective, high-performance apps using cross-platform SDKs." },
      { label: "Intuitive Design", desc: "Self-explanatory interfaces adhering to iOS and Android design principles." }
    ]
  },
  {
    icon: application_icon_5,
    title: "Testing & Quality Assurance",
    features: [
      { label: "Rigorous Testing", desc: "Continuous testing with modern tools to ensure error-free applications." },
      { label: "Meeting Requirements", desc: "Ensuring all project standards and requirements are met." },
      { label: "Continuous Integration", desc: "Automated testing as part of the development pipeline." }
    ]
  }
];

const processSteps = [
  { number: "01", title: "Discovery", desc: "Understanding your requirements, goals, and target audience" },
  { number: "02", title: "Planning", desc: "Creating detailed roadmaps and technical architecture" },
  { number: "03", title: "Design", desc: "Crafting intuitive UI/UX with user-centered approach" },
  { number: "04", title: "Development", desc: "Building robust solutions with clean, scalable code" },
  { number: "05", title: "Testing", desc: "Rigorous QA to ensure flawless performance" },
  { number: "06", title: "Deployment", desc: "Smooth launch with continuous monitoring and support" }
];

export default function ApplicationEngineering() {
  useEffect(() => {
    document.title = "Application Engineering | Datasirpi - Web & Mobile App Development";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert web and mobile application development services. Datasirpi delivers high-performance, secure, and scalable apps using modern technologies and best practices.");
    }
  }, []);

  return (
    <div className="application-page">
      <section className="hero-section">
        <div className="hero-gradient-overlay" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Full-Stack Development</span>
            <h1 className="hero-title">Application Engineering</h1>
            <p className="hero-subtitle">
              Build cutting-edge web and mobile applications with our expert engineering team.
              Delivering innovative, secure, and scalable solutions for your digital needs.
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

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Application Services</h2>
            <p className="section-subtitle">
              Comprehensive development solutions designed to deliver exceptional digital experiences
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card dark">
                <div className="service-icon">
                  <img src={service.icon} alt="" aria-hidden="true" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <ul className="feature-list">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <strong>{feature.label}:</strong> {feature.desc}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title text-center">Development Process</h2>
          <p className="section-subtitle text-center">
            Our structured approach ensures quality delivery at every stage
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

      <section className="contact-section">
        <BussinessForm />
      </section>
    </div>
  );
}
