import { CheckCircle2 } from "lucide-react";

const features = [
  "Zero-Latency Flags",
  "SOC2 Compliant",
  "Real-time Telemetry",
  "Enterprise RBAC",
  "Edge SDKs",
  "Automated Rollbacks",
];

const HeroBlock = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-glow"></div>

        <div className="container hero-content">
          <div className="hero-badge">Built for Modern Product Teams</div>

          <h1 className="hero-title">
            One Platform for the Entire
            <span> Product Lifecycle</span>
          </h1>

          <p className="hero-description">
            From initial canary releases to full-scale experimentation, Zelisy
            gives engineering, product and growth teams the tools they need to
            ship confidently and scale faster.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Start Free</button>

            <button className="secondary-btn">Book a Demo</button>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}

      <section className="feature-strip">
        <div className="container feature-strip-container">
          {features.map((item) => (
            <div className="feature-item" key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroBlock;
