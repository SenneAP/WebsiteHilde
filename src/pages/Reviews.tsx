import PageHeading from "../components/PageHeading";

const reviews = [
  {
    text: "Heel veilig, heel welkom, een gevoel van thuis zijn — als een tweede moeder. Een gevoel van rust.",
    author: "Emilie",
  },
  {
    text: "Warm en veilig, als thuiskomen na een moeizame reis.",
    author: "Joyce",
  },
  {
    text: "Rust, warmte, vriendelijkheid, een heel veilig gevoel — heel erg welkom, een luisterend oor.",
    author: "Leen",
  },
  {
    text: "Vertrouwen — in je aanvoelen en intuïtie — en aandacht voor de onderliggende factoren bij fysieke klachten.",
    author: "Jacqueline",
  },
  {
    text: "Een blij gevoel, ik voel me prettig.",
    author: "Lea",
  },
  {
    text: "Gastvrij, rust, ruimte, een luisterend oor — en bovenal zeer kundig en professioneel. Toverhandjes.",
    author: "Ursula",
  },
  {
    text: "Laagdrempelig, een warme fijne plek waar persoonlijke aandacht centraal staat. Een kundige professional die op gevoel werkt — die voelt wat nodig is in het moment.",
    author: "Vincent",
  },
  {
    text: "Ik krijg een warm gevoel als ik bij jou binnenstap — de houten vloer en de leuke babbels zorgen voor een rustgevende sfeer. Ik kom steeds graag terug, omdat niet enkel fysieke klachten gehoord worden, maar ook emoties.",
    author: "Eline",
  },
  {
    text: "Veiligheid, herkenning, rust, nabijheid, vertrouwen — thuiskomen nog voordat er iets gezegd wordt. Ik ervaar een rustige vorm van verbondenheid die moeilijk buiten therapie te vinden is.",
    author: "Jan",
  },
];

export default function Reviews() {
  return (
    <section className="section page-section">
      <div className="container">
        <PageHeading
          eyebrow="REVIEWS"
          title="Wat cliënten meenemen"
        />

        <div className="featured-review">
          <span className="quote-mark">“</span>

          <blockquote>
            "Je praktijk — en dus jij — bent een ankerpunt
            waar ik niet alleen fysiek, maar ook mentaal
            verzorgd word. Dat draagt zeker bij tot
            mijn welzijn."
          </blockquote>

          <p>— Els, cliënte</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.author}>
              <span className="small-quote">“</span>

              <p>{review.text}</p>

              <span className="review-author">
                — {review.author}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}