import Navbar from "../../components/NavBar/Navbar";
import "./AiEngineeringOs.css";
export default function AiEngineeringOs() {
 return (
    <div className="aios-container">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <div className="aios-content">
        {/* Version badge */}
        <span className="aios-badge">
          v2.4 Now Live: AI-Driven Root Cause Analysis
        </span>

        {/* Headline */}
        <h1 className="aios-headline">
          One AI Platform for Observability, Feature Flags, Analytics, Incidents, and Security
        </h1>

        {/* Description */}
        <p className="aios-description">
          Zelisy unifies your entire engineering stack into a single, high-performance
          platform. Eliminate tool sprawl and gain real-time clarity from code to production.
        </p>

        {/* Buttons */}
        <div className="aios-buttons">
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-secondary">Request Demo</button>
        </div>

        {/* Footer */}
        <footer className="aios-footer">
          © 2026 AI Engineering OS. All rights reserved.
        </footer>
      </div>
    </div>
  );
}