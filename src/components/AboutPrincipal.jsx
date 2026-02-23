import { useState } from "react";
import "../styles/AboutPrincipal.css";
import prince from "../assets/img/Teachers/principle1.webp";

const visionPoints = [
  { icon: "🎓", title: "Academic Excellence", text: "Blending traditional values with modern teaching to equip students for 21st-century challenges." },
  { icon: "💡", title: "Holistic Development", text: "Sports, arts, community service, and experiential learning help students discover their unique potential." },
  { icon: "🌱", title: "Nurturing Environment", text: "A safe, inclusive, and caring space where every child feels seen, supported, and encouraged." },
  { icon: "🚀", title: "Future Leaders", text: "We shape responsible citizens and innovators who will contribute positively to society." },
];

function AboutPrincipal() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about-us" className="principal-section">

      {/* ── Decorative blobs ── */}
      <div className="p-blob p-blob-1" />
      <div className="p-blob p-blob-2" />

      {/* ── Top: Heading ── */}
      <div className="principal-heading">
        <span className="principal-pill">About Our Principal</span>
        <h2>Meet <span>Our Leader</span></h2>
        <p>Guiding Arya English High School with vision, dedication, and heart</p>
      </div>

      {/* ── Card: Photo + Bio ── */}
      <div className="principal-card">

        {/* Photo side */}
        <div className="principal-photo-side">
          <div className="principal-photo-frame">
            <img src={prince} alt="Mr. Munna Prasad — Principal" className="principal-photo" />
            <div className="principal-photo-glow" />
          </div>
          <div className="principal-name-plate">
            <h3>Munna Prasad</h3>
            <span>Principal, Arya English High School</span>
          </div>
        </div>

        {/* Text side */}
        <div className="principal-text-side">
          <p className="principal-message">
            At Arya English High School &amp; Junior College, our mission is to foster an
            innovative learning environment that encourages students to explore their potential,
            nurture their talents, and become compassionate lifelong learners — equipped with
            discipline, knowledge, and values for a successful future.
          </p>
          <p className="principal-message">
            We are committed to providing a holistic education that balances academic excellence
            with personal growth, preparing every student to navigate life's challenges and
            contribute meaningfully to society.
          </p>

          {/* Expand button */}
          <button
            className={`principal-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <span>{open ? "Show Less" : "Read More"}</span>
            <span className="toggle-chevron">{open ? "↑" : "↓"}</span>
          </button>

          {/* Expanded content */}
          {open && (
            <div className="principal-expanded-text">
              <p>
                Our vision is to develop well-rounded, confident, and responsible students who
                aspire to achieve the heights of success. Education is not merely about acquiring
                knowledge — it is about developing the character and capabilities that will carry
                students through every chapter of life.
              </p>
              <p>
                With a team of dedicated educators and modern infrastructure, we ensure that every
                student receives quality education and personal attention. We encourage our
                students to think creatively, question thoughtfully, and act responsibly — together
                building a better tomorrow.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Vision grid ── */}
      <div className="principal-vision">
        {visionPoints.map((v) => (
          <div key={v.title} className="vision-card">
            <span className="vision-icon">{v.icon}</span>
            <h4 className="vision-title">{v.title}</h4>
            <p className="vision-text">{v.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default AboutPrincipal;
