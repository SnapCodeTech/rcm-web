const CTAFlowBlock = () => {
  return (
    <section className="cta-flow-section">
      <div className="analytics-header">
        {/* <div className="section-badge">Product Analytics</div> */}

        <h2 className="section-title">Stop Tool Sprawl</h2>

        <p className="section-description analytics-description">
          Fragmented platforms create data drift. Zelisy unifies your stack.
        </p>
      </div>
      <div className="comparison-section">
        {/* Left Card */}

        <div className="comparison-card comparison-card-left">
          <h3>Fragmented Tools</h3>

          <div className="comparison-list">
            <div className="comparison-item negative">
              <span className="icon">✕</span>
              <span>Siloed Feature Management</span>
            </div>

            <div className="comparison-item negative">
              <span className="icon">✕</span>
              <span>Disconnected Analytics</span>
            </div>

            <div className="comparison-item negative">
              <span className="icon">✕</span>
              <span>Manual Performance Tracking</span>
            </div>

            <div className="comparison-item negative">
              <span className="icon">✕</span>
              <span>Expensive Seat-based Pricing</span>
            </div>
          </div>

          <p className="comparison-note">
            Requires 3+ separate subscriptions and heavy integration work.
          </p>
        </div>

        {/* Right Card */}

        <div className="comparison-card comparison-card-right">
          <h3>Zelery Unified Platform</h3>

          <div className="comparison-list">
            <div className="comparison-item positive">
              <span className="icon">✓</span>
              <span>Native Feature Flags + Testing</span>
            </div>

            <div className="comparison-item positive">
              <span className="icon">✓</span>
              <span>Integrated Behavior Analytics</span>
            </div>

            <div className="comparison-item positive">
              <span className="icon">✓</span>
              <span>Automatic Error-to-Flag Linkage</span>
            </div>

            <div className="comparison-item positive">
              <span className="icon">✓</span>
              <span>Scale-based Infrastructure Pricing</span>
            </div>
          </div>

          <button className="comparison-btn">Consolidate Now</button>
        </div>
      </div>

      <div className="migration-card">
        <div className="section-badge">Migration Support</div>

        <h2 className="section-title">Free Migration Assistance</h2>

        <p className="section-description">
          Moving from LaunchDarkly, Optimizely, Split, Datadog or other
          platforms? Our team helps migrate your flags, experiments and
          analytics without disruption.
        </p>

        <button className="primary-btn">Talk to an Expert</button>
      </div>

      {/* Final CTA */}

      <div className="final-cta">
        <h2 className="section-title">Ready to Ship Faster?</h2>

        <p>
          Join teams using Zelery to release, experiment and grow confidently.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Start Free</button>

          <button className="secondary-btn">Book a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default CTAFlowBlock;
