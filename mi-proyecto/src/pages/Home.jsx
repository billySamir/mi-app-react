import './pages.css';

function Home() {
  const descargarCV = () => {
    const urlPDF = '/CV_Template.pdf';
    const enlace = document.createElement('a');
    enlace.href = urlPDF;
    enlace.download = 'CV-ConisllaBravo.pdf';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  };

  return (
    <div className="page home-page">
      <div className="page-container">
        <h1 className="page-title">Bienvenido!</h1>
        
        <div className="home-content">
          <img className="home-avatar" src="/japon.jpg" alt="avatar" />
          
          <div className="home-text">
            <h2>Hola, soy tu Nombre</h2>
            <p className="home-subtitle">Desarrollador Web Full Stack</p>
            <p className="home-description">
              Soy un desarrollador apasionado por crear experiencias web increíbles. 
              Me encanta trabajar con las tecnologías más modernas y ayudar a mis clientes 
              a lograr sus objetivos digitales.
            </p>
            
            <button className="home-cv-btn" onClick={descargarCV}>
              📥 Descargar CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
