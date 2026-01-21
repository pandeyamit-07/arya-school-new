import "../styles/Footer.css";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logo from "../assets/img/AryaLogo.png";

function Footer() {
  const mapQuery =
    "Arya Campus, Sector 12, Navi Mumbai, Maharashtra 400703";
  // Embed URL using exact place name and coordinates from the correct Google Maps place
  const mapsEmbedUrl = "https://www.google.com/maps?q=Arya+English+High+School+%26+Jr.+College,+19.4372913,72.8533131&z=17&output=embed";
  // Direct Google Maps place URL provided by user
  const mapsLinkUrl =
    "https://www.google.com/maps/place/Arya+English+High+School+%26+Jr.+College/@19.4372913,72.8507382,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7a998c18c85db:0x52f02f5c6503a819!8m2!3d19.4372913!4d72.8533131!16s%2Fg%2F11ty7f502l?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D";

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Left Section - School Info */}
        <div className="footer-section-left">
          <div className="footer-brand">
            <img src={logo} alt="Arya School logo" className="footer-logo" />
            <h2>Arya English High School</h2>
            <p className="footer-subtitle">& Junior College</p>
            <p className="contact-info">
              Empowering students with a balanced focus on academics,
              creativity, and character since 2019.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-section-right">
          <div className="footer-column">
            <h4>Contact</h4>
            <div className="contact-info-inline">
              <p>
                <strong>Phone:</strong> +91 70208 59943
              </p>
              <p>
                <strong>Email:</strong> www.aryaenglishschool.com
              </p>
              <p className="address-block">
                <strong>Address:</strong> {mapQuery}
              </p>
              <p>
                <strong>Office Hours:</strong> Mon - Sat | 8:00 AM - 4:00 PM
              </p>
              <div className="social-links">
  <a
    href="https://wa.me/917020859943"
    title="WhatsApp"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="WhatsApp"
  >
    <FaWhatsapp size={18} />
  </a>

  <a
    href="https://youtube.com/@aryaenglishhighschool"
    title="YouTube"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="YouTube"
  >
    <FaYoutube size={18} />
  </a>

  <a
    href="https://www.instagram.com/arya_english_high_school"
    title="Instagram"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Instagram"
  >
    <FaInstagram size={18} />
  </a>

  <a
  href="mailto:aryaenglishschool@gmail.com"
  onClick={(e) => {
    e.preventDefault();
    window.location.href = "mailto:aryaenglishschool@gmail.com";
  }}
  title="Email"
  aria-label="Email"
>
  <MdEmail size={18} />
</a>

</div>

            </div>
          </div>
        </div>

        {/* Map & Social */}
        <div className="footer-section-map">
          <div className="footer-column">
            <h4>Visit Us</h4>
            <p className="address-block">
              Locate us on the map below or open directions in Google Maps.
            </p>
          </div>
          <div className="contact-map">
            <iframe
              src={mapsEmbedUrl}
              title="Arya English High School location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            className="map-cta"
            href={mapsLinkUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            View on Google Maps
          </a>
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">
          © 2025 Arya English High School & Junior College. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
