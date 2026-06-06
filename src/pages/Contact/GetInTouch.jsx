import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <section className="contact-wrapper">
      {/* Left Text Block */}
      <div className="contact-info">
        <span className="partner-tag">│ PARTNER WITH ZELERY</span>
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          Fuel your engineering velocity with a partnership built on 
          mission‑critical security and high‑precision observability. 
          Our solutions architects are ready to design your next 
          infrastructure evolution.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <span className="icon">🛡️</span>
            <div>
              <h3>Secure by Design</h3>
              <p>Enterprise‑grade encryption and compliance standards embedded in every layer.</p>
            </div>
          </div>
          <div className="feature-card">
            <span className="icon">⏱️</span>
            <div>
              <h3>Peak Performance</h3>
              <p>Real‑time data processing and sub‑millisecond latency for global scale.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Block */}
      <form className="contact-form">
        <div className="form-row">
          <div className="field">
            <label>Full Name</label>
            <input type="text" placeholder="Engineering Manager" />
          </div>
          <div className="field">
            <label>Work Email</label>
            <input type="email" placeholder="name@company.com" />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Company Name</label>
            <input type="text" placeholder="Zelery AI" />
          </div>
          <div className="field">
            <label>Company Size</label>
            <select>
              <option>1–50 employees</option>
              <option>51–200 employees</option>
              <option>201–500 employees</option>
              <option>500+ employees</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label>Message</label>
          <textarea placeholder="Tell us about your infrastructure goals..." rows="4" />
        </div>

        <button type="submit" className="submit-btn">
          Initialize Contact ⚡
        </button>
        <p className="footer-note">
          By submitting, you agree to our processing of personal data.
        </p>
      </form>
    </section>
  );
}
export default GetInTouch;