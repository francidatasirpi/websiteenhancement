import React from 'react';
import { Link } from 'react-router-dom';
import { routesPath } from '../../../constants';
import './terms.scss';

const Terms = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="terms-container">
      <div className="container py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={routesPath.home} className="text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Terms of Use</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Terms of Use</h1>
          <p className="lead text-muted">Datasirpi Pvt. Ltd.</p>
          <p className="text-muted">Last Updated: November 10th, 2025</p>
        </div>

        <div className="row">
          {/* Table of Contents */}
          <div className="col-lg-3 mb-4">
            <div className="toc-container sticky-top">
              <h5 className="fw-bold mb-3">Table of Contents</h5>
              <nav className="nav flex-column">
                <button className="nav-link text-start" onClick={() => scrollToSection('scope-terms')}>
                  1. Scope of the Terms
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('service-description')}>
                  2. Description of Service
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('acceptance-use')}>
                  3. Acceptance and Use of the App
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('intellectual-property')}>
                  4. Intellectual Property
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('data-privacy')}>
                  5. Data and Privacy
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('data-security')}>
                  6. Data Security
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('third-party')}>
                  7. Third-Party Services
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('disclaimer')}>
                  8. Disclaimer of Warranties
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('limitation-liability')}>
                  9. Limitation of Liability
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('termination')}>
                  10. Termination
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('modifications')}>
                  11. Modifications to Terms
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('governing-law')}>
                  12. Governing Law
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('contact')}>
                  13. Contact Information
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-9">
            <div className="terms-content">
              <div className="intro-section mb-5">
                <p className="lead">
                  Welcome to the services provided by Datasirpi Pvt. Ltd. ("Datasirpi", "we", "us", or "our"). 
                  These Terms of Use ("Terms") govern your access to and use of our website, applications, and services. 
                  By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              <section id="scope-terms" className="content-section">
                <h2 className="section-title">1. Scope of the Terms</h2>
                <p>
                  These Terms apply to all users of Datasirpi's services, including but not limited to:
                </p>
                <ul>
                  <li>Our website (datasirpi.com) and associated subdomains</li>
                  <li>Mobile applications and software solutions</li>
                  <li>Platform engineering and application development services</li>
                  <li>Salesforce CRM solutions and consulting services</li>
                  <li>Cybersecurity services and solutions</li>
                  <li>Any other services or products offered by Datasirpi</li>
                </ul>
              </section>

              <section id="service-description" className="content-section">
                <h2 className="section-title">2. Description of Service</h2>
                <p>
                  Datasirpi provides comprehensive technology solutions including:
                </p>
                <ul>
                  <li><strong>Platform Engineering:</strong> DevOps services, cloud migration, container orchestration, and infrastructure management</li>
                  <li><strong>Application Engineering:</strong> Custom web and mobile application development, responsive design, and performance optimization</li>
                  <li><strong>Salesforce CRM:</strong> Configuration, customization, integration, and ongoing support for Salesforce solutions</li>
                  <li><strong>Cybersecurity:</strong> Security assessments, penetration testing, compliance consulting, and 24/7 monitoring services</li>
                  <li><strong>Consulting Services:</strong> Technology strategy, digital transformation, and business process optimization</li>
                </ul>
              </section>

              <section id="acceptance-use" className="content-section">
                <h2 className="section-title">3. Acceptance and Use of the App</h2>
                
                <h4>3.1 Acceptance</h4>
                <p>
                  By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                  If you do not agree to these Terms, you must not use our services.
                </p>

                <h4>3.2 Permitted Use</h4>
                <p>You may use our services for lawful business purposes only. You agree to:</p>
                <ul>
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with applicable laws and regulations</li>
                  <li>Respect the intellectual property rights of Datasirpi and third parties</li>
                </ul>

                <h4>3.3 Prohibited Use</h4>
                <p>You agree not to:</p>
                <ul>
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt the operation of our services</li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section id="intellectual-property" className="content-section">
                <h2 className="section-title">4. Intellectual Property</h2>
                
                <h4>4.1 Datasirpi's Rights</h4>
                <p>
                  All content, features, and functionality of our services, including but not limited to text, graphics, 
                  logos, software, and design, are owned by Datasirpi and are protected by copyright, trademark, and other 
                  intellectual property laws.
                </p>

                <h4>4.2 User Content</h4>
                <p>
                  You retain ownership of any content you provide to us. By submitting content, you grant Datasirpi a 
                  non-exclusive, worldwide, royalty-free license to use, modify, and distribute such content solely for 
                  the purpose of providing our services.
                </p>

                <h4>4.3 Third-Party Rights</h4>
                <p>
                  Our services may include third-party content or links to third-party websites. We respect the intellectual 
                  property rights of others and expect our users to do the same.
                </p>
              </section>

              <section id="data-privacy" className="content-section">
                <h2 className="section-title">5. Data and Privacy</h2>
                <p>
                  Your privacy is important to us. Our collection, use, and protection of your personal information is 
                  governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, 
                  you consent to the collection and use of your information as described in our Privacy Policy.
                </p>
                <p>
                  <Link to={routesPath.privacy} className="privacy-link">
                    View our complete Privacy Policy →
                  </Link>
                </p>
              </section>

              <section id="data-security" className="content-section">
                <h2 className="section-title">6. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data, including:
                </p>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>ISO 27001 certified information security management</li>
                  <li>24/7 monitoring and incident response capabilities</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. 
                  While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section id="third-party" className="content-section">
                <h2 className="section-title">7. Third-Party Services</h2>
                <p>
                  Our services may integrate with or include third-party services, including but not limited to:
                </p>
                <ul>
                  <li>Cloud service providers (AWS, Azure, Google Cloud)</li>
                  <li>Salesforce and related platforms</li>
                  <li>Analytics and monitoring tools</li>
                  <li>Payment processing services</li>
                </ul>
                <p>
                  Your use of third-party services is subject to their respective terms and conditions. 
                  We are not responsible for the practices or content of third-party services.
                </p>
              </section>

              <section id="disclaimer" className="content-section">
                <h2 className="section-title">8. Disclaimer of Warranties</h2>
                <p>
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
                  TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul>
                  <li>IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
                  <li>WARRANTIES OF NON-INFRINGEMENT</li>
                  <li>WARRANTIES THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE</li>
                  <li>WARRANTIES REGARDING THE ACCURACY OR RELIABILITY OF CONTENT</li>
                </ul>
              </section>

              <section id="limitation-liability" className="content-section">
                <h2 className="section-title">9. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, DATASIRPI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Business interruption or system downtime</li>
                  <li>Cost of substitute services</li>
                  <li>Any other commercial damages or losses</li>
                </ul>
                <p>
                  Our total liability for any claims arising from or related to these Terms or our services shall not 
                  exceed the amount paid by you to Datasirpi in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section id="termination" className="content-section">
                <h2 className="section-title">10. Termination</h2>
                
                <h4>10.1 Termination by You</h4>
                <p>
                  You may terminate your use of our services at any time by discontinuing use and, if applicable, 
                  closing your account.
                </p>

                <h4>10.2 Termination by Us</h4>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice, if you 
                  breach these Terms or engage in conduct that we determine to be harmful to our business or other users.
                </p>

                <h4>10.3 Effect of Termination</h4>
                <p>
                  Upon termination, your right to use our services will cease immediately. Provisions that by their 
                  nature should survive termination will remain in effect.
                </p>
              </section>

              <section id="modifications" className="content-section">
                <h2 className="section-title">11. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of any material changes by:
                </p>
                <ul>
                  <li>Posting the updated Terms on our website</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending email notifications for significant changes</li>
                </ul>
                <p>
                  Your continued use of our services after any modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section id="governing-law" className="content-section">
                <h2 className="section-title">12. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to 
                  conflict of law principles. Any disputes arising from these Terms or our services shall be subject to 
                  the exclusive jurisdiction of the courts in [Your City], India.
                </p>
              </section>

              <section id="contact" className="content-section">
                <h2 className="section-title">13. Contact Information</h2>
                <p>If you have any questions about these Terms of Use, please contact us:</p>
                <div className="contact-info">
                  <p><strong>Datasirpi Pvt. Ltd.</strong></p>
                  <p>Email: <a href="mailto:hr@datasirpi.com">hr@datasirpi.com</a></p>
                  <p>Website: <a href="https://www.datasirpi.com">www.datasirpi.com</a></p>
                </div>
              </section>

              {/* Navigation Links */}
              <div className="navigation-links mt-5 pt-4 border-top">
                <div className="row">
                  <div className="col-md-6">
                    <Link to={routesPath.home} className="btn btn-outline-primary">
                      ← Back to Home
                    </Link>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <Link to={routesPath.privacy} className="btn btn-outline-secondary">
                      Privacy Policy →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;