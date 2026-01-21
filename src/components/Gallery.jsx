import { useState } from "react";
import "../styles/Gallery.css";
import Header from "./Header";
import Footer from "./Footer";

// tinyTots
import tiny1 from "../assets/img/Activity/aryaLogo.jpg";
import tiny2 from "../assets/img/Activity/aryaLogo.jpg";
import tiny3 from "../assets/img/Activity/aryaLogo.jpg";
import tiny4 from "../assets/img/Activity/tinny0.png";


// science Practical
import sci1 from "../assets/img/Activity/aryaLogo.jpg";
import sci2 from "../assets/img/Activity/aryaLogo.jpg";
import sci3 from "../assets/img/Activity/aryaLogo.jpg";
import sci4 from "../assets/img/Activity/aryaLogo.jpg";


// Computer lab
import com1 from "../assets/img/Activity/aryaLogo.jpg";
import com2 from "../assets/img/Activity/aryaLogo.jpg";
import com3 from "../assets/img/Activity/aryaLogo.jpg";
import com4 from "../assets/img/Activity/aryaLogo.jpg";


// Cultural Activity
import act1 from "../assets/img/Activity/aryaLogo.jpg";
import act2 from "../assets/img/Activity/aryaLogo.jpg";
import act3 from "../assets/img/Activity/act3.jpg";
import act4 from "../assets/img/Activity/aryaLogo.jpg";


// Annual Sports
import sport1 from "../assets/img/Activity/sport1.jpg";
import sport2 from "../assets/img/Activity/sport2.jpg";
import sport3 from "../assets/img/Activity/sport3.jpg";
import sport4 from "../assets/img/Activity/aryaLogo.jpg";


// Educational Trip
import trip1 from "../assets/img/Activity/trip1.jpg";
import trip3 from "../assets/img/Activity/trip2.jpg";
import trip2 from "../assets/img/Activity/aryaLogo.jpg";
import trip4 from "../assets/img/Activity/aryaLogo.jpg";

// Annual Function
import ann1 from "../assets/img/Activity/aryaLogo.jpg";
import ann2 from "../assets/img/Activity/aryaLogo.jpg";
import ann3 from "../assets/img/Activity/aryaLogo.jpg";
import ann4 from "../assets/img/Activity/aryaLogo.jpg";



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
        url: sci1,
        description: "Chemistry experiments with modern lab safety and equipment."
      },
      {
        url: sci2,
        description: "Physics practicals that turn concepts into real-world observations."
      },
      {
        url: sci3,
        description: "Biology lab sessions using microscopes and specimen study."
      },
      {
        url: sci4,
        description: "Students collaborating on experiments to learn scientific method."
      }
    ]
  },
  
  cultural: {
    title: "CULTURAL ACTIVITY",
    images: [
      {
        url: act1,
        description: "Dance rehearsals that build rhythm, expression, and confidence."
      },
      {
        url: act2,
        description: "Art showcases where students display painting and craft work."
      },
      {
        url: act3,
        description: "Music sessions with vocals and instruments on stage."
      },
      {
        url: act4,
        description: "Drama performances highlighting creativity and storytelling."
      }
    ]
  },
  annualSports: {
    title: "ANNUAL SPORTS",
    images: [
      {
        url: sport1,
        description: "Track events where students compete with sportsmanship."
      },
      {
        url: sport2,
        description: "Basketball matches fostering teamwork and strategy."
      },
      {
        url: sport3,
        description: "Football tournaments that build leadership on the field."
      },
      {
        url: sport4,
        description: "Medal ceremonies celebrating athletic achievements."
      }
    ]
  },
  educationalTrip: {
    title: "EDUCATIONAL TRIP",
    images: [
      {
        url: trip1,
        description: "Visits to historical monuments to experience heritage firsthand."
      },
      {
        url: trip2,
        description: "Science museum exploration with interactive exhibits."
      },
      {
        url: trip3,
        description: "Nature trails and biodiversity walks guided by experts."
      },
      {
        url: trip4,
        description: "Industrial visits offering real-world technology exposure."
      }
    ]
  },
  annualFunction: {
    title: "ANNUAL FUNCTION",
    images: [
      {
        url: ann1,
        description: "Dance performances by talented students on annual day."
      },
      {
        url: ann2,
        description: "Musical ensembles featuring vocals and instruments."
      },
      {
        url: ann3,
        description: "Stage dramas highlighting creativity and teamwork."
      },
      {
        url: ann4,
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

