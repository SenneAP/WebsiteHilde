import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="site-logo">
              <span className="logo-symbol">◎</span>
              Praktijk Hilde Smout
            </Link>

            <p>Een ankerpunt om jezelf terug te vinden.</p>
          </div>

          <div className="footer-column">
            <h4>CONTACT</h4>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Hoge+Weg+34+Minderhout+Belgium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={16} />
              Hoge Weg 34, Minderhout - Hoogstraten
            </a>

            <a href="mailto:info@hildesmout.be">
              <Mail size={16} />
              info@hildesmout.be
            </a>

            <a href="tel:+32479624492">
              <Phone size={16} />
              +32(0)479624492
            </a>
          </div>

          <div className="footer-column">
            <h4>VOLG MEE</h4>

            <a
              href="https://wa.me/32479624492"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              WhatsApp — +32(0)479624492
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={16} />
              Facebook — Hilde Smout
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Praktijk Hilde Smout — Hoogstraten
        </div>
      </div>
    </footer>
  );
}