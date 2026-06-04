import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">RCM</div>
      <div className="navbar-links">
        <a href="/overview">Product Overview</a>
        <a href="/usecases">Use Cases</a>
        <a href="/enterprise">Enterprise Center</a>
        <a href="/pricing">Pricing</a>
        <a href="/status">Status</a>
        <a href="/contact">Contact</a>
      </div>
      <button className="navbar-button">Request Demo</button>
    </div>
  );
}
