import React from "react";
import "./FinalCtaSection.css";

const FinalCtaSection = () => {
  return (
    <section className="cta-section-wrapper">
      <div className="cta-glass-card">
        {/* Main Content Typography */}
        <h2 className="cta-main-title">
          Your Entire Engineering <br className="desktop-break" />
          Stack. Rebuilt as One AI <br className="desktop-break" />
          System.
        </h2>
        
        <p className="cta-subtext">
          Join 1,000+ high-performance engineering teams already using Zelisy.
        </p>

        {/* Action Button Container Matrix */}
        <div className="cta-actions-group">
          <button className="cta-btn cta-btn-purple">
            Start Free Trial
          </button>
          <button className="cta-btn cta-btn-outline">
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;