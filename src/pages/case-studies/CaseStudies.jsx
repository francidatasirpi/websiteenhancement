import { useEffect, useState } from "react";
import "./case-studies.scss";
import { BsCloud, BsDatabase, BsGraphUp, BsShield, BsGear, BsArrowRight, BsCheckCircle, BsBuilding, BsGlobe, BsLightning, BsPlug, BsDisplay, BsCpu, BsRobot, BsBox, BsArrowRepeat, BsHddNetwork, BsSpeedometer } from "react-icons/bs";
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
  },
  {
    id: "cybersecurity-soc-automation-usa",
    client: "Enterprise Cybersecurity Provider",
    region: "United States",
    industry: "Cybersecurity",
    title: "AI-Powered SOC Automation Platform",
    subtitle: "Transforming Security Operations with intelligent playbook automation, MCP integration, and on-premises Kubernetes deployment",
    challenge: "A leading cybersecurity company in the USA was struggling with alert fatigue and manual incident response processes in their Security Operations Center. Their analysts were overwhelmed with thousands of daily alerts, leading to delayed responses and missed threats. They needed an intelligent automation platform that could triage alerts, execute response playbooks automatically, and integrate seamlessly with their existing security tooling while maintaining strict data residency requirements.",
    solution: "We built a comprehensive SOC automation platform deployed on an on-premises Kubernetes cluster. The solution leverages AI-powered playbook automation to intelligently triage and respond to security alerts, integrated through Model Context Protocol (MCP) for seamless tool orchestration. The platform automatically clears vulnerabilities and alerts based on learned patterns while providing full visibility and control to security analysts.",
    outcomes: [
      { metric: "85%", label: "Alert Auto-Resolution" },
      { metric: "60%", label: "MTTR Reduction" },
      { metric: "500+", label: "Playbooks Deployed" },
      { metric: "24/7", label: "Autonomous Operation" }
    ],
    architecture: {
      compute: {
        title: "On-Premises Kubernetes",
        items: [
          "Self-managed Kubernetes cluster with HA control plane",
          "Bare-metal nodes for maximum performance",
          "Air-gapped deployment for security compliance",
          "GitOps-based deployment with ArgoCD"
        ]
      },
      automation: {
        title: "AI-Powered Playbook Engine",
        items: [
          "Python-based playbook execution framework",
          "LLM integration for intelligent decision making",
          "Dynamic playbook generation based on threat context",
          "Automated vulnerability remediation workflows"
        ]
      },
      integration: {
        title: "MCP Integration Layer",
        items: [
          "Model Context Protocol for tool orchestration",
          "Unified API for SIEM, EDR, and SOAR tools",
          "Real-time bidirectional data sync",
          "Custom connectors for legacy security tools"
        ]
      },
      frontend: {
        title: "Analyst Dashboard",
        items: [
          "Next.js-based responsive web application",
          "Real-time alert visualization and management",
          "Playbook builder with drag-and-drop interface",
          "Role-based access control and audit logging"
        ]
      },
      backend: {
        title: "Core Services",
        items: [
          "Java microservices for high-throughput processing",
          "Event-driven architecture with Kafka",
          "PostgreSQL for persistent storage",
          "Redis for caching and real-time state"
        ]
      },
      security: {
        title: "Security & Compliance",
        items: [
          "Zero-trust network architecture",
          "End-to-end encryption for all data flows",
          "SOC 2 Type II compliance ready",
          "Comprehensive audit trail and RBAC"
        ]
      }
    },
    technologies: [
      "Kubernetes", "Docker", "ArgoCD", "Helm",
      "Next.js", "React", "TypeScript",
      "Java", "Spring Boot", "Python",
      "PostgreSQL", "Redis", "Apache Kafka",
      "MCP", "OpenAI", "LangChain",
      "Prometheus", "Grafana", "ELK Stack"
    ]
  },
  {
    id: "equipment-management-uae",
    client: "Major Construction & Manufacturing Enterprise",
    region: "United Arab Emirates",
    industry: "Construction & Manufacturing",
    title: "AI-Driven Equipment & Workshop Management Platform",
    subtitle: "Intelligent asset management system for 600M AED equipment fleet with automated workflows and AI-powered material decisions",
    challenge: "A leading construction and manufacturing conglomerate in the UAE needed to modernize their equipment management operations spanning a fleet worth over 600 million AED. Their legacy systems couldn't handle real-time tracking, predictive maintenance, or intelligent material procurement. Workshop operations were manual, leading to equipment downtime, delayed repairs, and inefficient inventory management. They required an intelligent platform that could automate workflows and provide AI-driven recommendations for materials and maintenance scheduling.",
    solution: "We developed a comprehensive Equipment and Workshop Management Platform powered by AI agents and the Model Context Protocol (MCP) for intelligent decision-making. The system uses RAG (Retrieval-Augmented Generation) with pgvector for semantic search across equipment manuals, maintenance history, and supplier catalogs. LangGraph orchestrates complex multi-step workflows for maintenance scheduling, parts ordering, and resource allocation. The entire workflow from equipment inspection to repair completion is fully automated with human-in-the-loop approvals for critical decisions.",
    outcomes: [
      { metric: "600M", label: "AED Assets Managed" },
      { metric: "45%", label: "Downtime Reduction" },
      { metric: "30%", label: "Cost Savings" },
      { metric: "100%", label: "Workflow Automation" }
    ],
    architecture: {
      frontend: {
        title: "Angular Enterprise Dashboard",
        items: [
          "Angular 17+ with standalone components",
          "Real-time equipment tracking with WebSocket updates",
          "Interactive workshop scheduling interface",
          "Mobile-responsive design for field technicians"
        ]
      },
      backend: {
        title: "Java Microservices",
        items: [
          "Spring Boot microservices architecture",
          "Event-driven processing with Apache Kafka",
          "RESTful APIs with OpenAPI documentation",
          "Distributed caching with Redis"
        ]
      },
      ai: {
        title: "AI & RAG Pipeline",
        items: [
          "LangGraph for multi-agent workflow orchestration",
          "RAG with pgvector for semantic document search",
          "MCP integration for tool and API orchestration",
          "Custom-trained models for equipment classification"
        ]
      },
      database: {
        title: "PostgreSQL with Vector Search",
        items: [
          "Amazon RDS PostgreSQL as primary database",
          "pgvector extension for embedding storage",
          "Partitioned tables for equipment telemetry data",
          "Automated backups with point-in-time recovery"
        ]
      },
      workflow: {
        title: "Automated Workflow Engine",
        items: [
          "End-to-end maintenance workflow automation",
          "AI-driven material procurement decisions",
          "Approval routing with escalation policies",
          "Integration with ERP and procurement systems"
        ]
      },
      cloud: {
        title: "AWS Infrastructure",
        items: [
          "Amazon EKS for container orchestration",
          "Amazon S3 for document and image storage",
          "Amazon SQS for message queuing",
          "CloudWatch for monitoring and alerting"
        ]
      }
    },
    technologies: [
      "Angular", "TypeScript", "RxJS", "NgRx",
      "Java", "Spring Boot", "Spring Cloud",
      "PostgreSQL", "pgvector", "Redis",
      "LangGraph", "LangChain", "RAG", "MCP",
      "AWS EKS", "Amazon RDS", "S3", "SQS",
      "Apache Kafka", "Docker", "Terraform"
    ]
  },
  {
    id: "kafka-migration-confluent-usa",
    client: "Fortune 500 Retail Corporation",
    region: "United States",
    industry: "Retail",
    title: "Enterprise Kafka Migration to Confluent Cloud",
    subtitle: "Zero-downtime migration from AWS MSK to Confluent Cloud Freight cluster with Private Network Interface and comprehensive observability",
    challenge: "A major US retail corporation operating thousands of stores nationwide was running critical real-time inventory, order processing, and supply chain systems on AWS MSK. The platform was hitting scalability limits during peak shopping seasons, and the team needed advanced features like exactly-once semantics, tiered storage, and enterprise-grade stream processing. They required a migration strategy that ensured zero data loss and minimal disruption to their 24/7 retail operations.",
    solution: "We executed a seamless migration from AWS MSK to Confluent Cloud using a Freight-tier dedicated cluster with Private Network Interface (PNI) for secure, low-latency connectivity. The migration leveraged Cluster Linking for real-time topic synchronization and MirrorMaker 2.0 for consumer offset migration. We implemented comprehensive observability using Confluent Metrics API integrated with Prometheus and custom Grafana dashboards. The entire infrastructure was provisioned and managed through Terraform for reproducibility and GitOps workflows.",
    outcomes: [
      { metric: "0", label: "Downtime Minutes" },
      { metric: "50TB+", label: "Data Migrated" },
      { metric: "40%", label: "Cost Reduction" },
      { metric: "3x", label: "Throughput Increase" }
    ],
    architecture: {
      source: {
        title: "AWS MSK Source Cluster",
        items: [
          "Production MSK cluster with 15+ brokers",
          "VPC peering to Confluent Cloud PNI",
          "Topic-level migration prioritization",
          "Consumer group offset preservation"
        ]
      },
      target: {
        title: "Confluent Cloud Freight Cluster",
        items: [
          "Dedicated Freight-tier cluster for enterprise workloads",
          "Private Network Interface (PNI) for secure connectivity",
          "Multi-AZ deployment for high availability",
          "Infinite storage with tiered architecture"
        ]
      },
      migration: {
        title: "Data Migration Strategy",
        items: [
          "Cluster Linking for real-time topic replication",
          "MirrorMaker 2.0 for offset synchronization",
          "Phased cutover with traffic shifting",
          "Automated validation and rollback capabilities"
        ]
      },
      observability: {
        title: "Metrics & Monitoring",
        items: [
          "Confluent Metrics API for cluster telemetry",
          "Prometheus for metrics collection and storage",
          "Custom Grafana dashboards for operations",
          "Alerting for lag, throughput, and errors"
        ]
      },
      networking: {
        title: "Network Architecture",
        items: [
          "AWS Transit Gateway for hybrid connectivity",
          "Private Network Interface (PNI) endpoint",
          "mTLS authentication for all connections",
          "Network policies and security groups"
        ]
      },
      infrastructure: {
        title: "Infrastructure as Code",
        items: [
          "Terraform modules for Confluent Cloud resources",
          "GitOps workflow with version-controlled configs",
          "Automated environment provisioning",
          "State management with remote backends"
        ]
      }
    },
    technologies: [
      "Confluent Cloud", "Apache Kafka", "AWS MSK",
      "Cluster Linking", "MirrorMaker 2.0",
      "Private Network Interface", "AWS Transit Gateway",
      "Prometheus", "Grafana", "Confluent Metrics API",
      "Terraform", "GitOps", "Python",
      "Schema Registry", "ksqlDB", "Kafka Connect"
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
                  {key === 'observability' && <BsSpeedometer size={20} />}
                  {key === 'security' && <BsShield size={20} />}
                  {key === 'automation' && <BsLightning size={20} />}
                  {key === 'integration' && <BsPlug size={20} />}
                  {key === 'frontend' && <BsDisplay size={20} />}
                  {key === 'backend' && <BsCpu size={20} />}
                  {key === 'ai' && <BsRobot size={20} />}
                  {key === 'workflow' && <BsArrowRepeat size={20} />}
                  {key === 'cloud' && <BsCloud size={20} />}
                  {key === 'source' && <BsDatabase size={20} />}
                  {key === 'target' && <BsCloud size={20} />}
                  {key === 'migration' && <BsArrowRepeat size={20} />}
                  {key === 'infrastructure' && <BsHddNetwork size={20} />}
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
