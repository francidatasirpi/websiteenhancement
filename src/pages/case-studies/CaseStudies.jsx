import { useEffect, useState } from "react";
import "./case-studies.scss";
import { BsCloud, BsDatabase, BsGraphUp, BsShield, BsGear, BsArrowRight, BsCheckCircle, BsBuilding, BsGlobe } from "react-icons/bs";
import BussinessForm from "../services/bussinessform/BussinessForm";

const caseStudies = [
  {
    id: "fintech-multicloud-ksa",
    client: "Leading Fintech Company",
    region: "Kingdom of Saudi Arabia",
    industry: "Financial Services",
    title: "Multi-Cloud Infrastructure for Mission-Critical Fintech Operations",
    subtitle: "Building a resilient, cloud-native platform across GCP and Oracle Cloud with zero-downtime disaster recovery",
    challenge: "A rapidly growing fintech company in KSA needed a robust, scalable infrastructure that could handle high-volume financial transactions while meeting strict regulatory requirements for data residency and disaster recovery. The client required active-active database replication across cloud providers with sub-second failover capabilities.",
    solution: "We designed and implemented a multi-cloud architecture leveraging Google Cloud Platform as the primary environment and Oracle Cloud Infrastructure for disaster recovery. The solution features cloud-native Kubernetes orchestration, real-time database replication, comprehensive observability, and event-driven architecture.",
    outcomes: [
      { metric: "99.99%", label: "Uptime Achieved" },
      { metric: "<30s", label: "Failover Time" },
      { metric: "10x", label: "Scaling Capacity" },
      { metric: "100%", label: "Compliance Ready" }
    ],
    architecture: {
      compute: {
        title: "Cloud-Native Kubernetes",
        items: [
          "Google Kubernetes Engine (GKE) - Primary workloads",
          "Oracle Container Engine (OKE) - DR environment",
          "Auto-scaling node pools with spot instances",
          "Multi-zone deployment for high availability"
        ]
      },
      database: {
        title: "PostgreSQL with Active Replication",
        items: [
          "Cloud SQL PostgreSQL (GCP) - Primary database",
          "PostgreSQL on OCI - DR replica",
          "pg_logical for real-time replication",
          "Point-in-time recovery with automated backups"
        ]
      },
      messaging: {
        title: "Event-Driven Architecture",
        items: [
          "Confluent Cloud (Managed Kafka) - GCP region",
          "Confluent for Kubernetes (CFK) - OCI region",
          "Cross-cloud topic mirroring",
          "Schema registry for data governance"
        ]
      },
      networking: {
        title: "Service Mesh & API Gateway",
        items: [
          "Istio service mesh for mTLS and traffic management",
          "Kong API Gateway for external traffic",
          "Rate limiting and authentication",
          "Circuit breakers and retry policies"
        ]
      },
      observability: {
        title: "Full-Stack Observability",
        items: [
          "Prometheus for metrics collection",
          "Grafana dashboards and alerting",
          "Grafana Alloy for unified telemetry",
          "OpenTelemetry, Tempo & Jaeger for distributed tracing"
        ]
      },
      security: {
        title: "Security & Compliance",
        items: [
          "Private clusters with no public endpoints",
          "Workload identity for secure service accounts",
          "Network policies and pod security standards",
          "Encryption at rest and in transit"
        ]
      }
    },
    technologies: [
      "Google Cloud Platform", "Oracle Cloud Infrastructure", "GKE", "OKE",
      "PostgreSQL", "pg_logical", "Confluent Kafka", "CFK",
      "Istio", "Kong", "Prometheus", "Grafana", "Grafana Alloy",
      "OpenTelemetry", "Tempo", "Jaeger", "Terraform", "ArgoCD"
    ]
  }
];

