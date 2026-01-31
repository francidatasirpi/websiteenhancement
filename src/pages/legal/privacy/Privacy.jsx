import React from 'react';
import { Link } from 'react-router-dom';
import { routesPath } from '../../../constants';
import './privacy.scss';

const Privacy = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="privacy-container">
      <div className="container py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={routesPath.home} className="text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Privacy Policy</h1>
          <p className="lead text-muted">Datasirpi Pvt. Ltd.</p>
          <p className="text-muted">Last Updated: November 10th, 2025</p>
        </div>

        <div className="row">
          {/* Table of Contents */}
          <div className="col-lg-3 mb-4">
            <div className="toc-container sticky-top">
              <h5 className="fw-bold mb-3">Table of Contents</h5>
              <nav className="nav flex-column">
                <button className="nav-link text-start" onClick={() => scrollToSection('scope')}>
                  1. Scope
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('information-collect')}>
                  2. Information We Collect
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('how-we-use')}>
                  3. How We Use Information
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('data-storage')}>
                  4. Data Storage, Retention, and Deletion
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('data-security')}>
                  5. Data Security
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('data-sharing')}>
                  6. Data Sharing and Disclosure
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('user-rights')}>
                  7. User Rights and Choices
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('international-transfers')}>
                  8. International Data Transfers
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('children-privacy')}>
                  9. Children's Privacy
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('policy-updates')}>
                  10. Updates to This Policy
                </button>
                <button className="nav-link text-start" onClick={() => scrollToSection('contact')}>
                  11. Contact Information
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-9">
            <div className="privacy-content">
              <div className="intro-section mb-5">
                <p className="lead">
                  Datasirpi Pvt. Ltd. ("Datasirpi", "we", "us", or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                </p>
              </div>

              <section id="scope" className="content-section">
                <h2 className="section-title">1. Scope</h2>
                <p>
                  This Privacy Policy applies to all information collected by Datasirpi through our website (datasirpi.com), 
                  mobile applications, services, and any other digital platforms we operate. This policy covers:
                </p>
                <ul>
                  <li>Personal information collected directly from users</li>
                  <li>Information collected automatically through our digital platforms</li>
                  <li>Information received from third-party sources</li>
                  <li>Data processed in connection with our services</li>
                </ul>
              </section>

              <section id="information-collect" className="content-section">
                <h2 className="section-title">2. Information We Collect</h2>
                
                <h4>2.1 Personal Information</h4>
                <p>We may collect the following types of personal information:</p>
                <ul>
                  <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                  <li><strong>Professional Information:</strong> Company name, job title, industry, business requirements</li>
                  <li><strong>Account Information:</strong> Username, password, preferences, and account settings</li>
                  <li><strong>Communication Data:</strong> Messages, feedback, and correspondence with us</li>
                </ul>

                <h4>2.2 Technical Information</h4>
                <p>We automatically collect certain technical information, including:</p>
                <ul>
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Website usage patterns and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section id="how-we-use" className="content-section">
                <h2 className="section-title">3. How We Use Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul>
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
                  <li><strong>Communication:</strong> To respond to inquiries and provide customer support</li>
                  <li><strong>Business Operations:</strong> To process transactions and manage accounts</li>
                  <li><strong>Marketing:</strong> To send relevant updates and promotional materials (with consent)</li>
                  <li><strong>Analytics:</strong> To understand usage patterns and improve user experience</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </section>

              <section id="data-storage" className="content-section">
                <h2 className="section-title">4. Data Storage, Retention, and Deletion</h2>
                
                <h4>4.1 Data Storage</h4>
                <p>
                  Your data is stored on secure servers located in data centers that comply with industry standards. 
                  We use cloud infrastructure providers that maintain appropriate security certifications.
                </p>

                <h4>4.2 Data Retention</h4>
                <p>We retain your personal information for as long as necessary to:</p>
                <ul>
                  <li>Fulfill the purposes outlined in this policy</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                </ul>

                <h4>4.3 Data Deletion</h4>
                <p>
                  You may request deletion of your personal information at any time. We will delete your data 
                  within 30 days of your request, unless retention is required by law.
                </p>
              </section>

              <section id="data-security" className="content-section">
                <h2 className="section-title">5. Data Security</h2>
                <p>We implement comprehensive security measures to protect your information:</p>
                <ul>
                  <li><strong>Encryption:</strong> Data is encrypted in transit and at rest using industry-standard protocols</li>
                  <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms</li>
                  <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                  <li><strong>Employee Training:</strong> Regular security awareness training for all staff</li>
                  <li><strong>ISO 27001 Certification:</strong> We maintain ISO 27001 certification for information security</li>
                </ul>
              </section>

              <section id="data-sharing" className="content-section">
                <h2 className="section-title">6. Data Sharing and Disclosure</h2>
                <p>We may share your information in the following circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations</li>
                  <li><strong>Business Partners:</strong> With partners when necessary to provide requested services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                </ul>
                <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
              </section>

              <section id="user-rights" className="content-section">
                <h2 className="section-title">7. User Rights and Choices</h2>
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided below.</p>
              </section>

              <section id="international-transfers" className="content-section">
                <h2 className="section-title">8. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  We ensure that such transfers comply with applicable data protection laws and implement appropriate 
                  safeguards to protect your information.
                </p>
              </section>

              <section id="children-privacy" className="content-section">
                <h2 className="section-title">9. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly collect 
                  personal information from children under 13. If we become aware that we have collected such 
                  information, we will take steps to delete it promptly.
                </p>
              </section>

              <section id="policy-updates" className="content-section">
                <h2 className="section-title">10. Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or 
                  applicable laws. We will notify you of any material changes by posting the updated policy on 
                  our website and updating the "Last Updated" date.
                </p>
              </section>

              <section id="contact" className="content-section">
                <h2 className="section-title">11. Contact Information</h2>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
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
                    <Link to={routesPath.terms} className="btn btn-outline-secondary">
                      Terms of Use →
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

export default Privacy;