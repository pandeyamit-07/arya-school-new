import "../styles/Faculty.css";

const faculty = [
  { 
    name: "Mr. R. Kulkarni", 
    role: "Maths Teacher",
    description: "Experienced mathematician with 15+ years of teaching expertise. Specializes in making complex concepts simple and engaging.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
  },
  { 
    name: "Mrs. S. Joshi", 
    role: "Science Teacher",
    description: "Passionate science educator dedicated to hands-on learning. Expert in physics, chemistry, and biology with modern lab practices.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop"
  },
  { 
    name: "Mr. A. Patil", 
    role: "English Teacher",
    description: "Literature and language expert focused on communication skills. Helps students develop confidence in expression and writing.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop"
  },
  { 
    name: "Mrs. K. Mehta", 
    role: "Computer Teacher",
    description: "Tech-savvy educator introducing students to coding and computer applications. Keeps curriculum updated with latest technologies.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
  },
  { 
    name: "Mr. D. Sharma", 
    role: "Sports Instructor",
    description: "Fitness and sports enthusiast committed to building healthy and disciplined students. Trains multiple sports disciplines.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop"
  }
];

function Faculty() {
  return (
    <section className="faculty-section">
      <h2>Our Faculty</h2>
      <div className="faculty-grid">
        {faculty.map((f, i) => (
          <div key={i} className="faculty-card">
            <div className="faculty-image">
              <img src={f.image} alt={f.name} />
            </div>
            <div className="faculty-info">
              <h3 className="faculty-name">{f.name}</h3>
              <p className="faculty-role">{f.role}</p>
              <p className="faculty-description">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faculty;
