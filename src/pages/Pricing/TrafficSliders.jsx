import React, { useState } from 'react';
import './TrafficSliders.css';

export const sliderConfigs = [
  {
    id: 'events',
    title: 'Monthly Events',
    description: 'Total processed event volume.',
    steps: ['0', '10M', '50M', '100M', '500M'],
    values: ['100K', '10M', '50M', '100M', '500M'],
    initialIndex: 0,
  },
  {
    id: 'mau',
    title: 'Monthly Active Users',
    description: 'Identity-tracked unique users.',
    steps: ['0', '10K', '50K', '100K', '500K'],
    values: ['0', '10K', '50K', '100K', '500K'],
    initialIndex: 0,
  },
  {
    id: 'api',
    title: 'API Requests Monitored',
    description: 'High-perf observability throughput.',
    steps: ['0', '10M', '50M', '100M', '500M'],
    values: ['1M', '10M', '50M', '100M', '500M'],
    initialIndex: 0,
  },
  {
    id: 'rate',
    title: 'Rate Limiting',
    description: 'Rules & evaluation frequency.',
    steps: ['NONE', '100 RULES', '1M EVAL', '10M EVAL'],
    values: ['Basic', 'Advanced', 'Enterprise Custom', 'Unlimited'],
    initialIndex: 0,
  },
];

export default function TrafficSliders({ activePreset, onTrafficChange }) {
  const [sliderValues, setSliderValues] = useState(
    sliderConfigs.reduce((acc, config) => {
      acc[config.id] = config.initialIndex;
      return acc;
    }, {})
  );

  const handleSliderChange = (id, val) => {
  const newValues = { ...sliderValues, [id]: parseInt(val, 10) };
  setSliderValues(newValues);

  if (onTrafficChange) {
    const mappedValues = Object.entries(newValues).reduce((acc, [key, idx]) => {
      const slider = sliderConfigs.find(s => s.id === key);
      acc[key] = { title: slider.title, value: slider.values[idx] };
      return acc;
    }, {});
    onTrafficChange(mappedValues);
  }
};


  return (
    <div className="traffic-container">
      <div className="traffic-header">
        <span className="step-badge-two">2</span>
        <h2>Core Scalability & Traffic</h2>
      </div>

      <div className="sliders-grid">
        {sliderConfigs.map((slider) => {
          const currentIndex = sliderValues[slider.id];
          const progressPercent = (currentIndex / (slider.steps.length - 1)) * 100;

          return (
            <div key={slider.id} className="slider-card">
              <div className="slider-card-top">
                <div className="slider-text-group">
                  <h3 className="slider-title">{slider.title}</h3>
                  <p className="slider-description">{slider.description}</p>
                </div>
                <div className="slider-value-display">
                  {slider.values[currentIndex]}
                </div>
              </div>

              <div className="slider-control-wrapper">
                <input
                  type="range"
                  min="0"
                  max={slider.steps.length - 1}
                  value={currentIndex}
                  onChange={(e) => handleSliderChange(slider.id, e.target.value)}
                  className="custom-range-slider"
                  style={{
                    background: `linear-gradient(to right, var(--accent-purple) 0%, var(--accent-purple) ${progressPercent}%, var(--border-outline) ${progressPercent}%, var(--border-outline) 100%)`
                  }}
                />
                <div className="slider-steps-labels">
                  {slider.steps.map((step, idx) => (
                    <span 
                      key={idx} 
                      className={`step-label ${idx === currentIndex ? 'active-step' : ''}`}
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
