import ImagePlaceholder from "../components/ImagePlaceholder";

export default function OverMij() {
  return (
    <>
      <section className="section about-section">
        <div className="container about-grid">
          <ImagePlaceholder
            src="/images/hilde.jpg"
            alt="Portret van Hilde Smout"
            label="PORTRETFOTO HILDE"
            className="portrait-image"
          />

          <div className="about-text">
            <span className="eyebrow">OVER MIJ</span>

            <h1>Hilde Smout</h1>

            <p>
              In juni 2011 opende ik mijn praktijk in
              Minderhout - Hoogstraten. Ik studeerde
              kinesitherapie aan de KU Leuven en vormde
              me vanaf 2009 verder tot fasciatherapeut
              aan het Fascia College, na eerder gewerkt
              te hebben in Oostenrijk en Nederland.
            </p>

            <p>
              In mijn praktijk breng ik fasciatherapie,
              kinesitherapie, systemische coaching en
              energetisch werk samen. Wat mij daarin
              drijft is steeds hetzelfde: de verbinding
              tussen mensen, mensen en hun omgeving
              en tussen een mens en zijn eigen lichaam.
            </p>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <div className="container quote-content">
          <span className="quote-mark">“</span>

          <blockquote>
            Ik geloof dat het lichaam nooit liegt —
            en dat er altijd een weg terug is naar
            wie je werkelijk bent.
          </blockquote>
        </div>
      </section>
    </>
  );
}