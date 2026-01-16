import { useState } from "react";
import "../styles/Gallery.css";
import Header from "./Header";
import Footer from "./Footer";

// tinyTots
import tiny1 from "../assets/img/Activity/aryaLogo.jpg";
import tiny2 from "../assets/img/Activity/aryaLogo.jpg";
import tiny3 from "../assets/img/Activity/aryaLogo.jpg";
import tiny4 from "../assets/img/Activity/acitivity2.jpg";

//temporariry
import act from "../assets/img/Activity/aryaLogo.jpg";

// science Practical
// import sci1 from "../assets/img/Activity/aryaLogo.jpg";
// import sci2 from "../assets/img/Activity/aryaLogo.jpg";
// import sci3 from "../assets/img/Activity/aryaLogo.jpg";
// import sci4 from "../assets/img/Activity/acitivity2.jpg";


// Computer lab
// import com1 from "../assets/img/Activity/aryaLogo.jpg";
// import com2 from "../assets/img/Activity/aryaLogo.jpg";
// import com3 from "../assets/img/Activity/aryaLogo.jpg";
// import com4 from "../assets/img/Activity/acitivity2.jpg";


// Cultural Activity
// import act1 from "../assets/img/Activity/aryaLogo.jpg";
// import act2 from "../assets/img/Activity/aryaLogo.jpg";
// import act3 from "../assets/img/Activity/aryaLogo.jpg";
// import act4 from "../assets/img/Activity/acitivity2.jpg";


// Annual Sports
// import sport1 from "../assets/img/Activity/aryaLogo.jpg";
// import sport2 from "../assets/img/Activity/aryaLogo.jpg";
// import sport3 from "../assets/img/Activity/aryaLogo.jpg";
// import sport4 from "../assets/img/Activity/acitivity2.jpg";


// Educational Trip
// import trip1 from "../assets/img/Activity/aryaLogo.jpg";
// import trip2 from "../assets/img/Activity/aryaLogo.jpg";
// import trip3 from "../assets/img/Activity/aryaLogo.jpg";
// import trip4 from "../assets/img/Activity/acitivity2.jpg";

// Annual Function
// import ann1 from "../assets/img/Activity/aryaLogo.jpg";
// import ann2 from "../assets/img/Activity/aryaLogo.jpg";
// import ann3 from "../assets/img/Activity/aryaLogo.jpg";
// import ann4 from "../assets/img/Activity/acitivity2.jpg";



const galleryData = {
  tinyTots: {
    title: "TINY TOTS (Nur, Jr, Sr)",
    images: [
      {
        url: tiny1,
        description: "Play-based learning for nursery, junior, and senior kids with storytelling, music, art, and motor-skill activities in a safe, joyful environment."
      },
      {
        url: tiny2,
        description: "Junior kids exploring colors and craft to build fine motor skills."
      },
      {
        url: tiny3, 
        description: "Senior tots participating in music and movement activities together."
      },
      {
        url: tiny4,
        description: "Play-zone fun that keeps our youngest learners engaged and active."
      }
    ]
  },
  Practicals: {
    title: "SCIENCE PRACTICALS",
    images: [
      {
        url:  act,
        description: "Chemistry experiments with modern lab safety and equipment."
      },
      {
        url:  act,
        description: "Physics practicals that turn concepts into real-world observations."
      },
      {
        url: act,
        description: "Biology lab sessions using microscopes and specimen study."
      },
      {
        url:  act,
        description: "Students collaborating on experiments to learn scientific method."
      }
    ]
  },
  
  cultural: {
    title: "CULTURAL ACTIVITY",
    images: [
      {
        url:  act,
        description: "Dance rehearsals that build rhythm, expression, and confidence."
      },
      {
        url: act,
        description: "Art showcases where students display painting and craft work."
      },
      {
        url:  act,
        description: "Music sessions with vocals and instruments on stage."
      },
      {
        url:  act,
        description: "Drama performances highlighting creativity and storytelling."
      }
    ]
  },
  annualSports: {
    title: "ANNUAL SPORTS",
    images: [
      {
        url:  act,
        description: "Track events where students compete with sportsmanship."
      },
      {
        url:  act,
        description: "Basketball matches fostering teamwork and strategy."
      },
      {
        url: act,
        description: "Football tournaments that build leadership on the field."
      },
      {
        url:  act,
        description: "Medal ceremonies celebrating athletic achievements."
      }
    ]
  },
  educationalTrip: {
    title: "EDUCATIONAL TRIP",
    images: [
      {
        url:  act,
        description: "Visits to historical monuments to experience heritage firsthand."
      },
      {
        url: act,
        description: "Science museum exploration with interactive exhibits."
      },
      {
        url:  act,
        description: "Nature trails and biodiversity walks guided by experts."
      },
      {
        url:  act,
        description: "Industrial visits offering real-world technology exposure."
      }
    ]
  },
  annualFunction: {
    title: "ANNUAL FUNCTION",
    images: [
      {
        url:  act,
        description: "Dance performances by talented students on annual day."
      },
      {
        url:  act,
        description: "Musical ensembles featuring vocals and instruments."
      },
      {
        url:  act,
        description: "Stage dramas highlighting creativity and teamwork."
      },
      {
        url:  act,
        description: "Prize distribution honoring student achievements."
      }
    ]
  }
};

function Gallery() {
  const [activeSection, setActiveSection] = useState("tinyTots");

  const sections = [
    { id: "tinyTots", label: "Tiny Tots" },
    { id: "Practicals", label: "Practicals" },
    { id: "cultural", label: "Cultural Activity" },
    { id: "annualSports", label: "Annual Sports" },
    { id: "educationalTrip", label: "Educational Trip" },
    { id: "annualFunction", label: "Annual Function" }
  ];

  const currentData = galleryData[activeSection];

  return (
    <div className="gallery-page">
      <Header />
      <section className="gallery-section">
        <h1 className="gallery-title">School Gallery</h1>
        
        <div className="gallery-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`gallery-nav-btn ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="gallery-content">
          <h2 className="section-title">{currentData.title}</h2>
          <div className="gallery-grid">
            {currentData.images.map((item, index) => (
              <div key={index} className="gallery-card">
                <div className="gallery-image-wrapper">
                  <img
                    src={item.url}
                    alt={currentData.title}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-card-content">
                  <p className="gallery-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Gallery;

