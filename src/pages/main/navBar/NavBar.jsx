import React, { useEffect, useState } from "react";
import "./navbar.scss";
import logo from "../../../assets/images/Logo/dsweb_logo.png";
import { BsChevronDown, BsArrowUpRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { elementIds, routesPath } from "../../../constants";
import { Offcanvas } from "react-bootstrap";
import ServiceOptions from "./service-options/ServiceOptions";
import { BsList } from "react-icons/bs";
import links from "../../../common/content/links.json";


function NavBar({ isSeparatePage = false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [hash, setHash] = useState('');
  const [path, setPath] = useState('/');

  const [showOffCanvas, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!location.hash && !isSeparatePage) {
      setHash(`#${elementIds.home}`);
      return
    }
    setHash(location.hash);
    setPath(location.pathname);
    handleClose()
  }, [location, isSeparatePage]);

  const { platformEngineering, applicationEngineering, salesforceCrm, cyberSecurity } = routesPath;
  const servicePaths = [platformEngineering, applicationEngineering, salesforceCrm, cyberSecurity]

  const navigateToId = (id) => {
    if (!isSeparatePage && !([elementIds.career, elementIds.blogs]?.includes(id))) {
      window.location.href = `#${id}`;
      return;
    }
    handleClose();

    switch (id) {
      case elementIds.home:
        navigate(routesPath.home);
        break;
      case elementIds.about:
        navigate(routesPath.about);
        break;
      case elementIds.services:
        if (showOffCanvas) {
          handleClose()
        } else {
          handleShow()
        }
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
      // For separate pages, match the pathname
      switch (id) {
        case elementIds.home:
          return !showOffCanvas && path === routesPath.home;
        case elementIds.about:
          return !showOffCanvas && path === routesPath.about;
        case elementIds.services:
          return servicePaths.includes(path) || showOffCanvas;
        case elementIds.career:
          return !showOffCanvas && path === routesPath.career;
        case elementIds.blogs:
          return !showOffCanvas && path === routesPath.blogs;
        default:
          return false;
      }
    } else {
      // For single-page navigation, match the hash
      return hash === `#${id}`;
    }
  };

  const onClickContactUs = () => {
    handleClose();
    window.location.href = `#${elementIds.contact}`;
  }

  const NavItems = () => (<ul className="navbar-nav gap-3 gap-lg-5">
    <li className="nav-item">
      <div className={`${isActive(elementIds.home) && "active"} nav-link`} onClick={() => navigateToId(elementIds.home)}>
        Home
      </div>
    </li>
    <li className="nav-item">
      <div className={`${isActive(elementIds.about) && "active"} nav-link`} onClick={() => navigateToId(elementIds.about)}>
        About
      </div>
    </li>
    <li className="nav-item">
      <div
        className={`${isActive(elementIds.services) && "active"} nav-link d-flex align-items-center`}
        onClick={() => navigateToId(elementIds.services)}
      >
        <div>Service</div>
        {isSeparatePage && <BsChevronDown className="ms-2" size={18} />}
      </div>
    </li>
    <li className="nav-item">
      <div className={`${isActive(elementIds.career) && "active"} nav-link`} onClick={() => navigateToId(elementIds.career)}>
        Career
      </div>
    </li>
    <li className="nav-item">
      <div className={`${isActive(elementIds.blogs) && "active"} nav-link`} onClick={() => navigateToId(elementIds.blogs)}>
        Blogs
      </div>
    </li>
    {/* Contact Us Button */}
    <li className="nav-item d-block d-lg-none">
      <ContactUs />
    </li>
  </ul>)

  const ContactUs = () => (<div className="ds-btn" href={`#${elementIds.contact}`} onClick={onClickContactUs}>
    <span>Contact Us <BsArrowUpRight strokeWidth={1} size={16} /></span>
  </div>)

  const NavBarComponent = () => (
    <div className="row navbar-container">
      <div className="col-12">
        <nav className={`navbar navbar-expand-lg ${isSeparatePage && "separate-nav"}`}>
          <div className="w-100 d-flex flex-row justify-content-between">
            {/* Responsive Logo */}
            <div>
              <a className="navbar-brand m-0" href={links.datasirpi}>
                <img src={logo} alt="Logo" className="responsive-logo" />
              </a>
            </div>
            {/* Navbar Items */}
            <div className="d-none d-lg-block">
              <NavItems />
            </div>

            {/* Contact Us Button */}
            <div className="d-none d-lg-block">
              <ContactUs />
            </div>

            <div className="btn-group dropstart d-block d-lg-none text-nowrap">
              <button type="button" className="btn ds-btn rounded-5" data-bs-toggle="dropdown">
                <BsList size={26} />
              </button>
              <ul className={`me-3 dropdown-menu shadow p-4 ${isSeparatePage ? "bg-light" : "bg-dark"}`}>
                <NavItems />
              </ul>
            </div>


          </div>
        </nav>
      </div>
    </div>
  )


  return (
    <>
      <NavBarComponent />
      <Offcanvas show={showOffCanvas} onHide={handleClose} placement="top" className="custom-offcanvas">
        <Offcanvas.Body>
          <NavBarComponent />
          <ServiceOptions />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;
