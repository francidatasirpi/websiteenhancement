import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./application-eng.scss";
import platformBanner from "../../../assets/images/Specialization/Application_Eng.jpg";
import application_icon_1 from "../../../assets/images/icons/application_icon_1.svg";
import application_icon_2 from "../../../assets/images/icons/application_icon_2.svg";
import application_icon_3 from "../../../assets/images/icons/application_icon_3.svg";
import application_icon_4 from "../../../assets/images/icons/application_icon_4.svg";
import application_icon_5 from "../../../assets/images/icons/application_icon_5.svg";
import application_icon_6 from "../../../assets/images/icons/application_icon_6.svg";
import application_icon_7 from "../../../assets/images/icons/application_icon_7.svg";
import application_icon_8 from "../../../assets/images/icons/application_icon_8.svg";
import logo from "../../../assets/images/Logo/dsweb_logo.png";
import application_process from "../../../assets/images/application/application_process.png";

import "../../services/services.scss"

export default function ApplicationEngineering() {
    return (
        <div className="w-100 application-container">
            <div className="container d-flex flex-column align-items-center">
                <div className="text-center">
                    <div className="h2 fw-bold">Application Engineering</div>
                </div>

                <div className="card border-0 text-white about-banner mt-5">
                    <img
                        src={platformBanner}
                        className="card-img img-fluid"
                        alt="application banner"
                    />
                </div>

                <div className="my-5 w-100 row">
                    <div className="col-6 col-md-4 d-flex flex-column align-items-center text-center">
                        <img
                            src={application_icon_6}
                            className="img-fluid"
                            alt="application banner"
                        />
                        <div className="mt-4">
                            We specialize in creating cutting-edge web and mobile applications with strong engineering expertise.
                        </div>
                    </div>
                    <div className="col-6 col-md-4 d-flex flex-column align-items-center text-center">
                        <img
                            src={application_icon_7}
                            className="img-fluid"
                            alt="application banner"
                        />
                        <div className="mt-4">
                            Our apps are responsive and cater to diverse needs, ensuring seamless integration across different platforms.                    </div>
                    </div>
                    <div className="col-6 col-md-4 d-flex flex-column align-items-center text-center">
                        <img
                            src={application_icon_8}
                            className="img-fluid"
                            alt="application banner"
                        />
                        <div className="mt-4">
                            We focus on delivering innovative solutions that keep our clients ahead in the digital landscape.                    </div>
                    </div>
                </div>

                <div className="row w-100 gradient-card-3 mt-5 rounded rounded-2 p-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="fs-4 fw-bold">How Does
                            <img
                                src={logo}
                                alt="Salesforce Consulting Partners"
                                className="img-fluid mx-2"
                                style={{ maxWidth: "100px" }}
                            />
                            Secure Your Web Applications?</div>
                    </div>
                </div>

                <div className="mt-5 row">
                    <div className="col-12 col-md-6">
                        <div className="card feature-card-dark w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                <img src={application_icon_1} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">App Development and Design</h5>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">High-Quality Mobile Apps:</span> User-friendly apps using hybrid, native, and cross-platform technologies.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Mobile First & Responsive Design:</span> Optimized apps for all devices with a mobile-first approach.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">User-Centric Design:</span> Clear, crisp, and concise designs focused on user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 mt-md-0 col-12 col-md-6">
                        <div className="card feature-card-dark w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                <img src={application_icon_2} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Performance and Efficiency</h5>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Performance Optimization:</span> Best practices for speed, including lazy-loading and optimized images.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Single Page Applications:</span> Native-like experiences with advanced JS frameworks for efficiency.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Microservice Architecture:</span> Scalable, maintainable, and easily deployable services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4">
                        <div className="card feature-card-dark w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                <img src={application_icon_3} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Accessibility and Inclusivity</h5>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Comprehensive Security:</span> Robust authentication, adherence to OWASP guidelines, and regular penetration testing.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Data Storage Solutions:</span> Efficient data management with SQL and NoSQL, encryption, and caching.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">API Frameworks:</span> Fast client-server communication with REST, GraphQL, and Web Socket.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4">
                        <div className="card feature-card-dark w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                <img src={application_icon_4} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Native and Cross-Platform Expertise</h5>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Native App Development:</span> Extensive experience with native platforms for smartphones, tablets, and wearables.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Hybrid/Cross-Platform Development:</span> Cost-effective, high-performance apps using cross-platform SDKs.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Intuitive Design:</span> Self-explanatory interfaces adhering to iOS and Android design principles.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="card feature-card-dark w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                <img src={application_icon_5} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Testing and Quality Assurance</h5>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Rigorous Testing:</span> Continuous testing with modern tools to ensure error-free applications.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Meeting Requirements:</span> Ensuring all project standards and requirements are met.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    <span className="text-white">Continuous Integration:</span> Automated testing as part of the development pipeline.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 my-5 pt-4 d-flex flex-column align-items-center">
                <div className="text-center h2 fw-bold my-5">
                    Process flow
                </div>
                    <img
                        src={application_process}
                        className="w-75 mt-5"
                        alt="application_process"
                    />
                </div>

            <div className="mt-5">
                <BussinessForm />
            </div>
        </div>
    );
}