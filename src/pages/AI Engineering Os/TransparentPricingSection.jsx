import React from "react";
import "./TransparentPricingSection.css";

const TransparentPricingSection = () => {
  return (
    <section className="pricing-container">
      {/* Top Typography Header Block */}
      <div className="pricing-header">
        <h2 className="pricing-title">One platform. Transparent pricing.</h2>
        <p className="pricing-subtitle">Scale your observability as your engineering team grows.</p>
      </div>

      {/* 5-Column Grid Matrix */}
      <div className="pricing-grid">
        
        {/* Tier 1: Starter */}
        <div className="pricing-card">
          <div className="card-top-info">
            <h3 className="tier-name">Starter</h3>
            <p className="tier-description">For growing teams building their first systems.</p>
          </div>
          <div className="price-display">
            <span className="currency">$</span>
            <span className="amount">0</span>
            <span className="period">/mo</span>
          </div>
          <ul className="features-list">
            <li>
              <span className="check-icon">✓</span> 3 Users
            </li>
            <li>
              <span className="check-icon">✓</span> 5GB Data
            </li>
            <li>
              <span className="check-icon">✓</span> 7-day Retention
            </li>
          </ul>
          <button className="pricing-btn btn-secondary">Get Started</button>
        </div>

        {/* Tier 2: Pro (Highlighted Card Layout) */}
        <div className="pricing-card card-highlighted">
          <div className="popular-badge">MOST POPULAR</div>
          <div className="card-top-info">
            <h3 className="tier-name text-purple">Pro</h3>
            <p className="tier-description">For scaling engineering organizations</p>
          </div>
          <div className="price-display">
            <span className="currency">$</span>
            <span className="amount">99</span>
            <span className="period">/mo</span>
          </div>
          <ul className="features-list">
            <li>
              <span className="check-icon icon-purple">✓</span> Unlimited Users
            </li>
            <li>
              <span className="check-icon icon-purple">✓</span> 100GB Data
            </li>
            <li>
              <span className="check-icon icon-purple">✓</span> 30-day Retention
            </li>
            <li>
              <span className="check-icon icon-purple">⚡</span> AI Root Cause Analysis
            </li>
          </ul>
          <button className="pricing-btn btn-primary-purple">Start Free Trial</button>
        </div>

        {/* Tier 3: Business */}
        <div className="pricing-card">
          <div className="card-top-info">
            <h3 className="tier-name">Business</h3>
            <p className="tier-description">Multi-cloud deployments</p>
          </div>
          <div className="price-display">
            <span className="currency">$</span>
            <span className="amount">499</span>
            <span className="period">/mo</span>
          </div>
          <ul className="features-list">
            <li>
              <span className="check-icon">✓</span> 500GB Data
            </li>
            <li>
              <span className="check-icon">✓</span> 90-day Retention
            </li>
            <li>
              <span className="check-icon">✓</span> Priority Support
            </li>
            <li>
              <span className="check-icon">✓</span> Custom Dashboards
            </li>
          </ul>
          <button className="pricing-btn btn-secondary">Start Free Trial</button>
        </div>

        {/* Tier 4: Enterprise */}
        <div className="pricing-card">
          <div className="card-top-info">
            <h3 className="tier-name">Enterprise</h3>
            <p className="tier-description">For large-scale infrastructure</p>
          </div>
          <div className="price-display">
            <span className="currency">$</span>
            <span className="amount">1499</span>
          </div>
          <ul className="features-list">
            <li>
              <span className="check-icon">✓</span> Unlimited Data
            </li>
            <li>
              <span className="check-icon">✓</span> Unlimited Retention
            </li>
            <li>
              <span className="check-icon">✓</span> Dedicated Support
            </li>
            <li>
              <span className="check-icon icon-green">✓</span> 100% SLA Guarantee
            </li>
          </ul>
          <button className="pricing-btn btn-secondary">Contact Sales</button>
        </div>

        {/* Tier 5: Custom (Green Highlight Accents) */}
        <div className="pricing-card border-green-glow">
          <div className="card-top-info">
            <h3 className="tier-name text-green">Custom</h3>
            <p className="tier-description">Sovereign defense</p>
          </div>
          <div className="price-display">
            <span className="amount-text">Custom</span>
          </div>
          <ul className="features-list">
            <li>
              <span className="check-icon icon-green">🛡️</span> Air-gapped deployments
            </li>
            <li>
              <span className="check-icon icon-green">🔑</span> Post-quantum encryption
            </li>
            <li>
              <span className="check-icon icon-green">👥</span> Dedicated engineering pod
            </li>
          </ul>
          <button className="pricing-btn btn-primary-green">Request Quote</button>
        </div>

      </div>
    </section>
  );
};

export default TransparentPricingSection;