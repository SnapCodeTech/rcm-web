import React from "react";
import "./EngineeringMetricsSection.css";

const EngineeringMetricsSection = () => {
  return (
    <section className="metrics-container">
      {/* Section Header */}
      <div className="metrics-header">
        <h2 className="metrics-title">
          Measurable improvements across engineering organizations
        </h2>
      </div>

      {/* Stats Wrapper */}
      <div className="metrics-display-box">
        
        {/* Row of Metrics */}
        <div className="metrics-row">
          
          {/* Stat 1 */}
          <div className="metric-item">
            <span className="metric-number text-purple">60%</span>
            <span className="metric-label">MTTR REDUCTION</span>
          </div>

          {/* Stat 2 */}
          <div className="metric-item">
            <span className="metric-number text-green">40%</span>
            <span className="metric-label">FEWER INCIDENTS</span>
          </div>

          {/* Stat 3 */}
          <div className="metric-item">
            <span className="metric-number text-cyan">2x</span>
            <span className="metric-label">DEPLOYMENT SPEED</span>
          </div>

          {/* Stat 4 */}
          <div className="metric-item">
            <span className="metric-number text-purple">30%</span>
            <span className="metric-label">PRODUCT INSIGHTS</span>
          </div>

          {/* Stat 5 */}
          <div className="metric-item">
            <span className="metric-number text-green">-25%</span>
            <span className="metric-label">CLOUD COSTS</span>
          </div>

        </div>

        {/* Bottom Horizontal Timeline Axis Line with Intersecting Node Dots */}
        <div className="metrics-axis-line">
          <div className="axis-dot dot-purple" style={{ left: "30%" }}></div>
          <div className="axis-dot dot-green" style={{ left: "65%" }}></div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringMetricsSection;