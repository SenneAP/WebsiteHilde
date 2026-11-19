import PageHeading from "../components/PageHeading";

const tarieven = [
  {
    sessie: "Fasciatherapie",
    duur: "45 min",
    prijs: "60€",
    terugbetaling:
      "Gedeeltelijk terugbetaald mits voorschrift",
  },
  {
    sessie: "Kinesitherapie (handpatiënten)",
    duur: "30 min",
    prijs: "40€",
    terugbetaling:
      "Gedeeltelijk terugbetaald met voorschrift",
  },
  {
    sessie: "Systemische coaching / Energetisch werken",
    duur: "45–60 min",
    prijs: "80€",
    terugbetaling: "Niet terugbetaald",
  },
];

export default function Tarieven() {
  return (
    <section className="section page-section">
      <div className="container">
        <PageHeading
          eyebrow="TARIEVEN"
          title="Helder over prijs en terugbetaling"
        />

        <div className="pricing-container">
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>SESSIE</th>
                  <th>DUUR</th>
                  <th>PRIJS</th>
                  <th>TERUGBETALING</th>
                </tr>
              </thead>

              <tbody>
                {tarieven.map((item) => (
                  <tr key={item.sessie}>
                    <td>{item.sessie}</td>
                    <td>{item.duur}</td>
                    <td>{item.prijs}</td>
                    <td className="reimbursement">
                      {item.terugbetaling}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="pricing-note">
            Annulaties graag minstens 24 uur op voorhand
            melden. Voor kinesitherapie is een geldig
            doktersvoorschrift vereist voor terugbetaling
            via je ziekenfonds.
          </p>
        </div>
      </div>
    </section>
  );
}