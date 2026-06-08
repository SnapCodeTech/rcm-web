import React, { useState } from 'react';
import './ZelisyPricing.css';

const presetTiers = [
  { id: 'dev', name: 'Dev', priceLabel: 'Free Forever', features: ['1 project allow', '2 env', '1 user login', '100K events'], btnText: 'Start Free', styleClass: 'btn-dark' },
  { id: 'startup', name: 'Startup', priceLabel: '$79 / mon', features: ['3 project allow', '5 env', '10 user login', '1M events'], btnText: 'Upgrade Now', styleClass: 'btn-lavender' },
  { id: 'growth', name: 'Growth', priceLabel: '$249 / mon', features: ['10 project allow', '20 env', '30 user login', '5M events'], btnText: 'Scale Fast', styleClass: 'btn-purple', popular: true },
  { id: 'business', name: 'Business', priceLabel: '$799 / mon', features: ['50 project allow', '100 env', '100 user login', '50M events'], btnText: 'Go Enterprise', styleClass: 'btn-dark' },
  { id: 'enterprise', name: 'Enterprise', priceLabel: 'Fully Custom', features: ['Unlimited Projects', 'Dedicated TAM', 'Custom Retention', '24/7 Priority'], btnText: 'Contact Sales', styleClass: 'btn-cyan' }
];

const trafficConfigs = [
  { id: 'events', title: 'Monthly Events', desc: 'Total processed event volume.', steps: ['0', '10M', '50M', '100M', '500M'], displayVals: ['100K', '10M', '50M', '100M', '500M'], initial: 0 },
  { id: 'mau', title: 'Monthly Active Users', desc: 'Identity-tracked unique users.', steps: ['0', '10K', '50K', '100K', '500K'], displayVals: ['0', '10K', '50K', '100K', '500K'], initial: 1 },
  { id: 'api', title: 'API Requests Monitored', desc: 'High-perf observability throughput.', steps: ['0', '10M', '50M', '100M', '500M'], displayVals: ['1M', '10M', '50M', '100M', '500M'], initial: 0 },
  { id: 'rate', title: 'Rate Limiting', desc: 'Rules & evaluation frequency.', steps: ['NONE', '100 RULES', '1M EVAL', '10M EVAL'], displayVals: ['Basic', 'Advanced', 'Enterprise Custom', 'Unlimited'], initial: 0 }
];

export default function ZelisyPricing() {
  const [activePreset, setActivePreset] = useState('startup');
  const [sliders, setSliders] = useState(
    trafficConfigs.reduce((acc, c) => ({ ...acc, [c.id]: c.initial }), {})
  );

  const handleSlider = (id, val) => {
    setSliders(prev => ({ ...prev, [id]: parseInt(val, 10) }));
  };

  return (
    <div className="zelisy-wrapper">
      {/* ================= CTA INTEGRATION PANEL ================= */}
      <section className="cta-integration-wrapper">
        <div className="cta-inner-panel">
          <h2 className="cta-main-heading">Ready to integrate?</h2>
          <p className="cta-subheading">Deploy Zelisy in under 5 minutes</p>
          
          <div className="stack-logos-row">
            {/* Standard placeholders for the 5 interactive framework icons */}
            <div className="logo-icon-placeholder"></div>
            <div className="logo-icon-placeholder"></div>
            <div className="logo-icon-placeholder"></div>
            <div className="logo-icon-placeholder"></div>
            <div className="logo-icon-placeholder"></div>
          </div>

          <div className="cta-buttons-group">
            <button className="cta-btn-primary">Get Started Free</button>
            <button className="cta-btn-secondary">Read Documentation</button>
          </div>
        </div>
      </section>

    </div>
  );
}