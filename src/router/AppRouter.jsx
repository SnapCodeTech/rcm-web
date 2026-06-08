import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AiEngineeringOs from "../pages/AI Engineering Os/AiEngineeringOs";
import ProjectOverview from "../pages/ProjectOverview/ProjectOverview";
import EnterpriseCenter from "../pages/EnterpriseCenter/EnterpriseCenter";
// import ContactPage from "../pages/ContactPage";
// Import your persistent layout components here
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../pages/Contact/Contact";
import UseCases from "../pages/UseCases/UseCases.jsx";
import Pricing from "../pages/Pricing/Pricing";

// import ContactPage from "../pages/ContactPage";

export default function AppRouter() {
    return (
        <Router>
            <div
                className="app-layout-wrapper"
                style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
            >
                {/* Global Persistent Sticky Navigation Bar */}
                <Navbar />
                {/* Main Content Area (With dynamic route switches) */}
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<AiEngineeringOs />} />
                        <Route path="/overview" element={<ProjectOverview />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/enterprise" element={<EnterpriseCenter />} />
                        <Route path="/usecases" element={<UseCases />} />
                        <Route path="/pricing" element={<Pricing />} />
                    </Routes>
                </main>
                {/* Global Persistent Footer Section */}
                <Footer />
            </div>
        </Router>
    );

}
