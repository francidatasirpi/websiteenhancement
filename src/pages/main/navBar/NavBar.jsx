import React, { useEffect, useState, useRef } from "react";
import "./navbar.scss";
import logo from "../../../assets/images/Logo/dsweb_logo.png";
import { BsChevronDown, BsArrowUpRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { elementIds, routesPath } from "../../../constants";
import ServiceOptions from "./service-options/ServiceOptions";
import { BsList, BsX } from "react-icons/bs";
import links from "../../../common/content/links.json";

function NavBar({ isSeparatePage = false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [hash, setHash] = useState('');
  const [path, setPath] = useState('/');
  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const serviceMenuRef = useRef(null);

  useEffect(() => {
    if (!location.hash && !isSeparatePage) {
      setHash(`#${elementIds.home}`);
      return;
    }
    setHash(location.hash);
    setPath(location.pathname);
    setShowServiceMenu(false);
    setShowMobileMenu(false);
  }, [location, isSeparatePage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceMenuRef.current && !serviceMenuRef.current.contains(event.target)) {
        setShowServiceMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { platformEngineering, applicationEngineering, salesforceCrm, cyberSecurity } = routesPath;
  const servicePaths = [platformEngineering, applicationEngineering, salesforceCrm, cyberSecurity];

  const navigateToId = (id) => {
    if (!isSeparatePage && !([elementIds.career, elementIds.blogs]?.includes(id))) {
      if (id === elementIds.services) {
        setShowServiceMenu(!showServiceMenu);
        return;
      }
      window.location.href = `#${id}`;
      return;
    }
    setShowMobileMenu(false);

    switch (id) {
      case elementIds.home:
        navigate(routesPath.home);
        break;
      case elementIds.about:
        navigate(routesPath.about);
        break;
      case elementIds.services:
        setShowServiceMenu(!showServiceMenu);
        break;
      case elementIds.career:
        navigate(routesPath.career);
        break;
      case elementIds.blogs:
        navigate(routesPath.blogs);
        break;
      default:
        break;
    }
  };

  const isActive = (id) => {
    if (isSeparatePage) {
      switch (id) {
        case elementIds.home:
          return path === routesPath.home;
        case elementIds.about:
          return path === routesPath.about;
        case elementIds.services:
          return servicePaths.includes(path) || showServiceMenu;
        case elementIds.career:
          return path === routesPath.career;
        case elementIds.blogs:
          return path === routesPath.blogs;
        default:
          return false;
      }
    } else {
      return hash === `#${id}`;
    }
  };

  const onClickContactUs = () => {
    setShowMobileMenu(false);
    setShowServiceMenu(false);
    window.location.href = `#${elementIds.contact}`;
  };

  return (
    <div className="navbar-wrapper">
      <div className="row navbar-container">
        <div className="col-12">
          <nav className={`navbar navbar-expand-lg ${isSeparatePage && "separate-nav"}`}>
            <div className="w-100 d-flex flex-row justify-content-between align-items-center">
              <div>
                <a className="navbar-brand m-0" href={links.datasirpi}>
                  <img src={logo} alt="Logo" className="responsive-logo" />
                </a>
              </div>

              <div className="d-none d-lg-block">
                <ul className="navbar-nav gap-3 gap-lg-5">
                  <li className="nav-item">
                    <div className={`${isActive(elementIds.home) ? "active" : ""} nav-link`} onClick={() => navigateToId(elementIds.home)}>
                      Home
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className={`${isActive(elementIds.about) ? "active" : ""} nav-link`} onClick={() => navigateToId(elementIds.about)}>
                      About
                    </div>
                  </li>
                  <li className="nav-item service-nav-item" ref={serviceMenuRef}>
                    <div
                      className={`${isActive(elementIds.services) ? "active" : ""} nav-link d-flex align-items-center`}
                      onClick={() => navigateToId(elementIds.services)}
                    >
                      <div>Services</div>
                      <BsChevronDown className={`ms-2 chevron-icon ${showServiceMenu ? "rotated" : ""}`} size={14} />
                    </div>
                    {showServiceMenu && (
                      <div className="service-menu-dropdown">
                        <ServiceOptions />
                      </div>
                    )}
                  </li>
                  <li className="nav-item">
                    <div className={`${isActive(elementIds.career) ? "active" : ""} nav-link`} onClick={() => navigateToId(elementIds.career)}>
                      Career
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className={`${isActive(elementIds.blogs) ? "active" : ""} nav-link`} onClick={() => navigateToId(elementIds.blogs)}>
                      Blogs
                    </div>
                  </li>
                </ul>
              </div>

              <div className="d-none d-lg-block">
                <div className="ds-btn" onClick={onClickContactUs}>
                  <span>Book a Free Consultation <BsArrowUpRight strokeWidth={1} size={16} /></span>
                </div>
              </div>

              <div className="d-block d-lg-none">
                <button
                  type="button"
                  className="btn ds-btn mobile-menu-btn"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  {showMobileMenu ? <BsX size={26} /> : <BsList size={26} />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {showMobileMenu && (
        <div className={`mobile-menu ${isSeparatePage ? "light" : "dark"}`}>
          <ul className="mobile-nav-list">
            <li onClick={() => { navigateToId(elementIds.home); setShowMobileMenu(false); }}>Home</li>
            <li onClick={() => { navigateToId(elementIds.about); setShowMobileMenu(false); }}>About</li>
            <li onClick={() => { navigate(routesPath.platformEngineering); setShowMobileMenu(false); }}>Platform Engineering</li>
            <li onClick={() => { navigate(routesPath.applicationEngineering); setShowMobileMenu(false); }}>Application Engineering</li>
            <li onClick={() => { navigate(routesPath.salesforceCrm); setShowMobileMenu(false); }}>Salesforce CRM</li>
            <li onClick={() => { navigate(routesPath.cyberSecurity); setShowMobileMenu(false); }}>Cyber Security</li>
            <li onClick={() => { navigateToId(elementIds.career); setShowMobileMenu(false); }}>Career</li>
            <li onClick={() => { navigateToId(elementIds.blogs); setShowMobileMenu(false); }}>Blogs</li>
            <li className="contact-item" onClick={onClickContactUs}>Book a Free Consultation</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
