import React from "react";
import "./IncidentManagement.css";

import IncidentCoreVisualization from "../../assets/images/AiEngineeringOs/IncidentCoreVisualization.png"; 

const IncidentManagement = () => {
  

  return (
    <section className="incident-container">
      <div className="incident-content-grid">
        
        {/* Left Side: Showcase Image Card Container (Alternated Alignment Pattern) */}
        <div className="incident-image-column">
          <div className="incident-image-frame">
            <img 
              src={IncidentCoreVisualization} 
              alt="Automated Incident Core Optimization Engine Layout" 
              className="incident-dashboard-img"
            />
          </div>
        </div>

        {/* Right Side: Text Details */}
        <div className="incident-text-column">
          <div className="incident-badge">
            04. RAPID RESPONSE
          </div>
          
          <h3 className="incident-feature-title">
            Automated Incident Core
          </h3>
          
          <p className="incident-feature-description">
            Detect, correlate, and resolve incidents faster with automated timelines 
            and AI-assisted root cause analysis. Identify the exact commit instantly.
          </p>

          {/* Sub-features grid layout */}
          <div className="incident-subfeatures-grid">
            
            {/* Sub-feature 1 */}
            <div className="incident-subfeature-card">
              <div className="incident-icon-wrapper">
                <svg className="incident-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="incident-subfeature-text">
                <h4>Auto-Retrospectives</h4>
                <p>Post-mortems generated from event timelines instantly.</p>
              </div>
            </div>

            {/* Sub-feature 2 */}
            <div className="incident-subfeature-card">
              <div className="incident-icon-wrapper">
                <svg className="incident-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="incident-subfeature-text">
                <h4>80% MTTR Reduction</h4>
                <p>Drastic reduction in time-to-resolution through AI aids.</p>
              </div>
            </div>

            {/* Sub-feature 3 */}
            <div className="incident-subfeature-card">
              <div className="incident-icon-wrapper">
                <svg className="incident-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <div className="incident-subfeature-text">
                <h4>Commit Attribution</h4>
                <p>Trace every spike back to the specific line of code change.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default IncidentManagement;