function CaseStudyCard({ study, onSelect }) {
  return (
    <article className="case-study-card" onClick={() => onSelect(study.id)}>
      <div className="card-header">
        <div className="industry-badge">
          <BsBuilding size={14} />
          <span>{study.industry}</span>
        </div>
        <div className="region-badge">
          <BsGlobe size={14} />
          <span>{study.region}</span>
        </div>
      </div>
      <h3 className="card-title">{study.title}</h3>
      <p className="card-subtitle">{study.subtitle}</p>
      <div className="card-outcomes">
        {study.outcomes.slice(0, 3).map((outcome, idx) => (
          <div key={idx} className="outcome-item">
            <span className="outcome-metric">{outcome.metric}</span>
            <span className="outcome-label">{outcome.label}</span>
          </div>
        ))}
      </div>
      <div className="card-cta">
        <span>Read Full Case Study</span>
        <BsArrowRight size={16} />
      </div>
    </article>
  );
}

function CaseStudyDetail({ study, onBack }) {
  return (
    <div className="case-study-detail">
      <button className="back-button" onClick={onBack}>
        <BsArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
        <span>Back to Case Studies</span>
      </button>

      <div className="detail-hero">
        <div className="hero-badges">
          <span className="badge industry">
            <BsBuilding size={14} />
            {study.industry}
          </span>
          <span className="badge region">
            <BsGlobe size={14} />
            {study.region}
          </span>
        </div>
        <h1 className="detail-title">{study.title}</h1>
        <p className="detail-subtitle">{study.subtitle}</p>
        <div className="outcomes-grid">
          {study.outcomes.map((outcome, idx) => (
            <div key={idx} className="outcome-card">
              <span className="outcome-value">{outcome.metric}</span>
              <span className="outcome-text">{outcome.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-content">
        <section className="content-section">
          <div className="section-icon">
            <BsShield size={24} />
          </div>
          <div className="section-content">
            <h2>The Challenge</h2>
            <p>{study.challenge}</p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-icon">
            <BsGear size={24} />
          </div>
          <div className="section-content">
            <h2>Our Solution</h2>
            <p>{study.solution}</p>
          </div>
        </section>

        <section className="architecture-section">
          <h2>Architecture Deep Dive</h2>
          <div className="architecture-grid">
            {Object.entries(study.architecture).map(([key, section]) => (
              <div key={key} className="architecture-card">
                <div className="arch-icon">
                  {key === 'compute' && <BsCloud size={20} />}
                  {key === 'database' && <BsDatabase size={20} />}
                  {key === 'messaging' && <BsGraphUp size={20} />}
                  {key === 'networking' && <BsGear size={20} />}
                  {key === 'observability' && <BsGraphUp size={20} />}
                  {key === 'security' && <BsShield size={20} />}
                </div>
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <BsCheckCircle size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="technologies-section">
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            {study.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);

  useEffect(() => {
    document.title = "Case Studies | Datasirpi - Real-World Engineering Success Stories";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore how Datasirpi delivers enterprise-grade platform engineering, multi-cloud infrastructure, and mission-critical systems for global clients.");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedStudy]);

  const handleSelectStudy = (id) => {
    const study = caseStudies.find(s => s.id === id);
    setSelectedStudy(study);
  };

  const handleBack = () => {
    setSelectedStudy(null);
  };

  return (
    <div className="case-studies-page">
      {!selectedStudy ? (
        <>
          <section className="hero-section">
            <div className="hero-gradient-overlay" />
            <div className="container">
              <div className="hero-content">
                <span className="hero-badge">Success Stories</span>
                <h1 className="hero-title">Case Studies</h1>
                <p className="hero-subtitle">
                  Real-world examples of how we've helped enterprises build resilient, scalable,
                  and secure platforms that drive business outcomes.
                </p>
              </div>
            </div>
          </section>

          <section className="studies-section">
            <div className="container">
              <div className="studies-grid">
                {caseStudies.map((study) => (
                  <CaseStudyCard
                    key={study.id}
                    study={study}
                    onSelect={handleSelectStudy}
                  />
                ))}
              </div>
            </div>
          </section>

          <BussinessForm />
        </>
      ) : (
        <>
          <section className="detail-section">
            <div className="container">
              <CaseStudyDetail study={selectedStudy} onBack={handleBack} />
            </div>
          </section>
          <BussinessForm />
        </>
      )}
    </div>
  );
}
