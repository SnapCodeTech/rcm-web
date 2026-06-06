import Navbar from "../../components/NavBar/Navbar";
import EnterpriseHero from "./EnterpriseHero";
import InsightTabs from "./InsightTabs";
import NeuralDefense from "./NeuralDefense";

export default function ProjectOverview() {
    return (
        <div>
            <Navbar />
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
