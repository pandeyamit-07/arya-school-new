import { useState, useEffect } from "react";
import "../styles/Rankers.css";

//SSC Rankers
import SSC20 from "../assets/img/Rankers/SSC/Alok2020.webp";
import SSC21 from "../assets/img/Rankers/SSC/SSC21.webp";
import SSC22 from "../assets/img/Rankers/SSC/SSC22.webp";
import SSC23 from "../assets/img/Rankers/SSC/SSC23.webp";
import SSC24 from "../assets/img/Rankers/SSC/SSC24.png";
import SSC25 from "../assets/img/Rankers/SSC/SSC25.png";

//HSC Rankers

import HSC20 from "../assets/img/Rankers/HSC/Alok2022.webp";
import HSC21 from "../assets/img/Rankers/HSC/Alok2022.webp";
import HSC22 from "../assets/img/Rankers/HSC/Alok2022.webp";
import HSC23 from "../assets/img/Rankers/HSC/HSC23.webp";
import HSC24 from "../assets/img/Rankers/HSC/HSC24.webp";
import HSC25 from "../assets/img/Rankers/HSC/Alok2022.webp";

//temp
import logo from "../assets/img/AryaLogo2.webp";

const rankers10 = [
  { name: "Shrikant Yadav", year: 2025, percentage: 86, image: SSC25 },
  { name: "Satyam Prajapati", year: 2024, percentage: 85.80, image: SSC24 },
  { name: "Anjali Chaurasiya", year: 2023, percentage: 84.50, image: SSC23  },
  { name: "Ajeet Chaudhary", year: 2022, percentage: 75, image: SSC22  },
  { name: "Sachin Bhagat", year: 2021, percentage: 74, image: SSC21 },
  { name: "Alok Chaudhary", year: 2020, percentage: 85.60, image: SSC20 }
];

const rankers12 = [
 { name: ".....", year: 2025, percentage: null, image: logo },
  { name: "Radha Bhagat", year: 2024, percentage: 79, image: HSC24 },
  { name: "Sujal", year: 2023, percentage: 64, image: HSC23  },
  { name: "Alok Chaudhary", year: 2022, percentage: 69,image: HSC22 },
  { name: ".....", year: 2021, percentage: null, image: logo },
  { name: "Annand Vishwakarma", year: 2020, percentage: null, image: logo }
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
