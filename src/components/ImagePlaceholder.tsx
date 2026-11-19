import { useState } from "react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
}

export default function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`image-placeholder ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
        />
      ) : (
        <span>[{label}]</span>
      )}
    </div>
  );
}