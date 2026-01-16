import { useState } from "react";
import "../styles/Rankers.css";

//SSC Rankers
import SSC20 from "../assets/img/Rankers/SSC/Alok2020.png";

//HSC Rankers
import HSC22 from "../assets/img/Rankers/HSC/Alok2022.png";

const rankers10 = [
  { name: "Kabir Iyer", year: 2025, percentage: 95.9, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Aarav Patil", year: 2024, percentage: 95.2, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  { name: "Sneha Sharma", year: 2023, percentage: 94.8, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" },
  { name: "Rahul Verma", year: 2022, percentage: 94.1, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Manya Desai", year: 2021, percentage: 93.9, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop" },
  { name: "Alok Chaudhary", year: 2020, percentage: 85.6, image: SSC20 }
];

const rankers12 = [
  { name: "Ananya Kulkarni", year: 2025, percentage: 97.3, image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop" },
  { name: "Priya Singh", year: 2024, percentage: 96.5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Arjun Kapoor", year: 2023, percentage: 95.8, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
  { name: "Alok Chaudhary", year: 2022, percentage: 69,image: HSC22 },
  { name: "Saanvi Mehta", year: 2021, percentage: 94.7, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop" },
  { name: "Rohan Malik", year: 2020, percentage: 94.0, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" }
];

function Rankers() {
  const [activeTab, setActiveTab] = useState("10th");
  const [showMore, setShowMore] = useState({ "10th": false, "12th": false });

  const rankersList = activeTab === "10th" ? rankers10 : rankers12;
  const sortedRankers = [...rankersList].sort((a, b) => b.year - a.year);
  const visibleRankers = showMore[activeTab] ? sortedRankers : sortedRankers.slice(0, 4);

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
