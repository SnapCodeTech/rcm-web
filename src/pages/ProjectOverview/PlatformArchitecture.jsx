import React from "react";
import "./PlatformArchitecture.css";

export default function PlatformArchitecture() {
    return (
        <div className="architecture-section">
            <h2 className="architecture-title">Platform Architecture</h2>

            <div className="architecture-stack">

                {/* LAYER 1: INTELLIGENCE LAYER */}
                <div className="architecture-layer-card layer-intelligence">
                    <div className="layer-content">
                        <span className="layer-label">INTELLIGENCE LAYER</span>
                        <p className="layer-description">
                            Autonomous decision core, Neural correlation, and API Gateway.
                        </p>
                    </div>
                    <div className="layer-icon">
                        {/* Brain/Intelligence Icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="M12 6v12" />
                            <path d="M8 10h8" />
                            <circle cx="12" cy="12" r="2" />
                        </svg>
                    </div>
                </div>

                {/* Connecting Line 1 */}
                <div className="layer-connector connector-blue" />

                {/* LAYER 2: PROCESSING LAYER */}
                <div className="architecture-layer-card layer-processing">
                    <div className="layer-content">
                        <span className="layer-label">PROCESSING LAYER</span>
                        <p className="layer-description">
                            Patented stream engine, event normalization, and real-time aggregation.
                        </p>
                    </div>
                    <div className="layer-icon">
                        {/* Processing Engine/Grid Icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="9" rx="1" />
                            <rect x="14" y="3" width="7" height="5" rx="1" />
                            <rect x="14" y="12" width="7" height="9" rx="1" />
                            <rect x="3" y="16" width="7" height="5" rx="1" />
                        </svg>
                    </div>
                </div>

                {/* Connecting Line 2 */}
                <div className="layer-connector connector-green" />

                {/* LAYER 3: INGESTION LAYER */}
                <div className="architecture-layer-card layer-ingestion">
                    <div className="layer-content">
                        <span className="layer-label">INGESTION LAYER</span>
                        <p className="layer-description">
                            Multi-cloud agents, eBPF sensors, and OpenTelemetry collectors.
                        </p>
                    </div>
                    <div className="layer-icon">
                        {/* Ingestion/Sign-in Arrow Icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                            <polyline points="10 17 15 12 10 7" />
                            <line x1="15" y1="12" x2="3" y2="12" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
}