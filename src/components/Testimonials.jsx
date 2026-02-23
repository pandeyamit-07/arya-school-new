import "../styles/Testimonials.css";
import logo from "../assets/img/AryaLogo2.webp";

const testimonials = [
  {
    name: "Rajesh Verma",
    relation: "Parent",
    rating: 5,
    experience:
      "Arya School has transformed my child's academic performance. The teachers are dedicated and the facilities are world-class.",
    image: logo,
  },
  {
    name: "Priya Sharma",
    relation: "Student",
    rating: 5,
    experience:
      "Best learning experience! The teachers make every subject interesting and engaging. The school environment is so supportive.",
    image: logo,
  },
  {
    name: "Amit Patel",
    relation: "Alumni",
    rating: 5,
    experience:
      "Strong foundation from Arya School helped me succeed in competitive exams. The discipline and values are invaluable.",
    image: logo,
  },
  {
    name: "Sneha Desai",
    relation: "Parent",
    rating: 5,
    experience:
      "Impressed with the holistic development approach. My daughter excels in studies and participates confidently in activities.",
    image: logo,
  },
  {
    name: "Karan Singh",
    relation: "Student",
    rating: 5,
    experience:
      "The practical learning and hands-on approach make studying enjoyable. Teachers mentored us far beyond just academics.",
    image: logo,
  },
];

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>★</span>
    ))}
  </div>
);

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card">
      <div className="quote-icon">"</div>

      {/* Person */}
      <div className="testimonial-person">
        <img src={t.image} alt={t.name} className="testimonial-avatar" />
        <div className="testimonial-person-info">
          <h3 className="testimonial-name">{t.name}</h3>
          <p className="testimonial-relation">{t.relation}</p>
        </div>
      </div>

      <StarRating rating={t.rating} />
      <div className="testimonial-divider" />
      <p className="testimonial-experience">"{t.experience}"</p>
    </div>
  );
}

function Testimonials() {
  // Duplicate cards so the infinite scroll loop is seamless
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      {/* Header */}
      <div className="testimonials-header">
        <h2>What They <span>Say</span></h2>
        <span className="testimonials-header-line" />
        <p className="testimonials-subtitle">
          Voices from students, parents &amp; alumni who trust Arya School
        </p>
      </div>

      {/* Infinite horizontal scroll */}
      <div className="testimonials-carousel">
        <div className="carousel-track">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;