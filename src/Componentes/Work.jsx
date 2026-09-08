import "../Styles/Work.css";

// Datos de ejemplo — reemplaza esto con tus proyectos reales
const featuredProject = {
  category: "DISEÑO",
  title: "10 Tips para Diseñar un Wireframe Profesional",
  description:
    "Breve descripción del proyecto destacado, en una o dos líneas que resuman de qué trata.",
  link: "#",
};

const projects = [
  {
    title: "Proyecto 1",
    image: null, // pon aquí la ruta de tu imagen cuando la tengas
  },
  {
    title: "Proyecto 2 ",
    image: null,
  },
  {
    title: "Proyecto 3",
    image: null,
  },
  {
    title: "Proyecto 4",
    image: null,
  },
  {
    title: "Proyecto 5",
    image: null,
  },
  {
    title: "Proyecto 6",
    image: null,
  },
  {
    title: "Proyecto 7",
    image: null,
  },
  {
    title: "Proyecto 8",
    image: null,
  },
  {
    title: "Proyecto 9",
    image: null,
  },
];

export default function Work() {
  return (
    <section className="work" id="work">
      {/* Tarjeta destacada: fondo oscuro con overlay */}
      <div className="work-featured">
        <div className="work-featured-content">
          <span className="work-eyebrow">{featuredProject.category}</span>
          <h2>{featuredProject.title}</h2>
          <p>{featuredProject.description}</p>
          <a href={featuredProject.link} className="work-btn">
            Ver más
          </a>
        </div>
      </div>

      {/* Grid de proyectos */}
      <div className="work-grid">
        {projects.map((project) => (
          <div className="work-card" key={project.title}>
            <div className="work-card-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5-9 9" />
                </svg>
              )}
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
