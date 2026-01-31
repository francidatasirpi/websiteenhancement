import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./cyber.scss";
import platformBanner from "../../../assets/images/Specialization/Cyber.png";
import cyber_icon_1 from "../../../assets/images/icons/cyber_icon_1.svg";
import cyber_icon_2 from "../../../assets/images/icons/cyber_icon_2.svg";
import cyber_icon_3 from "../../../assets/images/icons/cyber_icon_3.svg";
import cyber_icon_4 from "../../../assets/images/icons/cyber_icon_4.svg";
import cyber_icon_5 from "../../../assets/images/icons/cyber_icon_5.svg";
import cyber_icon_6 from "../../../assets/images/icons/cyber_icon_6.svg";
import cyber_icon_7 from "../../../assets/images/icons/cyber_icon_7.svg";
import cyber_icon_8 from "../../../assets/images/icons/cyber_icon_8.svg";
import logo from "../../../assets/images/Logo/dsweb_logo.png";

import "../../services/services.scss"

export default function CyberSecurity() {
    return (
        <div className="w-100 cyber-container">
            <div className="container d-flex flex-column align-items-center">
                <div className="text-center">
                    <div className="h2 fw-bold">Cyber Security</div>
                </div>

                <div className="card border-0 text-white about-banner mt-5">
                    <img
                        src={platformBanner}
                        className="card-img img-fluid"
                        alt="application banner"
                    />
                </div>

                <div className="mt-5 w-100 fs-4">
                    <p className="sub-text">We understand the utmost importance of securing your digital assets in an ever-evolving cyber landscape. As a leading cyber security provider, we are dedicated to delivering cutting-edge solutions that safeguard your business against potential threats.</p>
                </div>

                <div className="row w-100 gradient-card-4 mt-4 rounded rounded-2 p-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="fs-4 fw-bold">What Makes
                            <img
                                src={logo}
                                alt="Salesforce Consulting Partners"
                                className="img-fluid mx-2"
                                style={{ maxWidth: "100px" }}
                            />
                            a Cybersecurity Powerhouse?</div>
                    </div>
                </div>

                <div className="mt-5 row">
                    <div className="col-12">
                        <div className="card feature-card-dark w-100 d-flex align-items-start p-4 shadow-sm">
                            <div>
                                <h5 className="feature-title mb-2">Compliance Optimization Center (COC)</h5>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    1. Datasirpi’s COC simplifies navigating cyber security regulations.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    2. We offer customized solutions to meet and exceed industry standards.
                                </p>
                                <p className="feature-description mb-0 d-none d-md-block">
                                    3. Ensure peace of mind and stakeholder trust with our compliance expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 col-12 col-md-6">
                        <div className="card feature-card-dark w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                <img src={cyber_icon_1} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Technology Optimization Center (TOC)</h5>
                                <p className="feature-description mb-0">
                                    1. Enhance your business operations with Datasirpi’s Technology Optimization Center (TOC). Our experts optimize your technology infrastructure for peak performance.
                                </p>
                                <p className="feature-description mb-0">
                                    2. From network security to endpoint protection, we ensure your systems are secure and resilient against vulnerabilities.
                                </p>
                                <p className="feature-description mb-0">
                                    3. Trust us to maintain smooth and efficient operations, allowing you to focus on your business goals without technological worries.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4">
                        <div className="card feature-card-dark w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                <img src={cyber_icon_2} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Security Operations Center (SOC)</h5>
                                <p className="feature-description mb-0">
                                    1. Our SOC utilizes state-of-the-art technology to monitor and detect potential cyber threats in real-time.
                                </p>
                                <p className="feature-description mb-0">
                                    2. We prioritize your specific security needs, offering a proactive defense mechanism that evolves with the changing threat landscape.
                                </p>
                                <p className="feature-description mb-0">
                                    3. Our dedicated team of experts ensures swift responses to threats, providing round-the-clock protection for your business.
                                </p>
                            </div>
                        </div>
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
                    <div className="col-6 col-md-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={cyber_icon_3} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Offensive Security Practices Web App PenTesting</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Uncover vulnerabilities in your web applications before malicious actors do. Our expert team simulates real-world attacks to identify and address potential security risks, ensuring the robustness of your online presence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={cyber_icon_4} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Vulnerability Assessment Penetration</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Stay one step ahead of cyber threats with our thorough Vulnerability Assessment Penetration services. We conduct in-depth analyzes to identify weaknesses in your systems, providing actionable insights to fortify your defenses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 mt-4 mt-md-0">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={cyber_icon_5} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Email Phishing Assessment</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Stay one step ahead of cyber threats with our thorough Vulnerability Assessment Penetration services. We conduct in-depth analyzes to identify weaknesses in your systems, providing actionable insights to fortify your defenses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 mt-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={cyber_icon_6} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Red Team Engagements</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Experience a simulated cyber attack orchestrated by our Red Team experts. By emulating real-world adversaries, we assess your organization’s readiness to detect and respond to sophisticated threats, fortifying your security posture.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 mt-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={cyber_icon_7} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Mobile App Penetration Testing</h5>
                                <p className="feature-description mb-0 d-none d-md-block">With the proliferation of mobile applications, securing your mobile ecosystem is paramount. Our Mobile App Penetration Testing services scrutinize your apps for vulnerabilities, ensuring the security and privacy of your users.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 mt-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={cyber_icon_8} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Source Code Review Services</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Root out security vulnerabilities at the core of your software with our Source Code Review Services. Our seasoned experts meticulously analyze your source code, providing insights to enhance the overall security of your applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <BussinessForm />
            </div>
        </div>
    );
}