import React, { useState } from "react";
import InfrastructureBanner from "./InfrastructureBanner";
import PricingPlans from "./PricingPlans";
import TrafficSliders from "./TrafficSliders";
import FeatureManagement from "./FeatureManagement";
import InfrastructureSecurity from "./InfrastructureSecurity";
import BasePresetAndSummary from "./BasePresetAndSummary";
import ZelisyPricing from "./ZelisyPricing";
import './Pricing.css';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [trafficValues, setTrafficValues] = useState({});
  const [featureValues, setFeatureValues] = useState({});
  const [infraValues, setInfraValues] = useState({});
  return (
    <div className="contact-page">
      <InfrastructureBanner />
      
      {/* PricingPlans sends back the selected plan */}
      <PricingPlans onSelectPlan={setSelectedPlan} />

    
      {selectedPlan && ["startup", "growth", "business", "enterprise"].includes(selectedPlan.variant) && (
        <>
          <TrafficSliders activePreset={selectedPlan} onTrafficChange={setTrafficValues} />
          <FeatureManagement onFeaturesChange={setFeatureValues} />
          <InfrastructureSecurity onInfraChange={setInfraValues} />
        </>
      )}
      <BasePresetAndSummary 
        activePreset={selectedPlan} 
        trafficValues={trafficValues} 
        featureValues={featureValues} 
        infraValues={infraValues}
      />
      <ZelisyPricing  />

      
    </div>
  );
}
