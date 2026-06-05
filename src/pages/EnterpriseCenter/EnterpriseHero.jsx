import React from "react";
import "./EnterpriseHero.css";
import { GiCheckedShield } from "react-icons/gi";

export default function EnterpriseHero() {
    return (
        <section className="hero-section">
            <div className="hero-badge">
                <span className="badge-text">SYSTEM SECURITY STATUS: VIGILANT</span>
            </div>

            <h1 className="hero-heading">
                Enterprise-Grade <span className="heading-accent">Security by Design.</span>
            </h1>

            <p className="hero-subtext">
                A sovereign observability protocol built on zero-trust principles and proactive
                neural detection. Engineered for teams where precision is the only standard.
            </p>

            <div className="hero-actions">
                <button className="btn-initialize">
                    <GiCheckedShield />
                    Initialize Setup
                </button>
                <button className="btn-audit">
                    View Audit Log
                </button>
            </div>
        </section>
    );
}