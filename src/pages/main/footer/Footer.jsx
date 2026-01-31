import React from "react";
import "./footer.scss";
import logo from "../../../assets/images/Logo/dsweb_logo.png";
import whatsappIcon from "../../../assets/images/icons/whatsapp_icon.svg";
import linkedInIcon from "../../../assets/images/icons/linkedin_icon.svg";
import telegramIcon from "../../../assets/images/icons/telegram_icon.svg";
import { Link } from "react-router-dom";
import { routesPath } from "../../../constants";
import links from "../../../common/content/links.json";
import { BsArrowUpRight } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href={links.datasirpi}>
              <img src={logo} alt="DataSirpi" className="footer-logo" />
            </a>
            <p className="footer-tagline">
              Building digital products that help businesses grow.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-title">Pages</h4>
            <ul className="footer-links">
              <li>
                <Link to={routesPath.home}>
                  Home <BsArrowUpRight size={10} />
                </Link>
              </li>
              <li>
                <Link to={routesPath.about}>
                  About Us <BsArrowUpRight size={10} />
                </Link>
              </li>
              <li>
                <Link to={routesPath.career}>
                  Career <BsArrowUpRight size={10} />
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-title">Services</h4>
            <ul className="footer-links">
              <li>
                <Link to={routesPath.platformEngineering}>
                  Platform Engineering <BsArrowUpRight size={10} />
                </Link>
              </li>
              <li>
                <Link to={routesPath.applicationEngineering}>
                  Application Engineering <BsArrowUpRight size={10} />
                </Link>
              </li>
              <li>
                <Link to={routesPath.salesforceCrm}>
                  Salesforce CRM <BsArrowUpRight size={10} />
                </Link>
              </li>
              <li>
                <Link to={routesPath.cyberSecurity}>
                  Cyber Security <BsArrowUpRight size={10} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            {links.whatsapp && (
              <a
                href={`https://wa.me/${links.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
            )}
            {links.telegram && (
              <a
                href={links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <img src={telegramIcon} alt="Telegram" />
              </a>
            )}
          </div>

          <div className="footer-legal">
            <span className="footer-copyright">
              {currentYear} DataSirpi. All Rights Reserved.
            </span>
            <div className="footer-legal-links">
              <Link to={routesPath.privacy}>Privacy Policy</Link>
              <Link to={routesPath.terms}>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
