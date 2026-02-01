import About from "./about-main/AboutMain";
import BussinessForm from "../services/bussinessform/BussinessForm";
import Services from "../services/services";
import ProofStrip from "./proof-strip/ProofStrip";
import CaseStudies from "./case-studies/CaseStudies";
import HowWeWork from "./how-we-work/HowWeWork";
import SEO from "../../common/components/SEO";

export default function LandingPageBody() {
    return (
        <>
            <SEO
                title={null}
                description="Datasirpi delivers enterprise-grade Platform Engineering, Cybersecurity, Application Development, and Salesforce CRM solutions. ISO 27001 certified. AWS and Salesforce Partner."
                canonical="/"
                keywords="datasirpi, platform engineering, cybersecurity, salesforce, application development, kubernetes, cloud solutions, AWS, DevOps, enterprise software, IT consulting"
            />
            <ProofStrip />
            <div className="container">
                <About />
                <CaseStudies />
            </div>
            <HowWeWork />
            <div className="container">
                <Services />
            </div>
            <BussinessForm />
        </>
    );
}
