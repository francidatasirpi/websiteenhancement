import About from "./about-main/AboutMain";
import BussinessForm from "../services/bussinessform/BussinessForm";
import Services from "../services/services";
import ProofStrip from "./proof-strip/ProofStrip";
import CaseStudies from "./case-studies/CaseStudies";
import HowWeWork from "./how-we-work/HowWeWork";

export default function LandingPageBody() {
    return (
        <>
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
