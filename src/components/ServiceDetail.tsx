import type { ReactNode } from "react";

interface ServiceDetailProps {
  leftTitle: string;
  leftContent: ReactNode;
  rightTitle: string;
  rightContent: ReactNode;
}

export default function ServiceDetail({
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
}: ServiceDetailProps) {
  return (
    <section className="section section-tinted">
      <div className="container detail-grid">
        <div>
          <h3>{leftTitle}</h3>
          <div className="detail-text">{leftContent}</div>
        </div>

        <div>
          <h3>{rightTitle}</h3>
          <div className="detail-text">{rightContent}</div>
        </div>
      </div>
    </section>
  );
}