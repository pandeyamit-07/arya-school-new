import "../styles/Faculty.css";

import logo from "../assets/img/AryaLogo2.webp";

//temp data for faculty members

// import tec1 from "../assets/img/Teachers/tec1.webp";
// import tec2 from "../assets/img/Teachers/tec2.webp";
// import tec3 from "../assets/img/Teachers/tec3.webp";
// import tec4 from "../assets/img/Teachers/tec4.webp";
// import tec5 from "../assets/img/Teachers/tec5.webp";



const faculty = [
  { 
    name: "Miss Amita", 
    role: "Marathi Teacher",
    image: logo
  },
  { 
    name: "Miss Shivani", 
    role: "Science Teacher",
    image: logo
  },
  
  { 
    name: "Miss Laxmi", 
    role: "Biology Teacher",
    image: logo
  },
   { 
    name: "Miss Pooja", 
    role: "Hindi Teacher",
    image: logo
  },
  { 
    name: "Mrs. Sandhya", 
    role: "Supervisor",
    image: logo
  },
  { 
    name: "Mr Mukesh", 
    role: "English Teacher",
    image: logo
  },
  { 
    name: "Mr Manish", 
    role: "Chemistry Teacher",
    image: logo
  },
  { 
    name: "Mr Annand", 
    role: "Maths Teacher",
    image: logo
  },
  { 
    name: "Mr. Pradeep", 
    role: "Physics Teacher",
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faculty;
