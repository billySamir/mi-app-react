import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function ContactForm({ isOpen, onClose, inline = false }) {
  const [formData, setFormData] = useState({
    dni: '',
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');
  const [buscandoDni, setBuscandoDni] = useState(false);


const enviarWhatsApp = () => {
  if (!formData.nombre.trim() || !formData.mensaje.trim()) {
    setError('Completa nombre y mensaje antes de enviar por WhatsApp');
    return;
  }

  const texto = `Hola, soy ${formData.nombre}${formData.dni ? `\nDNI: ${formData.dni}` : ''}\nEmail: ${formData.email}\n\n${formData.mensaje}`;

  window.open(`https://wa.me/51947121064?text=${encodeURIComponent(texto)}`, '_blank');
};

  const buscarPorDni = async () => {
    const dni = formData.dni.trim();
    if (dni.length !== 8 || !/^\d{8}$/.test(dni)) {
      setError('Ingresa un DNI válido de 8 dígitos');
      return;
    }

    setBuscandoDni(true);
    setError('');

    try {
      const res = await fetch(`https://api.factiliza.com/v1/dni/info/${dni}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MTIyMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImNvbnN1bHRvciJ9.kPSyt54E-ZnjciQEdNmwCckw_iErBmvZrTAUNxbA0FQ'
        }
      });
      if (!res.ok) throw new Error('No se encontró el DNI');
      const data = await res.json();
      if (!data.success) throw new Error('No se encontró el DNI');
      const fullName = `${data.data.nombres} ${data.data.apellido_paterno} ${data.data.apellido_materno}`.trim();
      setFormData(prev => ({ ...prev, nombre: fullName }));
    } catch {
      setError('No se pudo obtener datos del DNI');
    } finally {
      setBuscandoDni(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Por favor ingresa un email válido');
      return;
    }

    try {
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        dni: formData.dni || 'No especificado',
        message: formData.mensaje,
      };

      await emailjs.send(
        'service_whea9fo',
        'template_pmuvs5i',
        templateParams,
        'Na5IlsaGRiTK8ldn4'
      );

      setEnviado(true);
      setFormData({ dni: '', nombre: '', email: '', mensaje: '' });
      
      setTimeout(() => {
        setEnviado(false);
        onClose();
      }, 3000);
    } catch {
      setError('Error al enviar el mensaje. Intenta de nuevo.');
    }
  };

  if (!isOpen) return null;

  // Si se solicita inline, no renderizamos el overlay y adaptamos el contenedor
  if (inline) {
    return (
      <div className="contact-form-container inline">
        <div className="contact-form-header">
          <h2>Formulario de Contacto</h2>
          <p>Envíanos un mensaje y te responderemos pronto</p>
        </div>
        
        {!enviado ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group dni-group">
              <label htmlFor="dni">DNI</label>
              <div className="dni-input-row">
                <input
                  type="text"
                  id="dni"
                  name="dni"
                  placeholder="Ingresa tu DNI"
                  maxLength="8"
                  value={formData.dni}
                  onChange={handleChange}
                />
                <button type="button" className="btn-buscar" onClick={buscarPorDni} disabled={buscandoDni}>
                  {buscandoDni ? 'Buscando...' : 'Buscar'}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Escribe tu mensaje aquí..."
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="submit-btn">
              ✈️ Enviar mensaje
            </button>

            <button type="button" className="whatsapp-btn" onClick={enviarWhatsApp}>
              Enviar por WhatsApp
            </button>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <p>¡Mensaje enviado correctamente!</p>
            <p className="success-detail">Te responderemos en breve</p>
          </div>
        )}

        <div className="form-footer">
          <p>© 2026 - Todos los derechos reservados</p>
          <a href="#">Formulario por CSS3</a>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-overlay" onClick={onClose}>
      <div className="contact-form-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="contact-form-header">
          <h2>Formulario de Contacto</h2>
          <p>¡Envianos un mensaje y te responderemos pronto!</p>
        </div>

        {!enviado ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group dni-group">
              <label htmlFor="dni">DNI</label>
              <div className="dni-input-row">
                <input
                  type="text"
                  id="dni"
                  name="dni"
                  placeholder="Ingresa tu DNI"
                  maxLength="8"
                  value={formData.dni}
                  onChange={handleChange}
                />
                <button type="button" className="btn-buscar" onClick={buscarPorDni} disabled={buscandoDni}>
                  {buscandoDni ? 'Buscando...' : 'Buscar'}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Escribe tu mensaje aquí..."
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="submit-btn">
              ✈️ Enviar mensaje
            </button>

            <button type="button" className="whatsapp-btn" onClick={enviarWhatsApp}>
              Enviar por WhatsApp
            </button>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <p>¡Mensaje enviado correctamente!</p>
            <p className="success-detail">Te responderemos en breve</p>
          </div>
        )}

        <div className="form-footer">
          <p>© 2026 - Todos los derechos reservados</p>
          <a href="#">Formulario por CSS3</a>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
