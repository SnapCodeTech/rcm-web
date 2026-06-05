import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Monitors active route location shifts

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/" style={{ color: "inherit", fontWeight: "inherit", fontSize: "inherit", textDecoration: "none" }}>
          RCM
        </Link>
      </div>
      
      <div className="navbar-links">
        {/* We compare location.pathname directly in the template expression */}
        <Link to="/overview" className={`nav-item ${location.pathname === "/overview" ? "active-link" : ""}`}>
          Product Overview
        </Link>
        <Link to="/usecases" className={`nav-item ${location.pathname === "/usecases" ? "active-link" : ""}`}>
          Use Cases
        </Link>
        <Link to="/enterprise" className={`nav-item ${location.pathname === "/enterprise" ? "active-link" : ""}`}>
          Enterprise Center
        </Link>
        <Link to="/pricing" className={`nav-item ${location.pathname === "/pricing" ? "active-link" : ""}`}>
          Pricing
        </Link>
        <Link to="/status" className={`nav-item ${location.pathname === "/status" ? "active-link" : ""}`}>
          Status
        </Link>
        <Link to="/contact" className={`nav-item ${location.pathname === "/contact" ? "active-link" : ""}`}>
          Contact
        </Link>
      </div>
      
      <button className="navbar-button">Request Demo</button>
    </div>
  );
}