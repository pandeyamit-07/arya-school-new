import { useEffect, useState, useRef } from "react";
import "../styles/HeroSlider.css";

import aryaTeam from "../assets/img/Slider/slider1.JPG";
import sportsImg from "../assets/img/Slider/slider2.jpg";
import slideVideo from "../assets/img/Slider/slide4.mp4"

const slides = [
  {
    id: 1,
    type: "image",
    image: aryaTeam,
    title: "Arya Team",
    alt: "School campus"
  },
  {
    id: 2,
    type: "image",
    image: sportsImg,
    title: "Sports",
    alt: "Students participating in sports"
  },
  {
    id: 3,
    type: "video",
    video: slideVideo,
    title: "School Video",
    alt: "School activities video"
  }
];

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const currentSlide = slides[index];
    
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // If current slide is a video, wait for it to end
    if (currentSlide.type === "video" && videoRef.current) {
      const video = videoRef.current;
      
      // Reset and play video when it becomes active
      video.currentTime = 0;
      video.play().catch(err => {
        console.error("Error playing video:", err);
        // If video fails to play, move to next slide after a delay
        timerRef.current = setTimeout(() => {
          setIndex((prev) => (prev + 1) % slides.length);
        }, 3000);
      });

      // Move to next slide when video ends
      const handleVideoEnd = () => {
        setIndex((prev) => (prev + 1) % slides.length);
      };

      video.addEventListener("ended", handleVideoEnd);

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    } else {
      // For images, use auto-slide with 4 second interval
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 4000);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [index]);

  return (
    <section className="hero-slider">
      <div className="hero-slides-container">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide ${i === index ? "active" : ""}`}
          >
            {slide.type === "video" ? (
              <video
                ref={i === index ? videoRef : null}
                src={slide.video}
                className="hero-slide-video"
                muted
                playsInline
                loop={false}
              />
            ) : (
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero-slide-image"
              />
            )}
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
