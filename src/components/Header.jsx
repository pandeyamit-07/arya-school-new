import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/img/AryaLogo.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGalleryClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const url = window.location.origin + "/gallery";
    window.open(url, "_blank");
  };

  const handleApplyNowClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const url = "https://forms.gle/7P4xjgmXEA1KUESE9";
    window.open(url, "_blank");
  };

  const handleActivityClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/#activities");
      setTimeout(() => {
        const activitiesSection = document.getElementById("activities");
        if (activitiesSection) {
          activitiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const activitiesSection = document.getElementById("activities");
      if (activitiesSection) {
        activitiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleAboutUsClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/#about-us");
      setTimeout(() => {
        const aboutUsSection = document.getElementById("about-us");
        if (aboutUsSection) {
          aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const aboutUsSection = document.getElementById("about-us");
      if (aboutUsSection) {
        aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Handle scroll to section when navigating from another route
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const hash = location.hash.substring(1);
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="header-left" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <img src={logo} alt="Arya School logo" className="logo-img" />
        <div className="logo-text">
          <h2>Arya English High School</h2>
          <small>&amp; Junior College</small>
        </div>
      </div>
      <button 
        className={`hamburger-menu ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`header-nav ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <a href="#activities" onClick={handleActivityClick}>Activity</a>
        <a href="#about-us" onClick={handleAboutUsClick}>About Us</a>
        <a href="/gallery" onClick={handleGalleryClick} className="apply-btn-gallery">Gallery</a>
        <a
          href="https://forms.gle/7P4xjgmXEA1KUESE9"
          onClick={handleApplyNowClick}
          className="apply-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      </nav>
    </header>
  );
}
export default Header;
