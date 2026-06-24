import './pages.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Plataforma E-commerce",
      description: "Tienda online completa con carrito, pagos y administrador.",
      techs: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Red Social Profesional",
      description: "Aplicación tipo LinkedIn para conexiones profesionales.",
      techs: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Panel de control con gráficos y análisis de datos en tiempo real.",
      techs: ["React", "D3.js", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      id: 4,
      title: "App de Tareas",
      description: "Aplicación de productividad con sincronización en la nube.",
      techs: ["React Native", "Firebase", "Redux"],
      link: "#"
    },
    {
      id: 5,
      title: "Blog Personal",
      description: "Blog dinámico con SEO optimizado y sistema de comentarios.",
      techs: ["Next.js", "Markdown", "Vercel"],
      link: "#"
    },
    {
      id: 6,
      title: "Gestor de Inventario",
      description: "Sistema completo de gestión de inventario para pequeños negocios.",
      techs: ["React", "Python", "SQLite"],
      link: "#"
    }
  ];

  return (
    <div className="page projects-page">
      <div className="page-container">
        <h1 className="page-title">Proyectos</h1>
        <p className="page-subtitle">Algunos de mis trabajos más destacados</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-techs">
                {project.techs.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <a href={project.link} className="project-link">
                Ver Proyecto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
