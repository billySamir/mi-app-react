import { useState } from 'react';
import Navbar from "./components/Navbar";
// ContactForm se renderiza dentro de la página Contact en modo inline
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Formulario from "./pages/Formulario";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return (
          <Contact 
            onOpenForm={() => setCurrentPage('form')}
          />
        );
      case 'form':
        return <Formulario />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar 
        onOpenForm={() => { setCurrentPage('form'); }} 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      {renderPage()}
    </div>
  );
}

export default App;