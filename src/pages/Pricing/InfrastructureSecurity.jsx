import React, { useState } from 'react';
import './InfrastructureSecurity.css';

export default function InfrastructureSecurity() {
  // 1. Slider State (Secrets Vault)
  const sliderSteps = ['NONE', '100', '1K', '5K'];
  const sliderValues = ['0 Entries', '100 Entries', '1K Entries', '5K Entries'];
  const [secretsIndex, setSecretsIndex] = useState(0);

  // 2. Counter States (Workspace Scaling)
  const [activeProjects, setActiveProjects] = useState(100);
  const [teamEnvironments, setTeamEnvironments] = useState(4);

  // 3. Radio State (Data Retention)
  const retentionOptions = [
    { id: '30d', label: '30 Days (+$19/mo)' },
    { id: '90d', label: '90 Days (+$49/mo)' },
    { id: '180d', label: '180 Days (+$99/mo)' },
    { id: '365d', label: '365 Days (+$199/mo)' }
  ];
  const [selectedRetention, setSelectedRetention] = useState('30d');

  return (
    <div className="infra-section-container">
      <div className="infra-header">
        <span className="step-badge-four">4</span>
        <h2>Infrastructure & Security</h2>
      </div>

      <div className="infra-grid">
        {/* Left Column: Secrets Vault Slider & Data Retention Radios */}
        <div className="infra-column">
          {/* Secrets Vault */}
          <div className="infra-panel">
            <div className="infra-panel-top">
              <div>
                <h3 className="infra-panel-title">Secrets Vault</h3>
                <p className="infra-panel-desc">Secret management entries.</p>
              </div>
              <div className="infra-panel-value">{sliderValues[secretsIndex]}</div>
            </div>
            <div className="infra-slider-wrapper">
              <input
                type="range"
                min="0"
                max={sliderSteps.length - 1}
                value={secretsIndex}
                onChange={(e) => setSecretsIndex(parseInt(e.target.value, 10))}
                className="infra-range-slider"
                style={{
                  background: `linear-gradient(to right, var(--accent-purple) 0%, var(--accent-purple) ${(secretsIndex / (sliderSteps.length - 1)) * 100}%, var(--border-outline) ${(secretsIndex / (sliderSteps.length - 1)) * 100}%, var(--border-outline) 100%)`
                }}
              />
              <div className="infra-slider-ticks">
                {sliderSteps.map((step, idx) => (
                  <span key={idx} className={`infra-tick-label ${idx === secretsIndex ? 'active' : ''}`}>
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="infra-panel retention-panel">
            <div className="infra-panel-top no-margin">
              <div>
                <h3 className="infra-panel-title">Data Retention</h3>
                <p className="infra-panel-desc">Compliance storage period.</p>
              </div>
            </div>
            <div className="radio-group">
              {retentionOptions.map((option) => (
                <label key={option.id} className={`radio-label ${selectedRetention === option.id ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="dataRetention"
                    value={option.id}
                    checked={selectedRetention === option.id}
                    onChange={() => setSelectedRetention(option.id)}
                    className="hidden-radio"
                  />
                  <span className="custom-radio-circle"></span>
                  <span className="radio-text">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Workspace Scaling Counters */}
        <div className="infra-column">
          <div className="infra-panel stepper-panel">
            <div className="infra-panel-top">
              <div>
                <h3 className="infra-panel-title">Workspace Scaling</h3>
                <p className="infra-panel-desc">Projects & Seats.</p>
              </div>
            </div>

            <div className="stepper-controls-wrapper">
              {/* Active Projects Counter */}
              <div className="stepper-row">
                <span className="stepper-label">Active Projects</span>
                <div className="stepper-actions">
                  <button 
                    onClick={() => setActiveProjects(Math.max(0, activeProjects - 1))}
                    className="btn-minus"
                  >
                    -
                  </button>
                  <span className="stepper-value">{activeProjects}</span>
                  <button 
                    onClick={() => setActiveProjects(activeProjects + 1)}
                    className="btn-plus"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Team Environment Counter */}
              <div className="stepper-row">
                <span className="stepper-label">Team Environment</span>
                <div className="stepper-actions">
                  <button 
                    onClick={() => setTeamEnvironments(Math.max(0, teamEnvironments - 1))}
                    className="btn-minus"
                  >
                    -
                  </button>
                  <span className="stepper-value">{teamEnvironments}</span>
                  <button 
                    onClick={() => setTeamEnvironments(teamEnvironments + 1)}
                    className="btn-plus"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}