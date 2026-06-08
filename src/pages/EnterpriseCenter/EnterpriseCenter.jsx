import EnterpriseHero from "./EnterpriseHero";
import InsightTabs from "./InsightTabs";
import NeuralDefense from "./NeuralDefense";

export default function EnterpriseCenter() {
    return (
        <div>
            <div style={{}}>
                <EnterpriseHero />
            </div>
            <div style={{ marginTop: '30px' }}>
                <InsightTabs />
            </div>
            <div style={{}}>
                <NeuralDefense />
            </div>
        </div>
    );
}
