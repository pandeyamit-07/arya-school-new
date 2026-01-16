import "../styles/SocialMedia.css";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@aryaenglishhighschool?si=4I0cAnGFIOog3RNK",
    accent: "#ff0000",
    icon: <FaYoutube size={18} />,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/arya_english_high_school?igsh=MXF6NmdiN3g5dWozZA==",
    accent: "#e1306c",
    icon: <FaInstagram size={18} />,
  },
];


function SocialMedia() {
  return (
    <section className="social-section">
      <div className="social-inner">
        <div>
          <p className="eyebrow">Stay Connected</p>
          <h2>Follow Arya School Online</h2>
          <p className="social-subtitle">
            Watch campus life, events, and student achievements on our official channels.
          </p>
        </div>
        <div className="social-actions">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              className="social-btn"
              style={{ "--accent": link.accent }}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-icon-wrap">{link.icon}</span>
              <span className="social-label">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
