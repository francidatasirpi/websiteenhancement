import React from "react";
import "./OurClients.scss";

// Example SVG logos
import kingpinLogo from "../../../assets/images/OurClient/kingpin.svg";
import trojanLogo from "../../../assets/images/OurClient/trojan.svg";
import yapLogo from "../../../assets/images/OurClient/yap.svg";
import soc360Logo from "../../../assets/images/OurClient/soc360.svg";
import myworldLogo from "../../../assets/images/OurClient/mywork.svg";

const OurClients = () => {
  const logos = [kingpinLogo, trojanLogo, yapLogo, soc360Logo, myworldLogo];

  return (
    <div className="pt-3">
      <h2 className="text-center mb-4 fw-bold">Our Clients</h2>
      <div className="wrapper">
        {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Client ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
