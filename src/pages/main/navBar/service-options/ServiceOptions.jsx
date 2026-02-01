import "./service-options.scss";
import { Link } from "react-router-dom";
import { routesPath } from "../../../../constants";
import { HiOutlineServerStack, HiOutlineCodeBracket, HiOutlineCloud, HiOutlineShieldCheck } from "react-icons/hi2";
import { BsRobot } from "react-icons/bs";

const services = [
  {
    name: "Platform Engineering",
    description: "AWS, Azure, GCP, Oracle, On-Prem",
    icon: HiOutlineServerStack,
    path: routesPath.platformEngineering,
  },
  {
    name: "Application Engineering",
    description: "Web + backend systems",
    icon: HiOutlineCodeBracket,
    path: routesPath.applicationEngineering,
  },
  {
    name: "Salesforce CRM",
    description: "Architecture, integrations, delivery",
    icon: HiOutlineCloud,
    path: routesPath.salesforceCrm,
  },
  {
    name: "Cyber Security",
    description: "Assessments, SOC toolkit, hardening",
    icon: HiOutlineShieldCheck,
    path: routesPath.cyberSecurity,
  },
  {
    name: "AI Agents",
    description: "Intelligent automation & orchestration",
    icon: BsRobot,
    path: routesPath.aiAgents,
  },
];

export default function ServiceOptions() {
  return (
    <div className="service-dropdown">
      <div className="service-dropdown-inner">
        {services.map((service, index) => (
          <Link key={index} to={service.path} className="service-item">
            <div className="service-icon">
              <service.icon size={20} />
            </div>
            <div className="service-info">
              <span className="service-name">{service.name}</span>
              <span className="service-desc">{service.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
