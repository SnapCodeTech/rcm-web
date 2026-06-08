import React, { useState } from 'react';
import './FeatureManagement.css';

const sliderFeatures = [
  {
    id: 'featureFlags',
    title: 'Feature Flags',
    description: 'Active toggle management.',
    steps: ['0', '100', '500', '1000', '5000'],
    values: ['0 Flags', '25 Flags', '100 Flags', '500 Flags', '5000 Flags'],
    initialIndex: 1,
  },
  {
    id: 'sessionReplay',
    title: 'Session Replay',
    description: 'Total recorded sessions.',
    steps: ['OFF', '10K', '50K', '100K'],
    values: ['Inactive', '10K Sessions', '50K Sessions', '100K Sessions'],
    initialIndex: 0,
  }
];

const dropdownFeatures = [
  {
    id: 'abTesting',
    title: 'A/B Testing',
    description: 'Experimentation tiers.',
    options: ['None (Included)', 'Basic Tier', 'Advanced Tier', 'Enterprise Custom']
  },
  {
    id: 'userSegments',
    title: 'User Segments',
    description: 'Precision audience targeting.',
    options: ['None (Included)', 'Up to 5 Segments', 'Unlimited Segments']
  },
  {
    id: 'supportLevel',
    title: 'Support Level',
    description: 'Response time guarantees.',
    options: ['None (Included)', 'Standard (24h)', 'Priority (4h)', 'Dedicated TAM']
  },
  {
    id: 'errorDeduplication',
    title: 'Error De-duplication',
    description: 'Intelligent grouping levels.',
    options: ['None (Included)', 'Basic Rules', 'AI-Driven Grouping']
  }
];

export default function FeatureManagement() {
  // Sliders State
  const [sliders, setSliders] = useState(
    sliderFeatures.reduce((acc, f) => ({ ...acc, [f.id]: f.initialIndex }), {})
  );

  // Dropdowns State
  const [dropdowns, setDropdowns] = useState(
    dropdownFeatures.reduce((acc, f) => ({ ...acc, [f.id]: f.options[0] }), {})
  );

  const handleSliderChange = (id, val) => {
    setSliders(prev => ({ ...prev, [id]: parseInt(val, 10) }));
  };

  const handleDropdownChange = (id, val) => {
    setDropdowns(prev => ({ ...prev, [id]: val }));
  };

  return (
    <div className="features-section-container">
      <div className="features-header">
        <span className="step-badge-three">3</span>
        <h2>Feature Management , Experimentation, Observability & Support</h2>
      </div>

      <div className="features-grid">
        {/* Left Column: Feature Flags (Slider) & User Segments (Dropdown) */}
        <div className="grid-column">
          {/* Feature Flags Slider */}
          <div className="feature-panel">
            <div className="panel-top">
              <div>
                <h3 className="panel-title">{sliderFeatures[0].title}</h3>
                <p className="panel-desc">{sliderFeatures[0].description}</p>
              </div>
              <div className="panel-value">{sliderFeatures[0].values[sliders.featureFlags]}</div>
            </div>
            <div className="slider-wrapper">
              <input
                type="range"
                min="0"
                max={sliderFeatures[0].steps.length - 1}
                value={sliders.featureFlags}
                onChange={(e) => handleSliderChange(sliderFeatures[0].id, e.target.value)}
                className="feature-range-slider"
                style={{
                  background: `linear-gradient(to right, var(--accent-purple) 0%, var(--accent-purple) ${(sliders.featureFlags / (sliderFeatures[0].steps.length - 1)) * 100}%, var(--border-outline) ${(sliders.featureFlags / (sliderFeatures[0].steps.length - 1)) * 100}%, var(--border-outline) 100%)`
                }}
              />
              <div className="slider-ticks">
                {sliderFeatures[0].steps.map((step, idx) => (
                  <span key={idx} className={`tick-label ${idx === sliders.featureFlags ? 'active' : ''}`}>{step}</span>
                ))}
              </div>
            </div>
          </div>

          {/* User Segments Dropdown */}
          <div className="feature-panel">
            <div className="panel-top no-margin">
              <div>
                <h3 className="panel-title">{dropdownFeatures[1].title}</h3>
                <p className="panel-desc">{dropdownFeatures[1].description}</p>
              </div>
            </div>
            <div className="select-wrapper">
              <select 
                value={dropdowns.userSegments} 
                onChange={(e) => handleDropdownChange(dropdownFeatures[1].id, e.target.value)}
                className="feature-select"
              >
                {dropdownFeatures[1].options.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Support Level Dropdown */}
          <div className="feature-panel">
            <div className="panel-top no-margin">
              <div>
                <h3 className="panel-title">{dropdownFeatures[2].title}</h3>
                <p className="panel-desc">{dropdownFeatures[2].description}</p>
              </div>
            </div>
            <div className="select-wrapper">
              <select 
                value={dropdowns.supportLevel} 
                onChange={(e) => handleDropdownChange(dropdownFeatures[2].id, e.target.value)}
                className="feature-select"
              >
                {dropdownFeatures[2].options.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right Column: A/B Testing (Dropdown), Session Replay (Slider), Error De-duplication (Dropdown) */}
        <div className="grid-column">
          {/* A/B Testing Dropdown */}
          <div className="feature-panel">
            <div className="panel-top no-margin">
              <div>
                <h3 className="panel-title">{dropdownFeatures[0].title}</h3>
                <p className="panel-desc">{dropdownFeatures[0].description}</p>
              </div>
            </div>
            <div className="select-wrapper">
              <select 
                value={dropdowns.abTesting} 
                onChange={(e) => handleDropdownChange(dropdownFeatures[0].id, e.target.value)}
                className="feature-select"
              >
                {dropdownFeatures[0].options.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Session Replay Slider */}
          <div className="feature-panel">
            <div className="panel-top">
              <div>
                <h3 className="panel-title">{sliderFeatures[1].title}</h3>
                <p className="panel-desc">{sliderFeatures[1].description}</p>
              </div>
              <div className={`panel-value ${sliders.sessionReplay === 0 ? 'inactive-text' : ''}`}>
                {sliderFeatures[1].values[sliders.sessionReplay]}
              </div>
            </div>
            <div className="slider-wrapper">
              <input
                type="range"
                min="0"
                max={sliderFeatures[1].steps.length - 1}
                value={sliders.sessionReplay}
                onChange={(e) => handleSliderChange(sliderFeatures[1].id, e.target.value)}
                className="feature-range-slider"
                style={{
                  background: `linear-gradient(to right, var(--accent-purple) 0%, var(--accent-purple) ${(sliders.sessionReplay / (sliderFeatures[1].steps.length - 1)) * 100}%, var(--border-outline) ${(sliders.sessionReplay / (sliderFeatures[1].steps.length - 1)) * 100}%, var(--border-outline) 100%)`
                }}
              />
              <div className="slider-ticks">
                {sliderFeatures[1].steps.map((step, idx) => (
                  <span key={idx} className={`tick-label ${idx === sliders.sessionReplay ? 'active' : ''}`}>{step}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Error De-duplication Dropdown */}
          <div className="feature-panel">
            <div className="panel-top no-margin">
              <div>
                <h3 className="panel-title">{dropdownFeatures[3].title}</h3>
                <p className="panel-desc">{dropdownFeatures[3].description}</p>
              </div>
            </div>
            <div className="select-wrapper">
              <select 
                value={dropdowns.errorDeduplication} 
                onChange={(e) => handleDropdownChange(dropdownFeatures[3].id, e.target.value)}
                className="feature-select"
              >
                {dropdownFeatures[3].options.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}