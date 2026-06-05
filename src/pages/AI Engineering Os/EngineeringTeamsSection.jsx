import React from "react";
import "./EngineeringTeamsSection.css";

const EngineeringTeamsSection = () => {
  return (
    <section className="teams-container">
      {/* Centralized Header Block */}
      <div className="teams-header">
        <h2 className="teams-title">Built for every engineering team</h2>
      </div>

      {/* Asymmetric Multi-Layer Grid Layout */}
      <div className="teams-grid">
        
        {/* Row 1: 3-Column Split */}
        <div className="teams-card card-purple">
          <div className="teams-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18M7 16V10M12 16V4M17 16v-8" />
            </svg>
          </div>
          <h3 className="teams-card-title">SRE Teams</h3>
          <p className="teams-card-description">
            Improve reliability with real-time observability and automated incident correlation.
          </p>
        </div>

        <div className="teams-card card-green">
          <div className="teams-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5h6c0-2-1-4-2.5-5.5zM21.5 2.5c-2 0-4.5 1.5-6 3.5l-4 4 1.5 1.5 4-4c2-1.5 3.5-4 3.5-6z" />
              <path d="M12 12l-4 4v3h3l4-4-3-3z" />
            </svg>
          </div>
          <h3 className="teams-card-title">DevOps Teams</h3>
          <p className="teams-card-description">
            Ship faster with feature flags, safe rollouts, and deployment intelligence.
          </p>
        </div>

        <div className="teams-card card-cyan">
          <div className="teams-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l3 3" />
            </svg>
          </div>
          <h3 className="teams-card-title">Product Teams</h3>
          <p className="teams-card-description">
            Understand users with funnels, retention, and behavioral analytics.
          </p>
        </div>

        {/* Row 2: 2-Column Balanced Span */}
        <div className="teams-card card-wide card-purple">
          <div className="teams-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 className="teams-card-title">Security Teams</h3>
          <p className="teams-card-description">
            Detect threats, manage access, and enforce compliance across systems.
          </p>
        </div>

        <div className="teams-card card-wide card-green">
          <div className="teams-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
          </div>
          <h3 className="teams-card-title">Engineering Leaders</h3>
          <p className="teams-card-description">
            Gain full visibility into system health, reliability, and engineering performance across the entire organization.
          </p>
        </div>

      </div>
    </section>
  );
};

export default EngineeringTeamsSection;