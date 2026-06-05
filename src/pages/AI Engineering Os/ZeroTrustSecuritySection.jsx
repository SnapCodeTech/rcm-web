import React from "react";
import "./ZeroTrustSecuritySection.css";
import { Colors } from "../../constants/Colors"; // Consuming tokens cleanly from your standalone file
import ZeroTrustVisualization from "../../assets/images/AiEngineeringOs/ZeroTrustVisualization.png";

const ZeroTrustSecuritySection = () => {
  // Map your design token keys straight into standard scoped CSS variables
  const themeStyles = {
    "--white": Colors.white,
    "--text-primary": Colors.textPrimary,
    "--text-secondary": Colors.textSecondary,
    "--description": Colors.description,
    "--border": Colors.border,
    "--success": Colors.success,
    "--badge-text": Colors.badgeText,
    "--badge-bg-opacity": Colors.badgeBgOpacity,
    "--badge-border-opacity": Colors.badgeBorderOpacity,
    "--frame-gradient-start": Colors.frameGradientStart,
    "--frame-gradient-end": Colors.frameGradientEnd,
  };

  return (
    <section className="security-container" style={themeStyles}>
      <div className="security-content-grid">
        
        {/* Left Side: Content Details */}
        <div className="security-text-column">
          <div className="security-badge">
            05. ENTERPRISE SECURITY
          </div>
          
          <h3 className="security-feature-title">
            Zero-Trust Security &amp; Access
          </h3>
          
          <p className="security-feature-description">
            Enterprise-grade security woven into the neural core. From Zero-Trust 
            IAM to automated SOC2 compliance monitoring and visualized audit trails.
          </p>

          {/* Sub-features grid layout */}
          <div className="security-subfeatures-grid">
            
            {/* Sub-feature 1 */}
            <div className="security-subfeature-card">
              <div className="security-icon-wrapper">
                <svg className="security-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="security-subfeature-text">
                <h4>AES-256 Encryption</h4>
                <p>Military-grade data protection at rest and in transit.</p>
              </div>
            </div>

            {/* Sub-feature 2 */}
            <div className="security-subfeature-card">
              <div className="security-icon-wrapper">
                <svg className="security-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <div className="security-subfeature-text">
                <h4>IAM Visualizer</h4>
                <p>Interactive map of permissions and access pathways.</p>
              </div>
            </div>

            {/* Sub-feature 3 */}
            <div className="security-subfeature-card">
              <div className="security-icon-wrapper">
                <svg className="security-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="security-subfeature-text">
                <h4>Granular RBAC</h4>
                <p>Precise control over who sees what data, when.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Showcase Image Card Container (Aligned Left to Right flow) */}
        <div className="security-image-column">
          <div className="security-image-frame">
            <img 
              src={ZeroTrustVisualization} 
              alt="Zero-Trust System Control Frame Dashboard" 
              className="security-dashboard-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ZeroTrustSecuritySection;