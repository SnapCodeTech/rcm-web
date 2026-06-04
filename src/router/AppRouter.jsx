import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AiEngineeringOs from "../pages/AI Engineering Os/AiEngineeringOs";
// import ContactPage from "../pages/ContactPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AiEngineeringOs />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
}
