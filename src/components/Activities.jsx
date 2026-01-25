import "../styles/Activities.css";


import tiny from "../assets/img/Activity/tinny0.png";
import sci from "../assets/img/Activity/sci0.webp";
import com from "../assets/img/Activity/aryaLogo.jpg";
import act from "../assets/img/Activity/act0.png";
import sport from "../assets/img/Activity/sport0.jpg";
import trip from "../assets/img/Activity/trip0.jpg";
import ann from "../assets/img/Activity/ann0.JPG";




const activitiesData = [
  {
    id: 1,
    title: "TINY TOTS (Nur, Jr, Sr)",
    description: "Play-based learning for nursery, junior, and senior kids with storytelling, music, art, and motor-skill activities in a safe, joyful environment.",
    image: tiny,
    imagePosition: "left"
  },
  {
    id: 2,
    title: "SCIENCE PRACTICALS",
    description: "Hands-on experiments in physics, chemistry, and biology labs to build curiosity, observation, and scientific thinking.",
    image: sci,
    imagePosition: "right"
  },
  {
    id: 3,
    title: "COMPUTER LAB PRACTICALS",
    description: "Coding, robotics, and digital literacy sessions where students explore technology through guided projects.",
    image: com,
    imagePosition: "left"
  },
  {
    id: 4,
    title: "CULTURAL ACTIVITY",
    description: "Music, dance, drama, and art events that nurture creativity, stage confidence, and teamwork.",
    image: act,
    imagePosition: "right"
  },
  {
    id: 5,
    title: "ANNUAL SPORTS",
    description: "Athletics and team games that promote fitness, sportsmanship, and leadership under trained coaches.",
    image: sport,
    imagePosition: "left"
  },
  {
    id: 6,
    title: "EDUCATIONAL TRIP",
    description: "Field visits to museums, science parks, heritage sites, and nature reserves for real-world learning.",
    image: trip,
    imagePosition: "right"
  },
  {
    id: 7,
    title: "ANNUAL FUNCTION",
    description: "School-wide celebration where students present their talents, achievements, and creative performances.",
    image: ann,
    imagePosition: "left"
  }
];

function Activities() {
  return (
    <section id="activities" className="activities-section">
      <h2 className="section-title">Our Activities</h2>

      <div className="activities-flow">
        {activitiesData.map((activity, index) => (
          <div key={activity.id} className="activity-step">
            <div
              className={`activity-content ${
                activity.imagePosition === "left" ? "image-left" : "image-right"
              }`}
            >
              {activity.imagePosition === "left" && (
                <div className="activity-image-wrapper">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="activity-image"
                  />
                </div>
              )}

              <div className="activity-text-wrapper">
                <h3 className="activity-title">{activity.title}</h3>
                <p className="activity-description">{activity.description}</p>
              </div>

              {activity.imagePosition === "right" && (
                <div className="activity-image-wrapper">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="activity-image"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
