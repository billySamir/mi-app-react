// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import './Navbar.css'; // Importa el CSS externo
function Navbar({ onOpenForm, currentPage, onNavigate }) {
 const [isOpen, setIsOpen] = useState(false);
 const [isDarkMode, setIsDarkMode] = useState(false);
 
 // Cargar tema desde localStorage al montar el componente
 useEffect(() => {
   const savedTheme = localStorage.getItem('theme');
   if (savedTheme) {
     const isDark = savedTheme === 'dark';
     setIsDarkMode(isDark);
     applyTheme(isDark);
   } else {
     // Si no hay tema guardado, detectar preferencia del sistema
     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
     setIsDarkMode(prefersDark);
     applyTheme(prefersDark);
   }
 }, []);

 const applyTheme = (isDark) => {
   if (isDark) {
     document.documentElement.classList.add('dark-mode');
     localStorage.setItem('theme', 'dark');
   } else {
     document.documentElement.classList.remove('dark-mode');
     localStorage.setItem('theme', 'light');
   }
 };

 const toggleTheme = () => {
   const newMode = !isDarkMode;
   setIsDarkMode(newMode);
   applyTheme(newMode);
 };

 const toggleMenu = () => setIsOpen(!isOpen);
return (
 <nav className="navbar">
 <div className="navbar-container">
 <div className="navbar-content">
{/* Logo / Marca */}
 <div className="logo">
 <h1>MiApp</h1>
 </div>
 {/* Enlaces en escritorio */}
 <div className="desktop-links">
  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Inicio</a>
  <a href="/maqueta/index.html" target="_blank" rel="noopener noreferrer">Maquetación</a>
  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>Sobre mi</a>
 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('projects'); }}>Proyectos</a>
 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className={currentPage === 'contact' ? 'active' : ''}>Contacto</a>
 <button className="contact-link-btn" onClick={onOpenForm}>
 Formulario
 </button>
 </div>
 {/* Botón de tema */}
 <button className="theme-btn" onClick={toggleTheme}>
 {isDarkMode ? '☀️' : '🌙'}
 </button>
 {/* Botón de menú móvil */}
 <button className="mobile-menu-btn" onClick={toggleMenu}>
 {isOpen ? '✕' : '☰'}
 </button>
 </div>
 {/* Menú desplegable móvil */}
 {isOpen && (
 <div className="mobile-menu">
  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); setIsOpen(false); }}>Inicio</a>
  <a href="/maqueta/index.html" target="_blank" rel="noopener noreferrer">Maquetación</a>
  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); setIsOpen(false); }}>Sobre mi</a>
 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('projects'); setIsOpen(false); }}>Proyectos</a>
 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); setIsOpen(false); }}>Contacto</a>
 <button className="contact-link-btn-mobile" onClick={() => { onOpenForm(); setIsOpen(false); }}>
 Formulario
 </button>
 </div>
 )}
 </div> 
  </nav>
 );
}



export default Navbar; 
