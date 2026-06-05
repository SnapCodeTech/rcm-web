import React from "react";
import { FaCheckCircle, FaShareAlt, FaKey, FaBolt, FaLock, FaBroom, FaShieldAlt, FaMicrochip, FaFingerprint, FaTimesCircle, FaHistory, FaMedkit, FaRegMoneyBillAlt, FaCheck, FaAsterisk } from "react-icons/fa";
import "./NeuralDefense.css";

export default function NeuralDefense() {
    return (
        <>


            <section className="defense-section">
                <div className="defense-container">

                    <div className="defense-info">
                        <h2 className="defense-heading">Neural Defense Engine</h2>
                        <p className="defense-description">
                            Traditional security is reactive. Zelery uses a proprietary neural
                            detection layer that analyzes billion-scale telemetry points to
                            identify "Day-Zero" anomalies.
                        </p>

                        <div className="defense-features">
                            <div className="feature-item">
                                <div className="feature-icon-wrapper">
                                    <FaCheckCircle className="check-icon" />
                                </div>
                                <div className="feature-text">
                                    <h3>Behavioral Fingerprinting</h3>
                                    <p>
                                        Maps normal system behavior to instantly flag deviations without pre-defined signatures.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon-wrapper">
                                    <FaCheckCircle className="check-icon" />
                                </div>
                                <div className="feature-text">
                                    <h3>Predictive Threat Vectors</h3>
                                    <p>
                                        Simulates potential attack paths in real-time to harden infrastructure dynamically.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="defense-visual">
                        <div className="radar-card">

                            <div className="circle-outer">
                                <div className="circle-inner">
                                    <div className="rhombus-grid">
                                        <div className="corner-dot top-dot" />
                                        <div className="corner-dot right-dot" />
                                        <div className="corner-dot bottom-dot" />
                                        <div className="corner-dot left-dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="center-node">
                                <FaShareAlt className="node-icon" />
                                <div className="node-pulse" />
                            </div>

                            <div className="status-overlay">
                                <span className="status-text">OPTIMIZING FLOW...</span>
                                <span className="metrics-text">1.4M Traces/Sec</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="zk-section">
                <div className="zk-container">

                    <div className="zk-header">
                        <h2 className="zk-title">Zero-Knowledge Architecture</h2>
                        <p className="zk-subtitle">
                            We can't see your data because only you hold the keys. Complete sovereignty over
                            your observability pipeline.
                        </p>
                    </div>

                    <div className="zk-grid">

                        <div className="zk-card">
                            <div className="card-icon-title">
                                <FaKey className="zk-icon" />
                                <h3>CMK Integration</h3>
                            </div>
                            <p>
                                Bring Your Own Key (BYOK) through AWS KMS, HashiCorp Vault, or GCP KMS. We never store master keys.
                            </p>
                        </div>

                        <div className="zk-card">
                            <div className="card-icon-title">
                                <FaShieldAlt className="zk-icon" />
                                <h3>End-to-End TLS 1.3</h3>
                            </div>
                            <p>
                                All telemetry and traffic is wrapped in the latest TLS protocols with perfect forward secrecy.
                            </p>
                        </div>

                        <div className="zk-card">
                            <div className="card-icon-title">
                                <FaLock className="zk-icon" />
                                <h3>Field-Level Encryption</h3>
                            </div>
                            <p>
                                Granular control to encrypt specific sensitive fields (PII/PHI) before they ever leave your VPC.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            <section className="reliability-section">
                <div className="reliability-container">

                    <div className="reliability-visual">
                        <div className="mockup-frame">
                            <div className="mockup-frame">
                                <img
                                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1400&auto=format&fit=crop"
                                    alt="Global Network Dashboard Interface"
                                    className="mockup-dashboard-img"
                                />
                            </div>
                            <div className="mockup-internal-layout">
                                <div className="mockup-line-group">
                                    <div className="mock-wireframe-line primary-line" />
                                    <div className="mock-wireframe-line secondary-line" />
                                </div>
                                <div className="mockup-grid-blocks">
                                    <div className="mock-block" />
                                    <div className="mock-block" />
                                    <div className="mock-block" />
                                </div>
                                <div className="mockup-footer-chart" />
                            </div>
                        </div>
                    </div>

                    <div className="reliability-info">
                        <div className="status-badge">
                            <span className="status-indicator-dot" />
                            <span className="status-badge-text">LIVE NETWORK STATUS: NOMINAL</span>
                        </div>

                        <h2 className="reliability-heading">
                            Unrivaled Infrastructure Resilience
                        </h2>

                        <p className="reliability-description">
                            Our globally distributed edge network ensures that observability
                            never stops. Even during regional cloud outages, Zelery persists.
                        </p>

                        <div className="metrics-row">
                            <div className="metric-item">
                                <span className="metric-number">99.99%</span>
                                <span className="metric-label">SLA COMMITMENT</span>
                            </div>
                            <div className="metric-item">
                                <span className="metric-number">-25%</span>
                                <span className="metric-label">REDUCED COSTS</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="matrix-section">
                <div className="matrix-container">

                    <div className="matrix-header">
                        <h2 className="matrix-title">Advanced Security Matrix</h2>
                        <p className="matrix-subtitle">
                            Beyond observation: active countermeasures deployed at the network edge.
                        </p>
                    </div>

                    <div className="matrix-grid">

                        <div className="matrix-card">
                            <div className="matrix-icon-wrapper icon-purple">
                                <FaBroom />
                            </div>
                            <h3>Real-time Traffic Scrubbing</h3>
                            <p>
                                Instantaneous removal of malicious signatures and malformed packets before they reach your gateway.
                            </p>
                        </div>

                        <div className="matrix-card">
                            <div className="matrix-icon-wrapper icon-green">
                                <FaShieldAlt />
                            </div>
                            <h3>DDoS Mitigation Layer</h3>
                            <p>
                                Multi-vector protection against sophisticated application-layer attacks with auto-scaling ingress.
                            </p>
                        </div>

                        <div className="matrix-card">
                            <div className="matrix-icon-wrapper icon-cyan">
                                <FaMicrochip />
                            </div>
                            <h3>Hardware Security Modules</h3>
                            <p>
                                FIPS 140-2 Level 3 physical isolation for cryptographic operations and root of trust management.
                            </p>
                        </div>

                        <div className="matrix-card">
                            <div className="matrix-icon-wrapper icon-magenta">
                                <FaFingerprint />
                            </div>
                            <h3>Zero-Trust Identity</h3>
                            <p>
                                Continuous authentication for every service-to-service request using short-lived SPIFFE IDs.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            <section className="latency-section">
                <div className="latency-container">

                    <div className="latency-info">
                        <h2 className="latency-heading">Global Latency Benchmarks</h2>
                        <p className="latency-description">
                            Observability shouldn't slow you down. Our globally distributed
                            ingestion fabric delivers industry-leading performance across every
                            major region.
                        </p>

                        <div className="region-progress-stack">
                            <div className="region-progress-item">
                                <div className="region-meta">
                                    <span className="region-name">NORTH AMERICA (US-EAST)</span>
                                    <span className="region-metric text-green">8ms P99</span>
                                </div>
                                <div className="progress-track">
                                    <div className="progress-bar bg-green" style={{ width: "85%" }} />
                                </div>
                            </div>

                            <div className="region-progress-item">
                                <div className="region-meta">
                                    <span className="region-name">EUROPE (FRANKFURT)</span>
                                    <span className="region-metric text-green">11ms P99</span>
                                </div>
                                <div className="progress-track">
                                    <div className="progress-bar bg-green" style={{ width: "70%" }} />
                                </div>
                            </div>

                            <div className="region-progress-item">
                                <div className="region-meta">
                                    <span className="region-name">ASIA PACIFIC (SINGAPORE)</span>
                                    <span className="region-metric text-green">12ms P99</span>
                                </div>
                                <div className="progress-track">
                                    <div className="progress-bar bg-gradient-green" style={{ width: "65%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="latency-visual">
                        <div className="latency-card">
                            <div className="latency-card-header">
                                <div className="stat-meta">
                                    <span className="stat-label">AVERAGE P99 LATENCY</span>
                                    <h3 className="stat-value">&lt; 12ms</h3>
                                </div>
                                <div className="stat-icon-wrapper">
                                    <FaBolt className="bolt-icon" />
                                </div>
                            </div>

                            <div className="bar-chart-container">
                                <div className="chart-bar bar-muted" style={{ height: "45%" }} />
                                <div className="chart-bar bar-muted-tall" style={{ height: "65%" }} />
                                <div className="chart-bar bar-muted" style={{ height: "40%" }} />
                                <div className="chart-bar bar-purple" style={{ height: "75%" }} />
                                <div className="chart-bar bar-muted-short" style={{ height: "30%" }} />
                                <div className="chart-bar bar-green" style={{ height: "80%" }} />
                                <div className="chart-bar bar-dark" style={{ height: "25%" }} />
                                <div className="chart-bar bar-purple-muted" style={{ height: "60%" }} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="healing-section">
                <div className="healing-container">

                    <div className="healing-info">
                        <h2 className="healing-heading">Self-Healing Infrastructure</h2>
                        <p className="healing-description">
                            Zelery isn't just watching; it's acting. Our autonomous response layer triggers
                            rollbacks and localized kill-switches when anomalies exceed defined thresholds.
                        </p>

                        <div className="healing-cards-stack">
                            <div className="healing-card">
                                <div className="card-icon-wrapper icon-danger">
                                    <FaTimesCircle />
                                </div>
                                <div className="card-text">
                                    <h3>Automated Threat Containment</h3>
                                    <p>Instant isolation of compromised services to prevent lateral movement.</p>
                                </div>
                            </div>

                            <div className="healing-card">
                                <div className="card-icon-wrapper icon-success">
                                    <FaHistory />
                                </div>
                                <div className="card-text">
                                    <h3>Instant State Rollback</h3>
                                    <p>Seamless return to last known-good configuration in under 1.5 seconds.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="healing-visual">
                        <div className="cross-bandage-wrapper">
                            <FaMedkit className="bandage-bg-icon" />
                        </div>
                    </div>

                </div>
            </section>
            <section className="support-section">
                <div className="support-container">

                    <div className="support-header">
                        <h2 className="support-title">Strategic Partnership & Support</h2>
                        <p className="support-subtitle">
                            Enterprise security is a collaboration. Our engineering team acts as an extension of yours,
                            ensuring architectural excellence at every scale.
                        </p>
                    </div>

                    <div className="support-grid">

                        <div className="support-card card-fixed">
                            <div className="card-top">
                                <div className="icon-box icon-purple">
                                    <FaRegMoneyBillAlt />
                                </div>
                                <h3>Fixed-Pay Support</h3>
                            </div>

                            <p className="card-description">
                                Predictable budgeting with a flat-rate engineering model. No hidden costs for scaling your visibility.
                            </p>

                            <ul className="perks-list">
                                <li>
                                    <FaCheck className="check-purple" />
                                    Unlimited Engineering Tickets
                                </li>
                                <li>
                                    <FaCheck className="check-purple" />
                                    Quarterly Performance Audits
                                </li>
                                <li>
                                    <FaCheck className="check-purple" />
                                    Infrastructure Health Reporting
                                </li>
                            </ul>

                            <button className="btn-download">
                                Download Pricing Guide
                            </button>
                        </div>

                        <div className="support-card card-mission">
                            <div className="card-top">
                                <div className="icon-box icon-green">
                                    <FaShieldAlt />
                                </div>
                                <h3>Mission-Critical Support</h3>
                            </div>

                            <p className="card-description">
                                For organizations where downtime isn't an option. Direct, high-speed access to our core SRE team.
                            </p>

                            <ul className="perks-list">
                                <li className="highlight-slat">
                                    <FaAsterisk className="asterisk-green" />
                                    <strong>&lt; 15 Min Response Time SLA</strong>
                                </li>
                                <li>
                                    <FaCheck className="check-green" />
                                    Dedicated SRE Contact
                                </li>
                                <li>
                                    <FaCheck className="check-green" />
                                    24/7/365 War Room Access
                                </li>
                            </ul>

                            <button className="btn-activate">
                                Activate Elite Coverage
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}