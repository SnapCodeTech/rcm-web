import React from "react";
import "./PlatformConsolidationSection.css";

const PlatformConsolidationSection = () => {
  return (
    <section className="consolidation-container">
      {/* Top Header Block */}
      <div className="consolidation-header">
        <h2 className="consolidation-title">
          Replace 5+ tools with one AI-native platform
        </h2>
        <p className="consolidation-subtitle">
          Stop paying for tool fragmentation. Zelisy consolidates logs, metrics, traces, and incidents into a single high-fidelity stream.
        </p>
      </div>

      {/* Value Proposition Cards Deck */}
      <div className="consolidation-cards-grid">
        
        {/* Card 1 */}
        <div className="consolidation-card">
          <h3 className="consolidation-card-title">Faster Decisions</h3>
          <p className="consolidation-card-text">
            Zelisy AI analyzes patterns across your entire stack to surface insights before they become problems.
          </p>
        </div>

        {/* Card 2 */}
        <div className="consolidation-card">
          <h3 className="consolidation-card-title">Lower MTTR</h3>
          <p className="consolidation-card-text">
            Reduce Mean Time To Resolution by 40% with automated root cause analysis and impact mapping.
          </p>
        </div>

        {/* Card 3 */}
        <div className="consolidation-card">
          <h3 className="consolidation-card-title">Unified Visibility</h3>
          <p className="consolidation-card-text">
            One dashboard for developers, SREs, and security teams. No more context switching between tabs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PlatformConsolidationSection;