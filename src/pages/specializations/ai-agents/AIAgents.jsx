import { useEffect } from "react";
import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./ai-agents.scss";
import { BsRobot, BsCpu, BsGear, BsShield, BsGraphUp, BsCheckCircle, BsLightbulb, BsArrowRight, BsPerson, BsBook, BsBank, BsBuilding, BsShieldCheck } from "react-icons/bs";

const stats = [
  { value: "10x", label: "Faster Operations" },
  { value: "90%", label: "Automation Rate" },
  { value: "24/7", label: "Autonomous Ops" },
  { value: "100%", label: "Audit Ready" }
];

const capabilities = [
  {
    icon: BsRobot,
    title: "AI Copilots Inside Your Apps",
    description: "Embed intelligent copilots into Sales, Support, Ops, and Security workflows that understand context and take meaningful action."
  },
  {
    icon: BsCpu,
    title: "Agent Workflows",
    description: "Build sophisticated agent loops: plan, act, verify, and escalate. Multi-agent orchestration with tool calling for complex tasks."
  },
  {
    icon: BsGear,
    title: "RAG & Enterprise Search",
    description: "Knowledge assistants with permissions, audit logs, and observability. Secure retrieval-augmented generation for your enterprise data."
  },
  {
    icon: BsGraphUp,
    title: "LLMOps & Governance",
    description: "Prompt/version control, evaluation, monitoring, and rollback. Production-grade operations for your AI systems."
  }
];

const agentLoopSteps = [
  { step: "01", title: "Plan", description: "Interpret intent, select tools, propose steps" },
  { step: "02", title: "Act", description: "Call tools/APIs (CRM, ticketing, databases, security)" },
  { step: "03", title: "Verify", description: "Validate outputs, run checks, detect hallucinations" },
  { step: "04", title: "Escalate", description: "Human-in-the-loop approvals for sensitive actions" },
  { step: "05", title: "Learn", description: "Feedback + evaluation to improve accuracy over time" }
];

const industries = [
  {
    icon: BsBank,
    title: "Fintech",
    tagline: "AI for Regulated Workflows",
    features: [
      "KYC/AML document intelligence & case summarization",
      "Intelligent ticket routing and customer support copilots",
      "Policy-aware RAG for internal knowledge (with access control)",
      "Audit-friendly logging, approvals, and governance patterns"
    ]
  },
  {
    icon: BsBuilding,
    title: "Construction",
    tagline: "AI for Operations & Project Execution",
    features: [
      "Site reporting & daily logs summarization",
      "Material, fleet, and procurement intelligence",
      "Automated document extraction (invoices, POs, delivery notes)",
      "Forecasting delays, risks, and cost anomalies"
    ]
  },
  {
    icon: BsShieldCheck,
    title: "Cybersecurity",
    tagline: "AI for Faster Detection & Response",
    features: [
      "Alert enrichment + triage copilot",
      "SOAR automation with agent workflows",
      "Threat intel extraction + correlation",
      "Incident summaries and timeline generation"
    ]
  }
];

const trustFeatures = [
  "Data privacy by design (tenant isolation, encryption, access control)",
  "Guardrails & approvals for high-risk actions",
  "Evaluation & monitoring (quality metrics, drift detection)",
  "Cost control (caching, routing, model selection)",
  "Compliance-ready patterns for regulated environments"
];

const technicalCapabilities = [
  "LLM apps & copilots (web + embedded)",
  "RAG / knowledge assistants",
  "Multi-agent orchestration + tool calling",
  "Document AI (OCR + extraction + validation)",
  "LLMOps (evals, monitoring, prompt/version management)",
  "Deployment on cloud or private Kubernetes"
];

export default function AIAgents() {
  useEffect(() => {
    document.title = "AI Agents | Datasirpi - Production-Grade AI & Agentic Automation";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "AI-enabled engineers building agentic products that ship. We design and deliver AI features, LLM apps, and agent workflows—securely and production-ready.");
    }
  }, []);

  return (
    <div className="ai-agents-page">
      <section className="hero-section">
        <div className="hero-gradient-overlay" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Production-Grade AI</span>
            <h1 className="hero-title">AI-enabled engineers building agentic products that ship.</h1>
            <p className="hero-subtitle">
              We design and deliver AI features, LLM apps, and agent workflows—securely and production-ready.
              From copilots to multi-agent workflows, we turn AI prototypes into compliant systems.
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

      <section className="capabilities-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">What We Deliver</span>
            <h2 className="section-title">AI Products & Agentic Automation</h2>
            <p className="section-subtitle">
              We build AI-powered software that goes beyond chat—agents that take actions,
              integrate with your systems, and deliver measurable outcomes.
            </p>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((item, index) => (
              <article key={index} className="capability-card">
                <div className="capability-icon">
                  <item.icon size={24} />
                </div>
                <h3 className="capability-title">{item.title}</h3>
                <p className="capability-description">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="outcomes-block">
            <h4>Typical Outcomes</h4>
            <div className="outcomes-list">
              <span>Faster operations (less manual triage & routing)</span>
              <span>Higher support resolution rate</span>
              <span>Reduced security response time</span>
              <span>Better decision quality with explainable AI outputs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="agent-loop-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">How We Build</span>
            <h2 className="section-title">The Agent Loop</h2>
            <p className="section-subtitle">
              We implement agentic systems with guardrails—so they behave predictably in production.
            </p>
          </div>
          <div className="agent-loop-grid">
            {agentLoopSteps.map((item, index) => (
              <div key={index} className="loop-step">
                <span className="step-number">{item.step}</span>
                <h4 className="step-title">{item.title}</h4>
                <p className="step-description">{item.description}</p>
                {index < agentLoopSteps.length - 1 && (
                  <div className="step-connector">
                    <BsArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Industry Focus</span>
            <h2 className="section-title">AI for Regulated Industries</h2>
            <p className="section-subtitle">
              Agentic AI built to pass audits—for fintech, cybersecurity, and construction.
            </p>
          </div>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <article key={index} className="industry-card">
                <div className="industry-header">
                  <div className="industry-icon">
                    <industry.icon size={24} />
                  </div>
                  <div>
                    <h3 className="industry-title">{industry.title}</h3>
                    <span className="industry-tagline">{industry.tagline}</span>
                  </div>
                </div>
                <ul className="industry-features">
                  {industry.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <BsCheckCircle size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <div className="trust-content">
            <div className="trust-header">
              <span className="section-badge">Production Ready</span>
              <h2 className="section-title">Built for Production, Not Demos</h2>
              <p className="section-subtitle">
                We combine AI engineering with platform reliability and security.
              </p>
            </div>
            <div className="trust-features">
              {trustFeatures.map((feature, index) => (
                <div key={index} className="trust-item">
                  <BsShield size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="capabilities-list">
            <h4>Technical Capabilities</h4>
            <div className="capabilities-tags">
              {technicalCapabilities.map((cap, index) => (
                <span key={index} className="capability-tag">{cap}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Have an AI initiative that needs to ship?</h2>
            <p>
              In one call, we'll map your use case to a delivery plan: architecture, data needs,
              integration points, governance, timeline, and cost.
            </p>
            <p className="cta-note">Response within 24 hours. NDA available on request.</p>
          </div>
        </div>
      </section>

      <BussinessForm />
    </div>
  );
}
