import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar-logo">
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    RCM
                </Link>
            </div>

            {/* Toggle: hamburger vs close icon */}
            {menuOpen ? (
                <div className="close-icon" onClick={() => setMenuOpen(false)}>
                    ✕
                </div>
            ) : (
                <div className="hamburger" onClick={() => setMenuOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}


            <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <Link to="/overview" className={`nav-item ${location.pathname === "/overview" ? "active-link" : ""}`}>Product Overview</Link>
                <Link to="/usecases" className={`nav-item ${location.pathname === "/usecases" ? "active-link" : ""}`}>Use Cases</Link>
                <Link to="/enterprise" className={`nav-item ${location.pathname === "/enterprise" ? "active-link" : ""}`}>Enterprise Center</Link>
                <Link to="/pricing" className={`nav-item ${location.pathname === "/pricing" ? "active-link" : ""}`}>Pricing</Link>
                <Link to="/status" className={`nav-item ${location.pathname === "/status" ? "active-link" : ""}`}>Status</Link>
                <Link to="/contact" className={`nav-item ${location.pathname === "/contact" ? "active-link" : ""}`}>Contact</Link>
            </div>

            <button className="navbar-button">Request Demo</button>
        </div>
    );
}
