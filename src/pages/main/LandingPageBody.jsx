import About from "./about-main/AboutMain";
import BussinessForm from "../services/bussinessform/BussinessForm";
import Services from "../services/services";

export default function LandingPageBody() {
    return (
        <div className="container">
            <About />
            <Services />
            <BussinessForm />
        </div>
    );
}