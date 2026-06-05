import "./TrustedSection.css";

const TrustedSection = () => {
  return (
    <div className="trusted-section">
      {/* Section Title */}
      <h2 className="trusted-title">
        TRUSTED BY MISSION-CRITICAL TEAMS
      </h2>

      {/* Logos / Names */}
      <div className="trusted-logos">
        <span>AWS</span>
        <span>Google Cloud</span>
        <span>Kubernetes</span>
        <span>GitHub</span>
        <span>Vercel</span>
      </div>
    </div>
    
  );
};

export default TrustedSection;
