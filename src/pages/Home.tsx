import Button from "../components/Button";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ServiceList from "../components/ServiceList";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-content">
          <span className="eyebrow">
            FASCIATHERAPIE · KINESITHERAPIE · COACHING
          </span>

          <h1>Een ankerpunt om jezelf terug te vinden</h1>

          <p>
            Een plek die onthoudt wie je bent — ook als jij het even
            kwijt bent.
          </p>

          <div className="hero-actions">
            <Button to="/contact" arrow>
              Maak een afspraak
            </Button>

            <Button to="/aanbod" variant="outline">
              Ontdek het aanbod
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div className="intro-text">
            <span className="eyebrow">THUISKOMEN BIJ JEZELF</span>

            <h2>
              Je lichaam is geen probleem om op te lossen,
              maar een gids die je terugleidt naar jezelf
            </h2>

            <p>
              In mijn praktijk in Minderhout - Hoogstraten
              breng ik lichaamswerk, gesprek en aandacht samen.
              Niet om iets aan je te herstellen, maar om je te
              helpen weer contact te maken met wie je bent —
              via je lichaam, je gevoel, je intuïtie.
            </p>
          </div>

          <ImagePlaceholder
            src="/images/praktijkruimte.jpg"
            alt="De praktijkruimte van Hilde Smout"
            label="FOTO PRAKTIJKRUIMTE"
            className="practice-image"
          />
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WAT IK JE BIED</span>

            <h2>
              Drie manieren om terug te keren naar jezelf
            </h2>
          </div>

          <ServiceList />
        </div>
      </section>

      <section className="section quote-section">
        <div className="container quote-content">
          <span className="quote-mark">“</span>

          <blockquote>
            "Sommige ruimtes onthouden wie je bent wanneer je
            het zelf even kwijt bent. Ik stap die kamer binnen
            en iets in mij ontspant, omdat het zich herkent."
          </blockquote>

          <p>— Jan, cliënt</p>

          <Link to="/reviews" className="text-link">
            Lees meer reviews
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}