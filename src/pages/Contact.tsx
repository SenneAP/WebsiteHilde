import { useState } from "react";
import type { FormEvent } from "react";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Globe,
} from "lucide-react";

export default function Contact() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Contactaanvraag van ${naam}`
    );

    const body = encodeURIComponent(
      `Naam: ${naam}\nE-mail: ${email}\n\nBericht:\n${bericht}`
    );

    window.location.href =
      `mailto:info@hildesmout.be?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">CONTACT</span>

          <h1>
            Kom je graag langs, of stel je eerst je vraag
          </h1>

          <div className="contact-links">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hoge+Weg+34+Minderhout+Belgium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={19} />
              Hoge Weg 34, Minderhout - Hoogstraten
            </a>

            <a href="mailto:info@hildesmout.be">
              <Mail size={19} />
              info@hildesmout.be
            </a>

            <a href="tel:+32479624492">
              <Phone size={19} />
              +32(0)479624492
            </a>

            <a
              href="https://wa.me/32479624492"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} />
              WhatsApp — +32(0)479624492
            </a>
          </div>

          <div className="contact-socials">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={17} />
              Hilde Smout
            </a>
          </div>

          <div className="contact-map">
            <iframe
              title="Locatie Praktijk Hilde Smout"
              src="https://maps.google.com/maps?q=Hoge%20Weg%2034%2C%20Minderhout%2C%20Belgium&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Stuur een bericht</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="naam">Naam</label>
              <input
                id="naam"
                type="text"
                placeholder="Je naam"
                value={naam}
                onChange={(e) => setNaam(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="jouw@email.be"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bericht">Bericht</label>
              <textarea
                id="bericht"
                placeholder="Waarmee kan ik je helpen?"
                rows={6}
                value={bericht}
                onChange={(e) => setBericht(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Open e-mail om te versturen
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}