const ProductDeliveryBlock = () => {
  return (
    <section className="product-delivery-section">
      <div className="container">
        {/* Release Features */}

        <div className="feature-row">
          <div className="feature-image">
            <img src="/images/release-features.png" alt="Release Features" />
          </div>

          <div className="feature-content">
            <div className="feature-heading">
              <div className="feature-icon">⚡</div>

              <h2 style={{ lineHeight: 1 }}>Release Features Safely</h2>
            </div>

            <div className="content-block">
              <span>CHALLENGE</span>

              <p>
                High-stakes deployments often lead to "Release Anxiety" and
                manual rollbacks that interrupt engineering flow.
              </p>
            </div>

            <div className="content-block">
              <span>HOW WE HELP</span>

              <p>
                Automate the "Blast Radius" with canary releases and kill
                switches that trigger the moment metrics dip.
              </p>
            </div>

            <div className="content-block">
              <span>OUTCOMES</span>

              <ul className="outcomes-grid">
                <li>Canaries & Toggles</li>
                <li>99% Downtime Reduction</li>
                <li>Multi Variant Testing</li>
                <li>5x Faster Ship Speed</li>
              </ul>
            </div>

            <div className="feature-tags">
              <span>Feature-Flags</span>
              <span>Automated-Rollbacks</span>
              <span>Blast-Radius-Control</span>
            </div>
          </div>
        </div>

        {/* Experimentation */}

        <div className="feature-row reverse">
          <div className="feature-image">
            <img src="/images/ab-testing.png" alt="AB Testing" />
          </div>

          <div className="feature-content">
            <div className="feature-heading">
              <div className="feature-icon purple">🧪</div>

              <h2 style={{ lineHeight: 1 }}>Experimentation & A/B Testing</h2>
            </div>

            <div className="content-block">
              <span>TECHNICAL CORE</span>

              <p>
                A/B testing often creates siloed data, making it impossible to
                see the true impact on backend performance.
              </p>
            </div>

            <div className="content-block">
              <span>HOW WE HELP</span>

              <p>
                Run thousands of tests without performance hits using our Edge
                SDKs and Bayesian statistical engine.
              </p>
            </div>

            <ul className="outcomes-grid">
              <li>Bayesian Analysis</li>
              <li>Zero State Leakage</li>
              <li>Segment Isolation</li>
              <li>Rapid Hypothesis Wins</li>
            </ul>

            <div className="feature-tags">
              <span>Statistical-Engine</span>
              <span>Bayesian-Modeling</span>
              <span>A/B Testing</span>
            </div>
          </div>
        </div>

        {/* User Behavior */}

        <div className="feature-row">
          <div className="feature-image">
            <img
              src="/images/user-behavior.png"
              alt="Understand User Behavior"
            />
          </div>

          <div className="feature-content">
            <div className="feature-heading">
              <div className="feature-icon">📊</div>

              <h2 style={{ lineHeight: 1 }}>Understand User Behavior</h2>
            </div>

            <div className="content-block">
              <span>CHALLENGE</span>

              <p>
                Teams often struggle to understand how users interact with their
                product, which features drive value, and where users drop off
                during their journey.
              </p>
            </div>

            <div className="content-block">
              <span>HOW WE HELP</span>

              <p>
                Track events, build funnels, analyze retention, and visualize
                user journeys to uncover insights that drive better product
                decisions and growth.
              </p>
            </div>

            <div className="content-block">
              <span>OUTCOMES</span>

              <ul className="outcomes-grid">
                <li>Better Product Decisions</li>
                <li>Improved Onboarding</li>
                <li>Increased Retention</li>
                <li>Faster Growth</li>
              </ul>
            </div>

            <div className="feature-tags">
              <span>Events</span>
              <span>Funnels</span>
              <span>Retention</span>
              <span>Cohorts</span>
              <span>User Journeys</span>
              <span>Dashboards</span>
              <span>Reports</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDeliveryBlock;
