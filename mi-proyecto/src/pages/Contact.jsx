import { useState } from 'react';
import './pages.css';

function Contact({ onOpenForm }) {
  const [copied, setCopied] = useState(false);

  const contacts = [
    {
      id: 1,
      name: "LinkedIn",
      icon: "📘",
      value: "linkedin.com/in/tuusuario",
      link: "https://linkedin.com/in/tuusuario",
      color: "#0A66C2"
    },
    {
      id: 2,
      name: "GitHub",
      icon: "🐙",
      value: "github.com/tuusuario",
      link: "https://github.com/tuusuario",
      color: "#333"
    },
    {
      id: 3,
      name: "Twitter",
      icon: "𝕏",
      value: "@tutwitter",
      link: "https://twitter.com/tutwitter",
      color: "#000"
    },
    {
      id: 4,
      name: "Instagram",
      icon: "📷",
      value: "@tuinstagram",
      link: "https://instagram.com/tuinstagram",
      color: "#E4405F"
    },
    {
      id: 5,
      name: "Email",
      icon: "✉️",
      value: "tuemail@ejemplo.com",
      link: "mailto:tuemail@ejemplo.com",
      color: "#EA4335"
    },
    {
      id: 6,
      name: "WhatsApp",
      icon: "💬",
      value: "+34 123 456 789",
      link: "https://wa.me/34123456789",
      color: "#25D366"
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page contact-page">
      <div className="page-container">
        <h1 className="page-title">Contacto</h1>
        <p className="page-subtitle">¡Ponte en contacto conmigo!</p>
        
        <div className="contact-content">
          <div className="contact-intro">
            <p>
              Estoy disponible para colaboraciones, consultas o simplemente para charlar 
              sobre tecnología. Elige tu medio de contacto preferido o completa el formulario.
            </p>
          </div>

          <div className="contact-methods">
            {contacts.map((contact) => (
              <div key={contact.id} className="contact-card">
                <div className="contact-icon">{contact.icon}</div>
                <div className="contact-info">
                  <h3>{contact.name}</h3>
                  <p>{contact.value}</p>
                </div>
                <a 
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  style={{ borderColor: contact.color }}
                >
                  Visitar →
                </a>
              </div>
            ))}
          </div>

          {/* Se elimina la sección del formulario; la página Formulario contiene el formulario */}

          <div className="contact-footer">
            <p>También puedes copiar mis datos de contacto principales:</p>
            <button 
              className="copy-btn"
              onClick={() => copyToClipboard('email@ejemplo.com')}
            >
              {copied ? '✓ Copiado!' : '📋 Copiar Email'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
