import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Activities from "./components/Activities";
import SocialMedia from "./components/SocialMedia";
import Rankers from "./components/Rankers";
import AboutPrincipal from "./components/AboutPrincipal";
import Faculty from "./components/Faculty";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import applyBtn from "./assets/img/applyBtn.png";
import "./styles.css";
import logo from "./assets/img/AryaLogo2.webp";

const APPLY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfF1p-uE-__O09DaqVo-wcXkW66o_yd4KrqnagWIcsLdEIOTg/viewform";

function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // If you want to remember dismissal across refreshes, uncomment below:
    // const dismissed = localStorage.getItem("aryaWelcomeDismissed");
    // if (dismissed === "true") setShowWelcome(false);
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    // localStorage.setItem("aryaWelcomeDismissed", "true");
  };

  return (
    <>
      {showWelcome && (
        <div className="welcome-modal-overlay">
          <div className="welcome-modal">
            <button
              className="welcome-modal-close"
              onClick={handleCloseWelcome}
              aria-label="Close welcome message"
            >
              ×
            </button>
            <div className="welcome-modal-badge"><img src={logo} alt="Arya School logo" className="logo-img-welcome" /></div>
            <h2>Welcome to ARYA ENGLISH HIGH SCHOOL AND Jr. COLLEGE</h2>
            <h3>Admission open for Academic Year 2026 - 2027</h3>
            <p>
              "Education is the most powerful tool we can give our children to
              shape a brighter tomorrow."
            </p>
            <div className="welcome-modal-footer-line">
              Nurturing minds, building bright futures.
            </div>
          </div>
        </div>
      )}

      <Header />
      <HeroSlider />
      <Rankers />
      <Activities />
      <SocialMedia />
      <AboutPrincipal />
      <Faculty />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}

function ApplyNowButton() {
  return (
    <a
      href={APPLY_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="apply-now-floating"
    >
      <img src={applyBtn} alt="Apply Now" />
    </a>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
      <ApplyNowButton />
    </>
  );
}

export default App;
