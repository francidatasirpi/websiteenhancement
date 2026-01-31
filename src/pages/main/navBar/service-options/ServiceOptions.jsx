import Platform from "../../../../assets/images/Specialization/Platform_Eng.jpg";
import Application from "../../../../assets/images/Specialization/Application_Eng.jpg";
import SalesForce from "../../../../assets/images/Specialization/SalesForce.png";
import Cyber from "../../../../assets/images/Specialization/Cyber.png";

import "./service-options.scss";
import { Link } from "react-router-dom";
import { routesPath } from "../../../../constants";
import { BsArrowUpRight } from "react-icons/bs";


export default function ServiceOptions() {
    return (
        <div className="container d-flex justify-content-center bg-white service-options">
            <div className="row w-75">
                <Link to={routesPath.platformEngineering} className="col-12 col-md-6 col-lg-3 p-2 service-item">
                    <div className="service-img-wrapper">
                        <img
                            src={Platform}
                            className="service-img"
                            alt="service"
                        />
                    </div>
                    <div className="mt-1 service-label">
                        Platforms Engineering <BsArrowUpRight strokeWidth={1} size={12} />
                    </div>
                </Link>
                <Link to={routesPath.applicationEngineering} className="col-12 col-md-6 col-lg-3 p-2 service-item">
                    <div className="service-img-wrapper">
                        <img
                            src={Application}
                            className="service-img"
                            alt="service"
                        />
                    </div>
                    <div className="mt-1 service-label">
                        Application Engineering <BsArrowUpRight strokeWidth={1} size={12} />
                    </div>
                </Link>
                <Link to={routesPath.salesforceCrm} className="col-12 col-md-6 col-lg-3 p-2 service-item">
                    <div className="service-img-wrapper">

                        <img
                            src={SalesForce}
                            className="service-img"
                            alt="service"
                        />
                    </div>
                    <div className="mt-1 service-label">
                        Salesforce CRM <BsArrowUpRight strokeWidth={1} size={12} />
                    </div>
                </Link>
                <Link to={routesPath.cyberSecurity} className="col-12 col-md-6 col-lg-3 p-2 service-item">
                    <div className="service-img-wrapper">

                        <img
                            src={Cyber}
                            className="service-img"
                            alt="service"
                        />
                    </div>
                    <div className="mt-1 service-label">
                        Cyber Security <BsArrowUpRight strokeWidth={1} size={12} />
                    </div>
                </Link>
            </div>
        </div>
    );
}