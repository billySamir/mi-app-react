import './MiBoton.css';
function MiBoton({ onOpenForm }) {
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
        <div className="btn-container">
            <button className="btn-descargar" onClick={descargarCV}>
                Descargar CV
            </button>
            <button className="btn-contact" onClick={() => onOpenForm() }>
                📧 Formulario de Contacto
            </button>
        </div>
    );
}

export default MiBoton;