import React from "react";
import "./IntelligenceStack.css";

const features = [
  {
    id: "01",
    title: "Feature Flags",
    subtitle: "Dynamic Rollouts & Kill-Switches",
    content:
      "Control your releases with surgical precision. Our flags are integrated into the neural core, allowing for automatic rollback if performance metrics degrade.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    specBox: {
      label: "SPEC: propagation_latency < 2ms",
      target: "TARGET: edge_runtime_v3",
    },
    dotColor: "#a855f7", // Purple
  },
  {
    id: "02",
    title: "A/B Testing",
    subtitle: "Data-Driven Experimentation",
    content:
      "Optimize user experiences through controlled experiments and real-time performance analysis. Compare multiple variations, measure key metrics, and confidently deploy the best-performing version.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1400&auto=format&fit=crop",
    bulletPoints: [
      "Real-time Results Tracking",
      "Statistical Significance Analysis",
    ],
    dotColor: "#22c55e", // Green
  },
  {
    id: "03",
    title: "Vault",
    subtitle: "Encrypted Secret Orchestration",
    content:
      "Zero-trust secret management. Inject credentials directly into your runtimes without ever exposing them to logs or environment variables.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
    specBox: { label: "AES-256-GCM Hardware-level encryption enabled" },
    dotColor: "#06b6d4", // Cyan
  },
  {
    id: "04",
    title: "Events",
    subtitle: "Unified Stream Aggregation",
    content:
      "A hyper-scale event bus that captures every state change across your infrastructure. Process 10M+ events per second with sub-millisecond latency.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    stats: [
      { label: "THROUGHPUT", value: "12GB/s" },
      { label: "RETENTION", value: "90 Days" },
    ],
    dotColor: "#a855f7", // Purple
  },
  {
    id: "05",
    title: "Session Replay",
    subtitle: "Visual Debugging & UX Audit",
    content:
      "Reconstruct user sessions with frame-perfect accuracy. Automatically linked to backend traces, so you can see exactly why a button click failed.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop",
    pills: ["PRIVACY-FIRST", "AUTO-ANONYMIZE"],
    dotColor: "#22c55e", // Green
  },
  {
    id: "06",
    title: "Survey",
    subtitle: "Sentiment-Integrated Insights",
    content:
      "Deploy hyper-targeted feedback loops. Correlate user satisfaction scores directly with app performance and technical metrics in real-time.",
    linkText: "View Sentiment Graph",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1400&auto=format&fit=crop",
    dotColor: "#3b82f6", // Blue
  },
  {
    id: "07",
    title: "Error Tracking",
    subtitle: "Autonomous Root Cause Analysis",
    content:
      "Don't just log errors—understand them. Zelisy automatically groups exceptions and identifies the exact line of code and environmental condition responsible.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
    errorConsole: {
      title: "CRITICAL: 403 Forbidden on /api/v2/vault",
      subtitle: "AUTORESOLVED: Commit #8821 reverted",
    },
    dotColor: "#ef4444", // Red
  },
  {
    id: "08",
    title: "Rate Limit",
    subtitle: "Traffic Shaping & DDoS Protection",
    content:
      "Adaptive throttling that learns from your traffic patterns. Protect your upstream services with intelligent queuing and token-bucket algorithms.",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1400&auto=format&fit=crop",
    syncInfo: "Global Sync in 5ms",
    dotColor: "#a855f7", // Purple
  },
  {
    id: "09",
    title: "Reportings",
    subtitle: "Executive & Technical Dashboards",
    content:
      "Automate your engineering updates. Generate high-fidelity reports that combine business impact metrics with deep-dive technical performance analysis.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    pills: ["SLA Tracking", "Cost Optimization"],
    dotColor: "#3b82f6", // Blue
  },
];

export default function IntelligenceStack() {
  return (
    <section className="stack">
      <div className="stack-container">
        <div className="stack-header">
          <span className="panel-title">The Integrated Intelligence Stack</span>
          <p>
            Ten specialized modules engineered into a single autonomous fabric.
            Explore the layers of Zelisy's core architecture.
          </p>
        </div>

        <div className="timeline">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-row ${index % 2 === 0 ? "left-content" : "right-content"}`}
            >
              {/* Animated/Glowing Timeline Dot with specific matching hex color from the layout */}
              <div
                className="timeline-dot"
                style={{ "--dot-clr": item.dotColor }}
              />

              {/* Info Card Block */}
              <div className="timeline-card info-card">
                <span className="step">{item.id}</span>
                <h3>{item.title}</h3>
                <span className="subtitle">{item.subtitle}</span>
                <p className="description">{item.content}</p>

                {/* Feature 01 & 03: Spec Boxes */}
                {item.specBox && (
                  <div className="spec-box">
                    <div className="spec-main">{item.specBox.label}</div>
                    {item.specBox.target && (
                      <div className="spec-sub">{item.specBox.target}</div>
                    )}
                  </div>
                )}

                {/* Feature 02: Bullet Points with Sparkle Icon Layout */}
                {item.bulletPoints && (
                  <ul className="sparkle-list">
                    {item.bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <span className="sparkle-icon">✦</span> {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Feature 04: Twin Stat Grids */}
                {item.stats && (
                  <div className="stats-grid">
                    {item.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="stat-box">
                        <span className="stat-label">{stat.label}</span>
                        <span className="stat-value">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Feature 05 & 09: Green/Blue Pill Tags */}
                {item.pills && (
                  <div className="pill-wrapper">
                    {item.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className={`pill ${item.id === "05" ? "pill-green" : "pill-blue"}`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Feature 06: Text link */}
                {item.linkText && (
                  <a href="#sentiment" className="sentiment-link">
                    {item.linkText}
                  </a>
                )}

                {/* Feature 07: Live Terminal Exception Tracker */}
                {item.errorConsole && (
                  <div className="error-console">
                    <div className="error-title">{item.errorConsole.title}</div>
                    <div className="error-subtitle">
                      {item.errorConsole.subtitle}
                    </div>
                  </div>
                )}

                {/* Feature 08: Global Synchronization Marker */}
                {item.syncInfo && (
                  <div className="sync-info">
                    <span className="sync-icon">⇆</span> {item.syncInfo}
                  </div>
                )}
              </div>

              {/* Visual Asset Container */}
              <div className="timeline-card image-card">
                <div className={`visual-container variant-${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="visual-image"
                  />

                  {/* Optional overlays for 06 & 08 */}
                  {item.id === "06" && (
                    <div className="survey-overlay">
                      <div className="mock-row short-bar"></div>
                      <div className="mock-row long-bar"></div>
                      <div className="mock-button-rect"></div>
                    </div>
                  )}

                  {item.id === "08" && (
                    <div className="terminal-overlay">
                      <div>[INFO] Ingesting node_telemetry_04.log...</div>
                      <div className="log-success">
                        [SUCCESS] Normalization complete.
                      </div>
                      <div>[PROCESS] Correlating with trace_id: 8b11-ax2</div>
                      <div>[INFO] Data buffered to Z-Stream.</div>
                      <div>[INFO] Waiting for next event block...</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
