import React, { useEffect, useRef } from "react";
import NavBar from "../navBar/NavBar";
import "./header.scss";
import content from "../../../common/content/content.json";
import { useLocation, Link } from "react-router-dom";
import { elementIds, routesPath } from "../../../constants";
import { BsArrowUpRight, BsPlayCircle } from "react-icons/bs";

function Header() {
  const canvasRef = useRef(null);
  const { mainHeading, subHeading, subHeadings, ctaText } = content.home;
  const location = useLocation();
  const isSeparatePage = location.pathname && location.pathname !== "/";

  // Animated background particles
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
          hue: Math.random() * 60 + 180, // Cyan to purple range
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.opacity})`;
        ctx.fill();

        // Draw connections
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
      {/* Animated Background */}
      {!isSeparatePage && (
        <>
          <div className="header-gradient-bg"></div>
          <canvas ref={canvasRef} className="header-particles"></canvas>
          <div className="header-mesh-overlay"></div>
        </>
      )}

      {/* Navigation */}
      <NavBar isSeparatePage={isSeparatePage} />

      {/* Hero Content */}
      {!isSeparatePage && (
        <div className="hero-content">
          <div className="container">
            {/* Enterprise Badge */}
            <div className="hero-badge animate-fade-in-up">
              <span className="badge-icon">🚀</span>
              <span>Enterprise-Grade Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-heading animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text-animated">{mainHeading}</span>
            </h1>

            {/* Subheading */}
            <p className="hero-subheading animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {subHeading}
            </p>

            {/* Service Tags */}
            <div className="hero-tags animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {subHeadings.map((service, index) => (
                <span key={index} className="service-tag">
                  {service}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-ctas animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to={routesPath.about} className="ds-btn primary-cta">
                <span>{ctaText} <BsArrowUpRight strokeWidth={1} size={16} /></span>
              </Link>
              <button className="secondary-cta" onClick={scrollToContact}>
                <BsPlayCircle size={20} />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Stats Preview */}
            <div className="hero-stats animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="stat-preview">
                <span className="stat-value">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-preview">
                <span className="stat-value">25+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-preview">
                <span className="stat-value">6+</span>
                <span className="stat-label">Years</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
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
