import Button from "../components/Button";
import ServiceDetail from "../components/ServiceDetail";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { Hand } from "lucide-react";

export default function Kinesitherapie() {
  return (
    <>
      <section className="section">
        <div className="container detail-hero-grid">
          <div>
            <div className="detail-icon">
              <Hand size={22} />
            </div>

            <span className="eyebrow">AANBOD — KINESITHERAPIE</span>

            <h1>
              Klassieke kinesitherapie, met dezelfde aandacht
            </h1>

            <p>
              Kinesitherapie betekent letterlijk "verzorging door
              beweging." Het helpt bij klachten aan spieren,
              pezen, banden en gewrichten, bijvoorbeeld gespannen
              spieren, peesontstekingen of artrose. Het wordt ook
              toegepast bij herstel na een ongeval of operatie,
              en bij klachten die voortkomen uit het zenuwstelsel,
              de bloedvaten, longen, hart of huid.
            </p>

            <Button to="/contact">Maak een afspraak</Button>
          </div>

          <ImagePlaceholder
            src="/images/handtherapie.jpg"
            alt="Handrevalidatie en kinesitherapie"
            label="FOTO HANDREVALIDATIE"
            className="detail-image"
          />
        </div>

        <div className="container">
          <p className="center-paragraph">
            Klachten ontstaan door werk, een ongeval of gewoon
            door het ouder worden. Met kinesitherapie werken we
            eraan om die klachten te verminderen, te stabiliseren
            of te verhelpen, en om de bewegingsvrijheid die erdoor
            beperkt werd, opnieuw te herstellen.
          </p>
        </div>
      </section>

      <ServiceDetail
        leftTitle="Voor wie"
        leftContent={
          <p>
            Kinesitherapie is er voor wie met een concrete,
            lichamelijke klacht komt: pijn na een blessure,
            stijfheid na een operatie, een probleem aan hand
            of pols dat je dagelijks werk of bewegingen
            bemoeilijkt. Je hoeft niet op zoek te zijn naar
            het grotere verhaal achter de klacht — soms is
            een spier gewoon overbelast, of een pees ontstoken,
            en is gerichte, praktische behandeling precies
            wat je nodig hebt.
          </p>
        }
        rightTitle="Aanpak"
        rightContent={
          <p>
            Elke patiënt is anders, en daarom kies ik telkens
            de aanpak die het beste bij jou past: mobilisaties,
            oefentherapie, massage, taping, of gewoon goed advies
            en begeleiding. Het doel is steeds hetzelfde — dat
            je weer zo vrij mogelijk kan bewegen, of dat je
            leert omgaan met wat blijvend is.
          </p>
        }
      />

      <section className="section">
        <div className="container">
          <div className="specialization-box">
            <Hand size={24} />

            <div>
              <h3>Specialisatie: handtherapie</h3>

              <p>
                Binnen de kinesitherapie heb ik me gespecialiseerd
                in handtherapie. Onze handen zijn misschien wel
                ons mooiste gereedschap: we werken ermee,
                verzorgen elkaar ermee, voelen de wereld ermee.
                Net daardoor zijn ze ook kwetsbaar — een ongeluk,
                overbelasting of slijtage kan je flink beperken
                in wat je dagelijks doet. Hand en pols zitten
                bovendien complex in elkaar: botten, spieren,
                pezen en banden werken samen om kracht én
                precisie mogelijk te maken. Als handtherapeut
                begeleid ik het herstel na een operatie aan
                hand, pols of arm, maar behandel ik ook zonder
                operatie waar dat kan — telkens afgestemd op
                wat jij nodig hebt om weer zo goed mogelijk
                te functioneren.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <h3>Praktisch</h3>

          <p className="limited-width">
            Een sessie duurt 30 minuten. Gedeeltelijke
            terugbetaling gebeurt via je mutualiteit op
            basis van een doktersvoorschrift. Bekijk de{" "}
            <a href="/tarieven" className="inline-link">
              tarievenpagina
            </a>{" "}
            voor het remgeld.
          </p>
        </div>
      </section>
    </>
  );
}