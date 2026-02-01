import { useEffect } from "react";
import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./ai-agents.scss";
import { BsRobot, BsCpu, BsGear, BsLightning, BsShield, BsGraphUp, BsCode, BsCloud } from "react-icons/bs";

const stats = [
  { value: "80%", label: "Task Automation" },
  { value: "5x", label: "Productivity Boost" },
  { value: "24/7", label: "Autonomous Operation" },
  { value: "99%", label: "Accuracy Rate" }
];

const agentServices = [
  {
    icon: <BsRobot size={28} />,
    title: "Intelligent Process Automation",
    description: "Deploy AI agents that understand context, learn from patterns, and autonomously execute complex business processes across your organization."
  },
  {
    icon: <BsCpu size={28} />,
    title: "Multi-Agent Orchestration",
    description: "Build sophisticated systems where multiple AI agents collaborate, communicate, and coordinate to solve complex problems that single agents cannot handle alone."
  },
  {
    icon: <BsGear size={28} />,
    title: "Custom Agent Development",
    description: "Design and develop purpose-built AI agents tailored to your specific workflows, from customer service to data analysis to DevOps automation."
  },
  {
    icon: <BsLightning size={28} />,
    title: "Real-Time Decision Agents",
    description: "Implement agents capable of making split-second decisions based on streaming data, perfect for monitoring, alerting, and incident response."
  }
];

const integrationServices = [
  {
    icon: <BsCloud size={28} />,
    title: "Platform Integration",
    description: "Seamlessly integrate AI agents with your existing platform infrastructure - AWS, Azure, GCP, or on-premises environments - ensuring agents work within your ecosystem."
  },
  {
    icon: <BsCode size={28} />,
    title: "Application Connectivity",
    description: "Connect AI agents to your applications via APIs, webhooks, and event-driven architectures, enabling intelligent automation across your entire software stack."
  },
  {
    icon: <BsShield size={28} />,
    title: "Secure Agent Operations",
    description: "Implement AI agents with enterprise-grade security, including access controls, audit logging, and compliance with your cybersecurity requirements."
  },
  {
    icon: <BsGraphUp size={28} />,
    title: "Analytics & Optimization",
    description: "Monitor agent performance, analyze decision patterns, and continuously optimize agent behavior using data-driven insights and feedback loops."
  }
];

export default function AIAgents() {
  useEffect(() => {
    document.title = "AI Agents | Datasirpi - Intelligent Automation Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Enterprise AI agent solutions for intelligent automation. Build, deploy, and orchestrate AI agents that transform your business operations.");
    }
  }, []);

  return (
    <div className="ai-agents-page">
      <section className="hero-section">
        <div className="hero-gradient-overlay" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Next-Gen Intelligence</span>
            <h1 className="hero-title">AI Agents</h1>
            <p className="hero-subtitle">
              Transform your operations with intelligent agents that learn, adapt, and autonomously execute
              tasks across platform engineering, application development, and cybersecurity.
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

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <p>
              AI Agents represent the next evolution in business automation. Unlike traditional automation that follows
              rigid rules, our AI agents understand context, make intelligent decisions, and adapt to changing conditions
              in real-time.
            </p>
            <p>
              At Datasirpi, we leverage our deep expertise in platform engineering, application development, and
              cybersecurity to build AI agents that seamlessly integrate with your existing infrastructure while
              delivering unprecedented automation capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Core Capabilities</span>
            <h2 className="section-title">AI Agent Services</h2>
            <p className="section-subtitle">
              Build autonomous systems that transform how your organization operates
            </p>
          </div>
          <div className="services-grid">
            {agentServices.map((service, index) => (
              <article key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
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
            <span className="section-badge integration">Integration</span>
            <h2 className="section-title">Enterprise Integration</h2>
            <p className="section-subtitle">
              Connect AI agents across your platform, applications, and security infrastructure
            </p>
          </div>
          <div className="services-grid">
            {integrationServices.map((service, index) => (
              <article key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="use-cases-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Applications</span>
            <h2 className="section-title">Where AI Agents Excel</h2>
          </div>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <h4>Platform Engineering</h4>
              <p>Automated infrastructure provisioning, intelligent scaling decisions, and self-healing systems that maintain optimal performance.</p>
            </div>
            <div className="use-case-card">
              <h4>Application Development</h4>
              <p>Code review agents, automated testing, deployment orchestration, and intelligent monitoring that catches issues before users do.</p>
            </div>
            <div className="use-case-card">
              <h4>Cybersecurity</h4>
              <p>Threat detection agents, automated incident response, compliance monitoring, and security posture management that never sleeps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <BussinessForm />
      </section>
    </div>
  );
}
