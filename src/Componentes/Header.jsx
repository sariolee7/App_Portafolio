import { useState } from 'react';
import '../Styles/Header.css';

// Lista de los links de navegación,
const NAV_LINKS = ['Proyectos', 'Sobre mí', 'Servicios', 'Contacto'];

export default function Header({ active = null }) {
  // false = cerrado (por defecto), true = desplegado.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">

      {/* Contenedor interno que centra el contenido y le da el padding lateral */}
      <div className="header-inner">
        <a href="/" className="header-logo">Eliza Muñoz ★</a>

        {/* NAV DE ESCRITORIO
            Recorre NAV_LINKS y genera un <a> por cada elemento. */}
        <nav className="header-nav-desktop">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={link === active ? 'is-active' : ''}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* BOTÓN MENU */}
        <button
          className={`header-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú" // Texto para pantalla
          aria-expanded={isOpen}
        >
          {/* Cada <span> es una de las 3 líneas */}
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* NAV DE MÓVIL*/}
      <nav className={`header-nav-mobile ${isOpen ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
          >
            {link}
          </a>
        ))}
      </nav>

    </header>
  );
}