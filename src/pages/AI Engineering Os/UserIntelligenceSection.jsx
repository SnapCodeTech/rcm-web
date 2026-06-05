import "./UserIntelligenceSection.css";
import ProductAnalyticsVisualization from "../../assets/images/AiEngineeringOs/ProductAnalyticsVisualization.png";

const UserIntelligenceSection = () => {
  return (
    <section className="intel-container">
      {/* Section Header */}
      <div className="intel-header">
        <h2 className="intel-section-title">A Unified Engineering Intelligence Platform</h2>
        <p className="intel-section-subtitle">
          The integrated layers of your system, providing deep context from user behavior to secure access control.
        </p>
      </div>

      {/* Feature Content Block */}
      <div className="intel-content-grid">
        
        {/* Left Side: Text Details */}
        <div className="intel-text-column">
          <div className="intel-badge">01. USER INTELLIGENCE</div>
          <h3 className="intel-feature-title">Product Analytics</h3>
          <p className="intel-feature-description">
            Understand user behavior with high-fidelity funnels, cohort retention, and session insights. 
            Maps technical performance to business outcomes in real-time.
          </p>

          {/* Sub-features grid layout */}
          <div className="intel-subfeatures-grid">
            
            {/* Sub-feature 1 */}
            <div className="intel-subfeature-card">
              <div className="intel-icon-wrapper">
                <svg className="intel-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                </svg>
              </div>
              <div className="intel-subfeature-text">
                <h4>Multi-dimensional Funneling</h4>
                <p>Trace paths across devices and sessions with zero data loss.</p>
              </div>
            </div>

            {/* Sub-feature 2 */}
            <div className="intel-subfeature-card">
              <div className="intel-icon-wrapper">
                <svg className="intel-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="intel-subfeature-text">
                <h4>Latency Correlation</h4>
                <p>See exactly how p99 latency impacts your checkout conversion.</p>
              </div>
            </div>

            {/* Sub-feature 3 */}
            <div className="intel-subfeature-card">
              <div className="intel-icon-wrapper">
                <svg className="intel-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="intel-subfeature-text">
                <h4>Automated Cohort Discovery</h4>
                <p>AI identifies high-value user segments automatically.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Showcase Image Card Container */}
        <div className="intel-image-column">
          <div className="intel-image-frame">
            {/* Replace source with your actual image path assets */}
            <img 
              src={ProductAnalyticsVisualization} 
              alt="Product Analytics Dashboard Showcase" 
              className="intel-dashboard-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default UserIntelligenceSection;
