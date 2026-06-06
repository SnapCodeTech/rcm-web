import React from "react";
import "./ScheduleDemo.css";

export default function ScheduleDemo() {
    return (
        <section className="cta-container">
            <div className="cta-card">
                <h2 className="cta-heading">
                    Ready to upgrade your system intelligence?
                </h2>
                <p className="cta-subtext">
                    Join the world's most sophisticated engineering teams. Get started with
                    a 14-day full-access trial of the ZELISY platform.
                </p>
                <div className="cta-actions">
                    <button className="btn-primary">
                        Deploy the Intelligence Stack
                    </button>
                    <button className="btn-secondary">
                        Schedule a Demo
                    </button>
                </div>
            </div>
        </section>
    );
}