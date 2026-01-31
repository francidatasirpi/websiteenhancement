import React from "react";
import "./footer.scss"; // Include custom styles
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
    <div className="footer-card-container d-flex flex-column text-white m-4 p-5">
      <div className="row p-0 m-0">
        <div className="col-6 col-lg-2">
          <img
            src={logo}
            alt="logo"
            className="w-75"
          />
        </div>
        <div className="col-12 col-lg-2 d-flex flex-column text-center">
          <div className="foo-nav-title">
            Pages
          </div>
          <div className="mt-2">
            <Link className="text-white footer-link" to={routesPath.home}>Home <BsArrowUpRight strokeWidth={1} size={12} /></Link>
          </div>
          <div className="mt-2">
            <Link className="text-white footer-link" to={routesPath.about}>About Us <BsArrowUpRight strokeWidth={1} size={12} /></Link>
          </div>
          <div className="mt-2">
            <Link className="text-white footer-link" to={routesPath.service}>Service <BsArrowUpRight strokeWidth={1} size={12} /></Link>
          </div>
          <div className="mt-2">
            <Link className="text-white footer-link" to={routesPath.career}>Career <BsArrowUpRight strokeWidth={1} size={12} /></Link>
          </div>
        </div>
        <div className="mt-4 mt-lg-0 col-12 col-lg-3 d-flex flex-column text-center">
          <div className="foo-nav-title">
            Service
          </div>
          <div className="mt-2">
            <Link className="text-white footer-link" to={routesPath.platformEngineering}>Platform Engineering <BsArrowUpRight strokeWidth={1} size={12} /></Link>
          </div>
          <div className="mt-2">
            <Link className="text-white footer-link" to={routesPath.applicationEngineering}>Application Engineering <BsArrowUpRight strokeWidth={1} size={12} /></Link>
          </div>
          <div className="mt-2">
            <Link className="text-white footer-link" to={routesPath.salesforceCrm}>Salesforce CRM <BsArrowUpRight strokeWidth={1} size={12} /></Link>
          </div>
          <div className="mt-2">
            <Link className="text-white footer-link" to={routesPath.cyberSecurity}>Cyber Security <BsArrowUpRight strokeWidth={1} size={12} /></Link>
          </div>
        </div>
      </div>
      <div className="row p-0 m-0 mt-5">
        <div className="col-6 d-flex flex-row">
        {links.whatsapp && (
            <a href={'https://wa.me/'+links.whatsapp} target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="Whatsapp" />
            </a>
          )}
          {links.linkedin && (
            <a className="ms-4 cursor-pointer" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>
          )}
          {links.telegram && (
            <a className="ms-4 cursor-pointer" href={links.telegram} target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram" />
            </a>
          )}        
          </div>
      </div>
      <div className="row p-0 m-0 mt-3">
        <div className="col-12 col-lg-6">
          <div className="copyright">© Copyright {currentYear} DataSirpi | All Rights Reserved</div>
        </div>
        <div className="mt-4 mt-lg-0 col-12 col-lg-6 d-flex flex-row justify-content-end">
          <div>
            <Link className="text-white footer-link" to={routesPath.privacy}>Privacy Policy</Link>
          </div>
          <div className="ms-5">
            <Link className="text-white footer-link" to={routesPath.terms}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
