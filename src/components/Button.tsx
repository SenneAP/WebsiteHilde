import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ButtonProps {
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  arrow?: boolean;
  className?: string;
}

export default function Button({
  to,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      to={to}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
      {arrow && <ArrowRight size={16} />}
    </Link>
  );
}