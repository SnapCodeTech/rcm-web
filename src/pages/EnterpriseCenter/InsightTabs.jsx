import React, { useState } from "react";
import {
    FaCloudDownloadAlt,
    FaNetworkWired,
    FaBolt,
    FaBrain,
    FaPaperPlane
} from "react-icons/fa";
import "./InsightTabs.css";

const pipelineStages = [
    {
        id: "stage-1",
        title: "Data Collection",
        subtitle: "SDKs, services, & integrations",
        icon: <FaCloudDownloadAlt />,
        accentColor: "#b794f6"
    },
    {
        id: "stage-2",
        title: "Normalization",
        subtitle: "Unified event schema",
        icon: <FaNetworkWired />,
        accentColor: "#10b981"
    },
    {
        id: "stage-3",
        title: "Real-time Processing",
        subtitle: "Patented stream engine",
        icon: <FaBolt />,
        accentColor: "#3b82f6"
    },
    {
        id: "stage-4",
        title: "AI Correlation",
        subtitle: "Cross-system insights",
        icon: <FaBrain />,
        accentColor: "#a855f7"
    },
    {
        id: "stage-5",
        title: "Actionable Outputs",
        subtitle: "Alerts, triggers, rollouts",
        icon: <FaPaperPlane />,
        accentColor: "#ec4899"
    }
];

export default function InsightTabs() {

    return (
        <section className="insights-section">
            <div className="insights-container">

                <div className="stages-grid">
                    {pipelineStages.map((stage) => {
                        return (
                            <div
                                key={stage.id}
                                className={`stage-tab-card`}
                                style={{ "--stage-accent": stage.accentColor }}
                            >
                                <div className="tab-icon-wrapper">
                                    {stage.icon}
                                </div>
                                <span className="tab-title">{stage.title}</span>
                                <span className="tab-subtitle">{stage.subtitle}</span>
                                <div className="hover-border-line" />
                            </div>
                        );
                    })}
                </div>

                <div className="insight-panel-layout">

                    <div className="flow-visual-frame">
                        <div className="diagram-wrapper">

                            <div className="diagram-node node-purple">
                                <div className="node-inner">1. INGESTION</div>
                            </div>
                            <div className="flow-arrow">→</div>

                            <div className="split-nodes-block">
                                <div className="split-connector-top" />
                                <div className="diagram-node node-cyan">
                                    <div className="node-inner">2. PROCESSING</div>
                                </div>
                                <div className="diagram-node node-blue">
                                    <div className="node-inner">3. ANALYSIS</div>
                                </div>
                                <div className="split-connector-bottom" />
                            </div>
                            <div className="flow-arrow">→</div>

                            <div className="diagram-node node-magenta">
                                <div className="node-inner">4. CORRELATION</div>
                            </div>
                            <div className="flow-arrow">→</div>

                            <div className="diagram-node node-pink">
                                <div className="node-inner">5. ACTION TRIGGER</div>
                            </div>

                        </div>
                    </div>

                    <div className="insight-info-content">
                        <h3>From Event to Insight in Milliseconds</h3>
                        <p className="insight-body-text">
                            The architecture generates instant outputs: Dashboards for visibility, Alerts for awareness,
                            Incident Triggers for automated response, and Feature Decisions for safe rollouts.
                        </p>

                        <ul className="checked-features-list">
                            <li>
                                <span className="checkmark-icon">✓</span>
                                Zero-packet-drop ingestion
                            </li>
                            <li>
                                <span className="checkmark-icon">✓</span>
                                Multi-tenant isolation architecture
                            </li>
                            <li>
                                <span className="checkmark-icon">✓</span>
                                Patented cross-signal correlation engine
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
}