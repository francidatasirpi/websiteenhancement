import BussinessForm from "../services/bussinessform/BussinessForm";
import "./about.scss";
import aboutBanner from "../../assets/images/About/about_banner.png";
import aboutBanner2 from "../../assets/images/About/about_banner_2.png";
import worldMap from "../../assets/images/About/world_map.png";

export default function About() {
    return (
        <div className="w-100 about-container">
            <div className="container d-flex flex-column align-items-center">
                <div className="text-center">
                    <div className="h2 fw-bold">"Welcome to DataSirpi"</div>
                    <div className="sub-title mt-2">
                        Innovating for a brighter, connected future.
                    </div>
                </div>

                <div className="card border-0 text-white about-banner mt-5">
                    <img
                        src={aboutBanner}
                        className="card-img img-fluid"
                        alt="About banner"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title">
                            "DataSirpi - Where Precision Meets  Excellence"
                        </h5>
                        <p className="card-text d-none d-md-block fw-semibold">
                            <span className="gray-text">At Datasirpi, we’re a passionate team of engineers dedicated to making the world a better place through cutting-edge technology and innovation.</span> We don’t just build applications; we create tailored solutions to solve your unique challenges.
                        </p>
                    </div>
                </div>

                <div className="mt-5 w-100">
                    <div className="h4 fw-bold sub-header">"Connecting Solutions Across the Globe"</div>
                    <p className="mt-3 sub-text">Since our inception, we’ve been at the forefront of delivering innovative technology solutions to businesses, governments, and institutions across the globe. </p>
                </div>

                <div className="row mt-5">
                    <div className="col-6 d-flex align-items-center world-map-text">
                        “Today, we proudly serve clients from North America to EMEA, APAC, and Oceania, establishing ourselves as a trusted partner in the global tech landscape.”                    </div>
                    <div className="col-6">
                        <img
                            src={worldMap}
                            alt="world map"
                            className="w-100"
                        />
                    </div>
                </div>

                <div className="card border-0 text-white about-banner mt-5">
                    <img
                        src={aboutBanner2}
                        className="card-img img-fluid"
                        alt="About banner"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title">
                            "Driven by Innovation, Committed to Excellence"
                        </h5>
                        <p className="card-text d-none d-md-block fw-semibold">
                            <span className="gray-text">Whether it’s collaborating with partners, supporting small businesses, or working directly with customers,</span> “Our mission is clear: to address challenges head-on and deliver solutions that drive progress and growth.”
                        </p>
                    </div>
                </div>

                <div className="text-center my-5">
                    <div className="bottom-text fs-3">
                        Let’s solve problems, create opportunities, and build something amazing—together.
                    </div>
                    <div className="small small-text">
                    we’re committed to building a brighter, more connected future for businesses and communities worldwide.
                    </div>
                </div>



            </div>
            <BussinessForm />
        </div>
    );
}