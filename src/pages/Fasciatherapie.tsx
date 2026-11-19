import Button from "../components/Button";
import ServiceDetail from "../components/ServiceDetail";
import { Shuffle } from "lucide-react";

export default function Fasciatherapie() {
  return (
    <>
      <section className="section">
        <div className="container narrow-content">
          <div className="detail-icon">
            <Shuffle size={22} />
          </div>

          <span className="eyebrow">AANBOD — FASCIATHERAPIE</span>

          <h1>Via je lichaam terug naar jezelf</h1>

          <p>
            Fasciatherapie volgens de methode Danis Bois
            benadert het lichaam als toegangspoort naar de persoon.
          </p>

          <p>
            In een sessie krijgen lichamelijke gewaarwordingen,
            aandacht en het contact met jezelf ruimte.
            Lichaam en gevoel worden daarbij niet los
            van elkaar gezien.
          </p>

          <Button to="/contact">Maak een afspraak</Button>
        </div>
      </section>

      <ServiceDetail
        leftTitle="Voor wie"
        leftContent={
          <p>
            Voor wie via het lichaam opnieuw contact wil
            maken met zichzelf, en ruimte zoekt voor
            aandacht, rust en bewustwording.
          </p>
        }
        rightTitle="Praktisch"
        rightContent={
          <p>
            Een sessie duurt 45 minuten. De behandeling
            valt onder kinesitherapie en kan met een geldig
            voorschrift gedeeltelijk terugbetaald worden.
          </p>
        }
      />

      <section className="section">
        <div className="container">
          <Button to="/contact">Maak een afspraak</Button>
        </div>
      </section>
    </>
  );
}