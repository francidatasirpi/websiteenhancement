import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./platform-eng.scss";
import platformBanner from "../../../assets/images/Specialization/Platform_Eng.jpg";
import platform_icon_1 from "../../../assets/images/icons/platform_icon_1.svg";
import platform_icon_2 from "../../../assets/images/icons/platform_icon_2.svg";
import platform_icon_3 from "../../../assets/images/icons/platform_icon_3.svg";
import platform_icon_4 from "../../../assets/images/icons/platform_icon_4.svg";
import platform_icon_5 from "../../../assets/images/icons/platform_icon_5.svg";
import platform_icon_6 from "../../../assets/images/icons/platform_icon_6.svg";
import platform_icon_7 from "../../../assets/images/icons/platform_icon_7.svg";
import platform_icon_8 from "../../../assets/images/icons/platform_icon_8.svg";
import platform_icon_9 from "../../../assets/images/icons/platform_icon_9.svg";


import "../../services/services.scss"

export default function PlatformEngineering() {
    return (
        <div className="w-100 platform-container">
            <div className="container d-flex flex-column align-items-center">
                <div className="text-center">
                    <div className="h2 fw-bold">PLATFORMS ENGINEERING</div>
                </div>

                <div className="card border-0 text-white about-banner mt-5">
                    <img
                        src={platformBanner}
                        className="card-img img-fluid"
                        alt="platform banner"
                    />
                </div>

                <div className="mt-5 w-100 fs-4">
                    <p className="sub-text">Platform engineering is our specialty at Datasirpi. We build robust, scalable, and efficient platforms to enhance and empower your business operations, whether by improving existing systems or creating new ones. </p>
                    <p className="mt-4 sub-text">Join us on a journey of innovation, collaboration, and digital excellence. We know every business is unique, so our approach reflects a deep understanding of your specific needs. By closely aligning with your goals, we create solutions that are both effective and intuitive.</p>
                </div>

                <div className="mt-5 row">
                    <div className="col-6 col-md-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={platform_icon_1} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Devops as a Service</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Experience seamless collaboration between your development and operations teams with our DevOps as a Service. Our experts at Datasirpi empower your organization to adopt a culture of continuous integration, delivery, and deployment, ensuring faster time-to-market and enhanced software quality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="d-flex w-100 h-100 align-items-center justify-content-center card gradient-card-1 border-0 shadow-sm">
                            <div className="fs-2 fw-bold text-center">DevOps services</div>
                        </div>
                    </div>
                    <div className="mt-4 mt-md-0 col-6 col-md-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={platform_icon_2} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Devops Outsourcing</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Let us be your extended DevOps team. Datasirpi provides top-notch DevOps outsourcing services, allowing you to focus on your core competencies while we handle the complexities of infrastructure management, automation, and continuous improvement.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 mt-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={platform_icon_3} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Continous Integration & Deployment</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Stay ahead of the competition with our robust continuous integration and deployment solutions. Datasirpi helps you automate the build, test, and deployment processes, fostering a more agile and efficient development lifecycle.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 mt-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={platform_icon_4} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Container orchestration services</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Harness the power of containerization with our Container Orchestration Services. Our skilled team ensures seamless deployment, scaling, and management of containerized applications, maximizing resource utilization and minimizing downtime.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 mt-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={platform_icon_5} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Log management and monitoring</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Harness the power of containerization with our Container Orchestration Services. Our skilled team ensures seamless deployment, scaling, and management of containerized applications, maximizing resource utilization and minimizing downtime.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 row pt-5">
                    <div className="col-6 col-md-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={platform_icon_6} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Cloud migration services</h5>
                                <p className="feature-description mb-0 d-none d-md-block">At Datasirpi, we understand that migrating to the cloud is a pivotal step in enhancing agility and scalability. Our cloud migration services are tailored to meet your unique business needs, ensuring a smooth and efficient transition. Whether you're moving from on-premises infrastructure or another cloud provider, our expert team is dedicated to minimizing downtime and maximizing the benefits of cloud adoption.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="d-flex w-100 h-100 align-items-center justify-content-center card gradient-card-2 border-0 shadow-sm">
                            <div className="fs-2 fw-bold text-center">Cloud services</div>
                        </div>
                    </div>
                    <div className="mt-4 mt-md-0 col-6 col-md-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={platform_icon_7} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Cloud architecture design</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Unlock the full potential of the cloud with Datasirpi's cloud architecture design services. Our team of architects collaborates with you to create scalable, secure, and resilient cloud solutions. By leveraging industry best practices, we design architectures that align with your business goals, optimizing performance and cost-effectiveness.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={platform_icon_8} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Managed Cloud Services</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Stay ahead of the competition with our robust continuous integration and deployment solutions. Datasirpi helps you automate the build, test, and deployment processes, fostering a more agile and efficient development lifecycle.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={platform_icon_9} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Serverless architecture design</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Harness the power of containerization with our Container Orchestration Services. Our skilled team ensures seamless deployment, scaling, and management of containerized applications, maximizing resource utilization and minimizing downtime.</p>
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