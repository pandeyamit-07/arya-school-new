import { useState, useEffect } from "react";
import "../styles/Rankers.css";

//SSC Rankers
import SSC20 from "../assets/img/Rankers/SSC/Alok2020.png";
import SSC21 from "../assets/img/Rankers/SSC/Alok2020.png";
import SSC22 from "../assets/img/Rankers/SSC/Alok2020.png";
import SSC23 from "../assets/img/Rankers/SSC/Alok2020.png";
import SSC24 from "../assets/img/Rankers/SSC/Alok2020.png";
import SSC25 from "../assets/img/Rankers/SSC/Alok2020.png";

//HSC Rankers

import HSC20 from "../assets/img/Rankers/HSC/Alok2022.png";
import HSC21 from "../assets/img/Rankers/HSC/Alok2022.png";
import HSC22 from "../assets/img/Rankers/HSC/Alok2022.png";
import HSC23 from "../assets/img/Rankers/HSC/Alok2022.png";
import HSC24 from "../assets/img/Rankers/HSC/Alok2022.png";
import HSC25 from "../assets/img/Rankers/HSC/Alok2022.png";

//temp
import logo from "../assets/img/AryaLogo.png";

const rankers10 = [
  { name: "Kabir Iyer", year: 2025, percentage: 95.9, image: logo },
  { name: "Aarav Patil", year: 2024, percentage: 95.2, image: logo },
  { name: "Sneha Sharma", year: 2023, percentage: 94.8, image: logo  },
  { name: "Rahul Verma", year: 2022, percentage: 94.1, image: logo  },
  { name: "Manya Desai", year: 2021, percentage: 93.9, image: logo },
  { name: "Alok Chaudhary", year: 2020, percentage: 85.6, image: SSC20 }
];

const rankers12 = [
 { name: "Kabir Iyer", year: 2025, percentage: 95.9, image: logo },
  { name: "Aarav Patil", year: 2024, percentage: 95.2, image: logo },
  { name: "Sneha Sharma", year: 2023, percentage: 94.8, image: logo  },
  { name: "Alok Chaudhary", year: 2022, percentage: 69,image: HSC22 },
  { name: "Saanvi Mehta", year: 2021, percentage: 94.7, image: logo },
  { name: "Rohan Malik", year: 2020, percentage: 94.0, image: logo }
];

function Rankers() {
  const [activeTab, setActiveTab] = useState("10th");
  const [showMore, setShowMore] = useState({ "10th": false, "12th": false });
  const [isWebView, setIsWebView] = useState(window.innerWidth >= 768);

  // Handle window resize to determine view type
  useEffect(() => {
    const handleResize = () => {
      setIsWebView(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rankersList = activeTab === "10th" ? rankers10 : rankers12;
  const sortedRankers = [...rankersList].sort((a, b) => b.year - a.year);
  const itemsToShow = isWebView ? 3 : 4;
  const visibleRankers = showMore[activeTab] ? sortedRankers : sortedRankers.slice(0, itemsToShow);

  return (
    <section className="rankers-section">
      <h2>Our Top Rankers</h2>
      
      <div className="rankers-tabs">
        <button
          className={`tab-btn ${activeTab === "10th" ? "active" : ""}`}
          onClick={() => setActiveTab("10th")}
        >
          Class 10th
        </button>
        <button
          className={`tab-btn ${activeTab === "12th" ? "active" : ""}`}
          onClick={() => setActiveTab("12th")}
        >
          Class 12th
        </button>
      </div>

      <div className="rankers-grid">
        {visibleRankers.map((ranker, i) => (
          <div key={i} className="ranker-card">
            <img src={ranker.image} alt={ranker.name} className="ranker-image" />
            <div className="ranker-info">
              <h3>{ranker.name}</h3>
              <p className="ranker-year">{ranker.year}</p>
              <div className="ranker-percentage">
                <span className="percentage-label">Percentage</span>
                <span className="percentage-value">{ranker.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showMore[activeTab] && (
        <div className="rankers-show-more">
          <button
            className="tab-btn"
            onClick={() =>
              setShowMore((prev) => ({ ...prev, [activeTab]: true }))
            }
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}

export default Rankers;
