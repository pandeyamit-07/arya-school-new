import "../styles/Faculty.css";

import logo from "../assets/img/AryaLogo.png";

//temp data for faculty members

// import tec1 from "../assets/img/Teachers/tec1.jpg";
// import tec2 from "../assets/img/Teachers/tec2.jpg";
// import tec3 from "../assets/img/Teachers/tec3.jpg";
// import tec4 from "../assets/img/Teachers/tec4.jpg";
// import tec5 from "../assets/img/Teachers/tec5.jpg";



const faculty = [
  { 
    name: "Mr. R. Kulkarni", 
    role: "Maths Teacher",
    description: "Experienced mathematician with 15+ years of teaching expertise. Specializes in making complex concepts simple and engaging.",
    image: logo
  },
  { 
    name: "Mrs. S. Joshi", 
    role: "Science Teacher",
    description: "Passionate science educator dedicated to hands-on learning. Expert in physics, chemistry, and biology with modern lab practices.",
    image: logo
  },
  { 
    name: "Mr. A. Patil", 
    role: "English Teacher",
    description: "Literature and language expert focused on communication skills. Helps students develop confidence in expression and writing.",
    image: logo
  },
  { 
    name: "Mrs. K. Mehta", 
    role: "Computer Teacher",
    description: "Tech-savvy educator introducing students to coding and computer applications. Keeps curriculum updated with latest technologies.",
    image: logo
  },
  { 
    name: "Mr. D. Sharma", 
    role: "Sports Instructor",
    description: "Fitness and sports enthusiast committed to building healthy and disciplined students. Trains multiple sports disciplines.",
    image: logo
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
