import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaRedditAlien,
  FaTelegram,
  FaMedium,
  FaTiktok,
} from "react-icons/fa6";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Left */}
          <div className="footer-left">
            <h2 className="footer-logo">Zelisy</h2>

            <p>Precision-engineered infrastructure for the modern AI stack.</p>

            <p>Rebuilding the engineering lifecycle from the ground up.</p>
          </div>

          {/* Right */}
          <div className="footer-right">
            <div className="footer-social">
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <FaXTwitter />
              </a>

              {/* <a href="#" target="_blank" rel="noreferrer">
                <FaGithub />
              </a> */}

              <a href="#" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

              {/* <a href="#" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a> */}

              {/* <a href="#" target="_blank" rel="noreferrer">
                <FaDiscord />
              </a> */}

              {/* <a href="#" target="_blank" rel="noreferrer">
                <FaRedditAlien />
              </a> */}

              {/* <a href="#" target="_blank" rel="noreferrer">
                <FaTelegram />
              </a> */}

              {/* <a href="#" target="_blank" rel="noreferrer">
                <FaMedium />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <FaTiktok />
              </a> */}
            </div>

            <div className="footer-links">
              <a href="/contact">CONTACT</a>
              <a href="/terms">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">© 2026 Zelisy. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
