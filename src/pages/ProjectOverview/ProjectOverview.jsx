import Navbar from "../../components/NavBar/Navbar";
import HeroSection from "./HeroSection";
import StagesSection from "./StagesSection";

export default function ProjectOverview() {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '35px' }}>
                <HeroSection />
            </div>
            <div style={{ marginTop: '-10px' }}>
                <StagesSection />
            </div>
        </div>
    );
}
