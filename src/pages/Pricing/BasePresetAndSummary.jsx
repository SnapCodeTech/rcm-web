import React from 'react';
import './BasePresetAndSummary.css';

export default function BasePresetAndSummary({ activePreset, trafficValues, featureValues, infraValues }) {
  if (!activePreset) {
    return (
      <div className="preset-and-summary-container">
        <div className="summary-wrapper">
          <div className="summary-panel">
            <h3 className="summary-title">Custom Stack</h3>
            <div className="summary-breakdown">
              <div className="summary-row">
                <span className="item-name">No plan selected yet</span>
                <span className="item-price">--</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const basePrice = activePreset.price.startsWith('$')
    ? parseInt(activePreset.price.replace(/\D/g, ''), 10)
    : 0;

  // Normalize traffic values
  const trafficLineItems = Object.values(trafficValues || {}).map(item => ({
    name: item.title,
    price: item.value
  }));

  // Normalize feature sliders (skip index 0)
  const featureSliderItems = Object.entries(featureValues.sliders || {}).map(([id, idx]) => {
    if (idx > 0) {
      return { name: id, price: idx };
    }
    return null;
  }).filter(Boolean);

  // Normalize feature dropdowns (skip "None")
  const featureDropdownItems = Object.entries(featureValues.dropdowns || {}).map(([id, val]) => {
    if (val && !val.toLowerCase().includes('none')) {
      return { name: id, price: val };
    }
    return null;
  }).filter(Boolean);

  // Normalize infra values
  const infraLineItems = infraValues ? [
    { name: 'Secrets Vault', price: infraValues.secretsVault },
    { name: 'Data Retention', price: infraValues.dataRetention },
    { name: 'Active Projects', price: infraValues.activeProjects },
    { name: 'Team Environments', price: infraValues.teamEnvironments }
  ] : [];

  const lineItems = [
    { name: activePreset.title, price: `$${basePrice}` },
    ...trafficLineItems,
    ...featureSliderItems,
    ...featureDropdownItems,
    ...infraLineItems
  ];

  return (
    <div className="preset-and-summary-container">
      <div className="summary-wrapper">
        <div className="summary-panel">
          <h3 className="summary-title">Custom Stack</h3>
          <div className="summary-breakdown">
            {lineItems.filter(item => item.price && item.price !== '0' && !String(item.price).toLowerCase().includes('none')).map((item, index) => (
              <div key={index} className="summary-row">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
            ))}
          </div>
          <hr className="summary-divider" />
          <div className="summary-actions">
            <button className="btn-pay-deploy">Pay & Deploy Zelisy</button>
            <button className="btn-save-config">Save Configuration</button>
          </div>
        </div>
      </div>
    </div>
  );
}
