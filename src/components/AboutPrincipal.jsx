import { useState } from "react";
import "../styles/AboutPrincipal.css";
import logo from "../assets/img/aryaLogo.jpg";


function AboutPrincipal() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about-us" className="principal-section">
      <div className="principal-container">
        <div className="principal-image">
          <img
           src={logo}
            alt="Mr. Munna Prashad"
          />
        </div>

        <div className="principal-content">
          <div className="principal-intro">
            <p className="principal-greeting">HELLO THERE!</p>
            <h2 className="principal-name">
              I'M <span>Munna Prashad</span>
            </h2>
            <p className="principal-title">Principal</p>
          </div>

          <p className="principal-message">
            Our mission is to nurture students with discipline, knowledge, and
            values for a successful future. At Arya English High School & Junior
            College, we believe in holistic development of every child. We foster
            an environment where students not only excel academically but also
            develop into responsible, compassionate, and creative individuals.
          </p>

          <p className="principal-message">
            With a team of dedicated educators and modern infrastructure, we
            ensure that every student receives quality education and personal
            attention. We are committed to preparing our students for the
            challenges of tomorrow while instilling in them the values of
            integrity, respect, and excellence.
          </p>

          <button
            className="principal-cta"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>

      <div className={`principal-expanded ${isExpanded ? "open" : ""}`}>
        <div className="expanded-content">
          <h3>My Vision for Our School</h3>
          <p>
            Education is not merely about acquiring knowledge; it is about
            developing the character and capabilities of our students. At Arya
            English High School & Junior College, we believe that every child
            has unique potential waiting to be discovered and nurtured. Our
            pedagogical approach combines traditional values with modern teaching
            methodologies to ensure that students are well-equipped for the
            challenges of the 21st century.
          </p>

          <h3>Commitment to Excellence</h3>
          <p>
            We are committed to maintaining the highest standards of academic
            excellence while ensuring that our students develop strong moral
            values, critical thinking skills, and emotional intelligence. Our
            faculty comprises experienced educators who are passionate about
            their subjects and dedicated to the growth of every student. We
            provide a safe, inclusive, and supportive environment where every
            child can thrive.
          </p>

          <h3>Holistic Development</h3>
          <p>
            Beyond academics, we focus on the overall personality development of
            our students. Through sports, cultural activities, community service,
            and experiential learning, we help them discover their talents and
            interests. We believe that a well-rounded education prepares students
            not just for competitive exams, but for life itself.
          </p>

          <h3>Building Better Tomorrow</h3>
          <p>
            Our goal is to cultivate future leaders, innovators, and responsible
            citizens who will contribute positively to society. We encourage our
            students to think creatively, question thoughtfully, and act
            responsibly. Together, with the support of our parents and community,
            we are building a better tomorrow for our students.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutPrincipal;
