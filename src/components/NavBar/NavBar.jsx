import "./NavBar.css"
import logoBlack from "../../../public/black.png"
import logoWhite from "../../../public/white.png"
import sun from "../../../public/sun-moon.svg"
import sunWhite from "../../../public/sun-white.svg"
import { useState } from "react"
import { useEffect } from "react"
import cv from "../../../public/cv.pdf"

function NavBar() {

    const [theme, setTheme] = useState('light')
   

    const handleChange = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
      };

    useEffect(() => {

        document.body.setAttribute('data-theme', theme);

    }, [theme]);



    const downloadPDF = () => {
        // Aquí deberías tener el contenido de tu PDF o la URL del PDF
        const pdfContent = cv
    
        // Nombre del archivo PDF que se descargará
        const fileName = 'cv.pdf';
    
        // Crear un enlace temporal para iniciar la descarga
        const link = document.createElement('a');
        link.href = pdfContent;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };



    return ( 
        <>
<div className="content">
        <a href='#home' > 
            {theme==='light'?  <img className="logo" src={logoWhite}/>  : <img className="logo" src={logoBlack}/> }
        </a>


<div className="botonera">
<a href='#work' ><button>My Work</button></a>
<a href='#contact' ><button>Contact Me</button></a>
<button onClick={downloadPDF}>Download CV</button>

{theme==='light'? <img className="sun"  src={sunWhite} onClick={handleChange}/>  :  <img className="sun"  src={sun} onClick={handleChange}/> }
</div>

</div>
</>
     );
}

export default NavBar;