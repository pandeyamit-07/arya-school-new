import { useEffect, useState } from "react";
import "../styles/HeroSlider.css";

import aryaTeam from "../assets/img/Slider/slider1.JPG";
import sportsImg from "../assets/img/Slider/slider2.jpg";
import tripImg from "../assets/img/Slider/slider3.jpg";

const slides = [
  {
    id: 1,
    image: aryaTeam,
    title: "Arya Team",
    alt: "School campus"
  },
  {
    id: 2,
    image: sportsImg,
    title: "Sports",
    alt: "Students participating in sports"
  },
  {
    id: 3,
    image: tripImg,
    title: "Student Trip",
    alt: "Students on a school trip"
  }
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      <div className="hero-slides-container">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide ${i === index ? "active" : ""}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="hero-slide-image"
            />
            <div className="hero-slide-overlay"></div>
            <div className="hero-slide-content">
             
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`hero-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
