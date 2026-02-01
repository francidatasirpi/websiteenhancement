import Platform from "../../../../assets/images/Specialization/Platform_Eng.jpg";
import Application from "../../../../assets/images/Specialization/Application_Eng.jpg";
import SalesForce from "../../../../assets/images/Specialization/SalesForce.png";
import Cyber from "../../../../assets/images/Specialization/Cyber.png";

import "./service-options.scss";
import { Link } from "react-router-dom";
import { routesPath } from "../../../../constants";
import { BsArrowUpRight, BsRobot } from "react-icons/bs";

const services = [
  {
    name: "Platform Engineering",
    image: Platform,
    path: routesPath.platformEngineering,
  },
  {
    name: "Application Engineering",
    image: Application,
    path: routesPath.applicationEngineering,
  },
  {
    name: "Salesforce CRM",
    image: SalesForce,
    path: routesPath.salesforceCrm,
  },
  {
    name: "Cyber Security",
    image: Cyber,
    path: routesPath.cyberSecurity,
  },
  {
    name: "AI Agents",
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
            <div className={`service-image-container ${service.icon ? 'icon-container' : ''}`}>
              {service.image ? (
                <img src={service.image} alt={service.name} />
              ) : service.icon ? (
                <service.icon size={32} />
              ) : null}
            </div>
            <div className="service-name">
              {service.name}
              <BsArrowUpRight className="arrow-icon" size={12} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
