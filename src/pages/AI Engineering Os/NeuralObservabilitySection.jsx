import React from "react";
import "./NeuralObservabilitySection.css";
import NeuralObservabilityVisualization from "../../assets/images/AiEngineeringOs/NeuralObservabilityVisualization.png";

const NeuralObservabilitySection = () => {
  return (
    <section className="neural-container">
      <div className="neural-content-grid">
        
        {/* Left Side: Text Details */}
        <div className="neural-text-column">
          <div className="neural-badge">
            03. FULL-STACK VISIBILITY
          </div>
          
          <h3 className="neural-feature-title">
            Neural Observability
          </h3>
          
          <p className="neural-feature-description">
            Monitor system health with high-fidelity metrics, logs, and traces. 
            Correlate disparate data streams into a single, actionable source of truth using eBPF.
          </p>

          {/* Sub-features grid layout */}
          <div className="neural-subfeatures-grid">
            
            {/* Sub-feature 1 */}
            <div className="neural-subfeature-card">
              <div className="neural-icon-wrapper">
                <svg className="neural-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                </svg>
              </div>
              <div className="neural-subfeature-text">
                <h4>Sub-second Ingestion</h4>
                <p>Real-time data availability for mission-critical apps.</p>
              </div>
            </div>

            {/* Sub-feature 2 */}
            <div className="neural-subfeature-card">
              <div className="neural-icon-wrapper">
                <svg className="neural-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              </div>
              <div className="neural-subfeature-text">
                <h4>OpenTelemetry Native</h4>
                <p>No vendor lock-in. Full support for industry standards.</p>
              </div>
            </div>

            {/* Sub-feature 3 */}
            <div className="neural-subfeature-card">
              <div className="neural-icon-wrapper">
                <svg className="neural-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="neural-subfeature-text">
                <h4>Dynamic Topology</h4>
                <p>Auto-mapping of service dependencies and traffic flow.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Showcase Image Card Container */}
        <div className="neural-image-column">
          <div className="neural-image-frame">
            <img 
              src={NeuralObservabilityVisualization} 
              alt="Neural Observability System Dashboard Visualization Showcase" 
              className="neural-dashboard-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default NeuralObservabilitySection;