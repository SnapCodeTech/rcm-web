import React from 'react';
import './InquiryRoadmap.css';
export default function InquiryRoadmap() {
  const steps = [
    { id: '01', title: 'Initial discussion', text: 'Brief discovery call to understand your team\'s specific goals and pain points.', color: '#c084fc' },
    { id: '02', title: 'Technical deep dive', text: 'In-depth technical session covering data ingestion, security, and integration.', color: '#22c55e' },
    { id: '03', title: 'Solution Mapping', text: 'Detailed mapping of ZELISY features to your engineering KPIs and architecture.', color: '#22d3ee' },
    { id: '04', title: 'Onboard Planning', text: 'Finalizing the pilot or full-scale rollout strategy for your organization.', color: '#a78bfa' }
  ];

  return (
    <section className="roadmap-container">
      <div className="roadmap-header">
        <h2>The Inquiry Roadmap</h2>
        <p>From initial discovery to strategic deployment, our onboarding process is engineered for clarity and technical alignment.</p>
      </div>

      <div className="roadmap-timeline">
        {steps.map((step, index) => {
          // Determine if it is a left-side or right-side step
          const isLeft = index % 2 === 0;
          return (
            <div key={step.id} className={`roadmap-step ${isLeft ? 'left-step' : 'right-step'}`}>
              <div className="step-node" style={{ borderColor: step.color, color: step.color }}>
                {step.id}
              </div>
              <div className="step-content">
                <h3 style={{ color: step.color }}>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}