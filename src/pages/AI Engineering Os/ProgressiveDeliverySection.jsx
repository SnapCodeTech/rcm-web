import React from "react";
import "./ProgressiveDeliverySection.css";
import FeatureFlagsVisualization from "../../assets/images/AiEngineeringOs/FeatureFlagsVisualization.png"; // Adjust path to your asset

const ProgressiveDeliverySection = () => {
  return (
    <section className="delivery-container">
      <div className="delivery-content-grid">
        
        {/* Left Side: Showcase Image Card Container */}
        <div className="delivery-image-column">
          <div className="delivery-image-frame">
            <img 
              src={FeatureFlagsVisualization} 
              alt="Adaptive Feature Flags Dashboard Showcase" 
              className="delivery-dashboard-img"
            />
          </div>
        </div>

        {/* Right Side: Text Details */}
        <div className="delivery-text-column">
          <div className="delivery-badge">
            02. PROGRESSIVE DELIVERY
          </div>
          
          <h3 className="delivery-feature-title">
            Adaptive Feature Flags
          </h3>
          
          <p className="delivery-feature-description">
            Safely release code with granular feature flags and progressive rollouts. 
            'Smart-Kill' automatically triggers rollbacks when KPIs degrade.
          </p>

          {/* Sub-features grid layout */}
          <div className="delivery-subfeatures-grid">
            
            {/* Sub-feature 1 */}
            <div className="delivery-subfeature-card">
              <div className="delivery-icon-wrapper-flag">
                <svg className="delivery-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="6" width="20" height="12" rx="6" />
                  <circle cx="16" cy="12" r="4" fill="currentColor" />
                </svg>
              </div>
              <div className="delivery-subfeature-text">
                <h4>Context-Aware Flags</h4>
                <p>Toggle features based on user persona, region, or tech stack.</p>
              </div>
            </div>

            {/* Sub-feature 2 */}
            <div className="delivery-subfeature-card">
              <div className="delivery-icon-wrapper-canary">
                <svg className="delivery-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
              </div>
              <div className="delivery-subfeature-text">
                <h4>Canary Analysis</h4>
                <p>Automated statistical comparison between control and variant.</p>
              </div>
            </div>

            {/* Sub-feature 3 */}
            <div className="delivery-subfeature-card">
              <div className="delivery-icon-wrapper-kill">
                <svg className="delivery-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H7M19 9H5M21 13H3M19 17H5M17 19H7" />
                </svg>
              </div>
              <div className="delivery-subfeature-text">
                <h4>Smart-Kill Switches</h4>
                <p>Automated rollback if error rates exceed defined thresholds.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgressiveDeliverySection;