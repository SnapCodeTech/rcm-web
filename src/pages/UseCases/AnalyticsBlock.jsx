import {
  Rocket,
  Ruler,
  FlaskConical,
  TrendingUp,
  ArrowUpRight,
  Activity,
  Asterisk,
  GitBranch,
  KeyRound,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    icon: <Activity size={24} strokeWidth={2} />,
    iconClass: "health-icon",
    title: "Monitor Application Health",
    description:
      "Real-time health monitoring specifically for feature rollouts. Detect memory leaks or CPU spikes tied to individual flags before they affect all users.",
    badge: "24/7 Monitoring",
  },
  {
    icon: <Asterisk size={24} strokeWidth={2.2} />,
    iconClass: "incident-icon",
    title: "Incident Response & RCA",
    description:
      "Instantly identify which flag caused a production incident. Our Root Cause Analysis engine correlates error spikes with flag changes in milliseconds.",
    badge: "Faster RCA",
  },
  {
    icon: <GitBranch size={24} strokeWidth={2} />,
    iconClass: "api-icon",
    title: "API Reliability & Performance",
    description:
      "Manage API versioning and deprecation via flags. Shift traffic between legacy and new endpoints with surgical precision and zero downtime.",
    badge: "API Analytics",
  },
  {
    icon: <KeyRound size={24} strokeWidth={2} />,
    iconClass: "secret-icon",
    title: "Secure Secrets & Credentials",
    description:
      "Inject secrets safely into your application environment. Encrypted at rest and in transit, integrated directly with your flag-based delivery workflow",
    badge: "Encrypted Storage",
  },
  {
    icon: <Gauge size={24} strokeWidth={2} />,
    iconClass: "rate-icon",
    title: "Protect APIs with Rate Limiting",
    description:
      "Dynamic rate limiting governed by feature flags. Tier access for different user segments without redeploying infrastructure.",
    badge: "Traffic Control",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={2} />,
    iconClass: "governance-icon",
    title: "Enterprise Governance",
    description:
      "Maintain strict control over who can toggle what. Full audit trails, approval workflows, and SOC2 compliant access controls for enterprise scale.",
    badge: "Compliance Ready",
  },
];

const workflowItems = [
  {
    icon: <Rocket size={34} strokeWidth={1.8} />,
    title: "Release",
    subtitle: "CANARY DEPLOY",
  },
  {
    icon: <Ruler size={34} strokeWidth={1.8} />,
    title: "Measure",
    subtitle: "TELEMETRY SYNC",
  },
  {
    icon: <FlaskConical size={34} strokeWidth={1.8} />,
    title: "Experiment",
    subtitle: "A/B VARIATION",
  },
  {
    icon: <TrendingUp size={34} strokeWidth={1.8} />,
    title: "Analyze",
    subtitle: "BEHAVIOR BI",
  },
  {
    icon: <ArrowUpRight size={34} strokeWidth={1.8} />,
    title: "Scale",
    subtitle: "FULL ROLLOUT",
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
            Our closed-loop workflow ensures every line of code translates to
            measurable business value.
          </p>
        </div>

        {/* Workflow */}

        <div className="workflow-container">
          <div className="workflow-track"></div>

          {workflowItems.map((item) => (
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
