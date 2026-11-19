import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Aanbod", path: "/aanbod" },
  { label: "Over mij", path: "/over-mij" },
  { label: "Tarieven", path: "/tarieven" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path ||
        location.pathname.startsWith(path + "/");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          to="/"
          className="site-logo"
          onClick={() => setMenuOpen(false)}
        >
          <span className="logo-symbol">◎</span>
          Praktijk Hilde Smout
        </Link>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={isActive(item.path) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="btn btn-primary nav-appointment"
            onClick={() => setMenuOpen(false)}
          >
            Maak een afspraak
          </Link>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}