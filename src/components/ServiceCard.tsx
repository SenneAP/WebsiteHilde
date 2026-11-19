import { Link } from "react-router-dom";
import { ArrowRight, Hand, Shuffle, CircleDot } from "lucide-react";

export type ServiceType = "fascia" | "kine" | "coaching";

interface ServiceCardProps {
  type: ServiceType;
  title: string;
  description: string;
  details?: string;
  link: string;
}

export default function ServiceCard({
  type,
  title,
  description,
  details,
  link,
}: ServiceCardProps) {
  const icons = {
    fascia: <Shuffle size={21} />,
    kine: <Hand size={21} />,
    coaching: <CircleDot size={21} />,
  };

  return (
    <article className="service-card">
      <div className="service-icon">{icons[type]}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      {details && (
        <p className="service-details">{details}</p>
      )}

      <Link to={link} className="text-link">
        Bekijk deze pagina
        <ArrowRight size={15} />
      </Link>
    </article>
  );
}