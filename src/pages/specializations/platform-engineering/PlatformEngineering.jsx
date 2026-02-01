import { useEffect } from "react";
import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./platform-eng.scss";
import { BsRocketTakeoff, BsGear, BsTools, BsHeadset, BsCheckCircle, BsArrowLeftRight, BsSpeedometer2, BsPiggyBank, BsCodeSlash } from "react-icons/bs";

const stats = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "60%", label: "Cost Reduction" },
  { value: "10x", label: "Faster Deployments" },
  { value: "24/7", label: "Expert Support" }
];

const serviceCategories = [
  {
    icon: BsRocketTakeoff,
    title: "Platform Deployment",
    tagline: "Day Zero Excellence",
    description: "Design, size and deploy platforms for reliability and impact, starting day zero.",
    capabilities: [
      "Infrastructure architecture & sizing",
      "Multi-cloud deployment (AWS, Azure, GCP, Oracle)",
      "On-premise & hybrid solutions",
      "High availability & disaster recovery",
      "Security-first infrastructure design",
      "Performance optimization & load balancing"
    ]
  },
  {
    icon: BsGear,
    title: "Platform Adoption & Maturity",
    tagline: "Day Two & Beyond",
    description: "Self-service, tooling and governance, for day two and beyond.",
    capabilities: [
      "Developer self-service portals",
      "Internal developer platforms (IDP)",
      "CI/CD pipeline automation",
      "GitOps & Infrastructure as Code",
      "Platform governance & compliance",
      "Observability & monitoring frameworks"
    ]
  },
  {
    icon: BsTools,
    title: "Field Engineering",
    tagline: "Bespoke Solutions",
    description: "Bespoke engineering: Plugins, bolt-ons, connectors and stuff at large.",
    capabilities: [
      "Custom integrations & connectors",
      "API development & management",
      "Legacy system modernization",
      "Data pipeline engineering",
      "Custom tooling & automation",
      "Platform extensions & plugins"
    ]
  },
  {
    icon: BsHeadset,
    title: "Managed Services & Support",
    tagline: "Mission Critical",
    description: "Support mission critical systems. Engineer on call 24x7.",
    capabilities: [
      "24/7 production support",
      "Incident management & response",
      "Proactive monitoring & alerting",
      "Performance tuning & optimization",
      "Security patching & updates",
      "Capacity planning & scaling"
    ]
  },
  {
    icon: BsArrowLeftRight,
    title: "Complex Migrations",
    tagline: "Zero Downtime",
    description: "Strategize zero-downtime, active-active data(base) and application migrations.",
    capabilities: [
      "Zero-downtime migration strategies",
      "Active-active database migrations",
      "Application replatforming",
      "Data migration & validation",
      "Cutover planning & execution",
      "Rollback & recovery procedures"
    ]
  },
  {
    icon: BsSpeedometer2,
    title: "Performance Engineering",
    tagline: "Tail Optimization",
    description: "Tail optimization for parallel-distributed and concurrent user facing systems.",
    capabilities: [
      "Latency optimization",
      "Throughput engineering",
      "Distributed systems tuning",
      "Concurrency optimization",
      "Load testing & benchmarking",
      "Performance profiling & analysis"
    ]
  },
  {
    icon: BsPiggyBank,
    title: "Cost Rationalization",
    tagline: "FinOps Excellence",
    description: "First-principles spend optimization and fin-ops: For cloud, on-prem and PaaS.",
    capabilities: [
      "Cloud cost optimization",
      "Resource rightsizing",
      "Reserved capacity planning",
      "FinOps implementation",
      "Cost allocation & showback",
      "Spend forecasting & budgeting"
    ]
  },
  {
    icon: BsCodeSlash,
    title: "API Management",
    tagline: "Enterprise Scale",
    description: "Solve for API design-time, runtime and day 2 operations at enterprise scale.",
    capabilities: [
      "API design & governance",
      "Gateway implementation",
      "Rate limiting & throttling",
      "API versioning strategies",
      "Security & authentication",
      "Analytics & monitoring"
    ]
  }
];

const cloudPlatforms = [
  "Amazon Web Services (AWS)",
  "Microsoft Azure",
  "Google Cloud Platform (GCP)",
  "Oracle Cloud Infrastructure",
  "On-Premise Data Centers",
  "Hybrid & Multi-Cloud"
];

export default function PlatformEngineering() {
  useEffect(() => {
    document.title = "Platform Engineering Services | Datasirpi - Multi-Cloud & DevOps Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Enterprise platform engineering services across AWS, Azure, GCP, Oracle and on-premise. From day zero deployment to 24/7 managed services.");
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
              Build robust, scalable platforms across any cloud or on-premise environment.
              From initial deployment to ongoing operations, we're your engineering partner.
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

      <section className="platforms-strip">
        <div className="container">
          <div className="platforms-content">
            <span className="platforms-label">We work across</span>
            <div className="platforms-list">
              {cloudPlatforms.map((platform, index) => (
                <span key={index} className="platform-item">{platform}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <p>
              Platform engineering is our specialty at Datasirpi. We design, deploy, and manage
              platforms that power your business - whether on AWS, Azure, GCP, Oracle Cloud,
              or your own data centers.
            </p>
            <p>
              Our approach covers the complete platform lifecycle: from day zero architecture
              and deployment, through adoption and maturity, to ongoing managed services that
              keep your systems running 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Services</span>
            <h2 className="section-title">What We Deliver</h2>
            <p className="section-subtitle">
              End-to-end platform engineering across the entire lifecycle
            </p>
          </div>
          <div className="categories-grid">
            {serviceCategories.map((category, index) => (
              <article key={index} className="category-card">
                <div className="category-header">
                  <div className="category-icon">
                    <category.icon size={22} />
                  </div>
                  <span className="category-tagline">{category.tagline}</span>
                </div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <ul className="category-capabilities">
                  {category.capabilities.map((capability, capIndex) => (
                    <li key={capIndex}>
                      <BsCheckCircle size={12} />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BussinessForm />
    </div>
  );
}
