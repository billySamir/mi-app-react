import ContactForm from '../components/ContactForm';
import './pages.css';

function Formulario(){
  return (
    <div className="page contact-page">
      <div className="page-container">
        <h1 className="page-title">Formulario</h1>
        <p className="page-subtitle">Envíame un mensaje directamente</p>

        <div style={{ marginTop: '1.5rem' }}>
          <ContactForm isOpen={true} onClose={() => { /* posible navegación */ }} inline={true} />
        </div>
      </div>
    </div>
  );
}

export default Formulario;
