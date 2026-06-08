import React from "react";
import "./PricingPlans.css";

const PricingPlans = () => {
  const pricingData = [
  {
    title: 'Dev',
    price: 'Free Forever',
    features: ['1 project allow', '2 env', '1 user login', '100K events'],
    buttonText: 'Start Free',
    variant: 'dev',
  },
  {
    title: 'Startup',
    price: '$79 / mon',
    features: ['3 project allow', '5 env', '10 user login', '1M events'],
    buttonText: 'Upgrade Now',
    variant: 'startup',
  },
  {
    title: 'Growth',
    price: '$249 / mon',
    features: ['10 project allow', '20 env', '30 user login', '5M events'],
    buttonText: 'Scale Fast',
    variant: 'growth',
    isPopular: true,
  },
  {
    title: 'Business',
    price: '$799 / mon',
    features: ['50 project allow', '100 env', '100 user login', '50M events'],
    buttonText: 'Go Enterprise',
    variant: 'business',
  },
  {
    title: 'Enterprise',
    price: 'Fully Custom',
    features: ['Unlimited Projects', 'Dedicated TAM', 'Custom Retention', '24/7 Priority'],
    buttonText: 'Contact Sales',
    variant: 'enterprise',
  },
];

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <span className="step-badge">1</span>
        <h2>Select Base Preset</h2>
      </div>

      <div className="cards-grid">
        {pricingData.map((card, index) => (
          <div 
            key={index} 
            className={`pricing-card card-${card.variant} ${card.isPopular ? 'popular-card' : ''}`}
          >
            {card.isPopular && <div className="popular-badge">POPULAR</div>}
            
            <div className="card-top">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-price">{card.price}</p>
            </div>

            <ul className="features-list">
              {card.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`card-button btn-${card.variant}`}>
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
