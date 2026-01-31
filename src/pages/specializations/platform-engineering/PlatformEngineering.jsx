import { useEffect } from "react";
import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./platform-eng.scss";
import platformBanner from "../../../assets/images/Specialization/Platform_Eng.jpg";
import platform_icon_1 from "../../../assets/images/icons/platform_icon_1.svg";
import platform_icon_2 from "../../../assets/images/icons/platform_icon_2.svg";
import platform_icon_3 from "../../../assets/images/icons/platform_icon_3.svg";
import platform_icon_4 from "../../../assets/images/icons/platform_icon_4.svg";
import platform_icon_5 from "../../../assets/images/icons/platform_icon_5.svg";
import platform_icon_6 from "../../../assets/images/icons/platform_icon_6.svg";
import platform_icon_7 from "../../../assets/images/icons/platform_icon_7.svg";
import platform_icon_8 from "../../../assets/images/icons/platform_icon_8.svg";
import platform_icon_9 from "../../../assets/images/icons/platform_icon_9.svg";

const devopsServices = [
  {
    icon: platform_icon_1,
    title: "DevOps as a Service",
    description: "Experience seamless collaboration between your development and operations teams with our DevOps as a Service. Our experts at Datasirpi empower your organization to adopt a culture of continuous integration, delivery, and deployment."
  },
  {
    icon: platform_icon_2,
    title: "DevOps Outsourcing",
    description: "Let us be your extended DevOps team. Datasirpi provides top-notch DevOps outsourcing services, allowing you to focus on your core competencies while we handle the complexities of infrastructure management."
  },
  {
    icon: platform_icon_3,
    title: "Continuous Integration & Deployment",
    description: "Stay ahead of the competition with our robust continuous integration and deployment solutions. Datasirpi helps you automate the build, test, and deployment processes, fostering a more agile development lifecycle."
  },
  {
    icon: platform_icon_4,
    title: "Container Orchestration",
    description: "Harness the power of containerization with our Container Orchestration Services. Our skilled team ensures seamless deployment, scaling, and management of containerized applications."
  },
  {
    icon: platform_icon_5,
    title: "Log Management & Monitoring",
    description: "Gain real-time insights into your infrastructure with our comprehensive log management and monitoring solutions. Track performance metrics, detect anomalies, and optimize system health."
  }
];

const cloudServices = [
  {
    icon: platform_icon_6,
    title: "Cloud Migration Services",
    description: "We understand that migrating to the cloud is a pivotal step in enhancing agility and scalability. Our cloud migration services are tailored to meet your unique business needs, ensuring a smooth transition."
  },
  {
    icon: platform_icon_7,
    title: "Cloud Architecture Design",
    description: "Unlock the full potential of the cloud with Datasirpi's cloud architecture design services. Our team of architects collaborates with you to create scalable, secure, and resilient cloud solutions."
  },
  {
    icon: platform_icon_8,
    title: "Managed Cloud Services",
    description: "Focus on your business while we manage your cloud infrastructure. Datasirpi's managed cloud services provide 24/7 monitoring, maintenance, and optimization of your cloud environment."
  },
  {
    icon: platform_icon_9,
    title: "Serverless Architecture Design",
    description: "Embrace the future with serverless architecture. Our experts design event-driven, cost-effective solutions that automatically scale based on demand, eliminating infrastructure management overhead."
  }
];

export default function PlatformEngineering() {
  useEffect(() => {
    document.title = "Platform Engineering Services | Datasirpi - DevOps & Cloud Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Enterprise platform engineering services including DevOps, cloud migration, container orchestration, and infrastructure automation. Datasirpi delivers scalable, secure solutions.");
    }
  }, []);

  return (
    <div className="platform-page">
      <section className="hero-section">
        <div className="hero-gradient-overlay" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Enterprise Solutions</span>
            <h1 className="hero-title">Platform Engineering</h1>
            <p className="hero-subtitle">
              Build robust, scalable, and efficient platforms to enhance and empower your business operations
              with our expert DevOps and cloud engineering services.
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img src={platformBanner} alt="Platform Engineering Infrastructure" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <p>
              Platform engineering is our specialty at Datasirpi. We build robust, scalable, and efficient
              platforms to enhance and empower your business operations, whether by improving existing systems
              or creating new ones.
            </p>
            <p>
              Join us on a journey of innovation, collaboration, and digital excellence. We know every business
              is unique, so our approach reflects a deep understanding of your specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">DevOps</span>
            <h2 className="section-title">DevOps Services</h2>
            <p className="section-subtitle">
              Streamline your development and operations with enterprise-grade DevOps solutions
            </p>
          </div>
          <div className="services-grid">
            {devopsServices.map((service, index) => (
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

      <section className="services-section alt-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-badge cloud">Cloud</span>
            <h2 className="section-title">Cloud Services</h2>
            <p className="section-subtitle">
              Accelerate your digital transformation with comprehensive cloud solutions
            </p>
          </div>
          <div className="services-grid">
            {cloudServices.map((service, index) => (
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
