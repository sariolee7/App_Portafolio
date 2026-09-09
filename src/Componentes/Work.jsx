import "../Styles/Work.css";
import cerdito from "../assets/cerdi.png";

const featuredProject = {
  category: "PROYECTO DESTACADO",
  title: "DISEÑO DE IDENTIDAD VISUAL PARA CAFÉ LUNA",
  description: "Creación de marca completa, incluyendo logo, paleta de colores y sitio web para una cafetería artesanal local.",
  link: "#",
  image: null,
  image: cerdito,
};

const projects = [
  { title: "Proyecto 1", color: "#dce7f7" },
  { title: "Proyecto 2", color: "#f8e3ea" },
  { title: "Proyecto 3", color: "#faf1d7" },
  { title: "Proyecto 4", color: "#f8ece0" },
  { title: "Proyecto 5", color: "#e7e5f6" },
  { title: "Proyecto 6", color: "#fbf1d6" },
  { title: "Proyecto 7", color: "#f4efe5" },
  { title: "Proyecto 8", color: "#e5e7f6" },
  { title: "Proyecto 9", color: "#e9e9e7" },
];

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="work-featured">
        <div className="work-featured-content">
          <span className="work-eyebrow">
            {featuredProject.category}
          </span>

          <h1>{featuredProject.title}</h1>
          <p>{featuredProject.description}</p>

          <a href={featuredProject.link} className="work-btn">
            Ver más
            <svg className="work-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="work-hero-illustration">
          <div className="work-hero-podium" />
          {featuredProject.image ? (
            <img src={featuredProject.image} alt={featuredProject.title} />
          ) : (
            <div className="work-hero-placeholder">Ilustración 3D</div>
          )}
        </div>
      </div>

      <div className="work-grid">
        {projects.map(({ title, color }) => (
          <a href="#" className="work-card" key={title}>
            <div className="work-card-image" style={{ background: color }} />
            <div className="work-card-body">
              <h3>{title}</h3>
              <span className="work-card-arrow">→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}