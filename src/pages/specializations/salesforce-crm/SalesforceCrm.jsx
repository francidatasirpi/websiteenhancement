import BussinessForm from "../../services/bussinessform/BussinessForm";
import "./salesforce-crm.scss";
import platformBanner from "../../../assets/images/Specialization/SalesForce.png";
import sf_icon_1 from "../../../assets/images/icons/sf_icon_1.svg";
import sf_icon_2 from "../../../assets/images/icons/sf_icon_2.svg";
import sf_icon_3 from "../../../assets/images/icons/sf_icon_3.svg";
import sf_icon_4 from "../../../assets/images/icons/sf_icon_4.svg";
import sf_icon_5 from "../../../assets/images/icons/sf_icon_5.svg";
import sf_icon_6 from "../../../assets/images/icons/sf_icon_6.svg";
import sf_icon_7 from "../../../assets/images/icons/sf_icon_7.svg";
import sf_icon_8 from "../../../assets/images/icons/sf_icon_8.svg";
import sf_process_flow from "../../../assets/images/sales-force/sf_process_flow.png";
import sf_certificates from "../../../assets/images/sales-force/sf_certificates.png";



import "../../services/services.scss"

export default function SalesforceCrm() {
    return (
        <div className="w-100 salesforce-container">
            <div className="container d-flex flex-column align-items-center">
                <div className="text-center">
                    <div className="h2 fw-bold">Salesforce CRM</div>
                </div>

                <div className="card border-0 text-white about-banner mt-5">
                    <img
                        src={platformBanner}
                        className="card-img img-fluid"
                        alt="platform banner"
                    />
                </div>

                <div className="my-5 w-100 row">
                    <div className="col-6 col-md-4 d-flex flex-column align-items-center text-center">
                        <img
                            src={sf_icon_1}
                            className="img-fluid"
                            alt="application banner"
                        />
                        <div className="mt-4">
                            We specialize in creating cutting-edge web and mobile applications with strong engineering expertise.
                        </div>
                    </div>
                    <div className="col-6 col-md-4 d-flex flex-column align-items-center text-center">
                        <img
                            src={sf_icon_2}
                            className="img-fluid"
                            alt="application banner"
                        />
                        <div className="mt-4">
                            Our apps are responsive and cater to diverse needs, ensuring seamless integration across different platforms.                    </div>
                    </div>
                    <div className="col-6 col-md-4 mt-5 mt-md-0 d-flex flex-column align-items-center text-center">
                        <img
                            src={sf_icon_3}
                            className="img-fluid"
                            alt="application banner"
                        />
                        <div className="mt-4">
                            We focus on delivering innovative solutions that keep our clients ahead in the digital landscape.                    </div>
                    </div>
                </div>

                <div className="mt-5 row">
                    <div className="col-6 col-md-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={sf_icon_4} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Configuration</h5>
                                <p className="feature-description mb-0 d-none d-md-block">We tailor Salesforce CRM to fit your business perfectly, ensuring it matches your structure and terminology effortlessly.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={sf_icon_5} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Customization</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Every business is unique. Our Salesforce CRM solutions are highly customizable to meet your specific needs and goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 mt-4 mt-md-0">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={sf_icon_6} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Integration</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Datasirpi ensures that Salesforce CRM works smoothly with your current systems, creating a unified approach to managing customer interactions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={sf_icon_7} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Data Security</h5>
                                <p className="feature-description mb-0 d-none d-md-block">Your data's safety is our priority. Datasirpi uses strong security measures to protect your information and comply with industry standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <div className="card feature-card w-100 d-flex align-items-start p-4 shadow-sm">
                            <div className="feature-icon mb-3">
                                {/* Dynamically assign the icon */}
                                <img src={sf_icon_8} alt="Service icon" />
                            </div>
                            <div>
                                <h5 className="feature-title mb-2">Training and Support</h5>
                                <p className="feature-description mb-0 d-none d-md-block">We provide comprehensive training and ongoing support to help your team maximize the benefits of Salesforce CRM.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 w-100 fs-5">
                    <p className="sub-text">Boost your business with Datasirpi’s Salesforce CRM Solutions. Partner with us today to accelerate your growth journey. Get in touch to discover how our tailored services can transform your business.</p>
                </div>
            </div>
            <div className="w-100 mt-5">
                <div className="text-center h2 fw-bold mt-5">
                    Process flow
                </div>
                    <img
                        src={sf_process_flow}
                        className="w-100"
                        alt="sf_process_flow"
                    />
                </div>

                <div className="w-100 my-5 d-flex flex-column align-items-center">
                <div className="text-center h2 fw-bold mt-5">
                    Certified Salesforce Expertise You Can Trust               
                 </div>
                    <img
                        src={sf_certificates}
                        className="w-75 mt-5"
                        alt="sf_certificates"
                    />
                </div>
            <div className="mt-5">
                <BussinessForm />
            </div>
        </div>
    );
}