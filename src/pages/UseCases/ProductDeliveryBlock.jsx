import { PanelLeftClose, UserRoundSearch, Users } from "lucide-react";

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
              <div className="feature-icon">
                <UserRoundSearch size={24} />
              </div>

              <h2>Understand User Behavior</h2>
            </div>

            <p className="feature-description">
              Don't just release—know exactly how your users interact with new
              features. Zelery provides deep event-level attribution mapped
              directly to feature flags.
            </p>

            <div className="feature-points">
              <div className="feature-point">
                <PanelLeftClose size={18} />

                <div>
                  <h4>Session Replay + Flags</h4>

                  <p>
                    See exactly what the user saw when a specific flag was
                    active.
                  </p>
                </div>
              </div>

              <div className="feature-point">
                <Users size={18} />

                <div>
                  <h4>Cohort Tracking</h4>

                  <p>
                    Compare retention and conversion across different feature
                    variants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDeliveryBlock;
