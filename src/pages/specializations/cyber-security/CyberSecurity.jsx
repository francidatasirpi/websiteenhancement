import { useEffect } from "react";
import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./cyber.scss";
import platformBanner from "../../../assets/images/Specialization/Cyber.png";
import cyber_icon_1 from "../../../assets/images/icons/cyber_icon_1.svg";
import cyber_icon_2 from "../../../assets/images/icons/cyber_icon_2.svg";
import cyber_icon_3 from "../../../assets/images/icons/cyber_icon_3.svg";
import cyber_icon_4 from "../../../assets/images/icons/cyber_icon_4.svg";
import cyber_icon_5 from "../../../assets/images/icons/cyber_icon_5.svg";
import cyber_icon_6 from "../../../assets/images/icons/cyber_icon_6.svg";
import cyber_icon_7 from "../../../assets/images/icons/cyber_icon_7.svg";
import cyber_icon_8 from "../../../assets/images/icons/cyber_icon_8.svg";

const coreServices = [
  {
    icon: cyber_icon_1,
    title: "Technology Optimization Center (TOC)",
    features: [
      "Enhance your business operations with optimized technology infrastructure for peak performance",
      "From network security to endpoint protection, we ensure your systems are secure and resilient",
      "Trust us to maintain smooth operations, allowing you to focus on your business goals"
    ]
  },
  {
    icon: cyber_icon_2,
    title: "Security Operations Center (SOC)",
    features: [
      "State-of-the-art technology to monitor and detect potential cyber threats in real-time",
      "Proactive defense mechanism that evolves with the changing threat landscape",
      "Dedicated team ensures swift responses with round-the-clock protection"
    ]
  }
];

const securityServices = [
  {
    icon: cyber_icon_3,
    title: "Web App Penetration Testing",
    description: "Uncover vulnerabilities in your web applications before malicious actors do. Our expert team simulates real-world attacks to identify and address potential security risks."
  },
  {
    icon: cyber_icon_4,
    title: "Vulnerability Assessment",
    description: "Stay one step ahead of cyber threats with our thorough vulnerability assessment services. We conduct in-depth analysis to identify weaknesses and provide actionable insights."
  },
  {
    icon: cyber_icon_5,
    title: "Email Phishing Assessment",
    description: "Protect your organization from social engineering attacks. Our phishing assessments help identify vulnerabilities in your email security and employee awareness."
  },
  {
    icon: cyber_icon_6,
    title: "Red Team Engagements",
    description: "Experience simulated cyber attacks orchestrated by our Red Team experts. We assess your organization's readiness to detect and respond to sophisticated threats."
  },
  {
    icon: cyber_icon_7,
    title: "Mobile App Penetration Testing",
    description: "Secure your mobile ecosystem with comprehensive penetration testing. We scrutinize your apps for vulnerabilities, ensuring the security and privacy of your users."
  },
  {
    icon: cyber_icon_8,
    title: "Source Code Review",
    description: "Root out security vulnerabilities at the core of your software. Our experts meticulously analyze your source code, providing insights to enhance overall security."
  }
];

export default function CyberSecurity() {
  useEffect(() => {
    document.title = "Cyber Security Services | Datasirpi - Enterprise Security Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Comprehensive cyber security services including SOC, penetration testing, vulnerability assessment, and compliance. Datasirpi protects your digital assets with enterprise-grade security.");
    }
  }, []);

  return (
    <div className="cyber-page">
      <section className="hero-section">
        <div className="hero-gradient-overlay" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Enterprise Security</span>
            <h1 className="hero-title">Cyber Security</h1>
            <p className="hero-subtitle">
              Protect your digital assets with cutting-edge security solutions. We deliver comprehensive
              cyber defense strategies that safeguard your business against evolving threats.
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img src={platformBanner} alt="Cyber Security Operations" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <p className="intro-text">
            We understand the utmost importance of securing your digital assets in an ever-evolving cyber
            landscape. As a leading cyber security provider, we are dedicated to delivering cutting-edge
            solutions that safeguard your business against potential threats.
          </p>
        </div>
      </section>

      <section className="compliance-section">
        <div className="container">
          <div className="compliance-card">
            <h2 className="compliance-title">Compliance Optimization Center (COC)</h2>
            <div className="compliance-features">
              <div className="compliance-item">
                <span className="item-number">01</span>
                <p>Datasirpi's COC simplifies navigating cyber security regulations</p>
              </div>
              <div className="compliance-item">
                <span className="item-number">02</span>
                <p>We offer customized solutions to meet and exceed industry standards</p>
              </div>
              <div className="compliance-item">
                <span className="item-number">03</span>
                <p>Ensure peace of mind and stakeholder trust with our compliance expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-services-section">
        <div className="container">
          <div className="core-services-grid">
            {coreServices.map((service, index) => (
              <article key={index} className="core-service-card">
                <div className="service-icon">
                  <img src={service.icon} alt="" aria-hidden="true" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <ul className="feature-list">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="security-services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Offensive Security Services</h2>
            <p className="section-subtitle">
              Proactive security testing to identify and address vulnerabilities before attackers do
            </p>
          </div>
          <div className="services-grid">
            {securityServices.map((service, index) => (
              <article key={index} className="service-card">
                <div className="service-icon">
                  <img src={service.icon} alt="" aria-hidden="true" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </article>
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
