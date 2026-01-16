import "../styles/Testimonials.css";

const testimonials = [
  { 
    name: "Rajesh Verma",
    relation: "Parent",
    rating: 5,
    experience: "Arya School has transformed my child's academic performance. The teachers are dedicated and the facilities are world-class.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop"
  },
  { 
    name: "Priya Sharma",
    relation: "Student",
    rating: 5,
    experience: "Best learning experience! The teachers make every subject interesting and engaging. The school environment is supportive.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop"
  },
  { 
    name: "Amit Patel",
    relation: "Alumni",
    rating: 5,
    experience: "Strong foundation from Arya School helped me succeed in competitive exams. The discipline and values are invaluable.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop"
  },
  { 
    name: "Sneha Desai",
    relation: "Parent",
    rating: 5,
    experience: "Impressed with the holistic development approach. My daughter excels in studies and also participates confidently in activities.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop"
  },
  { 
    name: "Karan Singh",
    relation: "Student",
    rating: 5,
    experience: "The practical learning and hands-on approach make studying enjoyable. Teachers mentor us beyond academics.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop"
  },
  { 
    name: "Anjali Kumar",
    relation: "Alumni",
    rating: 5,
    experience: "Arya School prepared me well for university. The academic rigor combined with character development made all the difference.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop"
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
