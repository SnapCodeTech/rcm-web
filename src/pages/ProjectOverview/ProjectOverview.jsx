import Navbar from "../../components/NavBar/Navbar";
import HeroSection from "./HeroSection";
import StagesSection from "./StagesSection";
import BuildMission from "./BuildMission";
import IntelligenceStack from "./IntelligenceStack";
import PlatformArchitecture from "./PlatformArchitecture";

export default function ProjectOverview() {
    return (
        <div>
            
            <div style={{ marginTop: '35px' }}>
                <HeroSection />
            </div>
            <div style={{ marginTop: '-40px' }}>
                <StagesSection />
            </div>
            <div style={{ marginTop: '40px' }}>
                <BuildMission />
            </div>
            <div style={{ marginTop: '40px' }}>
                <IntelligenceStack />
            </div>
            <div style={{ marginTop: '-100px' }}>
                <PlatformArchitecture />
            </div>
        </div>
    );
}
