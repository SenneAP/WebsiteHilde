import PageHeading from "../components/PageHeading";
import ServiceList from "../components/ServiceList";

export default function Aanbod() {
  return (
    <section className="section page-section">
      <div className="container">
        <PageHeading
          eyebrow="AANBOD"
          title="Drie ingangen, één bedoeling"
          description="Of je nu met een lichamelijke klacht komt, met iets dat dieper zit, of gewoon revalideert — elke ingang leidt terug naar hetzelfde: contact met jezelf."
        />

        <ServiceList showDetails />
      </div>
    </section>
  );
}