import './pages.css';

function AboutMe() {
  return (
    <div className="page about-page">
      <div className="page-container">
        <h1 className="page-title">Sobre Mí</h1>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Mi Historia</h2>
            <p>
              Comencé mi viaje en el desarrollo web hace 5 años con una simple curiosidad 
              por entender cómo funcionan los sitios web. Desde entonces, he crecido 
              profesionalmente trabajando en proyectos desafiantes y aprendiendo de 
              mentores extraordinarios en la industria.
            </p>
          </div>

          <div className="about-section">
            <h2>Habilidades Principales</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <span className="skill-name">React.js</span>
                <span className="skill-level">Avanzado</span>
              </div>
              <div className="skill-card">
                <span className="skill-name">JavaScript</span>
                <span className="skill-level">Experto</span>
              </div>
              <div className="skill-card">
                <span className="skill-name">CSS/HTML</span>
                <span className="skill-level">Experto</span>
              </div>
              <div className="skill-card">
                <span className="skill-name">Node.js</span>
                <span className="skill-level">Avanzado</span>
              </div>
              <div className="skill-card">
                <span className="skill-name">MongoDB</span>
                <span className="skill-level">Intermedio</span>
              </div>
              <div className="skill-card">
                <span className="skill-name">Git/GitHub</span>
                <span className="skill-level">Experto</span>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Experiencia</h2>
            <div className="experience-item">
              <h3>Senior Frontend Developer</h3>
              <p className="experience-company">Tech Company Inc. • 2023 - Presente</p>
              <p>Liderando equipo frontend, optimizando performance y mentorando juniors.</p>
            </div>
            <div className="experience-item">
              <h3>Full Stack Developer</h3>
              <p className="experience-company">StartUp XYZ • 2021 - 2023</p>
              <p>Desarrollo full stack de aplicaciones web con React y Node.js.</p>
            </div>
          </div>

          <div className="about-section">
            <h2>Mis Intereses</h2>
            <p>
              Más allá del código, me encanta: 🎨 Diseño UI/UX • 📱 Desarrollo móvil • 
              🚀 Innovación tecnológica • 🎓 Enseñanza • 🌍 Comunidad tech
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
