import "../styles/Activities.css";

import tiny from "../assets/img/Activity/tinny0.webp";
import sci from "../assets/img/Activity/sci0.webp";
import com from "../assets/img/Activity/sci3.webp";
import act from "../assets/img/Activity/act0.webp";
import sport from "../assets/img/Activity/sport0.webp";
import trip from "../assets/img/Activity/trip0.webp";
import ann from "../assets/img/Activity/ann0.webp";

const activitiesData = [
  {
    id: 1,
    title: "TINY TOTS (Nur, Jr, Sr)",
    description:
      "Play-based learning for nursery, junior, and senior kids with storytelling, music, art, and motor-skill activities in a safe, joyful environment.",
    image: tiny,
    icon: "🌟",
    tag: "Early Learning",
    featured: true,      // spans 2 columns
  },
  {
    id: 2,
    title: "SCIENCE PRACTICALS",
    description:
      "Hands-on experiments in physics, chemistry, and biology labs to build curiosity and scientific thinking.",
    image: sci,
    icon: "🔬",
    tag: "STEM",
    featured: false,
  },
  {
    id: 3,
    title: "COMPUTER LAB",
    description:
      "Coding, robotics, and digital literacy sessions where students explore technology through guided projects.",
    image: com,
    icon: "💻",
    tag: "Technology",
    featured: false,
  },
  {
    id: 4,
    title: "ACTIVITIES & ARTS",
    description:
      "Music, dance, drama, and art events that nurture creativity, stage confidence, and teamwork.",
    image: act,
    icon: "🎭",
    tag: "Creative Arts",
    featured: false,
  },
  {
    id: 5,
    title: "ANNUAL SPORTS",
    description:
      "Athletics and team games that promote fitness, sportsmanship, and leadership under trained coaches.",
    image: sport,
    icon: "🏆",
    tag: "Sports",
    featured: false,
  },
  {
    id: 6,
    title: "EDUCATIONAL TRIP",
    description:
      "Field visits to museums, science parks, heritage sites, and nature reserves for real-world learning.",
    image: trip,
    icon: "🗺️",
    tag: "Exploration",
    featured: false,
  },
  {
    id: 7,
    title: "ANNUAL FUNCTION",
    description:
      "School-wide celebration where students present their talents, achievements, and creative performances.",
    image: ann,
    icon: "🎉",
    tag: "Celebration",
    featured: false,
  },
];

function Activities() {
  return (
    <section id="activities" className="activities-section">
      {/* Header */}
      <div className="activities-header">
        <h2 className="section-title">
          Our <span>Activities</span>
        </h2>
        <span className="section-title-line" />
        <p className="section-subtitle">
          Where learning meets creativity, sport, and exploration
        </p>
      </div>

      {/* Grid */}
      <div className="activities-grid">
        {activitiesData.map((activity, index) => (
          <div
            key={activity.id}
            className={`activity-card${activity.featured ? " featured" : ""}`}
          >
            {/* Image */}
            <div className="activity-img-wrap">
              <img src={activity.image} alt={activity.title} />
              <div className="activity-num">{String(index + 1).padStart(2, "0")}</div>
            </div>

            {/* Body */}
            <div className="activity-body">
              <div className="activity-icon-pill">
                <span>{activity.icon}</span>
                {activity.tag}
              </div>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
