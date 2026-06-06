import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="zelisy-footer">
      <div className="footer-max-container">
        
        {/* Main Content Layout Block */}
        <div className="footer-main-grid">
          
          {/* Brand Presentation Column */}
          <div className="footer-brand-column">
            <h2 className="footer-brand-logo">Zelisy</h2>
            <p className="footer-brand-description">
              The next-generation observability and intelligence platform for modern engineering teams.
            </p>
            
            {/* Custom Interactive Icon Buttons */}
            <div className="footer-social-group">
              <a href="#terminal" className="social-icon-btn" aria-label="Terminal Console">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </a>
              <a href="#network" className="social-icon-btn" aria-label="Network System">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="footer-nav-column">
            <h3 className="footer-column-heading">Product</h3>
            <ul className="footer-links-list">
              <li><a href="#observability">Observability</a></li>
              <li><a href="#feature-flags">Feature Flags</a></li>
              <li><a href="#incidents">Incidents</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="footer-nav-column">
            <h3 className="footer-column-heading">Resources</h3>
            <ul className="footer-links-list">
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#api-reference">API Reference</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#status">Status</a></li>
            </ul>
          </div>

          {/* Nav Links Column 3 */}
          <div className="footer-nav-column">
            <h3 className="footer-column-heading">Company</h3>
            <ul className="footer-links-list">
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Separator Line Element */}
        <hr className="footer-divider" />

        {/* Bottom Metadata Block */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">© 2026 Zelisy AI Inc. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;