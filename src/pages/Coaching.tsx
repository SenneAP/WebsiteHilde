import Button from "../components/Button";
import ServiceDetail from "../components/ServiceDetail";
import { CircleDot } from "lucide-react";

export default function Coaching() {
  return (
    <>
      <section className="section">
        <div className="container narrow-content">
          <div className="detail-icon">
            <CircleDot size={22} />
          </div>

          <span className="eyebrow">
            AANBOD — SYSTEMISCHE COACHING & ENERGETISCH WERKEN
          </span>

          <h1>Voor wat dieper zit dan het lichaam alleen</h1>

          <p>
            We maken allemaal deel uit van systemen: de maatschappij
            waarin we leven, de cultuur waarin we opgegroeid zijn,
            ons gezin en onze familie, de plek waar we werken.
            Wie je bent, hoe je je voelt en welke patronen zich
            herhalen, hangt vaak samen met dat grotere geheel —
            soms zelfs met gebeurtenissen van generaties terug.
            Een klacht die op het eerste gezicht "van jou alleen"
            lijkt, krijgt vaak pas haar volle betekenis wanneer
            je ze in die bredere context bekijkt.
          </p>

          <p>
            Samen gaan we aan de slag met het vraagstuk waar je
            op dat moment mee zit. In een interview onderzoeken
            we eerst wat er dieper speelt, en gaan we op zoek
            naar de verbanden met dat grotere geheel — niet om
            te analyseren, maar om te voelen wat er speelt en
            wat er nodig is om het los te laten. Van daaruit
            formuleren we een scherpe, eigen vraag. Waar het
            past, gebruik ik daarbij opstellingswerk — met
            materialen, vloerankers, of een familieopstelling —
            waarbij onzichtbare dynamieken tussen mensen,
            generaties of gebeurtenissen letterlijk in de
            ruimte zichtbaar en voelbaar worden. Zo opent zich
            een veld — een energetisch veld waarin ook wat niet
            wordt uitgesproken voelbaar wordt — en komen
            antwoorden en inzichten naar voor op een manier
            die je vooraf niet had kunnen bedenken, soms in
            één keer helderder dan jaren van praten. De
            coachende gesprekken zijn energetisch in bredere
            zin: we werken met wat er emotioneel beweegt bij
            jou, niet enkel met wat er gezegd wordt — en ook
            beweging, gronding en stabiliteit maken deel uit
            van dat proces.
          </p>
        </div>
      </section>

      <ServiceDetail
        leftTitle="Voor wie"
        leftContent={
          <p>
            Systemisch coachen kan houvast bieden wanneer je
            vastloopt in je leven — in een relatie, op het werk,
            of in iets dat zich blijft herhalen — zonder dat je
            goed kan duiden waarom. Vaak speelt er iets onbewust
            mee: een loyaliteit, een lading uit je familie- of
            levenssysteem, die je op een bepaalde manier
            probeert te beschermen.
          </p>
        }
        rightTitle="Praktisch"
        rightContent={
          <p>
            Een sessie duurt 45 tot 60 minuten, in gesprek
            en/of opstelling, op maat van wat er op dat moment
            nodig is. Niet terugbetaald door het RIZIV.
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