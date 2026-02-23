import { useState, useEffect, useRef } from "react";
import "../styles/Rankers.css";

// SSC Rankers
import SSC20 from "../assets/img/Rankers/SSC/Alok2020.webp";
import SSC21 from "../assets/img/Rankers/SSC/SSC21.webp";
import SSC22 from "../assets/img/Rankers/SSC/SSC22.webp";
import SSC23 from "../assets/img/Rankers/SSC/SSC23.webp";
import SSC24 from "../assets/img/Rankers/SSC/SSC24.png";
import SSC25 from "../assets/img/Rankers/SSC/SSC25.png";

// HSC Rankers
import HSC20 from "../assets/img/Rankers/HSC/Alok2022.webp";
import HSC21 from "../assets/img/Rankers/HSC/Alok2022.webp";
import HSC22 from "../assets/img/Rankers/HSC/Alok2022.webp";
import HSC23 from "../assets/img/Rankers/HSC/HSC23.webp";
import HSC24 from "../assets/img/Rankers/HSC/HSC24.webp";
import HSC25 from "../assets/img/Rankers/HSC/Alok2022.webp";

import logo from "../assets/img/AryaLogo2.webp";

const rankers10 = [
  { name: "Shrikant Yadav", year: 2025, percentage: 86.00, image: SSC25 },
  { name: "Satyam Prajapati", year: 2024, percentage: 85.80, image: SSC24 },
  { name: "Anjali Chaurasiya", year: 2023, percentage: 84.50, image: SSC23 },
  { name: "Ajeet Chaudhary", year: 2022, percentage: 75.00, image: SSC22 },
  { name: "Sachin Bhagat", year: 2021, percentage: 74.00, image: SSC21 },
  { name: "Alok Chaudhary", year: 2020, percentage: 85.60, image: SSC20 },
];

const rankers12 = [
  { name: ".....", year: 2025, percentage: null, image: logo },
  { name: "Radha Bhagat", year: 2024, percentage: 79.00, image: HSC24 },
  { name: "Sujal", year: 2023, percentage: 64.00, image: HSC23 },
  { name: "Alok Chaudhary", year: 2022, percentage: 69.00, image: HSC22 },
  { name: ".....", year: 2021, percentage: null, image: logo },
  { name: "Annand Vishwakarma", year: 2020, percentage: null, image: logo },
];

/* ── Animated count-up hook ── */
function useCountUp(target, duration = 1400, startAnimation) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startAnimation || target === null) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(parseFloat(start.toFixed(1))); }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startAnimation]);
  return count;
}

/* ── Single ranker card ── */
function RankerCard({ ranker, index, isVisible }) {
  const animCount = useCountUp(ranker.percentage, 1400, isVisible);

  return (
    <div
      className="ranker-card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 500ms ease ${index * 80}ms, transform 500ms ease ${index * 80}ms`,
      }}
    >
      {/* Full-height image */}
      <div className="ranker-image-wrap">
        <img src={ranker.image} alt={ranker.name} className="ranker-image" />
        <div className="ranker-image-overlay" />
        <div className="ranker-year-badge">Class of {ranker.year}</div>
      </div>

      {/* Info — name + percentage only (no bar) */}
      <div className="ranker-info">
        <h3>{ranker.name}</h3>
        <p className="ranker-class-label">Board Exam Topper</p>
        {ranker.percentage !== null && (
          <div className="ranker-score-badge">
            <span className="score-num">{animCount.toFixed(1)}%</span>
            <span className="score-tag">Score</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main section ── */
function Rankers() {
  const [activeTab, setActiveTab] = useState("10th");
  const [showMore, setShowMore] = useState({ "10th": false, "12th": false });
  const [isVisible, setIsVisible] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(
    window.innerWidth < 768 ? 4 : 3
  );
  const sectionRef = useRef(null);

  // Update itemsToShow on resize
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 4 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const rankersList = activeTab === "10th" ? rankers10 : rankers12;
  const sortedRankers = [...rankersList].sort((a, b) => b.year - a.year);
  const visibleRankers = showMore[activeTab]
    ? sortedRankers
    : sortedRankers.slice(0, itemsToShow);

  return (
    <section className="rankers-section" ref={sectionRef}>
      {/* header */}
      <div className="rankers-section-header">
        <h2>Our Top <span>Rankers</span></h2>
        <p className="rankers-section-subtitle">
          Celebrating excellence — students who made us proud
        </p>
      </div>

      {/* tabs */}
      <div className="rankers-tabs">
        {["10th", "12th"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => { setActiveTab(tab); setIsVisible(true); }}
          >
            Class {tab}
          </button>
        ))}
      </div>

      {/* cards */}
      <div className="rankers-grid">
        {visibleRankers.map((ranker, i) => (
          <RankerCard
            key={`${activeTab}-${ranker.year}-${i}`}
            ranker={ranker}
            index={i}
            isVisible={isVisible}
          />
        ))}
      </div>

      {/* show more */}
      {!showMore[activeTab] && sortedRankers.length > itemsToShow && (
        <div className="rankers-show-more">
          <button
            className="tab-btn"
            onClick={() => setShowMore((prev) => ({ ...prev, [activeTab]: true }))}
          >
            View All Rankers
          </button>
        </div>
      )}
    </section>
  );
}

export default Rankers;
