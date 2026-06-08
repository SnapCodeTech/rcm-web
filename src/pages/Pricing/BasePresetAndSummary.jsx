import React, { useState } from 'react';
import './BasePresetAndSummary.css';

export default function BasePresetAndSummary() {
  const [selectedPreset, setSelectedPreset] = useState('startup');

  // Hardcoded mock line items based on image context examples
  const lineItems = [
    { name: 'Startup Pack', price: 79 },
    { name: 'Monthly Active Users', price: 19 }
  ];

  const totalEstimate = lineItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="preset-and-summary-container">
      
      


      {/* ================= CUSTOM STACK SUMMARY FOOTER ================= */}
      <div className="summary-wrapper">
        <div className="summary-panel">
          <h3 className="summary-title">Custom Stack</h3>
          
          <div className="summary-breakdown">
            {lineItems.map((item, index) => (
              <div key={index} className="summary-row">
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price}</span>
              </div>
            ))}
          </div>

          <hr className="summary-divider" />

          <div className="total-section">
            <span className="total-label">TOTAL ESTIMATE</span>
            <div className="total-price-block">
              <span className="total-amount">${totalEstimate}</span>
              <span className="total-period">Billed monthly</span>
            </div>
          </div>

          <div className="summary-actions">
            <button className="btn-pay-deploy">Pay & Deploy Zelisy</button>
            <button className="btn-save-config">Save Configuration</button>
          </div>
        </div>
      </div>

    </div>
  );
}