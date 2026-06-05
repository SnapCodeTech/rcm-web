import Navbar from "../../components/NavBar/Navbar";
import HeroSection from "./HeroSection";
import RCMAI from '../../assets/images/AiEngineeringOs/RCM-AI.png';
import "./AiEngineeringOs.css";
import TrustedSection from "./TrustedSection";
import UserIntelligenceSection from "./UserIntelligenceSection";
import ProgressiveDeliverySection from "./ProgressiveDeliverySection";
import NeuralObservabilitySection from "./NeuralObservabilitySection";
import IncidentManagement from "./IncidentManagement";
import ZeroTrustSecuritySection from "./ZeroTrustSecuritySection";
import PlatformConsolidationSection from "./PlatformConsolidationSection";
import EngineeringTeamsSection from "./EngineeringTeamsSection";
import EngineeringMetricsSection from "./EngineeringMetricsSection";
import TransparentPricingSection from "./TransparentPricingSection";
import FinalCtaSection from "./FinalCtaSection";
import Footer from "../../components/Footer/Footer";

export default function AiEngineeringOs() {
 return (
    <div className="aios-container">

      {/* Hero Section */}
      <HeroSection />

      {/* RCM-AI Image */}
      <div className="rcmAIImageWrapper">
          <img
            src={RCMAI}
            alt="AI Platform"
            className="RCMAI"
          />
      </div>

        {/* Trusted Section */}
        <TrustedSection />
        {/* UserIntelligenceSection  */}
        <UserIntelligenceSection />
        {/* Progressive Delivery Section */}
        <ProgressiveDeliverySection />
        {/* Neural Observability Section */}
        <NeuralObservabilitySection />
        {/* Incident Management Section */}
        <IncidentManagement />
        {/* Zero Trust Security Section */}
        <ZeroTrustSecuritySection />
        {/* Platform Consolidation Section */}
        <PlatformConsolidationSection />
        {/* Engineering Teams Section */}
        <EngineeringTeamsSection />
        {/* Engineering Metrics Section */}
        <EngineeringMetricsSection />
        {/* Transparent Pricing Section */}
        <TransparentPricingSection />
        {/* Final CTA Section */}
        <FinalCtaSection />
        
    </div>
  );
}