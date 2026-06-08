import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AiEngineeringOs from "../pages/AI Engineering Os/AiEngineeringOs";
import ProjectOverview from "../pages/ProjectOverview/ProjectOverview";
import EnterpriseCenter from "../pages/EnterpriseCenter/EnterpriseCenter";
// import ContactPage from "../pages/ContactPage";
// Import your persistent layout components here
import Navbar from "../components/Navbar/Navbar"; // Adjust file path to match your folder structure
import Footer from "../components/Footer/Footer";
import Contact from "../pages/Contact/Contact";
import UseCases from "../pages/UseCases/UseCases.jsx";
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
            <Route path="/EnterpriseCenter" element={<EnterpriseCenter />} />
            <Route path="/usecases" element={<UseCases />} />
          </Routes>
        </main>
        {/* Global Persistent Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}
