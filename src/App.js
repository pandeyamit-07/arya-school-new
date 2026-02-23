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
import "./styles.css";
import logo from "./assets/img/AryaLogo2.webp";
import { FaChevronUp } from "react-icons/fa";

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
            <h2>All The Best for Our SSC & HSC Students! <br></br> Best of Luck for Board Exams</h2>
            <h3>Admission open for Academic Year 2026 - 2027</h3>
            <p className="welcome-modal-message">
              <b> "Welcome to Arya English High School &amp; Jr. College."</b>
            </p>

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

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top-btn${visible ? " scroll-to-top-btn--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <span className="scroll-to-top-icon">
        <FaChevronUp />
      </span>
      <span className="scroll-to-top-ripple" />
    </button>
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
      <ScrollToTopButton />
    </>
  );
}

export default App;
