const cards = [
  {
    icon: "📊",
    title: "Monitor Application Health",
    description:
      "Track errors, performance degradation and system reliability in real time.",
    badge: "24/7 Monitoring",
  },
  {
    icon: "⚡",
    title: "Incident Response & RCA",
    description:
      "Connect incidents directly to releases and identify root causes faster.",
    badge: "Faster RCA",
  },
  {
    icon: "🔗",
    title: "API Reliability & Performance",
    description:
      "Measure API health and understand impact across environments.",
    badge: "API Analytics",
  },
  {
    icon: "🔐",
    title: "Secure Secrets & Credentials",
    description:
      "Manage secrets securely across deployments and product environments.",
    badge: "Encrypted Storage",
  },
  {
    icon: "🛡️",
    title: "Protect APIs with Rate Limiting",
    description:
      "Prevent abuse and improve availability with smart traffic controls.",
    badge: "Traffic Control",
  },
  {
    icon: "🏢",
    title: "Enterprise Governance",
    description:
      "Ensure compliance with RBAC, audit logs and approval workflows.",
    badge: "Compliance Ready",
  },
];

const AnalyticsBlock = () => {
  return (
    <section className="analytics-section">
      <div className="container">
        {/* User Behavior */}

        <div className="analytics-header">
          <div className="section-badge">Product Analytics</div>

          <h2 className="section-title">Optimize Product Growth</h2>

          <p className="section-description analytics-description">
            Gain visibility into how users interact with your product,
            understand adoption trends and discover opportunities for growth.
          </p>
        </div>

        {/* Workflow */}

        <div className="workflow-container">
          <div className="workflow-track"></div>

          {[
            {
              icon: "🚀",
              title: "Release",
              subtitle: "CANARY DEPLOY",
            },
            {
              icon: "📏",
              title: "Measure",
              subtitle: "TELEMETRY SYNC",
            },
            {
              icon: "⚗️",
              title: "Experiment",
              subtitle: "A/B VARIATION",
            },
            {
              icon: "📈",
              title: "Analyze",
              subtitle: "BEHAVIOR BI",
            },
            {
              icon: "↗",
              title: "Scale",
              subtitle: "FULL ROLLOUT",
            },
          ].map((item) => (
            <div className="workflow-step" key={item.title}>
              <div className="workflow-icon">{item.icon}</div>

              <h4>{item.title}</h4>

              <span>{item.subtitle}</span>
            </div>
          ))}
        </div>
        {/* Cards */}

        <div className="platform-grid">
          {cards.map((card) => (
            <div className="platform-card" key={card.title}>
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="card-badge">
                <span className="badge-dot"></span>
                {card.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBlock;
