import "../styles/Footer.css";
import {
  FaWhatsapp, FaInstagram, FaYoutube,
  FaMapMarkerAlt, FaPhone, FaClock
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/img/AryaLogo2.webp";

const mapsEmbedUrl =
  "https://www.google.com/maps?q=Arya+English+High+School+%26+Jr.+College,+19.4372913,72.8533131&z=17&output=embed";
const mapsLinkUrl =
  "https://www.google.com/maps/place/Arya+English+High+School+%26+Jr.+College/@19.4372913,72.8507382,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7a998c18c85db:0x52f02f5c6503a819!8m2!3d19.4372913!4d72.8533131!16s%2Fg%2F11ty7f502l";

const stats = [
  { value: "7+", label: "Years of Excellence" },
  { value: "1500+", label: "Students Enrolled" },
  { value: "25+", label: "Expert Teachers" },
  { value: "100%", label: "Board Pass Rate" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Activities", href: "#activities" },
  { label: "About Us", href: "#about-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Apply Now", href: "https://forms.gle/7P4xjgmXEA1KUESE9" },
];

const socials = [
  { icon: <FaWhatsapp />, href: "https://wa.me/917020859943", label: "WhatsApp" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/arya_english_high_school", label: "Instagram" },
  { icon: <FaYoutube />, href: "https://youtube.com/@aryaenglishhighschool", label: "YouTube" },
  { icon: <MdEmail />, href: "mailto:aryaenglishschool@gmail.com", label: "Email" },
];

function Footer() {
  return (
    <footer className="footer">

      {/* Wave removed */}


      {/* ── Stats bar (desktop only) ── */}
      <div className="footer-stats">
        <div className="footer-stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="footer-stat">
              <span className="footer-stat-value">{s.value}</span>
              <span className="footer-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body grid ── */}
      <div className="footer-body">

        {/* Col 1 — Brand (hidden on mobile via CSS) */}
        <div className="footer-col footer-col-brand">
          <div className="footer-logo-row">
            <img src={logo} alt="Arya School logo" className="footer-logo" />
            <div className="footer-brand-name">
              <h3>Arya English High School</h3>
              <span>&amp; Junior College</span>
            </div>
          </div>
          <span className="footer-brand-line" />
          <p className="footer-brand-desc">
            Nurturing curious minds and shaping tomorrow's leaders through
            quality education, values, and holistic development since 2019.
          </p>
          {/* Desktop social icons inside brand column */}
          <div className="footer-brand-socials">
            <h4>Follow Us</h4>
            <div className="footer-social-row">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="footer-social-icon"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Col 2 — Quick Links (hidden on mobile via CSS) */}
        <div className="footer-col footer-links-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact (always visible) */}
        <div className="footer-col footer-contact-col">
          <h4>Contact Us</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaPhone /></div>
              <div className="footer-contact-text">
                <span className="label">Phone</span>
                <a href="tel:+917020859943">+91 70208 59943</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><MdEmail /></div>
              <div className="footer-contact-text">
                <span className="label">Email</span>
                <a href="mailto:aryaenglishschool@gmail.com">aryaenglishschool@gmail.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaMapMarkerAlt /></div>
              <div className="footer-contact-text">
                <span className="label">Address</span>
                <span>Harvate Pada, Dhaniv Baug<br />Nallasopara 401209</span>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaClock /></div>
              <div className="footer-contact-text">
                <span className="label">Hours</span>
                <span>Mon – Sat &nbsp;|&nbsp; 8:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Col 4 — Map (hidden on mobile via CSS) + Mobile social (visible on mobile) */}
        <div className="footer-col footer-col-map">
          {/* Map (desktop only) */}
          <h4>Visit Us</h4>
          <div className="footer-map-wrap">
            <iframe
              src={mapsEmbedUrl}
              title="Arya English High School location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href={mapsLinkUrl} target="_blank" rel="noreferrer noopener" className="map-cta">
            Open in Google Maps
            <span className="map-cta-arrow">→</span>
          </a>
        </div>

        {/* Mobile socials column (hidden on desktop via CSS) */}
        <div className="footer-col footer-socials-col">
          <h4>Follow Us</h4>
          <div className="footer-social-row">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="footer-social-icon"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-bottom-right">
            <span>Design and Developed By</span>
            <span style={{ color: "#ff0000" }}>♥</span>
            <span>Nexus</span>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()}{" "}
            <strong>Arya English High School &amp; Junior College</strong>.
            All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
