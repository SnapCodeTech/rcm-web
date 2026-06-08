import React from 'react';
import InfrastructureBanner from './InfrastructureBanner';
import PricingPlans from './PricingPlans';
import TrafficSliders from './TrafficSliders';
import FeatureManagement from './FeatureManagement';
import InfrastructureSecurity from './InfrastructureSecurity';
import BasePresetAndSummary from './BasePresetAndSummary';
import ZelisyPricing from './ZelisyPricing';


export default function Pricing() {
  return (
    <div className="contact-page">
      {/* InfrastructureBanner Section */}
      <InfrastructureBanner />
      {/* PricingPlans Section */}
      <PricingPlans />
      {/* TrafficSliders Section */}
      <TrafficSliders />
      {/* Feature Management Section */}
      <FeatureManagement />
      {/*  Infrastructure Section */ }
      <InfrastructureSecurity />
      {/* BasePresetAndSummary Section */ }
      <BasePresetAndSummary />
      {/* Zelisy Pricing Section */ }
      <ZelisyPricing />
    </div>
  );
}
