import HeroBlock from "./HeroBlock.jsx";
import ProductDeliveryBlock from "./ProductDeliveryBlock.jsx";
import AnalyticsBlock from "./AnalyticsBlock.jsx";
import CTAFlowBlock from "./CTAFlowBlock.jsx";

import "./UseCases.css";

const UseCases = () => {
  return (
    <main className="usecases-page">
      <HeroBlock />
      <ProductDeliveryBlock />
      <AnalyticsBlock />
      <CTAFlowBlock />
    </main>
  );
};

export default UseCases;