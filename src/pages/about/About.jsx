import BussinessForm from "../services/bussinessform/BussinessForm";
import "./about.scss";
import aboutBanner from "../../assets/images/About/about_banner.png";
import aboutBanner2 from "../../assets/images/About/about_banner_2.png";
import worldMap from "../../assets/images/About/world_map.png";
import { FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiGlobe, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import SEO from "../../common/components/SEO";

export default function About() {
    const stats = [
        { value: "6+", label: "Years of Excellence", icon: <FiAward /> },
        { value: "50+", label: "Projects Delivered", icon: <FiCheckCircle /> },
        { value: "25+", label: "Global Clients", icon: <FiUsers /> },
        { value: "99%", label: "Client Satisfaction", icon: <FiTrendingUp /> }
    ];

    const values = [
        {
            icon: <FiTarget />,
            title: "Our Mission",
            description: "To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and digital transformation."
        },
        {
            icon: <FiEye />,
            title: "Our Vision",
            description: "To be the global leader in delivering cutting-edge technology solutions that shape the future of digital innovation."
        },
        {
            icon: <FiHeart />,
            title: "Our Values",
            description: "Integrity, innovation, and excellence guide every project we undertake. We believe in building lasting partnerships through trust and transparency."
        }
    ];

    return (
        <div className="w-100 about-container">
            <SEO
                title="About Us"
                description="Learn about Datasirpi - a passionate team of engineers dedicated to making the world a better place through cutting-edge technology and innovation. ISO 27001 certified."
                canonical="/about"
                keywords="about datasirpi, technology company, IT consulting, digital transformation, ISO 27001"
            />
            <div className="container d-flex flex-column align-items-center">
                <div className="hero-section text-center">
                    <span className="hero-badge">About DataSirpi</span>
                    <h1 className="hero-title">
                        Where <span className="gradient-text">Innovation</span> Meets Excellence
                    </h1>
                    <p className="hero-description">
                        We're a passionate team of engineers dedicated to making the world a better place
                        through cutting-edge technology. From startups to enterprises, we transform ideas
                        into powerful digital solutions that drive real business results.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn-primary-custom">Start Your Journey</a>
                        <a href="#mission" className="btn-secondary-custom">Learn More</a>
                    </div>
                </div>

                <div className="stats-section">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
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
                            <span className="gray-text">At Datasirpi, we're a passionate team of engineers dedicated to making the world a better place through cutting-edge technology and innovation.</span> We don't just build applications; we create tailored solutions to solve your unique challenges.
                        </p>
                    </div>
                </div>

                <div id="mission" className="values-section">
                    <h2 className="section-title text-center">What Drives Us</h2>
                    <p className="section-subtitle text-center">Our commitment to excellence is reflected in everything we do</p>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon-wrapper">{value.icon}</div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
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