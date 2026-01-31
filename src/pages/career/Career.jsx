import careerImg1 from "../../assets/images/career/career_img_1.png";
import careerImg2 from "../../assets/images/career/career_img_2.png";
import { elementIds } from "../../constants";
import './career.scss';
import links from "../../common/content/links.json";


export default function Career() {
    const handleCall = () => {
        window.location.href = `tel:${links.phone}`;
    };

    return (
        <>
            <div className="career-bg-container d-flex align-items-center justify-content-center">
                <div className="text-center text-white">
                    <div className="fw-bold fs-1 title">
                        Step Into a World of Innovation and Growth
                    </div>
                    <div className="mt-2 fs-5 sub-title">
                        "Grow your career with us and make an impact."
                    </div>
                </div>
            </div>
            <div className="container d-flex flex-column align-items-center">
                <div className="row mx-5 mt-5">
                    <div className="col-12 col-md-6">
                        <img
                            src={careerImg1}
                            alt="careerImg1"
                            className="w-100"
                        />
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-md-0 d-flex align-items-center career-img-1-text ps-md-5">
                        "At DataSirpi, we believe in pushing the boundaries of innovation and transforming ideas into impactful solutions. We’re always on the lookout for talented and passionate individuals who share our vision of making a difference through technology. If you’re ready to bring your skills, creativity, and drive to an inspiring team, we’d love to hear from you. Join us in building groundbreaking solutions and shaping the future of technology.
                    </div>
                </div>
                <div className="row mx-md-5 mt-5 position-relative">
                    <img src={careerImg2} alt="careerImg2" className="w-100 h-100 img-fluid" />
                    <div className="career-img-2-text fw-bold text-white">
                        “To take the first step, reach out to our HR department by sharing your resume.”
                    </div>
                </div>
                {(links.email || links.phone) && (
                    <div id={elementIds.contact} className="w-100 d-flex flex-column flex-md-row justify-content-center align-items-center mt-5">
                        {links.email && (
                            <a href={`mailto:${links.email}`} className="ds-btn d-flex align-items-center justify-content-center rounded-8px me-md-2 py-4 px-5">
                                <span className="mx-4 text-lowercase">{links.email}</span>
                            </a>
                        )}
                        {links.phone && (
                            <div onClick={handleCall} className="ds-btn d-flex align-items-center justify-content-center rounded-8px mt-3 mt-md-0 ms-md-2 py-4 px-5" style={{ cursor: 'pointer' }}>
                                <span className="mx-4">{links.phone}</span>
                            </div>
                        )}
                    </div>
                )}
                <div className="text-center my-4 bottom-text fs-5">
                    Let’s work together to achieve “something extraordinary!"
                </div>
            </div>
        </>
    )
}