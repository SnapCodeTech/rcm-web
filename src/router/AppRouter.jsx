import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AiEngineeringOs from "../pages/AI Engineering Os/AiEngineeringOs";
import ProjectOverview from "../pages/ProjectOverview/ProjectOverview";
// import ContactPage from "../pages/ContactPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AiEngineeringOs />} />
        <Route path="/overview" element={<ProjectOverview />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
}
