import ServiceCard from "./ServiceCard";

interface ServiceListProps {
  showDetails?: boolean;
}

export default function ServiceList({
  showDetails = false,
}: ServiceListProps) {
  return (
    <div className="services-grid">
      <ServiceCard
        type="fascia"
        title="Fasciatherapie"
        description="Methode Danis Bois — het lichaam als toegangspoort naar de persoon. Sessies van 45 minuten."
        details={
          showDetails
            ? "45 min · gedeeltelijk terugbetaald, valt onder kinesitherapie"
            : undefined
        }
        link="/aanbod/fasciatherapie"
      />

      <ServiceCard
        type="kine"
        title="Kinesitherapie"
        description="Klassieke kinesitherapie voor spieren, gewrichten en herstel na een operatie of blessure — met een specialisatie in handtherapie. RIZIV-erkend."
        details={
          showDetails
            ? "30 min · gedeeltelijk terugbetaald"
            : undefined
        }
        link="/aanbod/kinesitherapie"
      />

      <ServiceCard
        type="coaching"
        title="Systemische coaching"
        description="Gesprek, opstellingswerk en energetisch werk voor wie dieper wil kijken."
        details={
          showDetails
            ? "45–60 min · niet terugbetaald"
            : undefined
        }
        link="/aanbod/coaching"
      />
    </div>
  );
}