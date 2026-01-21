import "../styles/Testimonials.css";

//temp
import logo from "../assets/img/AryaLogo.png";

// Testimonials Data
// import test1 from "../assets/img/test/test1.jpg";
// import test2 from "../assets/img/test/test2.jpg";
// import test3 from "../assets/img/test/test3.jpg";
// import test4 from "../assets/img/test/test4.jpg";
// import test5 from "../assets/img/test/test5.jpg";


const testimonials = [
  { 
    name: "Rajesh Verma",
    relation: "Parent",
    rating: 5,
    experience: "Arya School has transformed my child's academic performance. The teachers are dedicated and the facilities are world-class.",
    image: logo
  },
  { 
    name: "Priya Sharma",
    relation: "Student",
    rating: 5,
    experience: "Best learning experience! The teachers make every subject interesting and engaging. The school environment is supportive.",
    image: logo
  },
  { 
    name: "Amit Patel",
    relation: "Alumni",
    rating: 5,
    experience: "Strong foundation from Arya School helped me succeed in competitive exams. The discipline and values are invaluable.",
    image: logo
  },
  { 
    name: "Sneha Desai",
    relation: "Parent",
    rating: 5,
    experience: "Impressed with the holistic development approach. My daughter excels in studies and also participates confidently in activities.",
    image: logo
  },
  { 
    name: "Karan Singh",
    relation: "Student",
    rating: 5,
    experience: "The practical learning and hands-on approach make studying enjoyable. Teachers mentor us beyond academics.",
    image: logo
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
};

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <p className="testimonials-subtitle">Voices from students, parents, and alumni</p>
      </div>

      <div className="testimonials-carousel">
        <div className="carousel-track">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-image">
                <img src={t.image} alt={t.name} />
              </div>
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-experience">{t.experience}</p>
                <h3 className="testimonial-name">{t.name}</h3>
                <p className="testimonial-relation">{t.relation}</p>
                <StarRating rating={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
