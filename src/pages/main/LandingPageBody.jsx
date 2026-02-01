import About from "./about-main/AboutMain";
import BussinessForm from "../services/bussinessform/BussinessForm";
import Services from "../services/services";
import ProofStrip from "./proof-strip/ProofStrip";

export default function LandingPageBody() {
    return (
        <>
            <ProofStrip />
            <div className="container">
                <About />
                <Services />
                <BussinessForm />
            </div>
        </>
    );
}