import "../styles/SocialMedia.css";
import { FaYoutube, FaInstagram, FaImages } from "react-icons/fa";

// ...existing code...
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
  // added gallery button that redirects to internal /gallery route
  {
    id: "gallery",
    label: "Gallery",
    href: "/gallery",
    accent: "#2b90d9",
    icon: <FaImages size={18} />,
  },
];

function SocialMedia() {
  return (
    <section className="social-section">
      <div className="social-inner">
        <div className="social-copy">
          <p className="eyebrow">Stay Connected</p>
          <h2>Follow Arya School Online</h2>
          <p className="social-subtitle">
            Watch campus life, events, and student achievements on our official channels.
          </p>
        </div>

        <div className="social-actions">
          {socialLinks.map((link) => {
            const isExternal = /^https?:\/\//.test(link.href);
            return (
              <a
                key={link.id}
                className={`social-btn ${link.id === "gallery" ? "gallery-btn" : ""}`}
                style={{ ["--accent"]: link.accent }}
                href={link.href}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={link.label}
              >
                <span className="social-icon-wrap">{link.icon}</span>
                <span className="social-label">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
// ...existing code...