import React, { useEffect, useRef } from "react";
import NavBar from "../navBar/NavBar";
import "./header.scss";
import content from "../../../common/content/content.json";
import { useLocation, Link } from "react-router-dom";
import { elementIds } from "../../../constants";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";

function Header() {
  const canvasRef = useRef(null);
  const { mainHeading, subHeading, ctaText, ctaSecondary } = content.home;
  const services = content.services || [];
  const location = useLocation();
  const isSeparatePage = location.pathname && location.pathname !== "/";

  useEffect(() => {
    if (isSeparatePage) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 20);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          hue: Math.random() * 60 + 180,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.opacity})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${p.hue}, 100%, 60%, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [isSeparatePage]);

  const scrollToContact = () => {
    window.location.href = `#${elementIds.contact}`;
  };

  return (
    <div className={isSeparatePage ? "header-separate" : "header-home"} id={elementIds.home}>
      {!isSeparatePage && (
        <>
          <div className="header-gradient-bg"></div>
          <canvas ref={canvasRef} className="header-particles"></canvas>
          <div className="header-mesh-overlay"></div>
        </>
      )}

      <NavBar isSeparatePage={isSeparatePage} />

      {!isSeparatePage && (
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-heading animate-fade-in-up">
              <span className="gradient-text-animated">{mainHeading}</span>
            </h1>

            <p className="hero-subheading animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {subHeading}
            </p>

            <div className="hero-ctas animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <button className="ds-btn primary-cta" onClick={scrollToContact}>
                <span>{ctaText} <BsArrowUpRight strokeWidth={1} size={16} /></span>
              </button>
              <Link to="/about" className="secondary-cta">
                <span>{ctaSecondary}</span>
                <BsArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-services animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {services.map((service, index) => (
                <Link key={index} to={service.path} className="hero-service-card">
                  <div className="service-card-content">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.description}</p>
                    <span className="service-card-outcome">{service.outcome}</span>
                  </div>
                  <BsArrowRight className="service-card-arrow" size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>Scroll to explore</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
