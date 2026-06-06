import "./HeroSection.css";
const HeroSection = () => {
    return (
        <div className="aios-content">
                
                <span className="aios-badge">
                v2.4 Now Live: AI-Driven Root Cause Analysis
                </span>
        
                <h1 className="aios-headline">
                One AI Platform for Observability, Feature Flags, Analytics, Incidents, and Security
                </h1>

                <p className="aios-description">
                Zelisy unifies your entire engineering stack into a single, high-performance
                platform. Eliminate tool sprawl and gain real-time clarity from code to production.
                </p>

                
                <div className="aios-buttons">
                <button className="btn-primary">Start Free Trial</button>
                <button className="btn-secondary">Request Demo</button>
                </div>
        </div>
    );
}
export default HeroSection;