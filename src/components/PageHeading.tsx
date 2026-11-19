interface PageHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeading({
  eyebrow,
  title,
  description,
}: PageHeadingProps) {
  return (
    <div className="page-heading">
      <span className="eyebrow">{eyebrow}</span>

      <h1>{title}</h1>

      {description && <p>{description}</p>}
    </div>
  );
}